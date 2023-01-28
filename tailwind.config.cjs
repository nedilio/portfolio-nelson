/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nelson: "#06b6d4",
        nelsonDark: "#0e7490",
      },
    },
  },
  plugins: [],
};
