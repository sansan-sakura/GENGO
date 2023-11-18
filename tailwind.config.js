/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: {
        light: "#F5B9B0",
        default: "#E55039",
        dark: "#B7402E",
      },
      blue: {
        light: "#92A5D7",
        default: "#4A69BD",
        dark: "#25355F",
      },
      yellow: {
        light: "#FAD589",
        default: "#F6B93B",
        dark: "#7B5D1E",
      },
      green: {
        light: "#AEECBC",
        default: "#78E08F",
        dark: "#3C7048",
      },
      sky: {
        light: "#A0C8D7",
        default: "#60A3BC",
        dark: "#30525E",
      },
    },
    fontFamily: {
      display: ["Merigm", "Courier New", "monospace"],
      text: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
