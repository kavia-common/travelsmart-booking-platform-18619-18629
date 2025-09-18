import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-accent" />
        <div className="ocean-container">
          <div className="page-grid" style={{ alignItems: 'center' }}>
            <div>
              <nav className="kicker" aria-label="Breadcrumb">Home / Dashboard</nav>
              <h1>
                Book smarter with AI.
                <br />Travel with confidence.
              </h1>
              <p className="lead">
                Search flights and hotels, compare dynamic pricing, and manage bookings—all with an AI copilot at your side.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn btn-outline">Compare Analytics</Link>
                <Link href="/dashboard" className="btn btn-outline">SmartAssist</Link>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0' }}>
                {["Smart Search","Loyalty Insights","Price Drop Alerts","Baggage Fee Breakdown","Seat Maps & Availability"].map((t, i) => (
                  <li key={i} style={{ marginTop: i === 0 ? 0 : 10 }}>
                    <Link className="" href="#">{t}</Link>
                  </li>
                ))}
              </ul>

              <section style={{ marginTop: 24 }}>
                <h2>Popular Destinations</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0' }}>
                  {["Tokyo","Oslo","Berlin"].map((c, i) => (
                    <li key={i} style={{ marginTop: i === 0 ? 0 : 8 }}>
                      <Link href="/search/flights">{c}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="/search/flights">More</Link>
              </section>
            </div>

            <aside className="card" aria-labelledby="right-title" style={{ paddingBottom: 8 }}>
              <div className="card-header">
                <h2 id="right-title" style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>Real-time flight prices</h2>
                <span className="badge">Live</span>
              </div>
              <div style={{ padding: 12 }}>
                {[
                  { route: "SFO → JFK", price: 248, save: "Save 15%" },
                  { route: "LAX → LHR", price: 498, save: "Save 8%" },
                  { route: "BOS → CDG", price: 372, save: "Save 12%" },
                  { route: "SEA → HND", price: 689, save: "Save 6%" },
                  { route: "JFK → BCN", price: 421, save: "Save 10%" },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 0.8fr', columnGap: 16, padding: '6px 0', alignItems: 'baseline' }}>
                    <div>{r.route}</div>
                    <div style={{ fontWeight: 600 }}>${r.price}</div>
                    <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{r.save}</div>
                  </div>
                ))}
              </div>
            </aside>
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
        </div>
      </header>
    </div>
  );
}
