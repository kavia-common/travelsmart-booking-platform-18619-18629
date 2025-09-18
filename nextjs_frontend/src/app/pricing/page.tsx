'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { apiFetch } from '@/lib/api';

function PricingClient() {
  const params = useSearchParams();
  const context = params?.get('context') ?? 'hotel';
  const id = params?.get('id') ?? 'mock';

  const [base, setBase] = useState(150);
  const [demand, setDemand] = useState(0.2);
  const [competitor, setCompetitor] = useState(160);
  const [recommended, setRecommended] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function compute() {
    setLoading(true);
    try {
      const res = await apiFetch<{ price: number }>(`/pricing/recommend`, {
        method: 'POST',
        body: JSON.stringify({ context, id, base, demand, competitor }),
      });
      setRecommended(res.price);
    } catch {
      const demandAdj = base * demand;
      const compAdj = (competitor - base) * 0.5;
      setRecommended(Math.max(60, Math.round(base + demandAdj + compAdj)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card-hover" style={{ padding: 16 }}>
      <div className="section-header">
        <div>
          <div className="kicker">Dynamic Pricing</div>
          <h1>Optimize price for {context} #{id}</h1>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))' }}>
        <div className="card" style={{ padding: 12 }}>
          <div className="kicker">Base price</div>
          <input className="input" type="number" value={base} onChange={(e) => setBase(parseInt(e.target.value || '0'))} />
        </div>
        <div className="card" style={{ padding: 12 }}>
          <div className="kicker">Demand factor</div>
          <input className="input" type="range" min="0" max="1" step="0.05" value={demand} onChange={(e) => setDemand(parseFloat(e.target.value))} />
          <div style={{ marginTop: 8 }}>{Math.round(demand * 100)}%</div>
        </div>
        <div className="card" style={{ padding: 12 }}>
          <div className="kicker">Competitor price</div>
          <input className="input" type="number" value={competitor} onChange={(e) => setCompetitor(parseInt(e.target.value || '0'))} />
        </div>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button className="btn btn-primary" onClick={compute} disabled={loading}>{loading ? 'Computing...' : 'Get Recommendation'}</button>
        <a className="btn btn-outline" href="/dashboard">Save to dashboard</a>
      </div>

      {recommended !== null && (
        <div className="card" style={{ marginTop: 16, padding: 16 }}>
          <div className="kicker">Recommended price</div>
          <h2 style={{ marginTop: 8 }}>${recommended}</h2>
          <p className="kicker" style={{ marginTop: 8 }}>
            Note: This is a placeholder calculation if backend is unavailable. When connected, this module will use live demand, competitor, and availability signals.
          </p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <Suspense fallback={<div className="card" style={{ padding: 16 }}>Loading pricing...</div>}>
        <PricingClient />
      </Suspense>
    </div>
  );
}
