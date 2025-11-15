/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FF6B00',
          600: '#FF8C00',
        },
        dark: {
          900: '#000000',
          800: '#0A0A0A',
          700: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%)',
      }
    },
  },
  plugins: [],
}