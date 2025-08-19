/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        surface: {
          50: 'var(--surface-50)',
          100: 'var(--surface-100)',
          200: 'var(--surface-200)',
          300: 'var(--surface-300)',
          400: 'var(--surface-400)',
          500: 'var(--surface-500)',
          600: 'var(--surface-600)',
          700: 'var(--surface-700)',
          800: 'var(--surface-800)',
          900: 'var(--surface-900)',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.form-field': {
          '@apply flex flex-col gap-1 my-1 w-[250px]': {}
        },
        '.form-label': {
          '@apply text-sm font-medium text-gray-700': {}
        },
        '.form-input' : {
          '@apply w-full px-3 py-2 text-sm' : {}
        },
        '.error-message': {
          '@apply text-red-500 block mt-1 break-words': {}
        }
      })
    }
  ],
}

