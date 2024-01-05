/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      "primary-brand":"#FF7B00",
      "primary-dark":"#1B181E",
      "light-accent":"#83A3A9",
      "dark-accent":"#877068",
      "primary-bg":"#F0F0F0"
     }
    },
  },
  plugins: [],
}
