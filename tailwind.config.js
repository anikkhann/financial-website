/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/*.{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif;"
      },
      // colors:{
      //   'primary': "#EE5921",
      //   'secondary': "#0D2D84",
      //   'accent': "#E5E5E5",
      //   'white': "#FFFFFF",
      //   'neutral': "#262626",
      //   'sky': "#25C0D9",
      //   'black': "#262626",
      //   "red-200": "#ffe8e2",
      //   "base-100": "#ffffff",
      //   "coolGray": "8B8B8D",
      //   "gray-400": "#262626",
      //   "gray-300": "#A4A4A4",
      //   "gray-200": "#F4F5F9",
      //   "gray-100": "#F8F8F8",
      //   'info': "#2563eb",
      //   'success': "#16a34a",
      //   'warning': "#d97706",
      //   'error': "#dc2626",
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#EE5921",
          secondary: "#0D2D84",
          accent: "#E5E5E5",
          white: "#FFFFFF",
          neutral: "#262626",
          sky: "#25C0D9",
          black: "#262626",
          "red-200": "#ffe8e2",
          "base-100": "#ffffff",
          "coolGray": "8B8B8D",
          "gray-400": "#262626",
          "gray-300": "#A4A4A4",
          "gray-200": "#F4F5F9",
          "gray-100": "#F8F8F8",
          info: "#2563eb",
          success: "#16a34a",
          warning: "#d97706",
          error: "#dc2626",
        },
      },
      // "dark",
      "cupcake",
    ],
    variants: {
      fill: ["hover", "focus", "group-hover"],
      fontFamily:{
        // 'poppins': "'Poppins', sans-serif"
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif;"
       },
    
    },

    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  
  },
}

