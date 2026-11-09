/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          orange: '#F59E0B',
          white: '#FFFFFF',
          offwhite: '#F8FAFC'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 6px -1px rgba(15, 23, 42, 0.08)',
        'card-hover': '0px 8px 12px -2px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        'ui': '12px',
        'btn': '8px',
      }
    },
  },
  plugins: [],
}