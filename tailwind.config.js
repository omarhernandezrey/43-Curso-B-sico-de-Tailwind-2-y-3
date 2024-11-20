/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      boxShadow: {
        card: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
        input: "0px 2px 7px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "brick-red": "#CC2D4A",
        "light-grey": "#CCCCCC",
        "picton-blue": "#61AEC9",
        citrus: "#8FA206",
        snow: "#FCFBFB",
        whisper: "#e5e5e5",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
