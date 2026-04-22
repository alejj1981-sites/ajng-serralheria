/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary:  '#0068B5',
          light:    '#0077CC',
          dim:      'rgba(0,104,181,0.12)',
          glow:     'rgba(0,104,181,0.06)',
        },
        site: {
          bg:       '#F4F7FA',
          dark:     '#EBF0F5',
          dark2:    '#E2E9F0',
          steel:    '#D6DFE8',
          card:     '#ffffff',
          text:     '#111827',
          body:     '#3A4A5C',
          heading:  '#0D1B2A',
          faint:    'rgba(17,24,39,0.35)',
          dim:      'rgba(17,24,39,0.65)',
        }
      },
      fontFamily: {
        condensed: ['Barlow Condensed', 'sans-serif'],
        body:      ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
