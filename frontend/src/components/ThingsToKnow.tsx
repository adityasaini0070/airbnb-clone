import { Listing } from '../models/listing';
import './ThingsToKnow.css';

export default function ThingsToKnow({ listing }: { listing: Listing }) {
  return (
    <section className="ttk">
      <h2 className="section-title">Things to know</h2>
      <div className="ttk__grid">
        <div>
          <h3>Cancellation policy</h3>
          {listing.cancellationPolicy.map((line, i) => <p key={i}>{line}</p>)}
          <a className="underline-link">Review this host's full policy for details</a>
          <div><a className="underline-link">Learn more</a></div>
        </div>
        <div>
          <h3>House rules</h3>
          {listing.houseRules.map((line, i) => <p key={i}>{line}</p>)}
          <a className="underline-link">Learn more</a>
        </div>
        <div>
          <h3>Safety &amp; property</h3>
          {listing.safety.map((line, i) => <p key={i}>{line}</p>)}
          <a className="underline-link">Learn more</a>
        </div>
      </div>
    </section>
  );
}
