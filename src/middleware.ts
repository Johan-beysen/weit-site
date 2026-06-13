import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Alleen portal routes bewaken
  if (!pathname.startsWith('/portal')) return next();

  // Login pagina zelf altijd doorlaten
  if (pathname === '/portal/login') return next();

  const responseHeaders = new Headers();
  const supabase = createSupabaseServerClient(context.request, responseHeaders);

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return context.redirect('/portal/login');
  }

  // Admin routes — check of user het Johan-email heeft
  if (pathname.startsWith('/portal/admin')) {
    const adminEmail = import.meta.env.ADMIN_EMAIL ?? 'johan@weit.be';
    if (user.email !== adminEmail) {
      return context.redirect('/portal');
    }
  }

  return next();
});
