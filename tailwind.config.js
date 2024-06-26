/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      display: 'Climate\\ Crisis',
    },
    extend: {
      backgroundImage: {
        'frame': "url('/black-blob.png')",
      },
      boxShadow: {
        'brutal': "3px 3px 0 0 rgb(0, 0, 0, 1)",
        'extraBrutal': "10px 10px 0 0 rgb(0, 0, 0, 1)",
      },
      colors: {
        'lilac': '#ffb7ff',
        'blueGreen': '#7bf1a8',
        'redOrange': '#FB6813'
      }
    },
  },
  plugins: [],
}