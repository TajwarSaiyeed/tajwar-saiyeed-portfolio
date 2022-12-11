module.exports = {
  plugins: {
    tailwindcss: {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [require("tailwind-scrollbar")],
    },
    autoprefixer: {},
  },
};
