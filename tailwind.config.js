/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkColor': '#0D0518',
        
      },
      gradientColorStops: {
        'darkColor': '#0D0518',
        'MediumDarkColor': '#170623',
        'MediumLightColor': '#1D0D2F',
        'lightColor': '#360748',

      },

    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}