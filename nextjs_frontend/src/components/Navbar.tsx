'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="ocean-container" style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 12, paddingBottom: 12 }}>
        <Link href="/" className="card card-hover" style={{ padding: 8, borderRadius: 10, background: 'white', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--color-primary)' }} />
          <strong>TravelSmart</strong>
        </Link>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link className="btn btn-outline" href="/search/hotels">Hotels</Link>
          <Link className="btn btn-outline" href="/search/flights">Flights</Link>
          <Link className="btn btn-outline" href="/bookings">Bookings</Link>
          <div className="btn btn-secondary" onClick={() => setOpen(o => !o)} role="button" aria-expanded={open}>
            Menu
          </div>
        </nav>
      </div>
      {open && (
        <div className="ocean-container" style={{ paddingBottom: 12 }}>
          <div className="card" style={{ padding: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Link className="btn btn-outline" href="/auth/login">Login</Link>
            <Link className="btn btn-outline" href="/auth/register">Sign Up</Link>
            <Link className="btn btn-outline" href="/dashboard">User Dashboard</Link>
            <Link className="btn btn-outline" href="/admin">Admin</Link>
          </div>
        </div>
      )}
    </header>
  );
}
