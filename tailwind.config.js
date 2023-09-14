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
        sanFrancisco: "url('./img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./img/sanFranciscoDesktop.jpg')",
        yosemite: "url('./img/Yosemite.jpg')",
        LA: "url('./img/LA.jpg')",
        seattle: "url('./img/Seattle.jpg')",
        new_york: "url('./img/New_york.jpg')",
        norway: "url('./img/Norway.jpg')",
        sydney: "url('./img/Sydney.jpg')",
        miami: "url('./img/Miami.jpg')",
        switzerland: "url('./img/Switzerland.jpg')",
        bali: "url('./img/Bali.jpg')",
        norway: "url('./img/Norway.jpg')",
        chicago: "url('./img/Chicago.jpg')",
        europe: "url('./img/Europe.jpg')",
        iceland: "url('./img/Iceland.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
