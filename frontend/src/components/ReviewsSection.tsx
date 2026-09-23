import { useState } from 'react';
import { Listing } from '../models/listing';
import './ReviewsSection.css';

export default function ReviewsSection({ listing }: { listing: Listing }) {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const visibleReviews = showAll ? listing.reviews : listing.reviews.slice(0, 4);

  const toggleExpand = (id: string) => {
    const next = new Set(expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    setExpanded(next);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews__score">
        <span className="reviews__leaf reviews__leaf--left">🌿</span>
        <span className="reviews__score-number">{listing.rating}</span>
        <span className="reviews__leaf reviews__leaf--right">🌿</span>
      </div>
      <h2 className="reviews__heading">Guest favourite</h2>
      <p className="reviews__subtitle">This home is a guest favourite based on ratings, reviews and reliability</p>
      <a className="underline-link">How reviews work</a>

      <div className="reviews__categories">
        {listing.ratingCategories.map((c, i) => (
          <div className="reviews__category" key={i}>
            <span>{c.label}</span>
            <div className="reviews__bar">
              <div className="reviews__bar-fill" style={{ width: `${(c.score / 5) * 100}%` }} />
            </div>
            <strong>{c.score}</strong>
          </div>
        ))}
      </div>

      <div className="reviews__tags">
        {listing.reviewTags.map((t, i) => (
          <span className="reviews__tag" key={i}>{t.label} <em>{t.count}</em></span>
        ))}
      </div>

      <div className="reviews__grid">
        {visibleReviews.map((r) => (
          <article className="review-card" key={r.id}>
            <div className="review-card__header">
              <img src={r.avatarUrl} alt={r.name} />
              <div>
                <strong>{r.name}</strong>
                <span>{r.tenure}</span>
              </div>
            </div>
            <div className="review-card__meta">
              <span className="review-card__stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
              <span>· {r.date}</span>
            </div>
            <p className={!expanded.has(r.id) ? 'review-card__text--clamped' : ''}>{r.text}</p>
            {r.text.length > 120 && (
              <button className="underline-link" type="button" onClick={() => toggleExpand(r.id)}>
                {expanded.has(r.id) ? 'Show less' : 'Show more'}
              </button>
            )}
          </article>
        ))}
      </div>

      {!showAll && (
        <button className="btn-outline" type="button" onClick={() => setShowAll(true)}>
          Show all {listing.reviewCount} reviews
        </button>
      )}
    </section>
  );
}
