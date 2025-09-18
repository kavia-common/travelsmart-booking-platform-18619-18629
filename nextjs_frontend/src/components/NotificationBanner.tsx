'use client';

import { useEffect, useState } from 'react';

type Notice = { id: string; type: 'info' | 'success' | 'error'; message: string };

export default function NotificationBanner() {
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    // Placeholder: future integration with Supabase Realtime or backend SSE/websocket
    const timeout = setTimeout(() => {
      setNotice({
        id: 'welcome',
        type: 'info',
        message: 'Welcome! New weekend deals are live. Try a hotel search.',
      });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!notice) return null;

  const bg = notice.type === 'success' ? 'rgba(245,158,11,0.1)' : notice.type === 'error' ? 'rgba(239,68,68,0.1)' : 'rgba(37,99,235,0.08)';
  const color = notice.type === 'success' ? 'var(--color-secondary)' : notice.type === 'error' ? 'var(--color-error)' : 'var(--color-primary)';

  return (
    <div style={{ background: bg, borderBottom: '1px solid rgba(17,24,39,0.06)' }}>
      <div className="ocean-container" style={{ paddingTop: 8, paddingBottom: 8, color, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="kicker">{notice.message}</span>
        <button className="btn btn-outline" onClick={() => setNotice(null)}>Dismiss</button>
      </div>
    </div>
  );
}
