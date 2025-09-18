'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="section-header">
        <div>
          <div className="kicker">Dashboard</div>
          <h1>Welcome back</h1>
        </div>
        <Link className="btn btn-outline" href="/bookings">View bookings</Link>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
        <div className="card card-hover" style={{ padding: 16 }}>
          <div className="kicker">Recommendations</div>
          <p>AI-curated hotels and flights will appear here based on your preferences.</p>
          <Link className="btn btn-secondary" href="/search/hotels">See suggestions</Link>
        </div>
        <div className="card card-hover" style={{ padding: 16 }}>
          <div className="kicker">Upcoming trip</div>
          <p>When bookings are confirmed, the itinerary summary shows up here.</p>
          <Link className="btn btn-outline" href="/bookings">Manage</Link>
        </div>
        <div className="card card-hover" style={{ padding: 16 }}>
          <div className="kicker">Price alerts</div>
          <p>Set price alerts and receive notifications when fares change.</p>
          <Link className="btn btn-outline" href="/pricing">Open pricing</Link>
        </div>
      </div>
    </div>
  );
}
