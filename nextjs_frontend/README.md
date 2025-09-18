# TravelSmart Frontend (Next.js)

Modern, responsive web frontend for TravelSmart — AI-powered hotel and flight booking.

Highlights:
- Ocean Professional theme (blue primary, amber accents)
- Homepage, hotel & flight search, bookings, dashboards (user/admin)
- AI chatbot widget
- Dynamic pricing interface
- Auth pages (JWT + Google OAuth stubs)
- Stripe payment checkout placeholder
- Supabase client integrated
- Service layer for backend API calls

## Quick start
1. Copy `.env.example` to `.env.local` and fill values:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_KEY=...
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. Install deps and run:
```
npm install
npm run dev
```

3. Visit:
- / for homepage
- /search/hotels, /search/flights for search UIs
- /bookings and /bookings/new for booking flows
- /payments/checkout for Stripe placeholder
- /dashboard for user dashboard
- /admin for admin console
- /health to check backend connectivity

## Notes
- Many features include placeholders that gracefully fallback when backend endpoints are not yet available.
- Supabase integration is ready to be used by importing `getSupabaseClient()` from `src/lib/supabaseClient`.
- To enable Google OAuth, configure the backend and the `/api/auth/google/start` route will proxy to it.
