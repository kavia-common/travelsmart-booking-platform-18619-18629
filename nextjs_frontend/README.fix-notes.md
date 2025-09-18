Fix notes: Next.js "Invariant: missing bootstrap script"

Root cause:
- The Next.js runtime could not inject its bootstrap scripts due to overly customized or incompatible configuration and/or non-minimal root layout.

Fixes applied:
- next.config.mjs: reverted to a minimal, valid Next.js 14+ configuration (removed forcing 'output: export' and unnecessary experimental flags).
- src/app/layout.tsx: simplified to a minimal valid HTML structure with globals.css imported once.
- Tailwind pipeline: verified globals.css has @tailwind directives and imports src/styles/theme.css; ensured postcss.config.mjs includes tailwindcss + autoprefixer.
- tailwind.config.ts: broadened content globs to include src/app, src/components, src/pages, and src/lib.
- Home page: replaced with a simple styled hero to confirm CSS and asset loading.
- Created public/assets directory with README. Reference images using /assets paths.

If you re-enable static export (output: 'export'):
- Ensure all routes are static or properly prerendered.
- Verify App Router compatibility with static export; otherwise keep server output to avoid bootstrap injection issues.
