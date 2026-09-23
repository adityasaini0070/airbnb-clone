import { Listing } from '../models/listing';
import './ReserveCard.css';

interface Props {
  listing: Listing;
  compact?: boolean;
}

export default function ReserveCard({ listing, compact = false }: Props) {
  const dateFmt = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });

  return (
    <div className={`reserve-card ${compact ? 'reserve-card--compact' : ''}`}>
      {!compact && (
        <div className="reserve-card__promo">
          <span>🎁 Get 10% off your next stay. <a className="underline-link">Terms apply</a></span>
          <button className="btn-outline reserve-card__claim">Claim</button>
        </div>
      )}

      <div className="reserve-card__box">
        <div className="reserve-card__price">
          <span className="reserve-card__amount">{listing.currency}{listing.pricePerStay.toLocaleString()}</span>
          <span className="reserve-card__nights">for {listing.nights} nights</span>
        </div>

        <div className="reserve-card__fields">
          <div className="reserve-card__field">
            <label>Check-in</label>
            <span>{dateFmt(listing.checkIn)}</span>
          </div>
          <div className="reserve-card__field">
            <label>Checkout</label>
            <span>{dateFmt(listing.checkOut)}</span>
          </div>
          <div className="reserve-card__field reserve-card__field--full">
            <label>Guests</label>
            <span>{listing.defaultGuests} guests</span>
            <svg className="reserve-card__chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <p className="reserve-card__cancellation">Free cancellation before <strong>{listing.freeCancellationDate}</strong></p>

        <button className="btn-primary reserve-card__reserve">Reserve</button>
        <p className="reserve-card__note">You won't be charged yet</p>
      </div>

      {!compact && <a className="underline-link reserve-card__report">🚩 Report this listing</a>}
    </div>
  );
}
