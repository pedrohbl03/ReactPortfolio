module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#ee931c",
        "light": "#ffffff",
        "gray": "#1d1d1d"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
