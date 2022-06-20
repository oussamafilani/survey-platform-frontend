const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@geerdsolutions/geerd-ui/src/components/**/*.tsx',
  ],

  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        primary: colors.green,
        secondary: colors.teal,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
