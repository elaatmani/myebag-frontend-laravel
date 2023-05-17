/** @type {import('tailwindcss').Config} */

// const tailwindColors = require("./node_modules/tailwindcss/colors")

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
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /tw-bg-.+/,
      
    },
    {
      pattern: /tw-text-.+/,
      
    },
    {
      pattern: /tw-border-.+/,
      
    },
  ],
  plugins: [],
}
