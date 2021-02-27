module.exports = {
  purge: ['./src/**/*.js', './src/**/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: {
          light: '#B23A48',
          DEFAULT: '#8C2F39',
          dark: '#461220',
        },
        green: {
          light: '#74c69d',
          DEFAULT: '#40916c',
          dark: '#1b4332',
        },
        blue: {
          light: '#0096c7',
          DEFAULT: '#0077b6',
          dark: '#023e8a',
        },
        gray: {
          light: '#dee2e6',
          DEFAULT: '#6c757d',
          dark: '#212529',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
