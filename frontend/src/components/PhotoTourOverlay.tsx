import { useEffect } from 'react';
import { PhotoCategory } from '../models/listing';
import './PhotoTourOverlay.css';

interface Props {
  categories: PhotoCategory[];
  onClose: () => void;
}

export default function PhotoTourOverlay({ categories, onClose }: Props) {
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [onClose]);

  const scrollTo = (id: string) => {
    document.getElementById('cat-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="tour" role="dialog" aria-modal="true" aria-label="Photo tour">
      <header className="tour__topbar">
        <button className="tour__close" onClick={onClose} aria-label="Close photo tour">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <span className="tour__title">Photo tour</span>
        <span className="tour__spacer" />
      </header>

      <nav className="tour__thumbnails">
        {categories.map((cat) => (
          <button key={cat.id} className="tour__thumb" onClick={() => scrollTo(cat.id)}>
            <img src={cat.coverUrl} alt={cat.label} />
            <span>{cat.label}</span>
          </button>
        ))}
      </nav>

      <div className="tour__body">
        {categories.map((cat) => (
          <section className="tour__category" id={'cat-' + cat.id} key={cat.id}>
            <div className="tour__category-header">
              <h2>{cat.label}</h2>
              {cat.subtitle && <p>{cat.subtitle}</p>}
            </div>
            <div className="tour__category-photos">
              <img className="tour__photo tour__photo--full" src={cat.photos[0]} alt={cat.label} />
              {cat.photos.length > 1 && (
                <div className="tour__photo-pair">
                  {cat.photos.slice(1).map((p, i) => (
                    <img className="tour__photo" src={p} alt={cat.label} key={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
