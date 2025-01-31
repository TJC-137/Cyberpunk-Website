/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
      },
      colors: {
        'cyber-bg': {
          300: 'var(--colors-bg--300)',
          500: 'var(--colors-bg--500)',
        },
        'cyber-primary': {
          200: 'var(--colors-primary--200)',
          300: 'var(--colors-primary--300)',
          500: 'var(--colors-primary--500)',
          600: 'var(--colors-primary--600)',
          700: 'var(--colors-primary--700)',
          800: 'var(--colors-primary--800)',
          900: 'var(--colors-primary--900)',
        },
        'cyber-secondary': {
          500: 'var(--colors-secondary--500)',
          900: 'var(--colors-secondary--900)',
        },
        'cyber-tertiary': {
          500: 'var(--colors-tertiary--500)',
        },
      },
    },
  },
  plugins: [],
};