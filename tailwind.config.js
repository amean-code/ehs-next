/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#2ca2f1",
          dark:"#077fcf",
          light:"#59bbfd",
          lighter:"#48aaec",
          opacity:{
            50:"#077fcf2e"
          }
        },
        secondary:{
          DEFAULT:"#2cc5a2",
          dark:"#06ad6f",
          light:"#44ddbb",
          lighter:"#33ccaa",
          opacity:{
            50:"#07be7f2e"
          }
        },
        third:{
          DEFAULT:"#8d2cc5",
          dark:"#7b07be",
          light:"#b045ee",
          lighter:"#cf7bff",
          opacity:{
            50:"#7b07be2e"
          }
        },
        twitter:"#1DA1F2",
        facebook:"#4267B2",
        linkedin:"#0A66C2",
        napsak:"#f7274a"
      },
      fontFamily:{
        "inter-black":["Inter-Black"],
        "inter-bold":["Inter-Bold"],
        "inter-extraLight":["Inter-ExtraLight"],
        "inter-medium":["Inter-Medium"],
        "inter-semibold":["Inter-SemiBold"],
        "inter-thin":["Inter-Thin"],
        "inter":["Inter-Medium"],
      },
      screens:{
        'b2xl': {'max': '1535px'},
        'bxl': {'max': '1279px'},
        'blg': {'max': '1023px'},
        'bmd': {'max': '767px'},
        'bsm': {'max': '639px'},      
      },  
      backgroundImage: {
      }
    },
  },
  plugins: [],
}
