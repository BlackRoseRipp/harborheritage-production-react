/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#233b83",
        "gold-primary": "#c5993a",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
