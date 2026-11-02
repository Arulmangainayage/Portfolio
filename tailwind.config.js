/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial canvas
        background: "#fef8f3",
        surface: "#fef8f3",
        "surface-bright": "#fef8f3",
        "surface-dim": "#ded9d4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8f3ed",
        "surface-container": "#f3ede8",
        "surface-container-high": "#ede7e2",
        "surface-container-highest": "#e7e1dd",
        "surface-variant": "#e7e1dd",
        "inverse-surface": "#32302d",
        "inverse-on-surface": "#f6f0eb",
        "on-background": "#1d1b18",
        "on-surface": "#1d1b18",
        "on-surface-variant": "#444841",
        outline: "#747870",
        "outline-variant": "#c4c8be",
        "surface-tint": "#51634b",

        // Deep olive
        primary: "#41533b",
        "on-primary": "#ffffff",
        "primary-container": "#596b52",
        "on-primary-container": "#d6ebcc",
        "inverse-primary": "#b8ccae",
        "primary-fixed": "#d4e9c9",
        "primary-fixed-dim": "#b8ccae",
        "on-primary-fixed": "#101f0c",
        "on-primary-fixed-variant": "#3a4b34",

        // Dusty rose
        secondary: "#785654",
        "on-secondary": "#ffffff",
        "secondary-container": "#fdcfcd",
        "on-secondary-container": "#795655",
        "secondary-fixed": "#ffdad8",
        "secondary-fixed-dim": "#e9bcba",
        "on-secondary-fixed": "#2d1414",
        "on-secondary-fixed-variant": "#5e3e3d",

        // Sage
        tertiary: "#425341",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#596b58",
        "on-tertiary-container": "#d7ebd3",
        "tertiary-fixed": "#d4e8d0",
        "tertiary-fixed-dim": "#b8ccb5",
        "on-tertiary-fixed": "#0f1f10",
        "on-tertiary-fixed-variant": "#3a4b39",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        full: "9999px",
      },
      spacing: {
        "space-xs": "0.375rem",
        "space-sm": "0.75rem",
        "space-md": "1.25rem",
        "space-lg": "2rem",
        "space-xl": "3.5rem",
        gutter: "1.5rem",
        "gutter-desktop": "2.5rem",
        margin: "1.25rem",
        "margin-desktop": "4rem",
      },
      fontFamily: {
        "display-hero": ["Playfair Display", "Georgia", "serif"],
        "display-hero-mobile": ["Playfair Display", "Georgia", "serif"],
        "headline-lg": ["Playfair Display", "Georgia", "serif"],
        "headline-lg-mobile": ["Playfair Display", "Georgia", "serif"],
        "headline-md": ["Playfair Display", "Georgia", "serif"],
        "headline-sm": ["Playfair Display", "Georgia", "serif"],
        "body-lg": ["Manrope", "system-ui", "sans-serif"],
        "body-md": ["Manrope", "system-ui", "sans-serif"],
        "body-sm": ["Manrope", "system-ui", "sans-serif"],
        "label-lg": ["Space Grotesk", "ui-monospace", "monospace"],
        "label-md": ["Space Grotesk", "ui-monospace", "monospace"],
        "label-sm": ["Space Grotesk", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "4.5rem",
          { lineHeight: "5rem", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "display-hero-mobile": [
          "2.75rem",
          { lineHeight: "3.25rem", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        "headline-lg": [
          "3rem",
          { lineHeight: "3.5rem", letterSpacing: "-0.015em", fontWeight: "400" },
        ],
        "headline-lg-mobile": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "0em", fontWeight: "400" },
        ],
        "headline-md": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "headline-sm": [
          "1.5rem",
          { lineHeight: "2rem", letterSpacing: "0em", fontWeight: "500" },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.875rem", letterSpacing: "-0.005em", fontWeight: "400" },
        ],
        "body-md": [
          "1rem",
          { lineHeight: "1.65rem", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.4rem", letterSpacing: "0.01em", fontWeight: "400" },
        ],
        "label-lg": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.04em", fontWeight: "500" },
        ],
        "label-md": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.06em", fontWeight: "500" },
        ],
        "label-sm": [
          "0.6875rem",
          { lineHeight: "0.875rem", letterSpacing: "0.08em", fontWeight: "600" },
        ],
      },
      boxShadow: {
        ambient:
          "0 12px 32px -8px rgba(41, 39, 36, 0.06), 0 2px 6px -1px rgba(41, 39, 36, 0.03)",
        "ambient-lg":
          "0 24px 60px -20px rgba(41, 39, 36, 0.16), 0 4px 12px -2px rgba(41, 39, 36, 0.05)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
