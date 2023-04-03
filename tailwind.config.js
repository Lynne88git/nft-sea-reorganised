// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '300px auto', //for sidenav layout
      },
      gridTemplateRows: {
        header: '64px auto', //for the navbar layout
      },
      screens: {
        xs: { max: '475px' },
        // => @media (max-width: 475px) { ... }
      },
      colors: {
        // Add your custom color here
        customGray: '#282828',
        customLightGray: '#444444',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
