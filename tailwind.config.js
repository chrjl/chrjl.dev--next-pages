/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        content: ['var(--font-arimo)'],
        mono: ['var(--font-cousine)'],
      },
    },
  },
  plugins: [],
};
