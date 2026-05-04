/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#3ecf3e',
          bg: '#000000',
          line: '#1e1e1e',
          muted: '#888',
          divider: '#2a2a2a',
          footer: '#555',
        },
      },
      keyframes: {
        fadeD: {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeU: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeD: 'fadeD 0.6s ease forwards',
        fadeU: 'fadeU 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
