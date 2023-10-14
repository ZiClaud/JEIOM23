/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "320px",
        tablet: "696px",
        laptop: "1080px",
        notebook: "1366px",
        desktop: "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        map: "url('../public/mappaModena.webp')",
        hero: "url('../public/Hero.svg')",
        "hero-mob": "url('../public/Hero-mob.svg')",
        banner: "url('../public/Banner.jpg')",
        worm: "url('../public/MainSponsorWorm.webp')",
        "main-worm": "url('../public/MainWorm.webp')",
        contact: "url('../public/ContactWorm.webp')",
        "center-worm": "url('../public/photoshero.webp')",
      },
      colors: {
        "black-jeiom": "#0C0C0C",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
}
