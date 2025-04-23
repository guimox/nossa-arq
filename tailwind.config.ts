/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@plaiceholder/ui/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#CDCDCD',
      },
    },
  },
  variants: {},
  plugins: ['prettier-plugin-tailwindcss'],
};
