# StreamScout

StreamScout is a Phase 1 product foundation: a responsive film-and-series discovery homepage with a small, local demo catalog. It is built with the Next.js App Router, TypeScript, and Tailwind CSS.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Serve the production build
npm run lint      # Run ESLint
npm run typecheck # Run the TypeScript checker
```

## Foundation structure

- `app/` — App Router page, shared layout, metadata, and global styles
- `components/` — responsive site header, title cards, and interactive local catalog
- `domain/` — shared TypeScript domain types
- `lib/demo-media.ts` — sample featured title and catalog entries
- `tailwind.config.ts` — palette, typography, and shadow tokens

The homepage search and format filters run entirely in the browser against `lib/demo-media.ts`. All posters are CSS artwork, so the demo does not rely on remote image assets. There is no persistence or external service connection in this foundation.

## Dependency audit

The current development dependency audit reports known vulnerabilities in the development toolchain. The production dependency audit (`npm audit --omit=dev`) reports zero vulnerabilities. Upgrading the affected development tooling is deferred until compatible updates can be evaluated.
