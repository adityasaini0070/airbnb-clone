import './PhotoGrid.css';

interface Props {
  photos: string[];
  onOpenTour: () => void;
}

export default function PhotoGrid({ photos, onOpenTour }: Props) {
  return (
    <div className="photo-grid">
      <button className="photo-grid__main" onClick={onOpenTour} aria-label="Open photo tour">
        <img src={photos[0]} alt="Listing photo 1" />
      </button>
      <div className="photo-grid__side">
        {photos.slice(1, 5).map((p, i) => (
          <button
            key={i}
            className="photo-grid__cell"
            onClick={onOpenTour}
            aria-label={`Open photo tour, photo ${i + 2}`}
          >
            <img src={p} alt={`Listing photo ${i + 2}`} />
            {i === 3 && (
              <span className="photo-grid__show-all">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                </svg>
                Show all photos
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
