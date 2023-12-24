/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  content: [
    // ...
    './src/**/*.{js,jsx,ts,tsx}', './src/components/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}

