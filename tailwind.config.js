/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Kích hoạt dark mode theo class
  theme: {
    extend: {
      colors: {
        customDark: '#121212', // Màu nền dark mode tùy chỉnh
        customLightText: '#ffffff', // Màu chữ light mode
        customDarkText: '#d1d5db', // Màu chữ dark mode
      },
    },
  },
  plugins: [],
}

