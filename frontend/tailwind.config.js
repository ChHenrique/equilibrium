/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'NetsHub': '1024px',
      },
      boxShadow: {
        'custom-light': '4px 3px 8px rgba(0, 0, 0, 0.315)',
      },
      outline: {
        'custom': '3px solid rgba(255, 255, 255, 0.894)',
      },
      borderRadius: {
        'custom': '15px',
        'bola1': '94% 6% 0% 100% / 0% 4% 96% 100%',
        'bola2': '0% 100% 100% 8% / 0% 100% 0% 8%',
        'meia_bola1':'50px 0px 0px 50px',
        'meia_bola2': ' 0px 50px 50px 0px',
        
      },
      zIndex: {
        'custom': '10',
      },
      colors:{
        primary:  {
          100: '#718FCD',
          200: '#8CB3FF',
          300: '#BFDBFE', // fundo
          500: '#3b82f6', // primary
          600: '#708FCC', // hover
          700: '#46597F', // hoverb
          800: '#355081',
          900: '#FD8686',
          1000: '#88E5AD',
        },
        secondary:{
          100: '#DCE5EE',
          200: '#EEF2FB'//Cards Participantes
        }
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-Regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
       }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}