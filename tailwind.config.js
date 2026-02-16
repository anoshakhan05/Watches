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
        primary: "#f2cc0d",
        "primary-hover": "#dcb022",
        "background-light": "#f8f8f5",
        "background-dark": "#0a0a08",
        "panel-dark": "#161614",
        "surface-dark": "#1a1a1a",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        'smoke-overlay': 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.8) 100%)',
        'rim-light': 'radial-gradient(circle at 50% 50%, rgba(242, 204, 13, 0.05) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
