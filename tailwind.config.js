/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Adicionar cores da marca FVS aqui
      },
      fontFamily: {
        // Adicionar fontes aqui
      },
    },
  },
  plugins: [],
};
