/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4",
          750: "#1174c2",
          800: "#0e4f82",
          900: "#1e2640"
        }
      }
    },
  },
  plugins: [],
}