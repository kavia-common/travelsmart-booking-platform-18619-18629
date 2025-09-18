import { apiFetch } from '../../../lib/api';

export default function NewBookingPage() {
  return (
    <div className="ocean-container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <div className="card" style={{ padding: 16 }}>
        <div className="kicker">New booking</div>
        <h1>Create a new booking</h1>
        <p style={{ marginTop: 8 }}>
          This is a placeholder page. Connect to backend to create bookings using the form below.
        </p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', marginTop: 12 }}>
          <div className="card" style={{ padding: 12 }}>
            <div className="kicker">Trip details</div>
            <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              <input className="input" placeholder="From (e.g., NYC)" />
              <input className="input" placeholder="To (e.g., LON)" />
              <input className="input" type="date" placeholder="Departure date" />
              <input className="input" type="number" placeholder="Travelers" />
            </div>
          </div>
          <div className="card" style={{ padding: 12 }}>
            <div className="kicker">Hotel preferences</div>
            <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
              <input className="input" placeholder="City" />
              <input className="input" type="date" placeholder="Check-in" />
              <input className="input" type="date" placeholder="Check-out" />
              <input className="input" type="number" placeholder="Rooms" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <a className="btn btn-primary" href="/payments/checkout?bookingId=mock&amount=499">Proceed to checkout</a>
          <a className="btn btn-outline" href="/bookings">Back to bookings</a>
        </div>
      </div>
    </div>
  );
}
