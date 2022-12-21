/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    //<=== This Line here
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtson',
      },
      colors: {
        'background-dark': '#121212',
        menubar: '#181818',
        card: '#212121',
        'secondary-text': '#B3B3B3',
        'primary-text': '#FFFFFF',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        accent: '#FE214B',
      },
    },
  },
  plugins: [],
};