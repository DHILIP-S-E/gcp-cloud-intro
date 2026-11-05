/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festive: {
          midnight: '#090A12',
          navy: '#111629',
          gold: '#F5C76B',
          saffron: '#FF9D36',
          orange: '#F47B20',
          red: '#C73532',
          cream: '#FFF1D6',
          darkRed: '#8F1D1D',
          amberGlow: '#FFB800',
        },
        gdg: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853',
        },
        openmadurai: {
          coral: '#FF5E5B',
          teal: '#0A252E',
          gold: '#E5A93C',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        festive: ['Rozha One', 'Cinzel Decorative', 'serif'],
      },
      animation: {
        'flame-flicker': 'flame 1.5s ease-in-out infinite alternate',
        'flame-glow': 'glow 2s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-1deg)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05, 1.1) rotate(1.5deg)', filter: 'brightness(1.15)' },
          '100%': { transform: 'scale(0.97, 1.02) rotate(-0.5deg)', filter: 'brightness(1.05)' },
        },
        glow: {
          '0%': { opacity: '0.75', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
