Windy – Weather Dashboard (Next.js + Auth0)

Overview

Windy is a Next.js 16 application that reads a list of city codes, fetches live weather for those cities from OpenWeatherMap, caches results for 5 minutes, and displays a responsive dashboard. The app is secured with Auth0: login is required to access user-specific views; MFA is enabled via email; signups are restricted to pre-registered users.

Key Features

- Weather data sourcing
  - Reads `CityCode` values from `public/cities.json`.
  - Fetches weather from OpenWeatherMap using the city id endpoint.
  - Extracts and displays: city `name`, `weather[0].description`, `main.temp` (°C), and icon.
- Caching
  - Server-side cache (in-memory) with 5-minute expiration in `app/api/weather/route.ts`.
- Responsive UI
  - Mobile-first responsive layout with Tailwind CSS.
  - Dashboard cards, loading states, and a clean header/footer.
- Authentication & Authorization (Auth0)
  - Login/logout flow integrated with Auth0 SDK (`@auth0/nextjs-auth0`).
  - Middleware protects application routes (excludes static assets).
  - MFA enforced via Auth0 (email verification).
  - Signups disabled; only pre-created users can access.

Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Auth0 (`@auth0/nextjs-auth0` v4)

App Structure (high level)

- `app/`
  - `page.tsx`: Home page
  - `dashboard/page.tsx`: Weather dashboard UI (consumes `/api/weather`)
  - `profile/page.tsx`: Authenticated user profile
  - `api/weather/route.ts`: Weather aggregation + 5-min cache
- `public/cities.json`: Source city list (contains `List[].CityCode`)
- `lib/auth0.js`: Auth0 client configuration
- `middleware.ts`: Auth0 middleware guard

Environment Variables

Create a `.env.local` with the following:

```
# OpenWeather
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Auth0
AUTH0_DOMAIN=your-tenant.us.auth0.com
AUTH0_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
AUTH0_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
AUTH0_SECRET=long-random-string
APP_BASE_URL=http://localhost:3000
```

Getting Started

1) Install dependencies

```
npm install
```

2) Run the development server

```
npm run dev
```

3) Open `http://localhost:3000`

Routes

- `/` – Home page
- `/dashboard` – Weather dashboard (reads from `/api/weather`)
- `/profile` – Authenticated profile page
- `/api/weather` – Aggregates weather for all city ids from `cities.json`, caches for 5 minutes

Notes on Auth

- Login/Logout is wired via the navbar links and handled by Auth0 SDK routes.
- MFA (email) and signup restriction are configured in the Auth0 Dashboard.
- A test user was created in Auth0 for verification (credentials managed outside the repo).

OpenWeather API Usage

- Endpoint used: `GET https://api.openweathermap.org/data/2.5/weather?id={cityId}&appid={API_KEY}&units=metric`
- Displayed fields: `name`, `weather[0].description`, `main.temp`, and icon.

Caching Behavior

- Location: `app/api/weather/route.ts`
- Strategy: in-memory cache shared per server instance
- TTL: 5 minutes; cache is bypassed after expiry and refreshed on next request

Production Considerations

- Replace in-memory cache with a shared cache (Redis) for multi-instance deployments.
- Ensure all Auth0 env vars are set and match the deployed URL.
- Keep `cities.json` lightweight or paginate calls if the list grows large.

License

This project is for the assignment; no license specified.


