/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small devices (320px-479px will use base styles)
      },
      colors: {
        cinema: {
          dark: '#0a0a0a',
          darker: '#050505',
        }
      }
    },
  },
  plugins: [],
}
