module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        Oswald: ["Oswald"],
        Lato: ["Lato"],
      },
      colors: {
        logogreen: "#66ffcc",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  variants: {
    text: ["active"],
  },
  plugins: [require("tailwind-scrollbar-hide", "@tailwindcss/aspect-ratio")],
};
