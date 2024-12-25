/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['"Segoe UI"', 'sans-serif'], 
        phudu: ["Phudu", "cursive"],
        manrope: ["Manrope", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
}

