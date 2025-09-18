'use client';

import { useState } from 'react';
import { apiFetch } from '@/src/lib/api';

type Flight = {
  id: string;
  from: string;
  to: string;
  departDate: string;
  returnDate?: string;
  price: number;
  airline?: string;
};

export default function FlightSearch() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [results, setResults] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  async function search() {
    setLoading(true);
    try {
      const res = await apiFetch<Flight[]>('/flights/search', {
        method: 'POST',
        body: JSON.stringify({ from, to, departDate, returnDate }),
      });
      setResults(res);
    } catch (e) {
      console.error(e);
      setResults([
        { id: 'f1', from: from || 'SFO', to: to || 'LAX', departDate: departDate || '2025-10-01', price: 99, airline: 'OceanAir' },
        { id: 'f2', from: from || 'SFO', to: to || 'SEA', departDate: departDate || '2025-10-01', price: 129, airline: 'AmberJet' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card-hover" style={{ padding: 16 }}>
      <div className="section-header">
        <div>
          <div className="kicker">Flights</div>
          <h2>Search flights quickly</h2>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(5, minmax(0,1fr))' }}>
        <input className="input" placeholder="From (IATA)" value={from} onChange={e => setFrom(e.target.value.toUpperCase())} />
        <input className="input" placeholder="To (IATA)" value={to} onChange={e => setTo(e.target.value.toUpperCase())} />
        <input className="input" type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
        <input className="input" type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
        <button className="btn btn-primary" onClick={search} disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', marginTop: 16 }}>
        {results.map(f => (
          <div key={f.id} className="card card-hover" style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{f.from} → {f.to}</div>
              <div className="kicker">{f.airline || '—'} • {f.departDate}{f.returnDate ? ` → ${f.returnDate}` : ''}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 800 }}>${f.price}</div>
              <div style={{ marginTop: 8, display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <a className="btn btn-outline" href={`/bookings/new?type=flight&id=${f.id}`}>Book</a>
                <a className="btn btn-secondary" href={`/pricing?context=flight&id=${f.id}`}>Dynamic Price</a>
              </div>
            </div>
          </div>
        ))}
        {results.length === 0 && !loading && (
          <div className="card" style={{ padding: 16, gridColumn: '1 / -1' }}>
            <div className="kicker">No results yet</div>
            <p>Enter your route to see results. Mock data appears when API is unavailable.</p>
          </div>
        )}
      </div>
    </div>
  );
}
