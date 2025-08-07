/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f7fafc',
        'brand-green': '#094A30', // Dark green from your logo
        'brand-yellow': '#DBA314', // A vibrant, modern yellow
        'brand-dark': '#1a202c', // A softer black for text
        'brand-bg': '#FFFBF0', // A warm, off-white for the background gradient
      },
    },
  },
  plugins: [],
};