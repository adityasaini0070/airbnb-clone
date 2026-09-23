# Airbnb Clone — Frontend (React + Vite + TypeScript)

Recreates the reference listing page (`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`): hero
photo grid, sticky tab nav, amenities/calendar/reviews/location/host sections, sticky reserve
card, and a full-screen "Photo tour" overlay.

## Run locally

```bash
npm install
npm run dev     # http://localhost:4200, proxies /api/* to http://localhost:8086 (see vite.config.ts)
```

The app calls `GET /api/listings/mirashya-ug10` on the Spring Boot backend. If the backend isn't
running, `listingService.ts` falls back to an in-app mock of the same shape, so the UI still
renders fully on its own.

## Structure

- `src/App.tsx` — mounts `Navbar` + `ListingPage`
- `src/components/ListingPage.tsx` — page orchestrator, fetches the listing once, lays out every
  section + sidebar
- `src/components/*` — one component (+ matching `.css`) per visual section: Navbar, PhotoGrid,
  PhotoTourOverlay, ListingHeader, OverviewSection, SleepSection, AmenitiesSection, Calendar,
  ReviewsSection, LocationSection, HostSection, ThingsToKnow, MoreStays, ReserveCard, StickyNav
- `src/models/listing.ts` — shared `Listing` shape (frontend/backend contract)
- `src/services/listingService.ts` — `fetch` wrapper + mock fallback

## Build

```bash
npm run build      # type-checks (tsc -b) then outputs to dist/
npm run preview    # serve the production build locally
```

## Notes on fidelity

Built against screenshots of the reference page (layout, copy, spacing, and section order match).
Actual listing photography is proprietary to the reference site, so photo placeholders are used
instead of scraped images — swap the `img()` calls in `listingService.ts` (or the backend's seed
data) for real asset URLs to finish the visual match.
