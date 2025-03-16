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
        colorButton: {
          default: "rgb(0 0 0)",
          light: "rgb(255 255 255)",
        },

        //color texto
        colortext: {
          default: "rgb(255 255 255)",
          light: "rgb(0 0 0)",
        },

      },
    },
  },
  plugins: [],
};
