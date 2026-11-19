# Cursor Lab

A single-page playground of live custom mouse cursors. Pick one, then hover, type and click to see how it reacts.

Stack: Vite, React, TypeScript, Tailwind, framer-motion.

```bash
npm install
npm run dev
```

## Add a cursor

1. Create `src/cursors/MyCursor.tsx` that takes `CursorProps`.
2. Register it in `src/cursors/registry.ts` and list the states it supports.

States: `idle`, `hover`, `text`, `click`. A cursor only has to support some of them; anything it doesn't list falls back to `idle`.
