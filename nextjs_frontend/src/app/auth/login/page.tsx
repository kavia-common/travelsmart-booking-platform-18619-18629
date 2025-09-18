'use client';

import { useState } from 'react';
import { login, loginWithGoogle } from '@/src/lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  async function onSubmit() {
    setStatus('Signing in...');
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Login failed';
      setStatus(message);
    }
  }

  return (
    <div className="ocean-container" style={{ paddingTop: 48, paddingBottom: 48, display: 'grid', placeItems: 'center' }}>
      <div className="card card-hover" style={{ padding: 24, width: 420 }}>
        <div className="kicker">Welcome back</div>
        <h1>Sign in</h1>
        <div className="grid" style={{ gridTemplateColumns: '1fr', marginTop: 12 }}>
          <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn btn-primary" onClick={onSubmit}>Sign in</button>
          <button className="btn btn-outline" onClick={loginWithGoogle}>Continue with Google</button>
        </div>
        {status && <div className="kicker" style={{ marginTop: 8 }}>{status}</div>}
      </div>
    </div>
  );
}
