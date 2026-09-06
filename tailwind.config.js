/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sora-bg': '#0D0D0F',
        'sora-sidebar': '#121214',
        'sora-panel': '#18181B',
        'sora-editor': '#0F0F11',
        'sora-border': '#252528',
        'sora-text': '#F5F5F7',
        'sora-text-secondary': '#98989F',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'sora': '0.5rem',
      },
      boxShadow: {
        'sora-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sora': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
