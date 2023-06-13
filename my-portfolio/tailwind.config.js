/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#00CF06',
        'hover-color': '#336600',
      },
      textColor: {
        'custom-hover': '#10FF26',
      }
    },
  },
  plugins: [],
};


