# Frontend Testing

Frontend quality gates are run from `frontend/`:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run format:check
```

React Testing Library covers the dashboard's visible contract:

- dashboard composition and baseline telemetry
- critical-risk filtering
- deterministic sender/search filtering
- incident-lock interaction

Future tests should add keyboard navigation, mobile drawer behavior, empty
search results, error states from an API adapter, and Playwright coverage for
the primary investigation journey once the frontend is connected to a service.
