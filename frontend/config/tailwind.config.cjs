/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateX(8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.3s ease-out",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [ {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#0ca1dbff", // new primary for dark
          secondary: "#0ce65cff"
        },
      },
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          primary: "#0ca1dbff", // new primary for emerald
          secondary: "#0ce65cff"
        },
      },],
  },
};
