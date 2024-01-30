/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      colors: {
        "color-dark-gray": "#6a6262",
        "color-light-gray": "#777777",
        "color-light-blue": "#7395AE",
        "color-dark-blue": "#557A95",
        "color-light-brown": "#B1A296",
      },
    },
  },
  plugins: [],
};
