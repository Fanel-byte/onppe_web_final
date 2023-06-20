const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [require('@tailwindcss/forms'),  require("daisyui")],    daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "white",
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    /* fontFamily: {
        'mons': ['Montserrat', 'sans-serif']
      },*/
      colors: {
        CustomGreen: '#59C55E',
      },

    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      green:colors.green,
      orange:colors.orange,
    },
  },
  variants: {
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  
};
