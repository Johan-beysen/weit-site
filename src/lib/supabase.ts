import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

/* SSR client — leest/schrijft session via request/response cookies */
export function createSupabaseServerClient(request: Request, responseHeaders: Headers) {
  return createServerClient(supabaseUrl, supabaseAnon, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '');
      },
      setAll(cookies) {
        cookies.forEach(({ name, value, options }) => {
          responseHeaders.append('Set-Cookie', serializeCookieHeader(name, value, options));
        });
      },
    },
  });
}

/* Admin client — bypast RLS, enkel server-side gebruiken */
export function getServiceClient() {
  return createClient(supabaseUrl, import.meta.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
