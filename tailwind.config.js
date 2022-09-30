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
      borderColor: {
        'bold-grey': '#D8D8D8'
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        header: 'Montserrat sans-serif',
        body: 'Roboto Slab serif',
        inter: 'Inter'
      },
      fontSize: {
        md: '1rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
