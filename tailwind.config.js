const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#3056D3',
      secondary: '#13C296',
      dark: "#212B36"
    },
    fontFamily: {
      sans: ['var(--font-inter)',  ...fontFamily.sans]
    }
  },
  plugins: [],
};
