/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "376px",
      // => @media (min-width: 576px) { ... }

      md: "760px",
      // => @media (min-width: 960px) { ... }

      lg: "1000px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        foreground: "var(--foreground)",
        cary: "#F2B705",
        background: "#FFFEF5",
        lightblue: "#BBDDF2",
        darkblue: "#022859",
        pink: "#F20FCC",
        peach: "#F25E86",
        green: "#00FF1A",
        customPink: {
          DEFAULT: "oklch(67% 0.2901 354.71)", // OKLCH-farven
          fallback: "#ff009f", // Fallback-farven
        },
        customRed: {
          DEFAULT: "oklch(64.18% 0.2851 16.94)",
          fallback: "#ff004d",
        },
        costumGreen: {
          DEFAULT: "oklch(77.42% 0.2693 147.49)",
          fallback: "#00de3d",
        },
        secondary: {
          DEFAULT: "oklch(78.85% 0.2984 147.7)",
          fallback: "#00e442",
        },
        costumOrange: {
          DEFAULT: "oklch(70.46% 0.2426 38.68)",
          fallback: "#ff5f19",
        },
      },
      fontSize: {
        heroText: "200px",
      },
      lineHeight: {
        heroLeading: "8.9rem",
      },
    },
  },
  plugins: [],
};
