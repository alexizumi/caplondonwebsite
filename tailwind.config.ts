import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CAP London Church Brand Colors
        cornell_red: {
          DEFAULT: '#b21a18',
          100: '#240505',
          200: '#480b0a',
          300: '#6c100f',
          400: '#901614',
          500: '#b21a18',
          600: '#e22b28',
          700: '#e9605d',
          800: '#f09593',
          900: '#f8cac9',
        },
        cerulean: {
          DEFAULT: '#026c92',
          100: '#00151d',
          200: '#002a3a',
          300: '#003f57',
          400: '#015474',
          500: '#026c92',
          600: '#0388b8',
          700: '#2ba4d4',
          800: '#6bc0e4',
          900: '#b5dff1',
        },
        pear: {
          DEFAULT: '#c3d21d',
          100: '#272a06',
          200: '#4e540c',
          300: '#757e12',
          400: '#9ca818',
          500: '#c3d21d',
          600: '#d6e547',
          700: '#dfeb71',
          800: '#e8f19b',
          900: '#f4f8cd',
        },
        mint_green: {
          DEFAULT: '#defffc',
          100: '#003329',
          200: '#006652',
          300: '#00997b',
          400: '#00cca4',
          500: '#defffc',
          600: '#e5fffd',
          700: '#ebfffe',
          800: '#f0fffe',
          900: '#f8ffff',
        },
        lavender_web: {
          DEFAULT: '#e2e4f6',
          100: '#1d2142',
          200: '#3a4284',
          300: '#5764c6',
          400: '#9ca4e1',
          500: '#e2e4f6',
          600: '#e8eaf8',
          700: '#edeffa',
          800: '#f3f4fb',
          900: '#f9fafd',
        },
      },
    },
  },
  plugins: [],
};

export default config;
