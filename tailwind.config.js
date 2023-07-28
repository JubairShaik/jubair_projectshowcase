/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont : ["Montserrat", "sans-serif"],
        comf : ["Comfortaa", "cursive"],
      },
      
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },


      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "primary-red": {
          DEFAULT:"#FA4226",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
