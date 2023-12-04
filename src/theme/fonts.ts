import { Fira_Code as FiraCode } from 'next/font/google';
import localFont from 'next/font/local';

export const mono = FiraCode({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
  variable: '--font-mono',
});

export const sans = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Black.subset.woff2',
      weight: '900',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.subset.woff2',
      weight: '900',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: '../../public/fonts/Pretendard-Thin.subset.woff2',
      weight: '100',
    },
  ],
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
  variable: '--font-sans',
});
