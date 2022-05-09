const defaultTheme = require('tailwindcss/defaultTheme')
import theme from './theme'
module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': theme.primaryColor,
        'secondary-color': theme.secondaryColor,
        'active-color': theme.textSecondaryColor
      },
      colors: {
        'primary-color': theme.primaryColor,
        'secondary-color': theme.textSecondaryColor
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
