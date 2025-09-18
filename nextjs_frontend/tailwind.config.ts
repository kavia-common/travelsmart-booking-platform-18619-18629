import type { Config } from "tailwindcss";

// PUBLIC_INTERFACE
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to bottom right, rgba(59,130,246,0.1), #f9fafb)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
