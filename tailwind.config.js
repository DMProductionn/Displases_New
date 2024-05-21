/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      '3sm': '380px',

      '2sm': '480px',

      'sm': '640px',

      'md': '768px',

      'lg': '960px',

      '2lg': '1024px',

      'xl': '1200px',

      '2xl': '1536px',
    },
    colors: {
      'gray-main': '#1D1D1D',
      'gray-text': '#929192',
      'gray-light': '#333232',
      'red': '#F64343',
    },
    fontFamily: {
      'Inter': ['Inter'],
      'Druk-cyr': ['Druk Cyr'],
      'Floripa': ['Floripa'],
      'Gilroy': ['Gilroy'],
     },
    },
  },
  plugins: [],
}

