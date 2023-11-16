/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // sm: "575px",
      // md: "768px",
      // lg: "1025px",
      // xl: "1104px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1252px',
    },
    colors: {
      'navbar-bg': "{linear gradient}",
      'navbar-text': "#798097",
      'navbar-text-hover': "#23242E",
      
      'footer-bg': "{linear gradient}",
      'footer-title': "#23242E",
      'footer-text': "#6B7280",
      'footer-text-hover': "#6B7280",
      
      'text-primary': "#23242E",
      'text-secondary': "#798097",
      'text-accent': "#346BBE",
      'text-accent-hover': "#183d75",
      'text-extra-0': "#79809799",
      
      'bg-color-0': '#E9ECEE',
      'bg-color-1': '#FFF',

      'card-bg': '#e9ecee99',
      
      'accent': '#42ffe6',
      'warning': '#C84529',
      'success': '#1BD1B8',
      'gray': '#798097',
      'gray-light': '#79809733',
      'gray-light-solid': '#D2D7DC',
      'black': '#000000',
      'white': '#fff',

      'placeholder' : '#7a7a7a33',
      'gray-lighter': '#79809700',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "1rem"
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '4xl': '3rem',
      '8xl': '7.5rem',
      '16xl': '11.25rem',
    },
    fontFamily: {
      'monument': ["PP Monument Extended"],
      'neue': ["Neue Plak Normal"],
      'neue-semibold': ["Neue Plak Semibold"],
    },
    extend: {
      backgroundImage: {
        'navbar-gradient': 'radial-gradient(100% 100% at 100% 50%, rgba(255, 255, 255, 100) 0%, rgba(233, 236, 238, 0.00) 100%)',
        'gradient-radial': 'radial-gradient(56.36% 125.57% at 68.87% 5.97%, #E3E6E9 0%, #F5F5F5 65.63%, #FFF 100%)',
        'gradient-radial-inverted': 'radial-gradient(56.36% 125.57% at 68.87% 5.97%, #fff 0%, #F5F5F5 65.63%, #E3E6E9 100%)',
        'gradient-cta':'radial-gradient(100% 250% at 10% 50%, #FAFDFF 15%, #EEFBFD 30%, #A7F8DF 70%, #89C6D8 95%)',
        'gradient-20': 'radial-gradient(75% 130% at 40% 15%, #FFF 25%, #F5F5F5 50%, #E3E6E9 65%, #D6DDE3 100%)',
        'gradient-contact':'radial-gradient(at 88% 92%, hsla(300,0%,96%,1) 0px, transparent 50%), radial-gradient(at 2% 60%, hsla(205,100%,98%,1) 0px, transparent 100%), radial-gradient(at 100% 62%, hsla(205,100%,98%,1) 0px, transparent 50%),radial-gradient(at 64% 40%, hsla(161,100%,65%,1) 0px, transparent 50%), radial-gradient(at 200% 31%, hsla(175,96%,81%,1) 0px, transparent 50%), radial-gradient(at 120% 20%, hsla(203,78%,62%,1) 0px, transparent 50%), radial-gradient(at 26% 250%, hsla(214,26%,79%,1) 0px, transparent 50%)',
        'request-image': 'url(/assets/images/request.png)',
        'delivery-image': 'url(/assets/images/delivery.png)',
        'approval-image': 'url(/assets/images/approval.png)',
        'request-image-m': 'url(/assets/images/request-m.png)',
        'delivery-image-m': 'url(/assets/images/delivery-m.png)',
        'approval-image-m': 'url(/assets/images/approval-m.png)',
        'about-image': 'url(/assets/images/about-kemmi.png)',
        'about-image-2': 'url(/assets/images/about-kemmi-2.png)',
        'about-image-2-m': 'url(/assets/images/about-kemmi-2-m.png)',
        'about-image-3': 'url(/assets/images/about-kemmi-3.png)',
        'about-kemmi-logo': 'url(/assets/images/about-kemmi-logo.png)',
        'about-k': 'url(/assets/images/about-k-logo.png)',
        'medicine-image': 'url(/assets/images/medicine-box-01.png)',
      },
    },
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-13': 'span 13 / span 13',
      'span-14': 'span 14 / span 14',
      'span-15': 'span 15 / span 15',
      'span-16': 'span 16 / span 16',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      17: '17',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      17: '17',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-13': 'span 13 / span 13',
      'span-14': 'span 14 / span 14',
      'span-15': 'span 15 / span 15',
      'span-16': 'span 16 / span 16',
      'span-full': '1 / -1',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      17: '17',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      17: '17',
    },
    gridTemplateColumns: {
      none: 'none',
      subgrid: 'subgrid',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      13: 'repeat(13, minmax(0, 1fr))',
      14: 'repeat(14, minmax(0, 1fr))',
      15: 'repeat(15, minmax(0, 1fr))',
      16: 'repeat(16, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      subgrid: 'subgrid',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      13: 'repeat(13, minmax(0, 1fr))',
      14: 'repeat(14, minmax(0, 1fr))',
      15: 'repeat(15, minmax(0, 1fr))',
      16: 'repeat(16, minmax(0, 1fr))',
    },
    flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/16': '6.25%',
      '2/16': '12.5%',
      '3/16': '18.75%',
      '4/16': '25%',
      '5/16': '31.25%',
      '6/16': '37.5%',
      '7/16': '43.75%',
      '8/16': '50%',
      '9/16': '56.25%',
      '10/16': '62.5%',
      '11/16': '68.75%',
      '12/16': '75%',
      '13/16': '81.25%',
      '14/16': '87.5%',
      '15/16': '93.75%',
      full: '100%',
    }),
    size: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',

      '1/16': '6.25%',
      '2/16': '12.5%',
      '3/16': '18.75%',
      '4/16': '25%',
      '5/16': '31.25%',
      '6/16': '37.5%',
      '7/16': '43.75%',
      '8/16': '50%',
      '9/16': '56.25%',
      '10/16': '62.5%',
      '11/16': '68.75%',
      '12/16': '75%',
      '13/16': '81.25%',
      '14/16': '87.5%',
      '15/16': '93.75%',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',

      '1/16': '6.25%',
      '2/16': '12.5%',
      '3/16': '18.75%',
      '4/16': '25%',
      '5/16': '31.25%',
      '6/16': '37.5%',
      '7/16': '43.75%',
      '8/16': '50%',
      '9/16': '56.25%',
      '10/16': '62.5%',
      '11/16': '68.75%',
      '12/16': '75%',
      '13/16': '81.25%',
      '14/16': '87.5%',
      '15/16': '93.75%',
      full: '100%',
      screen: '100vw',
      svw: '100svw',
      lvw: '100lvw',
      dvw: '100dvw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
  },
  plugins: [],
}
