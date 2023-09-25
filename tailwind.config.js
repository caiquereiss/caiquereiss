
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        gray: {
          // 100: '#F8F8F2',
          100: '#BCC2CD',
          350: '#383838',
          650: '#616161',

        },
        violet: {
          0: '#F3F0FF',
          100: '#E5DBFF',
          200: '#D0BFFF',
          300: '#B197FC',
          400: '#9775FA',
          500: '#845EF7',
          600: '#7950F2',
          700: '#7048E8',
          800: '#6741D9',
          900: '#282A35',
          950: '#383A57'
        },

        indigo: {
          250: '#5671A6',
          450: '#4565A5',
        },


      },
    },
  },
  plugins: [],
}
