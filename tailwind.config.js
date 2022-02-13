module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
  },
};
