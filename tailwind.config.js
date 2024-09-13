/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03315D', 
        second: '#124E66',
        third: '#D9D9D9'
      },
      screens: {
        'xs': '480px',   // Custom breakpoint for extra small devices
        'sm': '640px',   // Small devices (default)
        'md': '768px',   // Medium devices (default)
        'lg': '1024px',  // Large devices (default)
        'xl': '1280px',  // Extra large devices (default)
        '2xl': '1536px', // 2XL devices (default)
        '3xl': '1920px', // Custom breakpoint for very large screens
      },
    },
  },
  variants:{},
  plugins: [],
};

