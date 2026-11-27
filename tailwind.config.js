/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF8F5',
        linen: '#F0ECE4',
        espresso: '#1F1D1B',
        gold: {
          light: '#F8D994',
          DEFAULT: '#B89B72',
          rich: '#D4B47C',
          deep: '#9A7742',
        },
        sage: {
          DEFAULT: '#6E7B68',
          dark: '#5B6856',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulseSlow 3.4s ease-in-out infinite',
        'sway-slow': 'swaySlow 5.5s ease-in-out infinite',
        'sway-delayed': 'swaySlow 6.2s ease-in-out 1.2s infinite',
        'float-gentle': 'floatGentle 4.2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(0.96)' },
          '50%': { opacity: '0.95', transform: 'scale(1.06)' },
        },
        swaySlow: {
          '0%, 100%': { transform: 'rotate(-1.6deg)' },
          '50%': { transform: 'rotate(1.6deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
