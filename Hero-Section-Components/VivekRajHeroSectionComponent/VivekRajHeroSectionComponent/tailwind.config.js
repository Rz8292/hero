/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        dark: '#0D1B2A',
        second_dark: '#1B263B',
        third_dark: '#415A77',
        fourth_dark: '#778DA9',
        fifth_dark: "#E0E1DD",
      },
    },
  },
  plugins: [],
}

