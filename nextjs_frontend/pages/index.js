export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <h1>TravelSmart Booking Platform</h1>
      <p>Next.js frontend is running.</p>
      <ul>
        <li>Backend API URL: {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'}</li>
        <li>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'configured' : 'not set'}</li>
      </ul>
      <p>Visit /api/health for a simple API route.</p>
    </main>
  );
}
