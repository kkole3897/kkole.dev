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
        500: 'var(--gray-500)',
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
    extend: {
      height: {
        header: 'var(--header-height)',
      },
    },
  },
  plugins: [],
};
export default config;
