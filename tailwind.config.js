/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- active le mode sombre via une classe CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsblack: ["'poppins-black'", "sans-serif"]
        },
      colors: {
        primary: "#ff6a3d",
        secondary: "#facc15",     // optionnel
        dark: "#1f2937",          // gris foncé
        light: "#f9fafb",         // blanc cassé
        "hover-white": "#e5e7eb", // équivalent à gray-200
      },
    },
  },
  plugins: [],
}
