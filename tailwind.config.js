/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'header': {
          light: '#fafaf9',
          DEFAULT: '#f5f5f4',
          dark: '#d6d3d1',
        },
      }
    },
  },
  plugins: [],
};
