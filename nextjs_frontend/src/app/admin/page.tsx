'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 'calc(100vh - 120px)' }}>
      <aside style={{ borderRight: '1px solid rgba(17,24,39,0.06)', background: 'white' }}>
        <div style={{ padding: 16, borderBottom: '1px solid rgba(17,24,39,0.06)' }}>
          <div className="kicker">Admin</div>
          <h2>Control Panel</h2>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: 8, gap: 8 }}>
          <Link className="btn btn-outline" href="/admin">Overview</Link>
          <Link className="btn btn-outline" href="/admin/inventory">Inventory</Link>
          <Link className="btn btn-outline" href="/admin/pricing">Dynamic Pricing</Link>
          <Link className="btn btn-outline" href="/admin/analytics">Analytics</Link>
          <Link className="btn btn-outline" href="/admin/users">Users</Link>
        </nav>
      </aside>
      <main className="ocean-container" style={{ width: '100%' }}>
        <div className="section-header" style={{ marginTop: 16 }}>
          <div>
            <div className="kicker">Overview</div>
            <h1>Operations snapshot</h1>
          </div>
          <Link className="btn btn-primary" href="/admin/pricing">Tune pricing</Link>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">Today revenue</div>
            <h2>$12,430</h2>
          </div>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">New bookings</div>
            <h2>58</h2>
          </div>
          <div className="card card-hover" style={{ padding: 16 }}>
            <div className="kicker">Conversion</div>
            <h2>3.2%</h2>
          </div>
        </div>
        <div className="card" style={{ padding: 16, marginTop: 16 }}>
          <div className="kicker">Notes</div>
          <p>Connect to backend endpoints for live data. These cards will populate automatically.</p>
        </div>
      </main>
    </div>
  );
}
