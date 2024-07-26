/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/shared-ecommerce-components/src/components/*.{js,ts,jsx,tsx}",  /* This is so that Tailwind recognizes our shared components */
      "./node_modules/shared-ecommerce-components/src/components/**/*.{js,ts,jsx,tsx}", /* This is so that Tailwind recognizes our shared components */
    ],
    theme: {
      extend: {
        colors: {
            'bg-brand-primary': '#FF0000',
            'bg-brand-secondary': '#CC0000',
          },
      },
    },
    plugins: [],
  }