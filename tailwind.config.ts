/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // Enables dark mode via .dark class
  content: [
    "./index.html",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
