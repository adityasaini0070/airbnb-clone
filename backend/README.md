# Airbnb Clone — Backend (Spring Boot)

REST API serving the reference listing (`mirashya-ug10`) to the Angular frontend.

## Run locally (H2, no setup needed)

```bash
mvn spring-boot:run
```

Runs on the `dev` profile: in-memory H2, auto-seeded with the listing data on startup
(`DataSeeder`). H2 console at http://localhost:8086/h2-console (JDBC URL `jdbc:h2:mem:airbnb`).

## Run against Postgres (matches Aditya's usual stack)

```bash
docker compose up --build
```

Uses the `docker` profile (see `application.yml`) against the `postgres` service defined in
`docker-compose.yml` at the repo root, with `ddl-auto: update` so the schema is created on first
boot and preserved after.

## Endpoints

| Method | Path                                   | Description                          |
|--------|-----------------------------------------|---------------------------------------|
| GET    | `/api/listings`                         | All seeded listings                   |
| GET    | `/api/listings/{id}`                    | One listing, shaped to match the frontend `Listing` model |
| GET    | `/api/listings/{id}/availability?checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD` | Basic overlap check against the seeded stay |

## Structure

- `model/` — JPA entities (`Listing` + child entities for photo categories, reviews, amenities, etc.)
- `dto/` — response records, shaped 1:1 with the Angular `Listing` interface
- `service/ListingMapper` — entity → DTO mapping
- `service/DataSeeder` — seeds the reference listing on startup (`dev`/`docker` profiles)
- `controller/ListingController` — REST endpoints
- `config/WebConfig` — CORS for `localhost:4200`

## Note on verification

This project was written directly (not scaffolded/built via `mvn` or an IDE) since this sandbox
has no network access to Maven Central. It hasn't been compiled here — please run `mvn compile`
or open it in an IDE first thing to catch anything an offline review missed.
