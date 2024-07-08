/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#30292F',
        shadow: '#3F4045',
        outline: '#413F54',
        accent: '#355691',
        highlight: '#5F5AA2',
      },
      fontFamily: {
        base: ['MajorMonoDisplay'],
      },
      fontSize: {
        heading: '3rem',
        subHeading: '2.25rem',
        large: '1.5rem',
        med: '1rem',
        small: '.75rem',
      },
      height: {
        'full-screen': 'calc(100vh - 169px)',
      },
    },
  },
  plugins: [],
};
