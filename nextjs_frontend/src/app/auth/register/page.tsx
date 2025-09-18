'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { apiFetch } from '@/src/lib/api';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const router = useRouter();

  async function onSubmit() {
    setStatus('Creating account...');
    try {
      await apiFetch('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) });
      setStatus('Account created! Redirecting...');
      setTimeout(() => router.push('/auth/login'), 800);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Registration failed';
      setStatus(message);
    }
  }

  return (
    <div className="ocean-container" style={{ paddingTop: 48, paddingBottom: 48, display: 'grid', placeItems: 'center' }}>
      <div className="card card-hover" style={{ padding: 24, width: 420 }}>
        <div className="kicker">Join us</div>
        <h1>Create account</h1>
        <div className="grid" style={{ gridTemplateColumns: '1fr', marginTop: 12 }}>
          <input className="input" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn btn-primary" onClick={onSubmit}>Sign up</button>
        </div>
        {status && <div className="kicker" style={{ marginTop: 8 }}>{status}</div>}
      </div>
    </div>
  );
}
