import { useEffect, useState } from 'react';
import { Listing } from '../models/listing';
import './StickyNav.css';

const TABS = [
  { id: 'photos', label: 'Photos' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'location', label: 'Location' },
];

export default function StickyNav({ listing }: { listing: Listing }) {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`sticky-nav ${visible ? 'sticky-nav--visible' : ''}`}>
      <div className="sticky-nav__inner">
        <nav className="sticky-nav__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? 'sticky-nav__tab--active' : ''}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="sticky-nav__summary">
          <span className="sticky-nav__price">{listing.currency}{listing.pricePerStay.toLocaleString()} <em>for {listing.nights} nights</em></span>
          <span className="sticky-nav__rating">★ {listing.rating} · {listing.reviewCount} reviews</span>
          <button className="btn-primary sticky-nav__reserve">Reserve</button>
        </div>
      </div>
    </div>
  );
}
