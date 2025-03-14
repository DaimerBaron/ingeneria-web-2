/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Fondos
        primary: {
          default: "rgb(7 38 20)",
          light: " rgb(20 83 45)",
          dark: "rgb(0 0 0)",
        },

      },
    },
  },
  plugins: [],
};
