# Supabase Integration Guide (Frontend)

This Next.js app uses Supabase for authentication, storage, and realtime features.

Environment variables (set by orchestrator, do not hardcode in code):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_KEY

Client creation:
- src/lib/supabaseClient.ts exposes PUBLIC_INTERFACE getSupabaseClient() to obtain a configured singleton client.

Usage examples:
- Authentication:
  - Use supabase.auth.signInWithPassword({ email, password })
  - Use supabase.auth.signOut()
  - Use supabase.auth.getUser()

- Realtime Notifications (future):
  - const supabase = getSupabaseClient()
  - supabase.channel('notifications').on('broadcast', { event: 'new-notice' }, payload => {...}).subscribe()

Email redirect (when used):
- When implementing Supabase email sign-in or OAuth flows, ensure redirect URLs use NEXT_PUBLIC_SITE_URL (add to .env.example if needed).

Security:
- Never commit real keys; keys are provided via environment variables.

Where we use Supabase now:
- Client is initialized and available; current UI uses placeholders until backend endpoints are live.
