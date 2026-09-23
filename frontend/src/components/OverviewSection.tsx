import { useState } from 'react';
import { Listing } from '../models/listing';
import './OverviewSection.css';

export default function OverviewSection({ listing }: { listing: Listing }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overview">
      <div className="overview__type-row">
        <h2>{listing.propertyType}</h2>
        <p>{listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms} bathroom</p>
      </div>

      <hr className="divider" />

      <div className="overview__favourite-card">
        <div className="overview__favourite-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2 9 7l-5 .7 3.6 3.5L6.7 16 12 13.3 17.3 16l-.9-4.8L20 7.7 15 7z" />
          </svg>
        </div>
        <div className="overview__favourite-text">
          <strong>Guest favourite</strong>
          <span>One of the most loved homes on Airbnb, according to guests</span>
        </div>
        <div className="overview__favourite-score">
          <strong>{listing.rating}</strong>
          <span className="overview__stars">★★★★★</span>
        </div>
        <div className="overview__favourite-reviews">
          <strong>{listing.reviewCount}</strong>
          <span>Reviews</span>
        </div>
      </div>

      <div className="overview__host-row">
        <img className="overview__host-avatar" src={listing.host.avatarUrl} alt={listing.host.name} />
        <div>
          <strong>Hosted by {listing.host.name}</strong>
          <p>{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <hr className="divider" />

      <ul className="overview__highlights">
        {listing.amenityHighlights.map((h, i) => (
          <li key={i}>
            <span className="overview__highlight-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <span>
              <strong>{h.title}</strong>
              <p>{h.description}</p>
            </span>
          </li>
        ))}
      </ul>

      <hr className="divider" />

      <div className="overview__translation">
        <p>Some info has been automatically translated. <a className="underline-link">Show original</a></p>
      </div>

      <div className={`overview__description ${!expanded ? 'overview__description--collapsed' : ''}`}>
        <p>{listing.description}</p>
      </div>
      <button className="underline-link overview__toggle" type="button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Show more'} ›
      </button>
    </div>
  );
}
