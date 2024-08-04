/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/Hero.png')",
      },
      colors: {
        primary: "#518C51",
        secondary: "#D9EADC",
        dark: "#2A3C34",
        light: "#FFFFFF",
        accent: "#94EEC3",
        text: "#333333",
        border: "#DDDDDD",
        disabled: "#D3D3D3",
      },
    },
  },
  plugins: [],
};
