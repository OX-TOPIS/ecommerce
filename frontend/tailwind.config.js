/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Yellow": "#E6C744",
        "White": "#FFFFFF",
        "Black": "#000000",
        "Gray": "#C2C8DA",
        "TextGray": "#7F7F7F",
        "bggra1": "#E0C340",
        "bggra2": "#F9DF56"
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'fontlogo': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

