/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4150B5",
        secondary: "#E62A16",
      },
    },
  },
  plugins: [require("daisyui")],
};
