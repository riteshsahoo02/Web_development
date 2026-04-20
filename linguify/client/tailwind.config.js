/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcddff',
          300: '#8fc6ff',
          400: '#5aa5ff',
          500: '#3582ff',
          600: '#1f63f2',
          700: '#194eda',
          800: '#1b42b0',
          900: '#1c398a'
        }
      },
      boxShadow: {
        glow: '0 10px 30px rgba(53,130,255,0.15)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18), transparent 30%)'
      }
    },
  },
  plugins: [],
}
