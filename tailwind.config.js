/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],  theme: {
    extend: {
      colors:{
        "primary":"#5555"
      },
      container:{
        center:true,
      }
    },
  },
  plugins: [],
}

