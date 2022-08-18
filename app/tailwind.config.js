/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      backgroundImage: {
        "bg-hero-pattern": "url('/src/assets/images/background_Image.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        "Roboto-Bold": ["Roboto Bold", "sans-serif"],
        "Roboto-Light": ["Roboto Light", "sans-serif"],
        "Roboto-Medium": ["Roboto Medium", "sans-serif"],
        "Roboto-Regular": ["Roboto Regular", "sans-serif"],
        "Roboto-Thin": ["Roboto Thin", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
