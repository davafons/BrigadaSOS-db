/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js', 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {},
    colors: {
      sred: "#ef5552",
      sgray: '#2f2f31',
      sgrayhover: "#252527"
    }
  },
  plugins: [require('flowbite/plugin'), require('preline/plugin'),],
  darkMode: 'class'
}