/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Bali': "url('../Platzi-travel-tailwindcss/assets/Bali.jpg')",
        'Chicago': "url('../Platzi-travel-tailwindcss/assets/Chicago.jpg')",
        'Europe': "url('../Platzi-travel-tailwindcss/assets/Europe.jpg')",
        'Iceland': "url('../Platzi-travel-tailwindcss/assets/Iceland.jpg')",
        'LA': "url('../Platzi-travel-tailwindcss/assets/LA.jpg')",
        'Miami': "url('../Platzi-travel-tailwindcss/assets/Miami.jpg')",
        'New_york': "url('../Platzi-travel-tailwindcss/assets/New_york.jpg')",
        'Norway': "url('../Platzi-travel-tailwindcss/assets/Norway.jpg')",
        'sanFrancisco': "url('../Platzi-travel-tailwindcss/assets/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../Platzi-travel-tailwindcss/assets/sanFranciscoDesktop.jpg')",
        'Seattle': "url('../Platzi-travel-tailwindcss/assets/Seattle.jpg')",
        'Switzerland': "url('../Platzi-travel-tailwindcss/assets/Switzerland.jpg')",
        'Sydney': "url('../Platzi-travel-tailwindcss/assets/Sydney.jpg')",
        'Yosemite': "url('../Platzi-travel-tailwindcss/assets/Yosemite.jpg')",
        },
        backgroundColor: theme =>({
          ...theme('colors'),
          'primary': '#CC2D4A',
          'secondary': '#8FA206',
          'tertiary': '#61AEC9'
        }),
        textColor:{
          'primary': '#CC2D4A',
          'secondary': '#8FA206',
          'tertiary': '#61AEC9'
        },
        fontFamily: {
          Montserrat: ["Montserrat", "sans-serif"],
        },
    },
  },
  plugins: [],
}

