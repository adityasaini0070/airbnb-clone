import { useEffect, useState } from 'react';
import { Listing } from '../models/listing';
import { getListing } from '../services/listingService';

import PhotoGrid from './PhotoGrid';
import PhotoTourOverlay from './PhotoTourOverlay';
import ListingHeader from './ListingHeader';
import OverviewSection from './OverviewSection';
import SleepSection from './SleepSection';
import AmenitiesSection from './AmenitiesSection';
import Calendar from './Calendar';
import ReviewsSection from './ReviewsSection';
import LocationSection from './LocationSection';
import HostSection from './HostSection';
import ThingsToKnow from './ThingsToKnow';
import MoreStays from './MoreStays';
import ReserveCard from './ReserveCard';
import StickyNav from './StickyNav';
import './ListingPage.css';

export default function ListingPage() {
  const [listing, setListing] = useState<Listing | null>(null);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    getListing('mirashya-ug10').then(setListing);
  }, []);

  if (!listing) {
    return <div className="listing-page__loading">Loading listing…</div>;
  }

  return (
    <>
      <StickyNav listing={listing} />

      <div className="page-container" id="photos">
        <ListingHeader listing={listing} />
        <PhotoGrid photos={listing.heroPhotos} onOpenTour={() => setTourOpen(true)} />

        <div className="listing-page__layout">
          <main className="listing-page__main">
            <OverviewSection listing={listing} />
            <hr className="divider" />
            <SleepSection listing={listing} />
            <hr className="divider" />
            <AmenitiesSection listing={listing} />
            <hr className="divider" />
            <Calendar listing={listing} />
            <hr className="divider" />
            <ReviewsSection listing={listing} />
            <hr className="divider" />
            <LocationSection listing={listing} />
            <hr className="divider" />
            <HostSection listing={listing} />
            <hr className="divider" />
            <ThingsToKnow listing={listing} />
            <hr className="divider" />
            <MoreStays listing={listing} />
          </main>

          <aside className="listing-page__sidebar">
            <div className="listing-page__sidebar-sticky">
              <ReserveCard listing={listing} />
            </div>
          </aside>
        </div>
      </div>

      <footer className="listing-page__footer">
        <p>This is a student assignment recreation of an Airbnb-style listing page, built for demonstration purposes only. Not affiliated with Airbnb, Inc.</p>
      </footer>

      {tourOpen && (
        <PhotoTourOverlay categories={listing.photoCategories} onClose={() => setTourOpen(false)} />
      )}
    </>
  );
}
