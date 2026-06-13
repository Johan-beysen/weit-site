export const prerender = false;

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const { access_token, refresh_token, type } = await request.json();
  const responseHeaders = new Headers({ 'Content-Type': 'application/json' });

  if (!access_token || !refresh_token) {
    return new Response(JSON.stringify({ ok: false }), { status: 400, headers: responseHeaders });
  }

  const supabase = createSupabaseServerClient(request, responseHeaders);
  const { error } = await supabase.auth.setSession({ access_token, refresh_token });

  if (error) {
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 401, headers: responseHeaders });
  }

  const needsPassword = type === 'recovery' || type === 'invite';
  return new Response(
    JSON.stringify({ ok: true, redirect: needsPassword ? '/portal/auth/set-password' : '/portal' }),
    { status: 200, headers: responseHeaders }
  );
};
