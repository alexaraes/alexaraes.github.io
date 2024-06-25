/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'frame': "url('/black-blob.png')",
      },
      boxShadow: {
        'brutal': "3px 3px 0 0 rgb(0, 0, 0, 1)",
        'extraBrutal': "8px 8px 0 0 rgb(0, 0, 0, 1)",
      }
    },
  },
  plugins: [],
}