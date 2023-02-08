/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-purple": "#8c1eff",
        "theme-pink": "#f222ff",
        "theme-hot-pink": "#ff2975",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
