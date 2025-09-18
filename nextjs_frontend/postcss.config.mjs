/**
 * PostCSS configuration for Next.js + Tailwind.
 * Uses tailwindcss and autoprefixer by default.
 * Includes postcss-preset-env for CSS features polyfills.
 * If the environment requires @tailwindcss/postcss plugin (e.g., older Next.js setups),
 * it can be optionally included by setting USE_TAILWINDCSS_POSTCSS=1 in env.
 */
const useTailwindcssPostcss = process.env.USE_TAILWINDCSS_POSTCSS === "1";

const config = {
  plugins: [
    // Prefer standard plugin names
    "tailwindcss",
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
    // Optionally include @tailwindcss/postcss to satisfy environments checking for it.
    ...(useTailwindcssPostcss ? ["@tailwindcss/postcss"] : []),
  ],
};

export default config;
