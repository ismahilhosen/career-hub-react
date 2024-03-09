/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem',
      }
    },
    colors: {
      'drak-1': '#1E1E1E',
      'drak-2': '#474747',
      'drak-3': '#757575',
      'drak-4': '#A3A3A3',
      'drak-5': '#D1D1D1',
      'drak-6': '#E8E8E8',
      'drak-7': '#F4F4F4',
      'cyan': '#7E90FE',
      'blue': '#9873FF',
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],
}

