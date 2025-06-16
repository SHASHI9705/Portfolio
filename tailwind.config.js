/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-random': {
          '0%':   { transform: 'translate(0, 0)' },
          '20%':  { transform: 'translate(8px, -8px)' },
          '40%':  { transform: 'translate(-10px, 10px)' },
          '60%':  { transform: 'translate(12px, 6px)' },
          '80%':  { transform: 'translate(-8px, -12px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-random': 'float-random 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

