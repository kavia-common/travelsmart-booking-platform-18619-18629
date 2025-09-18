Fix notes: Next.js "Invariant: missing bootstrap script" and 404s for layout.css/main-app.js/webpack.js

Root cause:
- The Next.js runtime could not inject its bootstrap scripts due to overly customized or incompatible configuration and/or non-minimal root layout.
- Additionally, a previous static export left an /out directory with HTML that references hashed bundles under /_next/static/... which can 404 if you serve those files directly or preview the HTML outside a running Next.js server.

Fixes applied:
- next.config.mjs: reverted to a minimal, valid Next.js 14+ configuration (removed forcing 'output: export' and unnecessary experimental flags).
- src/app/layout.tsx: simplified to a minimal valid HTML structure with globals.css imported once; added viewport meta and icons to ensure correct head injection and public asset resolution.
- Tailwind pipeline: verified globals.css has @tailwind directives and imports src/styles/theme.css; ensured postcss.config.mjs includes @tailwindcss/postcss + autoprefixer.
- tailwind.config.ts: broadened content globs to include src/app, src/components, src/pages, and src/lib.
- Home page: replaced with a simple styled hero to confirm CSS and asset loading.
- Created public/assets directory with README. Reference images using /assets paths.

Important:
- Do NOT serve the app from the prebuilt /out folder for development or preview, as it may reference stale hashed filenames (e.g., layout.css, main-app.js, webpack.js) and cause 404s.
- Instead, run: `npm run dev` (Next server) or `npm run build && npm run start` (production server). The server will serve bundles under /_next and assets under /.

If you re-enable static export (output: 'export'):
- Ensure all routes are static or properly prerendered.
- Verify App Router compatibility with static export and that your hosting environment serves the exported /_next assets at the site root.
