module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anaheim': ['Anaheim'],
        'alliance': ['alliance-no1'],
        
        'small' : ['Anaheim', '#627597']
      }
      
    },
    colors: {
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#091747',
      'black': '#000000',
      'grey': '#627597',
      'yellow': '#FFD33D',
      'red': '#F44653',
      'green': '#58BC34',
      'blue': '#1035BB'
    },
  },
  plugins: [],
}
