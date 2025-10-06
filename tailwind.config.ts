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
          DEFAULT: 'var(--color-primary, #2C5F8D)',
          dark: 'var(--color-primary-dark, #1E4D7A)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #56B7C7)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #F47E20)',
        },
        surface: {
          DEFAULT: '#F8F9FC',
          dark: '#0D1B2A',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        heading: ['var(--font-noto-sans-jp)', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: 'var(--container-max, 1200px)',
      },
      spacing: {
        'xs': 'var(--space-xs, 8px)',
        'sm': 'var(--space-sm, 12px)',
        'md': 'var(--space-md, 16px)',
        'lg': 'var(--space-lg, 24px)',
        'xl': 'var(--space-xl, 32px)',
        '2xl': 'var(--space-2xl, 48px)',
        '3xl': 'var(--space-3xl, 64px)',
        '4xl': 'var(--space-4xl, 80px)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm, 0 2px 4px rgba(0,0,0,0.1))',
        'md': 'var(--shadow-md, 0 4px 12px rgba(0,0,0,0.15))',
        'lg': 'var(--shadow-lg, 0 8px 24px rgba(0,0,0,0.2))',
        'card': '0 20px 40px rgba(27, 45, 74, 0.12)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm, 4px)',
        'md': 'var(--radius-md, 8px)',
        'lg': 'var(--radius-lg, 12px)',
        'full': 'var(--radius-full, 9999px)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
