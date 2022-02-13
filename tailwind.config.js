module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-secondary": "#F9F9F9",
        "light-blue": "#e6f5ff",
        "border-primary": "#d9d9d9",
      },
    },
  },
  plugins: [],
};
