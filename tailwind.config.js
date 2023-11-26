/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        shadowBox: 'rgb(173, 124, 39)',
        lightPartsColor: 'lightgoldenrodyellow',
        darkFont: 'rgb(114, 76, 9)',

        gradientColor1: 'wheat',
        gradientColor2: 'rgb(245, 187, 86)',
        smallWraperGradient1: 'rgb(241, 226, 199)',
        smallWraperGradient2: 'rgb(245, 209, 147)',

        buttonColor: 'rgb(215, 159, 63)',
        buttonHoverColor: 'rgb(190, 142, 60)',
        buttonShadowBox: 'rgb(121, 85, 23)',
        buttonTextColor: 'lightgoldenrodyellow',

        errorMsg: 'orangered',
        deleteBtnColor: 'rgba(140, 3, 3, 0.4)',
        deleteBtnHoverColor: 'rgba(140, 3, 3, 0.85)',

        tableHeaderBackground: 'rgb(245, 209, 147)',
        tableBorderColor: 'rgb(245, 209, 147)',

        filterLabelColor: 'rgb(245, 187, 86)',
        filterPlaceholderColor: 'darkred',
        filterTextColor: 'rgb(114, 76, 9)',
      },

      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        ssm: { max: '375px' },
        sm2: { min: '640px', max: '767px' },
        md2: { min: '768px', max: '1023px' },
        mmd2: { min: '900px', max: '1265px' },
        lg2: { min: '1024px', max: '1279px' },
        xl2: { min: '1280px', max: '1535px' },
        '1xl2': { min: '1265px' },
        '2xl2': { min: '1536px' },
      },
    },
  },
  plugins: [],
};
