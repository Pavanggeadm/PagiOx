/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060b18',
        bg2: '#0b1327',
        card: '#0f1a33',
        line: '#1e2c4d',
        mu: '#9aa9c7',
        ac: '#3b82f6',
        ac2: '#60a5fa',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
