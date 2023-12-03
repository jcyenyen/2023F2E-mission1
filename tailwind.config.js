/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./src/**/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        100: '#FBFFE1',
        200: '#EEFFA9',
        300: '#D1FA31',
        400: '#BBE217',
        500: '#A8C400',
      },
      'gray': {
        100: '#E2E2E2',
        200: '#C6C6C6',
        300: '#8C8C8C',
        400: '#444444',
        500: '#000000',
      },
    },
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '32px',
      '5': '48px',
      '6': '64px',
    },
    extend: {},
  },
  plugins: [],
}

