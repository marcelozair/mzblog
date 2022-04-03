const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {
        DEFAULT: '#E16E49',
        100: '#E78C6F',
      },
      background: {
        100: '#F4E6D8'
      },
      fontcolor: {
        DEFAULT: '#2F2C2C',
        200: '#6D6762',
        100: '#5F5A53',
        150: '#837878',
        50: '#D1C9C4'
      }
    },
  },
  plugins: [],
}