/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        supadao: [ "supadao" ],
      },
    },
  },
  darkMode:"class",
  plugins: [nextui( {
    themes: {
      light: {
        colors: {
          primary:{
            DEFAULT: "#cbfc00"
          },
          secondary: {
            DEFAULT: "#8c52ff"
          },
          
        }
      },
      dark: {
        colors: {
          primary:{
            DEFAULT: "#cbfc00"
          },
          secondary: {
            DEFAULT: "#8c52ff"
          },
        }
      }
    }
  })],
}

