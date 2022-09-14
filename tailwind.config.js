/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary:{
        100: '#ffe9ad',
        200: '#f8d860',
        300: '#ffd35c',
        400: '#ffc933',
        500: '#ffbe0a',
      },
      secondary: {
        100: "#fff4fc",
      },
    },
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
