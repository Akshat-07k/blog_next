/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      textColor: {
        skin: {
          text: 'var(--text)',
          textSoft: 'var(--textSoft)',
        }
        // 'custom': 'var(--custom-text-color)',
      },
      backgroundColor: {
        skin: {
          bg: 'var(--bg)',
          bgSoft: 'var(--bgSoft)',
          btn: 'var(--btn)',
          // 'custom': 'var(--bg)',
        }
      },

    },
  },
  plugins: [],
};
