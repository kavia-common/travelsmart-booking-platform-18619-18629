'use client';

import { useEffect, useState } from 'react';
import { getHealth } from '@/src/lib/api';

export default function HealthPage() {
  const [status, setStatus] = useState<string>('Checking...');

  useEffect(() => {
    (async function run() {
      try {
        const res = await getHealth();
        setStatus(`Backend OK: ${JSON.stringify(res)}`);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Unknown error';
        setStatus(`Backend not reachable: ${message}`);
      }
    })();
  }, []);

  return (
    <div className="ocean-container" style={{ paddingTop: 24 }}>
      <div className="card" style={{ padding: 16 }}>
        <div className="kicker">Health</div>
        <h1>Connectivity</h1>
        <p style={{ marginTop: 8 }}>{status}</p>
      </div>
    </div>
  );
}
