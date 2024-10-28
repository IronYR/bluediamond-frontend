/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#293756",
        border: "rgba(44, 46, 48, 1)",
        earthybrown: "#BC6629",
        mainBlue: "#293756",
        earthyfawn: "#F3D1AD",
        primaryBlue: "#26A9E0",
        secondaryBlue: "#A3DBEF",
      }
    },
  },
  plugins: [],
}

