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
        sbgreen: "#00754a",
        sbdarkgreen1: "#006241",
        sbdarkgreen: "#1e3933",
        sblightblue: "#d4e9e2",
        sbpink: "#e31c79",
      }
    },
  },
  plugins: [],
}

