/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/blog/forest-5375005_1280.jpg')",
        'careerPage' :"url(./assets/about/vietnam-8704397_1280.jpg)",
        "implement":"url(./assets/about/pxfuel.jpg)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6153CD",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
