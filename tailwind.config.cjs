/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend:{
      backgroundImage:{ 
        'hero' : "url('/home/gmbleasdale/Desktop/Programming/Test/Pirapora_eComm/pirapora-ecomm/src/assets/hero_photo.jpeg')",
        'hero-opacity-50': 'rgba(0, 0, 0, 0.5)'
      }
    }
  },

}
