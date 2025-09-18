'use client';

import { useState } from 'react';
import { apiFetch } from '@/lib/api';

type Hotel = {
  id: string;
  name: string;
  city: string;
  price: number;
  rating?: number;
  imageUrl?: string;
};

export default function HotelSearch() {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [results, setResults] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);

  async function search() {
    setLoading(true);
    try {
      const res = await apiFetch<Hotel[]>('/hotels/search', {
        method: 'POST',
        body: JSON.stringify({ city, checkIn, checkOut, guests }),
      });
      setResults(res);
    } catch (e) {
      console.error(e);
      // fallback mock
      setResults([
        { id: 'mock1', name: 'Oceanview Suites', city: city || 'San Diego', price: 189, rating: 4.6 },
        { id: 'mock2', name: 'Amber Bay Inn', city: city || 'San Diego', price: 139, rating: 4.1 },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card card-hover" style={{ padding: 16 }}>
      <div className="section-header">
        <div>
          <div className="kicker">Hotels</div>
          <h2>Find the perfect stay</h2>
        </div>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}>
        <input className="input" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        <input className="input" type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
        <input className="input" type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
        <input className="input" type="number" min={1} value={guests} onChange={e => setGuests(parseInt(e.target.value || '1'))} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn btn-primary" onClick={search} disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
        <button className="btn btn-outline" onClick={() => { setResults([]); }}>Clear</button>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', marginTop: 16 }}>
        {results.map(h => (
          <div key={h.id} className="card card-hover" style={{ overflow: 'hidden' }}>
            <div style={{ height: 140, background: 'var(--gradient)' }} />
            <div style={{ padding: 12 }}>
              <div className="section-header">
                <strong>{h.name}</strong>
                {h.rating && <span className="badge">{h.rating.toFixed(1)}</span>}
              </div>
              <div style={{ color: 'rgba(17,24,39,0.7)' }}>{h.city}</div>
              <div style={{ marginTop: 8 }}>
                <span style={{ fontWeight: 700 }}>${h.price}</span> <span className="kicker">/night</span>
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <a className="btn btn-outline" href={`/bookings/new?type=hotel&id=${h.id}`}>Book</a>
                <a className="btn btn-secondary" href={`/pricing?context=hotel&id=${h.id}`}>Dynamic Price</a>
              </div>
            </div>
          </div>
        ))}
        {results.length === 0 && !loading && (
          <div className="card" style={{ padding: 16, gridColumn: '1 / -1' }}>
            <div className="kicker">No results yet</div>
            <p>Enter your search details above and press Search. If backend is not ready, mock results will appear.</p>
          </div>
        )}
      </div>
    </div>
  );
}
