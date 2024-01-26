/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '800': '800px',
        '44': '44',
        'max-100': '1300px',
        'max-99': '1290px',
        '225':'225px',
        '228':'228px',
        '220':'220px',
        '232':'232px',
        '222':'222px',
        '390':'390px',
        '336':'336px',
        '390':'390px',
        '568':'568px',
        '70':'70px',
        '122':'122px',
        
        '54':'54px',
       },
       height: {
        '52': '52px',
        '44': '44px',
        '64':'64px',
        '90':'90px',
        '236':'236px',
        '70':'70px',
        '464':'464px',
        '471':'471px',
        '400':'400px'
       },
       colors:{
        'mat-orange':'#D8562C',
        'black-75':'#404040',
        'bg-color':'#F9E4CC',
        'grey':'#E8E8E8',
        'mat-bg-color':'#F9E4CC',
        'footer':'#0F0F0F',
        
       },
       borderRadius:{
          '32':'32px',
       },
       fontSize:{
        '69':'69px',
        '28':'28px',
        '24':'24px',
        '44':'44px',
        '23':'23px',
        '20':'20px',
        '18':'18px',
        '14':'14px',
       },
       margin:{
        '104':'104px',
       },
       gap:{
        '104':'104px',
       },
       fontFamily: {
        'IBM': ["IBM Plex Sans Arabic", "sans-serif"],
      },
    },
  },
  plugins: [],
}

