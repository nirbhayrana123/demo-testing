const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        'sm': '50px',
      },
      colors: {
        'toltipbg':'#737A80',
        'whitergba':'rgba(255, 255, 255, 0.3)',
        'shamrock':'rgba(60, 210, 165, 0.2)',
        'white': '#fff',
        'inputbg':'#D6F3FB', 
        'blue' :'#114273',
        'uplodecolor':'rgba(17, 66, 115, 0.05);',
        'bron' : 'rgba(4, 140, 185, 0.1)',
        'tan':'rgba(238, 190, 94, 0.2)',
        'bluener':'rgba(130, 157, 227, 0.15)',
        'tabcolor':'#4F4F4F',
        'darkblu':'#0070E0',
        'whitebgrgba':'rgba(250, 251, 252, 0.2);',
        'acordionrgba':'rgba(4, 140, 185, 0.08)',
        'grener':'rgba(60, 210, 165, 0.1)',
        'brouner':'rgba(235, 87, 87, 0.1)',
         'brounfed':' rgba(17, 66, 115, 0.04)',
         'bengani':'#7223A6',
         'dllstbbg':'#F8FAFB',
        'broun' :' rgba(238, 190, 94, 0.2)',
        'yellow' : '#F8B530',
        'pentest' :'rgba(130, 157, 227, 0.15)',
        'penfont' :'#829DE3',
        'green':'#00A682',
        'grey': '#EDF0F2',
        'same':'rgba(111, 207, 151, 0.2)',









      },
      
      fontSize: {
        'sml':'13',
        'sm': '14px',
      },    
      minHeight: {
        'sm': '50px',
        'calc': 'calc(100vh - 150px)', 
      },
      maxWidth: {
        '2xl': '1530px',
        'calc2': 'calc(100% - 440px)',
        'lg': 'calc(100% - 120px)',
      }, 
      height: {
        'xsh': 'calc(100% - 150px)',
      }, 
      tablewidth:{
        'tbw':'16%',
    },
      screens: {
        'xs' : '100px',
        '2xls' : '1535px',
       },   
       backgroundImage:{
         'bacgrediant':'linear-gradient(98.87deg, #114273 -2.57%, #57C09E 182.08%)',
       },    
    },
   

    fontFamily: { 
      Poppins:['Poppins', 'sans-serif']
    },
  },
  plugins: [ require('tw-elements/dist/plugin') ],
}
