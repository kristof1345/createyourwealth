/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#5b30f4",
        blue2: "#6d83ff",
        shady: "#adadb0",
      },
    },
  },
  plugins: [],
};
