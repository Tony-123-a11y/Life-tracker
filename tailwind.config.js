
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        "rowColorComp":"rgba(0, 255, 0, 0.2)"
      },
      animation:{
        "Visible": "animateVisible .25s ease-in-out forwards"
      },
      fontFamily:{
        "primary":"Inter"
      }
    },
  },
  plugins: [],
}