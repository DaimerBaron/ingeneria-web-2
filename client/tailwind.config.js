/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'lexend': ['Lexend', 'sans-serif'],
      },
      height: {
        "custom": "20rem",
      },
      colors: {
        //bFondos
        primary: {
          default: "#090f27",
          light: "#0765cb",
          dark: "rgb(0 0 0)",
        },
        secundary: {
          default: "#427be6",
          light: "#427be6",
          
        },
        colorButton: {
          default: "rgb(0 0 0)",
          light: "rgb(255 255 255)",
        },

        //color texto
        colortext: {
          default: "rgb(255 255 255)",
          light: "#969696",
        },

      },
    },
  },
  plugins: [],
};
