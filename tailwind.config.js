/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
