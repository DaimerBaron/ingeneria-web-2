/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "rgb(7 38 20)",
          light: " rgb(29 99 29)",
        },
      },
    },
  },
  plugins: [],
};
