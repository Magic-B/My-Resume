/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./*.{html,}"
  ],
  theme: {
    extend: {
      container: {
        padding: {
          'DEFAULT': '1rem',
          'xl': '16rem'
        }
      },
      width: {
        '300px': '300px',
      },
      height: {
        '180px': '180px'
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'md': '18px',
        'lg': '22px',
        'xl': '32px'
      },
      colors: {
        'primary': '#86B91A',
        'description': '#737373'
      },
      dropShadow: {
        '4xl': '0 0 30px rgba(134, 185, 26, 0.5)',
      },
      keyframes: {
        notify: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: 0
          }
        },
        show: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        hide: {
          '0%': {
            transform: 'translateY(0%)',
            opacity: 1,
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
        }
      },
      animation: {
        'notify': 'notify 5s ease-out',
        'show': 'show 0.5s ease-out',
        'hide': 'hide 0.5s ease-out'
      }
    },
  },
  plugins: [],
}

