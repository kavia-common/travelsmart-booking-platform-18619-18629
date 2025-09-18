import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: 'var(--gradient)' }}>
      <div className="ocean-container" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="card" style={{ padding: 24, background: 'white linear-gradient(180deg, rgba(59,130,246,0.06), transparent)' }}>
          <div className="section-header">
            <div>
              <div className="kicker">Ocean Professional</div>
              <h1>Smarter travel, powered by AI</h1>
            </div>
            <Link className="btn btn-primary" href="/search/hotels">Start searching</Link>
          </div>
          <p style={{ color: 'rgba(17,24,39,0.75)', marginTop: 8 }}>
            Compare hotels and flights, optimize prices with real-time signals, and book securely with Stripe.
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', marginTop: 16 }}>
            <Link className="card card-hover" href="/search/hotels" style={{ padding: 16 }}>
              <div className="kicker">Hotels</div>
              <h2>Find the perfect stay</h2>
              <p>Instant results, ratings, and price insights. Book in a few clicks.</p>
            </Link>
            <Link className="card card-hover" href="/search/flights" style={{ padding: 16 }}>
              <div className="kicker">Flights</div>
              <h2>Discover better routes</h2>
              <p>See options across airlines with smart recommendations.</p>
            </Link>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', marginTop: 16 }}>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">AI Assistant</div>
            <h3>Chat your way to the best options</h3>
            <p>Use the assistant to plan trips in natural language.</p>
          </div>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">Dynamic Pricing</div>
            <h3>Adapt to demand</h3>
            <p>Price optimization tools for admins with demand and competitor signals.</p>
          </div>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">Secure Payments</div>
            <h3>Stripe checkout</h3>
            <p>Pay confidently with PCI-compliant flows and email receipts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
