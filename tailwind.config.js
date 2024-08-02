/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        "frame-bg": "#030712",
        "tx-c1": "#F9FAFB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.48px",
      },
      borderRadius: {
        twelve: "12px",
      },
      screens: {
        phone: { max: "600px" }, // Custom breakpoint
      },
      fontWeight: {
        lw: "2",
      },
    },
  },
  plugins: [],
};
