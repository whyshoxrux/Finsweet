/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1C1E53",
        secondary: "#FFB94F",
        tertiary: "#F2F2F2",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
