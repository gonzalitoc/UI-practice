/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bs-bg": "#191a1b",
        "bl-bg": "#4C5FD5",
        "bsea-bg": "#DADBF1",
        "text-color": "#191a1b",
        "header-color-text": "#ffffff80",
      },
      height: {
        "h-88": "88px",
      },
      maxWidth: {
        "w-720": "720px",
        "w-1600": "1600px",
      },
      screens: {
        "max-lg": { max: "960px" }, // Max-width de 960px
        "max-sm": { max: "640px" }, // Max-width de 640px
        "max-xs": { max: "480px" }, // Max-width de 480px
      },
    },
  },
  plugins: [],
};
