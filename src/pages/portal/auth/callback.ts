export const prerender = false;

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const GET: APIRoute = async ({ request, redirect, url }) => {
  const code = url.searchParams.get('code');
  const responseHeaders = new Headers();

  if (code) {
    const supabase = createSupabaseServerClient(request, responseHeaders);
    await supabase.auth.exchangeCodeForSession(code);
  }

  return new Response(null, {
    status: 302,
    headers: {
      ...Object.fromEntries(responseHeaders),
      Location: '/portal',
    },
  });
};
