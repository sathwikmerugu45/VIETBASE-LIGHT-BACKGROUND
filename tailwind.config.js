/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f7fafc',
        'brand-green': '#004225', // Dark green from your logo
        'brand-yellow': '#FFCF40', // A vibrant, modern yellow
        'brand-dark': '#1a202c', // A softer black for text
        'brand-bg': '#FFFBF0', // A warm, off-white for the background gradient
      },
    },
  },
  plugins: [],
};