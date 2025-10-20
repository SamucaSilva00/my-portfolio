/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "425px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        baimj: ["Bai Jamjuree", "sans-serif"],
        baumans: ["Baumans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        popp: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2A89C6",
        secondary: "#023535",
        gray: "#D9D9D9",
        darkGray: "#0F0F12",
        lblue: "#A1FFD0",
      },
    },
  },
  plugins: [],
};
