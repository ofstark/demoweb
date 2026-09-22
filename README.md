# FloodGuard AI — Frontend

AI-powered flash-flood prediction & early-warning command center for hilly
regions, covering 11 monitored locations across a river basin.

**This is the frontend.** It's built to run against the companion FastAPI
backend (`floodguard-backend/`) for live data and real authentication. A
mock-data fallback still exists in `src/data/` for offline development.

---

## 1. Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- React-Leaflet (GIS map — dark/satellite/terrain basemaps, live risk zones)
- Recharts (charts)
- Framer Motion (animation)
- Lucide React (icons)

## 2. Installation

```bash
npm install
```

## 3. Point it at the backend

Create `.env` in this folder:

```
VITE_API_BASE_URL=http://localhost:8000/api
```

Make sure the backend is running first (see `floodguard-backend/README.md`)
and that its `.env` has `ASTRA_PASSWORD_HASH` and `JWT_SECRET_KEY` set —
sign-in will fail otherwise.

## 4. Running the app

```bash
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`). Sign in
with the `Astra` account and the password set on the backend.

To build a production bundle:

```bash
npm run build
npm run preview
```

## 5. Project Structure

```
src/
├── components/
│   ├── layout/         Sidebar, Topbar, PageContainer
│   ├── dashboard/       RiskCard, PredictionPanel, EnvironmentalCharts,
│   │                    AlertFeed, WarningCard
│   ├── map/             RiskMap, MapLegend, LocationPopup
│   ├── auth/            ProtectedRoute
│   └── common/          GlassCard, Badge, StatusIndicator, LoadingScreen
├── pages/                Landing, Login, Dashboard, RiskMapPage, Predictions,
│                         Alerts, Historical, DataSources, SystemStatus, Settings
├── context/              AuthContext — session state, login/logout
├── data/                 Mock fallback data (used only if USE_MOCK_DATA is true)
├── services/             api.ts, auth.ts, predictions.ts, alerts.ts,
│                         locations.ts, geography.ts
├── types/                Shared TypeScript interfaces
├── lib/                  risk.ts (risk color helpers), cn.ts (classnames util)
├── App.tsx               Routes + auth-protected route wrapping
├── main.tsx              App entry point
└── index.css             Tailwind + global + Leaflet control styling
```

## 6. Authentication

- Single operator account, username `Astra`. There is no self-serve sign-up
  — the password is set on the backend (see its README).
- Login calls the backend directly (`src/services/auth.ts`) and always
  requires it to be running, even if `USE_MOCK_DATA` is left on for other
  data. There's no mock login path — a hardcoded account only means
  something when checked server-side.
- The JWT token is stored in `localStorage` and attached automatically to
  every API request (`src/services/api.ts`). A 401 response clears the
  token and redirects to `/login`.
- All dashboard routes are wrapped in `<ProtectedRoute>` (see `App.tsx`) —
  visiting them while signed out redirects to `/login`.

## 7. Mock data vs. live data

`src/services/api.ts` has:

```ts
export const USE_MOCK_DATA = false;
```

With this `false` (the default), every page calls the real backend. Flip it
to `true` to fall back to the static mock data in `src/data/` for offline
UI work — everything in `src/data/` mirrors the backend's 11 configured
zones and basin geometry so the two stay visually consistent.

### API endpoints in use

```
POST /api/auth/login      → { access_token, username }
GET  /api/auth/me         → current username
GET  /api/predictions     → FloodPrediction[]
GET  /api/alerts          → AlertItem[]
GET  /api/locations       → MonitoringZone[]
GET  /api/risk-map        → MonitoringZone[]
GET  /api/geography       → GeographyData (river paths, roads, settlements)
POST /api/predict         → FloodPrediction (on-demand, arbitrary lat/lon)
```

## 8. Honest limitations (worth knowing before presenting this)

- The risk **model is a documented weighted-scoring formula (Tier 1)**, not
  a trained classifier yet — see the backend README for the Tier 2 upgrade
  path.
- **River level is a discharge proxy**, not a real gauge height in meters.
- The **environmental trend charts** (rainfall/river/soil over 24h) are
  generated client-side to show the expected shape of each signal — the
  backend doesn't yet persist a time-series history of readings. Wiring
  that up means adding a database on the backend that logs each poll.
- **Alerts have no persistence** across backend restarts — they're derived
  live from current risk levels each request.
