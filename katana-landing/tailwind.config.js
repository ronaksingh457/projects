/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#04050a',
        glow: '#67e8f9',
        gold: '#e3b268',
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
