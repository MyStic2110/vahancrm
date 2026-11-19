/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#080B10',
          900: '#0D1117',
          850: '#131822',
          800: '#1B2232',
          700: '#283347',
        }
      }
    },
  },
  plugins: [],
}
