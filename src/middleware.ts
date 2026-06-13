import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase';
import { env } from 'cloudflare:workers';

function parseHost(url: string): string | null {
  try { return new URL(url).host; } catch { return null; }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const host = context.url.host;

  // ── CSRF: blokkeer cross-origin POSTs op alle /portal routes ──────────
  if (context.request.method === 'POST' && pathname.startsWith('/portal')) {
    const origin  = context.request.headers.get('Origin');
    const referer = context.request.headers.get('Referer');
    const sameOrigin =
      (origin  !== null && parseHost(origin)  === host) ||
      (referer !== null && parseHost(referer) === host);
    if (!sameOrigin) {
      return new Response('Forbidden', { status: 403 });
    }
  }

  // ── Publieke portal routes: geen auth nodig ───────────────────────────
  if (!pathname.startsWith('/portal'))        return next();
  if (pathname === '/portal/login')           return next();
  if (pathname.startsWith('/portal/auth/'))   return next();

  // ── Auth check ────────────────────────────────────────────────────────
  const responseHeaders = new Headers();
  const supabase = createSupabaseServerClient(context.request, responseHeaders);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return context.redirect('/portal/login');

  // ── Admin check — geen fallback, ADMIN_EMAIL is verplicht ─────────────
  if (pathname.startsWith('/portal/admin')) {
    const adminEmail = env.ADMIN_EMAIL?.trim();
    if (!adminEmail || user.email !== adminEmail) {
      return context.redirect('/portal');
    }
  }

  // ── Set-Cookie propagatie: merge Supabase refresh-cookies in response ──
  const response = await next();
  responseHeaders.forEach((value, key) => {
    response.headers.append(key, value);
  });
  return response;
});
