/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        'lg': "0.5rem",
        'xl': '1.5rem',
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        cormorant: ['Cormorant', 'serif']
      },
      colors: {
        myred: "#971D2A",
        hover: "#4f999f",
        active: "#ff4c3b",
        mylght: "#F4F3F2",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
      },
      height: {
        lineheight: "2px",
        100: "600px",
      },
    },
  },
  plugins: [],
}