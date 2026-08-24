/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          bg: '#0A0F1E',
          panel: '#10162B',
          panel2: '#141C38',
        },
        light: {
          bg: '#F5F7FC',
          panel: '#FFFFFF',
          panel2: '#F0F3FA',
        },
        accent: {
          DEFAULT: '#5B7CFF',
          light: '#3A5CE0',
        },
        signal: {
          DEFAULT: '#2FD8E0',
          light: '#0EA5AE',
        },
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(0,0,0,0.55)',
        'card-light': '0 20px 50px -24px rgba(16,22,48,0.18)',
      },
      keyframes: {
        signal: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        barGrow: {
          '0%, 100%': { transform: 'scaleY(0.85)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        signal: 'signal 2.4s ease-in-out infinite',
        barGrow: 'barGrow 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
