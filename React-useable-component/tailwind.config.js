/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg,#e11d48,#6d28d9)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
