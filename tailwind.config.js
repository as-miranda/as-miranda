module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FFDD00',
        accent: 'var(--color-accent)',
        darkNeutral: '#323232',
        baseBlack: '#000000',
      },
    },
  },
  plugins: [],
};
