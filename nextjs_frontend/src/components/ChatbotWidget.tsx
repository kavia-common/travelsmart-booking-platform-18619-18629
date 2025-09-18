'use client';

import { useEffect, useRef, useState } from 'react';
import { apiFetch } from '../lib/api';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

// PUBLIC_INTERFACE
export default function ChatbotWidget() {
  /** Floating visual chat widget with Ocean Professional styling, frontend-safe fallbacks. */
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I can help you find hotels and flights. Ask me anything.' },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  async function send() {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      // Placeholder backend route; update to actual AI chat endpoint.
      const res = await apiFetch<{ reply: string }>('/ai/chat', {
        method: 'POST',
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      setMessages(prev => [...prev, { role: 'assistant', content: res.reply || '...' }]);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      setMessages(prev => [...prev, { role: 'assistant', content: `Sorry, I had trouble reaching AI: ${message}` }]);
    }
  }

  return (
    <div style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 60 }}>
      {open && (
        <div className="card card-hover" style={{ width: 340, height: 420, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: 12, borderBottom: '1px solid rgba(17,24,39,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <strong>TravelSmart Assistant</strong>
            <span className="badge">Beta</span>
          </div>
          <div style={{ padding: 12, flex: 1, overflowY: 'auto', background: 'var(--color-background)' }}>
            {messages.map((m, idx) => (
              <div key={idx} style={{ marginBottom: 8, display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div className="card" style={{
                  padding: 8,
                  maxWidth: '80%',
                  background: m.role === 'user' ? 'var(--color-primary)' : 'white',
                  color: m.role === 'user' ? 'white' : 'var(--color-text)'
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: 8, borderTop: '1px solid rgba(17,24,39,0.06)', display: 'flex', gap: 8 }}>
            <input className="input" placeholder="Ask about flights to Tokyo..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') send(); }} />
            <button className="btn btn-primary" onClick={send}>Send</button>
          </div>
        </div>
      )}
      <button className="btn btn-primary card-hover" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {open ? 'Close Assistant' : 'Ask Assistant'}
      </button>
    </div>
  );
}
