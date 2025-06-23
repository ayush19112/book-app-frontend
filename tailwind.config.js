// tailwind.config.js
export const content = [
  "./src/**/*.{js,jsx,ts,tsx,html}",
];
export const theme = {
  extend: {
    colors: {
      'primary': '#FFCE1A',
      'secondary': '#0D0842',
      'blackBG': '#F3F3F3',
      'Favorite': '#FF5841',
    },
    fontFamily: {
      'primary': ["Monsterrat","sans-serif"],
      'secondary': ["Nunito Sans","sans-serif"]
    }
  },
};
export const plugins = [];
