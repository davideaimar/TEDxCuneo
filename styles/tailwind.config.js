module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      tedBlack: '#000',
      tedWhite: '#fff',
      tedRed: '#FF2B06',
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'base': ['20px', {
        letterSpacing: '-0.02em',
        lineHeight: '24px',
      }],
      '3xl': ['64px', {
        letterSpacing: '-0.02em',
        lineHeight: '68px',
      }],
      '2xl': ['40px', {
        letterSpacing: '-0.02em',
        lineHeight: '48px',
      }],
      // 'xl': ['36px', {
      //   letterSpacing: '-0.02em',
      //   lineHeight: '40px',
      // }],
    },
    fontWeight: {
      normal: 400,
      bold: 700
    }
  },
  variants: {},
  plugins: [],
}
