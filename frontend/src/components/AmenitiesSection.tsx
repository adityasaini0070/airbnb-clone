import { useState } from 'react';
import { Listing } from '../models/listing';
import './AmenitiesSection.css';

const ICONS: Record<string, string> = {
  kitchen: 'M4 3v18M4 3h4M20 3v18M8 3v6a4 4 0 0 0 8 0V3',
  wifi: 'M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01',
  desk: 'M3 20h18M5 20V9l7-4 7 4v11M9 20v-6h6v6',
  car: 'M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
  pool: 'M2 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M4 14V6a2 2 0 0 1 2-2h6l6 6v4',
  hottub: 'M3 20h18M5 20v-6a5 5 0 0 1 10 0v6M5 10a2 2 0 1 1 4 0',
  paw: 'M12 14c3 0 6 2 6 5H6c0-3 3-5 6-5zM7 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM17 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM14.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  camera: 'M4 8h3l2-2h6l2 2h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'co-alarm': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v5M12 16h.01',
  'smoke-alarm': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12h8',
};

const iconPath = (icon: string) => ICONS[icon] ?? ICONS['kitchen'];

export default function AmenitiesSection({ listing }: { listing: Listing }) {
  const [showModal, setShowModal] = useState(false);

  const list = (extraClass = '') => (
    <ul className={`amenities-grid ${extraClass}`}>
      {listing.amenities.map((a, i) => (
        <li key={i} className={!a.available ? 'amenities-grid__item--unavailable' : ''}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={iconPath(a.icon)} />
          </svg>
          <span>{a.label}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="amenities">
      <h2 className="section-title">What this place offers</h2>
      {list()}
      <button className="btn-outline" type="button" onClick={() => setShowModal(true)}>
        Show all {listing.totalAmenityCount} amenities
      </button>

      {showModal && (
        <div className="amenities-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="amenities-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <header>
              <button aria-label="Close" onClick={() => setShowModal(false)}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <strong>What this place offers</strong>
            </header>
            <div className="amenities-modal__body">
              {list()}
              <p className="amenities-modal__note">
                Showing amenities highlighted for this listing. The full inventory of {listing.totalAmenityCount} amenities is managed by the host.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
