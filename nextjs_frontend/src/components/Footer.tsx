export default function Footer() {
  return (
    <footer className="footer">
      <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--color-primary)' }} />
              TravelSmart
            </div>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 8 }}>
              AI-powered bookings for flights and hotels with smart recommendations.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Product</div>
            <ul style={{ color: 'var(--color-text-muted)' }}>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/bookings">Bookings</a></li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Resources</div>
            <ul style={{ color: 'var(--color-text-muted)' }}>
              <li><a href="/health">Status</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Get started</div>
            <a className="btn btn-primary" href="/auth/register">Create account</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, color: 'var(--color-text-muted)', fontSize: 14 }}>
          <div>© {new Date().getFullYear()} TravelSmart</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
