/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ["Poppins", "sans-serif"],
        cursive:["Bonheur Royale", "serif"],
      },
      colors: {
      primary : "#854d3d",
      secondary: "#4ale1b",
      brandDark : "#270c03",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}

