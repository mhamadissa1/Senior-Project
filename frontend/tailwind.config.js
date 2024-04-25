/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'neutral': {
        100: '#F6F6F6',
        200: '#EAEAEA',
        300: '#D2D3D3',
        400: '#B1B2B2',
        500: '#8E9090',
        600: '#797A7B',
        700: '#57595A',
        800: '#363939',
        900: '#1F2223',
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}