/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      // TODO : CHANGE COLORS TO FIGMA DESIGN
        "gray-20" : "#F8F4EB",
        "gray-50" : "#EFE6E6",
        "gray-100" : "#DFCCCC",
        "gray-500" : "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "red": "#FF0000",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",

        "molse-primary": "#1F2859",
        "molse-secondary": "#A59596",
        "molse-tertiary": "#474B64",
        "molse-white": "#DFDDDB",
        "molse-text": "#1F2859",
        "molse-contrast": "#E0D7A6",
        "navbar-scroll": "RGBA(230,230,230)",
        "bgcontacto" : "#02033d",
        "contactus" : "#c9b3b5"
    },
    letterSpacing: {
      molsewide: '.15em',
      abogadoswide: '.5em'
    },

    // TODO: CHANGE BACKGROUND IMAGE COLORS FROM FIGMA
    backgroundImage: {
      'home': 'url(/assets/header-img.jpeg)',
    },
    filter: {
      'grayscale-100': 'grayscale(100%)',
    },
    // TODO: CHOOSE FONT FAMILY FROM FIGMA
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      timesnewroman: ["Times New Roman", "serif"],
      garamond: ['EB Garamond', "serif"],
      ptserif: ['PT Serif', 'serif'],

    },

    // TODO: CHOOSE CONTENT IMAGES FROM FIGMA
    // this is a way to put images in using before and after selectors
    content: {
      // evolvetext: "url('./assets/EvolveText.png')",
      // abstractwaves: "url('./assets/AbstractWaves.png')",
      // sparkles: "url('./assets/Sparkles.png')",
      // circles: "url('./assets/Circles.png')",
      },
    },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
    },
  },

  plugins: [],
};