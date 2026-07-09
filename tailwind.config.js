/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E3D',
          light: '#162B50',
          dark: '#071427',
          50: '#e8edf5',
        },
        gold: {
          DEFAULT: '#F5B700',
          light: '#FFD03F',
          dark: '#C99400',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B700 0%, #FFD03F 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0B1E3D 0%, #071427 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 183, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245, 183, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
