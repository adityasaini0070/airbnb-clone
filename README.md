# Airbnb Clone — Playpower Labs Assignment

A close recreation of the reference listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya
UG10"), built with React (frontend) and Spring Boot (backend), per the assignment brief.

## Quick start

```bash
# Backend (http://localhost:8086) — H2 in-memory, auto-seeded
cd backend && mvn spring-boot:run

# Frontend (http://localhost:4200) — proxies /api to the backend above
cd frontend && npm install && npm run dev
```

Or run everything together (Postgres + backend + frontend) with:

```bash
docker compose up --build
```

## What's here

| Path | What |
|---|---|
| `frontend/` | React 18 + Vite + TypeScript SPA — see `frontend/README.md` |
| `backend/` | Spring Boot 3 REST API — see `backend/README.md` |
| `docs/architecture.md` | System diagram + layer responsibilities |
| `docs/PROMPTS.md` | AI workflow log (how this was built with Claude) |
| `docker-compose.yml` | Postgres + backend + frontend, wired together |

## Fidelity notes

Built directly from screenshots of the reference page (layout, section order, copy, and
interactions match). Listing photography is placeholder imagery — the reference site's photos are
proprietary and weren't scraped; see `docs/PROMPTS.md` for what to swap in to finish the visual
match. The frontend has been installed and built successfully in the environment that produced
it (`npm install && npm run build`, including a full type-check); the backend hasn't, since that
sandbox has no network access to Maven Central — run `mvn compile` locally first.
