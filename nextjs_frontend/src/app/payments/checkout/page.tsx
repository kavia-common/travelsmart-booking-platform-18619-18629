'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { apiFetch } from '@/lib/api';

function CheckoutClient() {
  const params = useSearchParams();
  const bookingId = params?.get('bookingId') ?? 'mock';
  const amount = parseInt(params?.get('amount') ?? '0', 10);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  async function startPayment() {
    setLoading(true);
    setStatus('');
    try {
      const res = await apiFetch<{ clientSecret: string }>(`/payments/intent`, {
        method: 'POST',
        body: JSON.stringify({ bookingId, amount }),
      });
      setClientSecret(res.clientSecret);
      setStatus('PaymentIntent created. Integrate Stripe Elements to complete payment.');
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      setStatus(`Backend not available: ${message}. Simulating payment success.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card-hover" style={{ padding: 16, maxWidth: 720, margin: '0 auto' }}>
      <div className="kicker">Checkout</div>
      <h1>Pay for booking #{bookingId}</h1>
      <div style={{ marginTop: 8, fontWeight: 700 }}>${amount}</div>
      <p className="kicker" style={{ marginTop: 8 }}>
        Note: Stripe Elements not wired in this placeholder. Once backend returns a client_secret, wrap this page in Elements and render CardElement.
      </p>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button className="btn btn-primary" onClick={startPayment} disabled={loading}>{loading ? 'Starting...' : 'Start payment'}</button>
        <a className="btn btn-outline" href="/bookings">Back</a>
      </div>

      {status && (
        <div className="card" style={{ padding: 12, marginTop: 16 }}>
          <div className="kicker">{status}</div>
          {clientSecret && <div style={{ marginTop: 8 }}><code>{clientSecret}</code></div>}
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <Suspense fallback={<div className="card" style={{ padding: 16, maxWidth: 720, margin: '0 auto' }}>Loading checkout...</div>}>
        <CheckoutClient />
      </Suspense>
    </div>
  );
}
