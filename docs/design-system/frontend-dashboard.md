# Frontend Dashboard Design System

The dashboard reconstructs the supplied AEGIS SecOps visual language:

- **Paper:** `#f5f0e8` page background and warm neutral panels.
- **Ink:** `#1a1a1a` primary text, borders, and heavy blocks.
- **Yellow:** `#ffcc00` active states and warning emphasis.
- **Red:** `#e63b2e` threat and destructive emphasis.
- **Blue:** `#0055ff` verified/online emphasis.

Space Grotesk is used for headlines, labels, and controls. Inter is used for
body copy, with monospace text for telemetry and evidence values. Thick borders,
hard shadows, dense grids, and rectangular controls are intentional parts of
the reference design.

Tailwind tokens live in `frontend/tailwind.config.js`. Repeated behavior is
implemented through focused components instead of global CSS abstractions.
The table preserves horizontal overflow on small screens; other grids collapse
to one column at mobile widths. The sidebar becomes a keyboard-addressable
drawer on small screens.
