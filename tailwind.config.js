module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        "primary": "#ee931c",
        "light": "#ffffff",
        "secondary": "#1d1d1d",
        "logo": "#141414",
        "navbar": "#181818",
        "black-40": "rgba(0, 0, 0, 0.4)"
      },

      keyframes: {
        progress: {
          '0%': { width: '0' }
        },
        jump: {
          '0%': { transform: 'translate(0%, 0%) scale(1.25, 0.75)' },
          '50%': { transform: 'translate(-5%, -30%) scale(1, 1)' },
          '55%': { transform: 'translate(-5%, -30%) rotate(15deg)' },
          '60%': { transform: 'translate(-5%, -30%) rotate(-15deg)' },
          '65%': { transform: 'translate(-5%, -30%) rotate(15deg)' },
          '70%': { transform: 'translate(-5%, -30%) rotate(-15deg) '},
          '100%': { transform: 'translate(0%, 0%) scale(1.25, 0.75)' }
        }
      },

      animation: {
        progress: 'progress 3s',
        jump: 'jump 1.2s infinite'
      },

    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}