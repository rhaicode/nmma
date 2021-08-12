import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#000000',
    darkGray: '#989DA9',
    lightGray: '#F7F8FB',
    mediumGray: '#BDC6D9',
    violet: '#3300CC',
    gray6: '#f2f2f2',
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  fontSizes: {
    'xs-11': '0.6875rem', // 11px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },
  styles: {
    // GLOBAL STYLES HERE
    global: {},
  },
})

export default theme
