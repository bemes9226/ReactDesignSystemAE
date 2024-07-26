/* your tailwind.config.js file */

module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    future: {
          hoverOnlyWhenSupported: false,
      },
    theme: {
      extend: {},
    },
    plugins: [
      require('@aegov/design-system'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
  }
  