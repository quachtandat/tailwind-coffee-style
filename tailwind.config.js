/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontFamily:{
        Karla:['Karla','sans-serif']
      },
      colors: {
        'light-coffee':'#C98F94'
      },
      keyframes: {
        SileDown: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-100%)' },
        }
      },
      animation: {
        SileDown: 'SileDown .4s ease-in-out ',
      }
    },
  },
  plugins: [],
}

