const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--color-primary) / 1)",
      secondary: "hsl(var(--color-secondary) / 1)",
      white: "hsl(var(--color-white) / 1)",
      light: "hsl(var(--color-light) / 1)",
      accentLight1: "hsl(var(--color-accentLight1) / 1)",
      accentLight2: "hsl(var(--color-accentLight2) / 1)",
      dark: "hsl(var(--color-dark) / 1)",
      accentDark1: "hsl(var(--color-accentDark1) / 1)",
      accentDark2: "hsl(var(--color-accentDark2) / 1)",
    },
  },
  plugins: [],
};
