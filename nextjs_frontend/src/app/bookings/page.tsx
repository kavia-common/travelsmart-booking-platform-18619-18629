'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/src/lib/api';

type Booking = {
  id: string;
  type: 'hotel' | 'flight';
  ref: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  amount: number;
};

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function load() {
      try {
        const res = await apiFetch<Booking[]>('/bookings');
        setBookings(res);
      } catch {
        setBookings([
          { id: 'b1', type: 'hotel', ref: 'HT-001', status: 'confirmed', amount: 329 },
          { id: 'b2', type: 'flight', ref: 'FL-212', status: 'pending', amount: 199 },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="section-header">
        <div>
          <div className="kicker">Bookings</div>
          <h1>Your reservations</h1>
        </div>
        <Link className="btn btn-primary" href="/bookings/new">New booking</Link>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))' }}>
        {loading && <div className="card" style={{ padding: 16 }}>Loading bookings...</div>}
        {!loading && bookings.length === 0 && <div className="card" style={{ padding: 16 }}>No bookings yet.</div>}
        {bookings.map(b => (
          <div key={b.id} className="card card-hover" style={{ padding: 16 }}>
            <div className="section-header">
              <strong>{b.ref}</strong>
              <span className="badge">{b.status}</span>
            </div>
            <div className="kicker">Type: {b.type}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>${b.amount}</div>
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <a className="btn btn-outline" href={`/payments/checkout?bookingId=${b.id}&amount=${b.amount}`}>Pay</a>
              <a className="btn btn-outline" href={`/bookings/${b.id}`}>Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
