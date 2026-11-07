# Frontend Dashboard Architecture

The dashboard is a presentation boundary for Teiritsu evidence. It does not
perform email acquisition, identity analysis, provider requests, or risk
classification. Those responsibilities remain in the deterministic application
modules described in `ARCHITECTURE.md`.

## Boundaries

- `frontend/src/app` contains the application entry point.
- `frontend/src/components/ui` contains presentation primitives shared by
  features.
- `frontend/src/features/dashboard` contains dashboard-specific data,
  state, components, and presentation.
- `frontend/src/features/dashboard/data.ts` contains representative local
  fixtures that will later be replaced by an API adapter.
- `frontend/src/features/dashboard/hooks` contains interaction state and
  filtering logic.

## Composition

`DashboardPage` composes `Sidebar`, `Header`, `TelemetryBanner`, `MetricCard`,
`StreamTable`, `AnalyticsGrid`, and `OperationsPanels`. Each component owns one
visual responsibility and receives typed props rather than reaching into
global state.

The `useDashboardState` hook owns filter, search, incident-lock, and status
state. It performs only deterministic local filtering and exposes callbacks to
the view. This keeps business-like transformations testable without coupling
them to table markup.

## Future API integration

The fixture arrays should be replaced by a typed service at the feature
boundary. The service must preserve source, timestamp, reliability, uncertainty,
and limitation metadata from the backend. The UI must not infer ownership or
legitimacy from a visual state alone.
