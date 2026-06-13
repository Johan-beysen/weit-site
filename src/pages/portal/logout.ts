export const prerender = false;

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../lib/supabase';

export const GET: APIRoute = async ({ request, redirect }) => {
  const headers = new Headers();
  const supabase = createSupabaseServerClient(request, headers);
  await supabase.auth.signOut();
  headers.set('Location', '/portal/login');
  return new Response(null, { status: 302, headers });
};
