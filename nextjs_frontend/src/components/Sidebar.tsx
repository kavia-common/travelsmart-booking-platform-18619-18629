"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar navigation for dashboards (Admin/User) with Ocean Professional visual design. */
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const items = [
    { href: "/dashboard", label: "Overview", icon: "📊" },
    { href: "/bookings", label: "Bookings", icon: "🧾" },
    { href: "/search/flights", label: "Flights", icon: "✈️" },
    { href: "/search/hotels", label: "Hotels", icon: "🏨" },
    { href: "/admin", label: "Admin", icon: "🛡️" },
  ];

  return (
    <aside className="sidebar hidden md:block">
      <div className="p-3 border-b border-black/5 flex items-center justify-between">
        <div className="font-bold text-lg">
          <span className="text-[var(--color-primary-700)]">Travel</span>
          <span className="text-[var(--color-text)]">Smart</span>
        </div>
        <button
          aria-label="Toggle sidebar"
          className="btn btn-secondary text-sm"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      <nav className="p-3">
        {items.map((it) => {
          const active = pathname?.startsWith(it.href);
          return (
            <Link key={it.href} href={it.href} className="block mb-1">
              <div
                className="sidebar-item"
                style={{
                  background: active ? "var(--color-primary-50)" : undefined,
                  color: active ? "var(--color-primary-700)" : undefined,
                  border: active ? "1px solid var(--color-primary-100)" : "1px solid transparent",
                }}
              >
                <span className="text-lg">{it.icon}</span>
                <span className="font-medium">{it.label}</span>
              </div>
            </Link>
          );
        })}
        <div className="mt-6 p-3 card">
          <div className="text-sm text-[var(--color-text-muted)] mb-2">Assistant</div>
          <p className="text-sm mb-3">Ask TravelSmart to search deals, optimize itineraries, or manage bookings.</p>
          <Link href="/" className="btn btn-primary w-full justify-center">Open Chat</Link>
        </div>
      </nav>
    </aside>
  );
}
