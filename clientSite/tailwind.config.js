/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../assets/Banner.jpg')",
      },
      fontFamily:{
        'Poppins':"Poppins serif",
      }
    
    },
  },
  plugins: [require('daisyui'),],
}

