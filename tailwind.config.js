/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '400px',

      // => @media (min-width: 680px) { ... }

      tablet: '680px',

      // => @media (min-width: 768px) { ... }

      laptop: '768px',

      // => @media (min-width: 768px) { ... }

      desktop: '1024px',

      // => @media (min-width: 1024px) { ... }

      ultra: '1280px',

      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        main: "url('/images/main-background.png')",
        home_logo: "url('/images/home_logo.png')",
        'main-linear-gradient':
          'linear-gradient(#5A5A5A 0%, #313131 82.81%, #313131 100%)',
        'main-gradient-radial':
          'radial-gradient( #E10A0A 0%, rgba(225, 10, 10, 0) 100%)',
      },

      fontFamily: {
        mainFa: [
          'YekanBakhFaNum',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        mainEn: [
          'yekanbakhEn',
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
