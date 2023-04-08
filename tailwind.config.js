/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#1f2937',
      white: '#f8fafc',
      gray: '#f9fafb',
      amber: '#f59e0b',
    },
  },
  plugins: [],
  darkMode: 'class',
};
