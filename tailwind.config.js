/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    jit: true,
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      container: {
        padding: {
          DEFAULT: '24px',
          lg: '0',
        },
      },
      extend: {
        backgroundColor: {
          footer: '#111111',
          main: '#8A33FD',
          secondary: '#F6F6F6',
          icon: '#807D7E'
        },
        textColor: {
          secondary: '#8A8989',
        }
      },
    },
    plugins: [],
  };