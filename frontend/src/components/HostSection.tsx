import { Listing } from '../models/listing';
import './HostSection.css';

export default function HostSection({ listing }: { listing: Listing }) {
  return (
    <section className="host-section">
      <h2 className="section-title">Meet your host</h2>
      <div className="host-section__layout">
        <div className="host-card">
          <div className="host-card__avatar-wrap">
            <img src={listing.host.avatarUrl} alt={listing.host.name} />
            <span className="host-card__badge">✓</span>
          </div>
          <strong>{listing.host.name}</strong>
          <span>Host</span>
          <div className="host-card__stats">
            <div><strong>{listing.host.reviewCount.toLocaleString()}</strong><span>Reviews</span></div>
            <div><strong>{listing.host.rating}★</strong><span>Rating</span></div>
            <div><strong>{listing.host.yearsHosting}</strong><span>Years hosting</span></div>
          </div>
          <p className="host-card__fact">📍 {listing.host.bornDecade}</p>
          <p className="host-card__fact">🎓 {listing.host.school}</p>
        </div>

        <div className="host-section__details">
          <h3>Co-Hosts</h3>
          <div className="cohosts-grid">
            {listing.coHosts.map((c, i) => (
              <div className="cohost" key={i}>
                <img src={c.avatarUrl} alt={c.name} />
                <span>{c.name}</span>
              </div>
            ))}
          </div>

          <h3>Host details</h3>
          <p>Response rate: {listing.host.responseRate}%</p>
          <p>{listing.host.responseTime}</p>
          <button className="btn-outline" type="button">Message host</button>

          <p className="host-section__disclaimer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2 3 6v6c0 5 4 8.7 9 10 5-1.3 9-5 9-10V6z" />
            </svg>
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
