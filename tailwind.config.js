const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      pc: '768px',
    },
    extend: {
      colors: {
        primary: colors.zinc[100],
        secondary: colors.zinc[800],
        tertiary: colors.zinc[500],
        background: '#191919',
      },
    },
  },
  plugins: [],
};
