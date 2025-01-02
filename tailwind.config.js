/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['montserrat','poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        futura: ["Futura Hv BT", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        
    }
    },
  },
  plugins: [],
}

