import type { Config } from "tailwindcss";

// PUBLIC_INTERFACE
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "3rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#12B886",
        error: "#EF4444",
        background: "#FFFFFF",
        surface: "#ffffff",
        text: "#111111",
        "text-secondary": "#555555",
        "muted-border": "#EAEAEA",
        accent: "#5B6BFF",
        "link-hover": "#3D4BFF",
      },
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        56: "56px",
        72: "72px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to bottom right, rgba(59,130,246,0.10), #f9fafb)",
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "0.75rem",
        full: "999px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
        subtle: "0 1px 2px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
