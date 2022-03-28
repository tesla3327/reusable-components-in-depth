module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    fontFamily: {
      serif: ['knile'],
      mono: ['Fira Code'],
      sans: ['silka'],
    },
    extend: {
      colors: {
        mt: {
          'extra-light-blue': '#a3c0f5',
          'light-blue': '#2F80ED',
          blue: '#0060E3',
          'dark-blue': '#032A5E',

          'light-green': '#A9F3D8',
          green: '#00CDA3',
          'dark-green': '#0C714C',

          coral: '#EE7E96',
          orange: '#F4B18B',
          yellow: '#F3D58F',
          purple: '#43407B',
        },
        type: {
          dark: '#282C2E',
          light: '#7B7E80',
        },
      },
      outline: {
        blue: '4px solid #3b82f680',
      },
    },
  },
  plugins: [],
};
