import { Listing } from '../models/listing';
import './MoreStays.css';

export default function MoreStays({ listing }: { listing: Listing }) {
  return (
    <section className="more-stays">
      <div className="more-stays__header">
        <h2 className="section-title">More stays nearby</h2>
        <div className="more-stays__nav">
          <span>1/2</span>
          <button aria-label="Previous">‹</button>
          <button aria-label="Next">›</button>
        </div>
      </div>
      <div className="more-stays__grid">
        {listing.nearbyStays.map((s, i) => (
          <div className="more-stays__card" key={i}>
            <img src={s.imageUrl} alt={s.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
