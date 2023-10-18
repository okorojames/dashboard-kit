/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkOne: "rgba(54, 55, 64, 1)",
        greyOne: "rgba(159, 162, 180, .08)",
      },
    },
  },
  plugins: [],
};
