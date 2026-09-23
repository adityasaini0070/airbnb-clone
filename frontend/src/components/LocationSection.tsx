import { Listing } from '../models/listing';
import './LocationSection.css';

export default function LocationSection({ listing }: { listing: Listing }) {
  return (
    <section id="location" className="location">
      <h2 className="section-title">Where you'll be</h2>
      <p className="location__subtitle">{listing.neighbourhood}</p>

      <div className="location__map" role="img" aria-label="Approximate location map">
        <button className="location__zoom" aria-label="Search this area">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <div className="location__zoom-controls">
          <button aria-label="Zoom in">+</button>
          <button aria-label="Zoom out">−</button>
        </div>
        <span className="location__pin">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z" />
          </svg>
        </span>
      </div>
      <p className="location__note">Exact location will be provided after booking.</p>

      <h3 className="location__nearby-title">Neighbourhood highlights</h3>
      <p>{listing.neighbourhoodBlurb}</p>
      <a className="underline-link">Show more ›</a>
    </section>
  );
}
