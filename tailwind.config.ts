import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        50: 'var(--gray-50)',
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      red: {
        500: 'var(--red-500)',
      },
      orange: {
        500: 'var(--orange-500)',
      },
      yellow: {
        500: 'var(--yellow-500)',
      },
      green: {
        500: 'var(--green-500)',
      },
      teal: {
        500: 'var(--teal-500)',
        700: 'var(--teal-700)',
      },
      blue: {
        500: 'var(--blue-500)',
      },
      purple: {
        500: 'var(--purple-500)',
      },
      pink: {
        500: 'var(--pink-500)',
      },
      cyan: {
        400: 'var(--cyan-400)',
        500: 'var(--cyan-500)',
        600: 'var(--cyan-600)',
        700: 'var(--cyan-700)',
        800: 'var(--cyan-800)',
        900: 'var(--cyan-900)',
      },
    },
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      height: {
        header: 'var(--header-height)',
      },
    },
  },
  plugins: [],
};
export default config;
