/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath: {
      // we need to install "npm install --save-dev tailwind-clip-path"
      mycircle: "circle(150px at 80% 20%)",
      mycircle_hover : "circle(300px at 80% -20%)",
  },
    extend: {},
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
