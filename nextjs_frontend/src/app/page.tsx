import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-accent" />
        <div className="ocean-container">
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(2, minmax(0,1fr))', alignItems: 'center', paddingTop: 24, paddingBottom: 24 }}>
            <div>
              <span className="badge" style={{ marginBottom: 12 }}>✨ Ocean Professional</span>
              <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>
                Book smarter with AI.
                <br />Travel with confidence.
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 18, marginBottom: 16 }}>
                Search flights and hotels, compare dynamic pricing, and manage bookings—all with an AI copilot at your side.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link href="/auth/register" className="btn btn-primary">Get started</Link>
                <Link href="/search/flights" className="btn btn-secondary">Search flights</Link>
                <Link href="/search/hotels" className="btn btn-secondary">Search hotels</Link>
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: 14, marginTop: 8 }}>
                No credit card required · Free plan available
              </div>
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              <div className="card-header">
                <div style={{ fontWeight: 600 }}>Real-time deals preview</div>
                <span className="badge">Live</span>
              </div>
              <div style={{ padding: 12 }}>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }}>
                  {["NYC → LON", "SFO → TYO", "LAX → SYD", "BOS → PAR"].map((r, i) => (
                    <div key={i} className="card card-hover" style={{ padding: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                        <div style={{ fontWeight: 700 }}>{r}</div>
                        <span className="badge">Save {12 + i * 3}%</span>
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>AI suggests Tue · 1-stop</div>
                      <div style={{ marginTop: 6, fontWeight: 800, color: 'var(--color-primary-700)' }}>${399 + i * 85}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
              <div className="card">
                <div className="card-header"><div className="font-semibold">🔍 Smart Search</div></div>
                <div style={{ padding: 12 }}>Natural language search for destinations, dates, and preferences.</div>
              </div>
              <div className="card">
                <div className="card-header"><div className="font-semibold">🤖 AI Copilot</div></div>
                <div style={{ padding: 12 }}>Ask questions, compare options, and book—all in chat.</div>
              </div>
              <div className="card">
                <div className="card-header"><div className="font-semibold">💳 Secure Payments</div></div>
                <div style={{ padding: 12 }}>Stripe-powered checkout with fraud protection and receipts.</div>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 16 }}>
            <div className="section-header">
              <h2 style={{ fontWeight: 800 }}>Popular Destinations</h2>
              <a className="btn btn-secondary" href="/search/flights">Explore flights</a>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}>
              {[
                { city: "London", code: "LON", price: 449 },
                { city: "Tokyo", code: "TYO", price: 799 },
                { city: "Paris", code: "PAR", price: 399 },
                { city: "Sydney", code: "SYD", price: 999 }
              ].map((d, i) => (
                <div key={i} className="card card-hover" style={{ padding: 16 }}>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{d.code}</div>
                  <div style={{ fontWeight: 800 }}>{d.city}</div>
                  <div style={{ marginTop: 4, color: 'var(--color-primary-700)', fontWeight: 700 }}>from ${d.price}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <a className="btn btn-outline" href="/search/flights">Flights</a>
                    <a className="btn btn-outline" href="/search/hotels">Hotels</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
