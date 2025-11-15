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
          50: '#FFF4E8',
          100: '#FFE7D1',
          200: '#FFD0A3',
          300: '#FFB471',
          400: '#FF9340',
          500: '#FF6B00',
          600: '#FF8C00',
          700: '#D65F00',
          800: '#A34800',
          900: '#7A3700',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        dark: {
          900: '#000000',
          800: '#0A0A0A',
          700: '#1A1A1A',
          600: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.12)',
        'soft-lg': '0 12px 32px rgba(0,0,0,0.18)',
        glow: '0 0 0 3px rgba(255,107,0,0.25)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,107,0,0.6)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255,107,0,0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}