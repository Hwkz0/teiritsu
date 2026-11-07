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

- `src/app/App.tsx` — composed dashboard and focused visual components
- `src/styles.css` — Tailwind entry point and global accessibility-safe defaults
- `src/app/App.test.tsx` — interaction coverage for telemetry filtering and status
- `tailwind.config.js` — shared color, typography, and brutal-shadow tokens
