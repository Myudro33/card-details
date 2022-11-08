module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'margin-left:2px margin-right:2px' },
          '50%': { transform: 'margin-left:2px margin-right:2px' },
        }
      }
    },
    screens: {
      'xs': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '760px',
      // => @media (min-width: 1024px) { ... }

      'dp': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}