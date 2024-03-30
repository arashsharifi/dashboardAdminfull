/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
      },
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
