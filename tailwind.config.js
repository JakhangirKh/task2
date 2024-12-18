/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
       white: {
        100: '#FFFFFF',
       },
       red:{
        100: '#FF0000',
        200: '#FF4444',
        300: '#FF8888',
        400: '#FFCCCC',
        500: '#FFFFCC',
        600: '#FFFFDD',
       }
     

      
      },
    },
  },
  plugins: [],
}

