/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      colors: {
        title: "#334e6f",
        description: "#707f8c",
        address: "#8492af",
        btngreen: "#26ae61",
      },
    },
  },
  plugins: [],
};
