/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        morphe: {
          navy: '#0b1021',
          'navy-dark': '#060913',
          'navy-light': '#1e2640',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          magenta: '#d946ef',
          bg: '#f8fafc',
          card: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-pink': '0 0 40px -10px rgba(236, 72, 153, 0.3)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
        'card-soft': '0 10px 40px -15px rgba(11, 16, 33, 0.07)',
        'card-hover': '0 20px 50px -10px rgba(139, 92, 246, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}
