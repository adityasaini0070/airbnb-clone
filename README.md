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
| `docs/PROMPTS.txt` | AI workflow log (how this was built with Claude) |
| `docker-compose.yml` | Postgres + backend + frontend, wired together |

## Fidelity notes

Built directly from screenshots of the reference page (layout, section order, copy, and
interactions match). Listing photography is placeholder imagery — the reference site's photos are
proprietary and weren't scraped; see `docs/PROMPTS.md` for what to swap in to finish the visual
match. The frontend has been installed and built successfully in the environment that produced
it (`npm install && npm run build`, including a full type-check); the backend hasn't, since that
sandbox has no network access to Maven Central — run `mvn compile` locally first.

## Deploying

**Backend (Render):** New Web Service → Docker → Root Directory `backend` → Dockerfile Path
`./Dockerfile`. Set env var `SPRING_PROFILES_ACTIVE=dev` (H2, auto-seeded, simplest) or `docker`
+ a Postgres instance (persistent). Free tier spins down on inactivity — first request after idle
has a cold-start delay.

**Frontend (Vercel or Netlify):** import the repo, set **Root Directory** to `frontend`
(Vite is auto-detected on both). Add an environment variable:

```
VITE_API_BASE_URL=https://<your-backend>.onrender.com/api
```

Currently deployed backend: `https://airbnb-clone-gz4j.onrender.com` → use
`https://airbnb-clone-gz4j.onrender.com/api` as `VITE_API_BASE_URL`.

Without this variable the frontend falls back to `/api` (relative), which only resolves
correctly in local dev via the Vite proxy — in production it would 404 and the UI would silently
fall back to mock data.

Backend CORS already allows `*.vercel.app` and `*.netlify.app` by default (see `app.cors.allowed-
origins` in `application.yml`); override with the `ALLOWED_ORIGINS` env var once you have a final
custom domain.
