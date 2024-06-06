/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary' : "#66a634",
        'color-dark' : "#000100",
        'color-body-bg' : "#fafbfd",
        'color-nav-link' : "#7d7d7d",
        'color-muted' : "#707070",
      }

    },
  },
  plugins: [],
}
