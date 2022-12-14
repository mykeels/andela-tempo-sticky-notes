/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
    extend: {},
  },
  plugins: [],
}
