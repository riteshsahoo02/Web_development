/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f6',
          100: '#ffe3ec',
          200: '#ffc9d9',
          300: '#f7a8c2',
          400: '#ef7ca2',
          500: '#e45d8b',
          600: '#cf4674',
          700: '#af345e',
          800: '#8f2d4f',
          900: '#762a45'
        },
        washi: {
          50: '#fffaf7',
          100: '#f8efe6',
          200: '#f0dfcf',
          300: '#e4c6ab'
        },
        ink: {
          700: '#43323a',
          800: '#33262d',
          900: '#261d22'
        }
      },
      boxShadow: {
        glow: '0 14px 34px rgba(228, 93, 139, 0.18)',
        card: '0 20px 45px rgba(154, 92, 110, 0.10)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(247,168,194,0.25), transparent 28%), radial-gradient(circle at 82% 12%, rgba(242,209,154,0.22), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,248,250,0.92))'
      }
    },
  },
  plugins: [],
}
