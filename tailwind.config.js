/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/assets/image.png')",  // Path from the `public` folder
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drip: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        drop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        buttonChange: {
          '0%': { backgroundColor: '#022956', color: '#FFFFFF' },
          '100%': { backgroundColor: '#F27329', color: '#000000' },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },



        
        moveline: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
        movedown: {
          '0%': {
            opacity: '1',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        endAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scroll: 'scroll 8s linear infinite',
        drip: 'drip 3s cubic-bezier(1, 0, .91, .19) infinite',
        buttonChange: 'buttonChange 1s forwards',
        fadeInLeft: 'fadeInLeft 1s ease-in forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        moveline: 'moveline 6s linear forwards',
        movedown: 'movedown 2s linear forwards',
        endAnimation: 'endAnimation 6s forwards',
      },
      animationDelay: {
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
        '6s': '6s',
        '7s': '7s',
        '8s': '8s',
        '9s': '9s',
      },
      screens: {
        'sm-max': {'max': '390px'},
        // 'sm': '390px',  // Custom width for small screens
        'md': '390px',  // Standard value for medium screens
        'lg': '1024px', // Standard value for large screens
        'xl': '1280px', // Standard value for extra large screens
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};