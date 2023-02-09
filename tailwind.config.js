/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--v-theme-primary), <alpha-value>)',
        secondary: 'rgba(var(--v-theme-secondary), <alpha-value>)'
      }
    },
  },
  plugins: [],
}
