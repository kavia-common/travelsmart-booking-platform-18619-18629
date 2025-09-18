export default function Footer() {
  return (
    <footer className="footer">
      <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--color-primary)' }} />
          <span>© {new Date().getFullYear()} TravelSmart</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
