/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        },
        fontSize: {
            sm: ['12px', '18px'],
            base: ['16px', '24px'],
            lg: ['18px', '28px'],
            xl: ['22px', '32px'],
        },
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
        addComponents({
            '.sf-container': {}
        })
        addComponents({
            '.sf-content': {}
        })
        addComponents({
            '.sf-header': {}
        })
        addComponents({
            '.sf-footer': {}
        })
        addComponents({
            '.sf-canvas': {}
        })
        addComponents({
            '.flag-text': {}
        })
        addComponents({
            '.section-title': {}
        })
        addComponents({
            '.case-slider': {}
        })
        addComponents({
            '.case-slide': {}
        })
        addComponents({
            '.blog-slider': {}
        })
        addComponents({
            '.blog-slide': {}
        })
        addComponents({
            '.blog-thumb': {}
        })
        addComponents({
            '.blog-content': {}
        })
        addComponents({
            '.blog-date': {}
        })
        addComponents({
            '.blog-text': {}
        })
        addComponents({
            '.case-nav-prev': {}
        })
        addComponents({
            '.case-nav-next': {}
        })
        addComponents({
            '.blog-nav-prev': {}
        })
        addComponents({
            '.blog-nav-next': {}
        })


        


        
        
    })
  ],
};
