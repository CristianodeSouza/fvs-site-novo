/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verde-profundo': '#1D281F',
        'verde-serra': '#2B3A2C',
        'pedra': '#C2AE8F',
        'pedra-clara': '#DDD0B8',
        'off-white': '#F4F0E8',
        'branco-quente': '#FAF7F0',
        'preto-quente': '#171713',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
    },
  },
  plugins: [],
};
