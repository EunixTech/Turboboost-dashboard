/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      mobile: "300px",
      // => @media (min-width: 640px) { ... }
      laptop: "1000px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1200px",
      large: "1550px",
      // => @media (min-width: 1280px) { ... }
    },
  },
};
