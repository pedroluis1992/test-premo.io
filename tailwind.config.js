/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        smx: ['14px', '35px'],
        base: ['25px', '30px'],
        lg: ['36px', '38px'],
        xl: ['57.14px', '60px'],
      },
    },
    textColor: {
      primary: "#002F51",
      secondary: "#000000",
      terciary: "white",
      textContrast: "#9FC733",
      white: "white",
      woodsmoke: '#75778C',
      blue: '#005B94',
      blueDark: '#002F51'
    },
    colors: {
      'primary': "#002F51",
      'white': 'white',
      'terciary': '#9FC733',
      'blue': '#005B94',
      'green': '#13ce66',
      'america-silver': '#D1D1D1',
      'woodsmoke': '#75778C',
      'gray': '#D1D1D1',
      'gray-light': '#d3dce6',
    },
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1439px'},
      'xl': {'min': '1440px'},
    }
  },
  plugins: [],
}
