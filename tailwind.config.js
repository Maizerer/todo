module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  purge: [
    './pages/**/*.{vue}',
    './layouts/**/*.{vue}',
    './components/**/*.{vue}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1310px',
    },
    extend: {},
  },
  plugins: [],
}
