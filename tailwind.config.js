/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-one": "url('../public/img/hero/hero-one.jpeg')",
        "hero-two": "url(../public/img/hero/hero-two.jpeg)",
        "hero-three": "url(../public/img/hero/hero-three.jpeg)",
        smartphones: "url(../public/img/smartphones.jpeg)",
        accessoires: "url(../public/img/accessoires.jpeg)",
        "obj-con": "url(../public/img/obj-con.jpeg)",
      },
      backgroundColor: {
        main: "#00B2A9",
      },
    },
  },
  plugins: [],
};

