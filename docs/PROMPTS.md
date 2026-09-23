# AI Workflow Log

This project was built with Claude (Anthropic) as a pair-programmer inside a single chat session.
Below is the actual sequence of prompts used and what each produced.

## 1. Initial brief

**Prompt:** *"given is my assignment for power labs to make an exact airbnb app use angular for
frontend and java for backend, it should be same as the vercel link"* — with the assignment
document attached.

**What happened:** Claude read the assignment doc (scope, deliverables, tech constraints) and
tried to fetch the reference Vercel URL directly. The URL wasn't reachable through the available
web tools (not indexed, and the fetch tool only opens URLs that already appear in a search
result), so pixel-matching from a live fetch wasn't possible. Rather than guess at a generic
Airbnb layout and call it "exact," Claude flagged the limitation and asked for screenshots of the
three key views (main listing page, photo-tour overlay, booking overlay) instead of proceeding
blind.

## 2. Reference screenshots

**Prompt:** 11 screenshots of the reference listing page — full page (hero grid → sidebar →
amenities → calendar → reviews → host → things-to-know → nearby stays) and the full "Photo tour"
overlay (category thumbnails + per-room sections).

**What happened:** Claude read the layout, copy, section order, and interaction affordances
(tabs, "Show all photos", "Show all amenities", "Show all reviews", modal overlay) directly off
the screenshots and used them as the spec for every component built afterward — this is the
actual source of the "pixel-close" fidelity in the frontend, not the initial (unreachable) URL.

## 3. First build (Angular)

**Implicit instruction (continuation of the above):** build the full Angular + Spring Boot project
matching what the screenshots showed.

**What happened:** Claude scaffolded an Angular 18 standalone-component app (one component per
section, `ListingService` with a mock fallback), a Spring Boot 3 REST API (JPA entities → DTOs →
mapper → controller, seeded with the screenshot data), Docker Compose wiring both together with
Postgres, and this architecture doc / prompt log. The Angular app was installed and built
(`npm install`, dev and prod builds) successfully inside the sandbox.

## 4. Framework switch (Angular → React)

**Prompt:** *"angular is not supported on intelliJ use react for frontend and make a new zip
file"*

**What happened:** Claude rebuilt the frontend from scratch as React 18 + Vite + TypeScript,
keeping the exact same component breakdown, section order, copy, and visual design as the Angular
version (so the screenshot-derived fidelity carries over 1:1) — Angular's `@Input()` props became
React props, Angular services became a `fetch`-based service module, and Angular's structural
directives (`*ngFor`/`*ngIf`) became plain JSX. The backend, Docker setup, and docs were updated
to reference React instead of Angular; the backend code itself is framework-agnostic and didn't
need to change. The new frontend was installed and type-checked/built (`npm install && npm run
build`) successfully inside the sandbox.

## Known gaps / where a human should take over

- **Backend not build-verified.** This sandbox has no network access to Maven Central, so the
  Spring Boot project hasn't actually been compiled/run here. Run `mvn compile` first.
- **Photos are placeholders.** The reference site's actual photography is proprietary to that
  listing and wasn't scraped; swap the `picsum.photos` seed URLs in `DataSeeder.java` /
  `listingService.ts` for real asset URLs (S3, Cloudinary, etc.) to finish the visual match.
- **Reserve flow is UI-only.** The "Reserve" button and date fields render and the backend has a
  basic `/availability` overlap check, but there's no real booking/payment flow — out of scope
  for a listing-page clone.
