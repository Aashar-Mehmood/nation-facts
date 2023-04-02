/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Nanito: "'Nunito Sans', sans-serif",
      },
      backgroundColor: {
        lightBodyBg: "hsl(0, 0%, 98%)",
        lightElementBg: "hsl(0, 0%, 100%)",
        lightInput: "hsl(0, 0%, 52%)",
        darkBodyBg: "hsl(207, 26%, 17%)",
        darkElementBg: "hsl(209, 23%, 22%)",
        darkInput: "hsl(0, 0%, 52%)",
      },
      textColor: {
        lightText: "hsl(200, 15%, 8%)",
        darkText: "hsl(0, 0%, 100%)",
      },
      width: {
        28: "28%",
        23:"23%"
      },
    },
  },
  plugins: [],
};
