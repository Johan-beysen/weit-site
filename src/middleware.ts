import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase';
import { env } from 'cloudflare:workers';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (!pathname.startsWith('/portal')) return next();
  if (pathname === '/portal/login') return next();
  if (pathname.startsWith('/portal/auth/')) return next();

  const responseHeaders = new Headers();
  const supabase = createSupabaseServerClient(context.request, responseHeaders);

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return context.redirect('/portal/login');
  }

  if (pathname.startsWith('/portal/admin')) {
    const adminEmail = (env.ADMIN_EMAIL || 'johan@weit.be').trim();
    if (user.email !== adminEmail) {
      return context.redirect('/portal');
    }
  }

  return next();
});
