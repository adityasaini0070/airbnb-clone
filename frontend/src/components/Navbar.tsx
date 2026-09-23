import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="/" aria-label="Airbnb clone home">
          <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M16 1c5 6 10 12.6 10 18a10 10 0 0 1-20 0c0-5.4 5-12 10-18z" />
          </svg>
          <span>airbnb</span>
        </a>

        <button className="navbar__search" type="button" aria-label="Search">
          <span className="navbar__search-item">Anywhere</span>
          <span className="navbar__divider" />
          <span className="navbar__search-item">Anytime</span>
          <span className="navbar__divider" />
          <span className="navbar__search-item navbar__search-item--muted">Add guests</span>
          <span className="navbar__search-icon">
            <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor">
              <path d="M13 24a11 11 0 1 1 0-22 11 11 0 0 1 0 22zm8-2 8 8-1.5 1.5-8-8z" />
            </svg>
          </span>
        </button>

        <div className="navbar__actions">
          <a className="navbar__host-link" href="#">Become a host</a>
          <button className="navbar__icon-btn" type="button" aria-label="Language">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.3a15.6 15.6 0 0 0-1.4-6 8 8 0 0 1 4.7 6zM12 4c.8 1.1 1.9 3 2.4 6H9.6c.5-3 1.6-4.9 2.4-6zM4.1 11a8 8 0 0 1 4.7-6 15.6 15.6 0 0 0-1.4 6zm0 2h3.3a15.6 15.6 0 0 0 1.4 6 8 8 0 0 1-4.7-6zM12 20c-.8-1.1-1.9-3-2.4-6h4.8c-.5 3-1.6 4.9-2.4 6zm2.6-.9a15.6 15.6 0 0 0 1.4-6.1h3.3a8 8 0 0 1-4.7 6.1z" />
            </svg>
          </button>
          <button className="navbar__menu-btn" type="button" aria-label="Open menu">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M2 6h20v2H2zM2 16h20v2H2z" />
            </svg>
            <span className="navbar__avatar" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
