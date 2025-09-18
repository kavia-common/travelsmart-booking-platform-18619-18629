/**
 * PostCSS configuration for Next.js 14+ with Tailwind CSS v4.
 * Uses the official '@tailwindcss/postcss' plugin as recommended.
 * Autoprefixer is included for vendor prefixing, and postcss-preset-env
 * is kept to enable modern CSS features with sensible polyfills.
 */
const config = {
  plugins: [
    "@tailwindcss/postcss",
    "autoprefixer",
    [
      "postcss-preset-env",
      {
        stage: 3,
        features: {
          "nesting-rules": true,
        },
      },
    ],
  ],
};

export default config;
