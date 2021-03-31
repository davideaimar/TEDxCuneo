module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      tedBlack: '#0E0E0E',
      tedWhite: '#fff',
      tedRed: '#FF2B06',
      transparent: 'transparent',
    },
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'small': ['14px', {
        letterSpacing: '-0.02em',
        lineHeight: '24px',
      }],
      'd_base': ['20px', {
        letterSpacing: '-0.02em',
        lineHeight: '24px',
      }],
      'd_3xl': ['64px', {
        letterSpacing: '-0.02em',
        lineHeight: '68px',
      }],
      'd_2xl': ['40px', {
        letterSpacing: '-0.02em',
        lineHeight: '48px',
      }],
      'm_base': ['18px', {
        letterSpacing: '-0.02em',
        lineHeight: '23px',
      }],
      'm_3xl': ['46px', {
        letterSpacing: '-0.02em',
        lineHeight: '52px',
      }],
      'm_2xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '36px',
      }],
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    extend: {
      height:{
        '600': '600px',
        '800': '800px',
      },
      maxWidth: {
        '287': "287px",
        '400': "400px",
        '615': "615px",
        '660': "660px",
      },
      minHeight:{
        '500': '500px'
      },
      zIndex:{
        '-1': '-1'
      },
      padding:{
        '1/2': '50%'
      }
    }
  },
  
  variants: {},
  plugins: [],
}
