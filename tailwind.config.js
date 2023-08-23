/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      "red-wine": "#893446",
      "light-yellow": "#FEEF66",
      white: "#ffffff",
      "dark-gray": "#292929",
      "green-apple": "#7FFF00",
      red: "#d90429",
      black: "#000000",
      "dark-green": "#2e6532",
    },
  },
  plugins: [],
};
