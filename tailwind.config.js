/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newgreen: "#00754a",
        newdarkgreen1: "#006241",
        newdarkgreen: "#1e3933",
        newlightblue: "#d4e9e2",
        newpink: "#e31c79",
      }
    },
  },
  plugins: [],
}

