module.exports = {
  // darkMode: "class", for later
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [],
};
