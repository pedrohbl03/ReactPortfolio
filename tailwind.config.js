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
        }
      },

      animation: {
        progress: 'progress 5s',
      },

    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}