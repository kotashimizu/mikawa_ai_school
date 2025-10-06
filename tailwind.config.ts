import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F8D',
          dark: '#1E4D7A',
        },
        secondary: {
          DEFAULT: '#56B7C7',
        },
        accent: {
          DEFAULT: '#F47E20',
        },
        surface: {
          DEFAULT: '#F8F9FC',
          dark: '#0D1B2A',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 20px 40px rgba(27, 45, 74, 0.12)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
