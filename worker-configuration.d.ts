// Generated types for Cloudflare Worker bindings
interface Env {
  ASSETS: Fetcher;
  SUPABASE_SERVICE_ROLE_KEY: string;
  ADMIN_EMAIL: string;
}

declare module 'cloudflare:workers' {
  export const env: Env;
}
