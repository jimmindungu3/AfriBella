module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        "primary-dark": "#B0003A",
        "primary-light": "#F48FB1",
        text: {
          dark: "#333333",
          light: "#FFFFFF",
        },
        neutral: "#FAFAFA",
        secondary: "#c5decb",
        accent: "#d0e6d9",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
