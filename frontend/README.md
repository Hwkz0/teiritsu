# Teiritsu SecOps Dashboard

This Vite + React + TypeScript frontend reconstructs the supplied AEGIS SecOps
dashboard as a deterministic presentation surface for Teiritsu evidence.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

The dashboard currently uses representative, local telemetry fixtures. Its
controls demonstrate filtering, operator feedback, incident locking, and
forensic action queueing without transmitting message content or introducing
runtime AI services. The Python analysis and ingestion modules remain the
source of truth for future API integration.

## Structure

- `src/app/App.tsx` — application entry point
- `src/components/ui/` — shared presentation primitives
- `src/features/dashboard/components/` — dashboard composition and visual modules
- `src/features/dashboard/hooks/` — deterministic interaction state
- `src/features/dashboard/data.ts` — typed representative telemetry fixtures
- `src/features/dashboard/types.ts` — shared feature contracts
- `src/styles.css` — Tailwind entry point and global defaults
- `src/app/App.test.tsx` — rendering, filtering, search, and lock coverage
- `tailwind.config.js` — shared color, typography, and hard-shadow tokens

Detailed architecture, design-system, testing, and decision documentation lives
under `docs/`.
