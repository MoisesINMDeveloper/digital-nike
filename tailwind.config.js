/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fourth: {
          DEFAULT: "#464646",
        },
        tertiary: {
          DEFAULT: "#292929",
        },
        secundary: {
          DEFAULT: "#000000",
        },
        primary: {
          DEFAULT: "#dcdcdc",
        },
        text: "#292929",
        border: "#525252",
        bgtransparent: "#000000c2",
      },
    },
  },
  plugins: [],
};
