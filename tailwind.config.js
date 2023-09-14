/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/index.html",
    "./public/registrationForm.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
      secondary: "#1E0045",
      terciary: "#61AEC9",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    }),
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/Norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
