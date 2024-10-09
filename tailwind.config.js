/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#0E1321",
        border: "rgba(44, 46, 48, 1)"
      }
    },
  },
  plugins: [],
}

