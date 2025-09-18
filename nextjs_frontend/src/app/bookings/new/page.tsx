'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { apiFetch } from '@/src/lib/api';

export default function NewBookingPage() {
  const params = useSearchParams();
  const type = ((params?.get('type') as 'hotel' | 'flight') ?? 'hotel');
  const assetId = (params?.get('id') ?? '');
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(200);
  const [loading, setLoading] = useState(false);

  async function createBooking() {
    setLoading(true);
    try {
      const res = await apiFetch<{ id: string; ref: string; amount: number }>('/bookings', {
        method: 'POST',
        body: JSON.stringify({ type, assetId, name, email, amount }),
      });
      router.push(`/payments/checkout?bookingId=${res.id}&amount=${res.amount}`);
    } catch {
      // Mock fallback
      router.push(`/payments/checkout?bookingId=mock-${Date.now()}&amount=${amount}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="card card-hover" style={{ padding: 16, maxWidth: 720, margin: '0 auto' }}>
        <div className="kicker">New {type} booking</div>
        <h1>Traveler details</h1>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', marginTop: 12 }}>
          <input className="input" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value || '0'))} />
          <input className="input" placeholder={`${type} id`} value={assetId} readOnly />
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button className="btn btn-primary" onClick={createBooking} disabled={loading}>{loading ? 'Creating...' : 'Continue to payment'}</button>
          <a className="btn btn-outline" href="/bookings">Cancel</a>
        </div>
      </div>
    </div>
  );
}
