/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: () => ({
      gray: {
        100: "#333333",
        200: "#373737",
        300: "#777777"
      },
      yellow: "#FCE694",
      lime: "#F6FEAA",
      green: "#C7DFC5",
      blue: "#C1DBE3",
      red: "#FCB295",
      white: "#FFFFFF",
      transparent: "transparent"
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
