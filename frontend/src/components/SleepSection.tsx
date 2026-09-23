import { Listing } from '../models/listing';
import './SleepSection.css';

export default function SleepSection({ listing }: { listing: Listing }) {
  return (
    <section>
      <h2 className="section-title">Where you'll sleep</h2>
      <div className="sleep-grid">
        {listing.sleepAreas.map((s, i) => (
          <div className="sleep-card" key={i}>
            <img src={s.imageUrl} alt={s.label} />
            <strong>{s.label}</strong>
            <span>{s.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
