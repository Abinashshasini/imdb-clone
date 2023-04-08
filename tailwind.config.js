/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#18181b',
      white: '#f8fafc',
      gray: '#f9fafb',
      amber: '#f59e0b',
    },
  },
  plugins: [],
  darkMode: 'class',
};
