import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { env } from 'cloudflare:workers';

const supabaseUrl  = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export function createSupabaseServerClient(request: Request, responseHeaders: Headers) {
  return createServerClient(supabaseUrl, supabaseAnon, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '')
          .map(({ name, value }) => ({ name, value: value ?? '' }));
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          responseHeaders.append('Set-Cookie', serializeCookieHeader(name, value, options));
        });
      },
    },
  });
}

/* Admin client — bypast RLS, enkel server-side gebruiken */
export function getServiceClient() {
  return createClient(supabaseUrl, env.SUPABASE_SERVICE_ROLE_KEY as string, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export { env };
