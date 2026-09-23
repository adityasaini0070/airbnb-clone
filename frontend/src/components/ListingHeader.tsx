import { useState } from 'react';
import { Listing } from '../models/listing';
import './ListingHeader.css';

export default function ListingHeader({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="listing-header">
      <h1 className="listing-header__title">{listing.title}</h1>
      <div className="listing-header__actions">
        <button className="listing-header__action" type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M13 4.5a2.5 2.5 0 1 1 .7 1.7L8.9 9a2.5 2.5 0 0 1 0 2l4.8 2.8a2.5 2.5 0 1 1-.5 1L8.4 12a2.5 2.5 0 1 1 0-4l4.8-2.8A2.5 2.5 0 0 1 13 4.5z" />
          </svg>
          <span className="underline-link">Share</span>
        </button>
        <button className="listing-header__action" type="button" onClick={() => setSaved(!saved)}>
          <svg viewBox="0 0 32 32" width="16" height="16" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.2">
            <path d="M16 28s-11-7-11-15a6.5 6.5 0 0 1 11-4.7A6.5 6.5 0 0 1 27 13c0 8-11 15-11 15z" />
          </svg>
          <span className="underline-link">Save</span>
        </button>
      </div>
    </div>
  );
}
