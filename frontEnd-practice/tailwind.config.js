/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bs-bg': '#191a1b',
        'bl-bg': '#4C5FD5',
        'bsea-bg': '#DADBF1',
        'text-color': '#191a1b',
      },
      height: {
        'h-88': '88px',
      },
      maxWidth: {
        'w-720': '720px',
      },
    },
  },
  plugins: [],
}
