/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdTwo: "667px",

      mdThree: "886px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        darkOne: "rgba(54, 55, 64, 1)",
        greyOne: "rgba(159, 162, 180, .08)",
        greyTwo: "rgba(159, 162, 180, 1)",
        greyThree: "rgba(10, 10, 10, .85)",
        greyFour: "rgba(54, 55, 64, 1)",
      },
      gridTemplateColumns: {
        appCols: "220px, 1fr",
      },

      width: {
        sidebarOne: "220px",
        witOne: "100px",
        witTwo: "50px",
        ten: "10px",
        forty: "40px",
        eighty: "80px",
        hundred: "100px",
      },
      height: {
        heitOne: "100px",
        four: "4px",
        five: "5px",
        eight: "8px",
        ten: "10px",
        forty: "40px",
        hundred: "100px",
      },
      boxShadow: {
        shadow_one: "0 0 0 1.3px rgba(159, 162, 180, .5)",
      },
    },
  },
  plugins: [],
};
