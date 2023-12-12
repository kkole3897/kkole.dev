import type { Metadata } from 'next';
import './globals.css';
import BaseHeader from '@/app/components/base-header';
import { mono, sans } from '@/theme/fonts';
import {
  openGraphDescription,
  openGraphImage,
  openGraphUrl,
  openGraphType,
} from './metadata';

export const metadata: Metadata = {
  title: 'kkole.dev',
  description: "jinkwan's frontend development blog",
  openGraph: {
    ...openGraphDescription,
    ...openGraphImage,
    ...openGraphUrl,
    ...openGraphType,
    title: 'kkole.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${mono.variable} ${sans.variable}`}>
      <body>
        <div className="flex flex-col h-full">
          <BaseHeader />
          <div className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 w-[768px] md:w-full md:min-w-[280px] mx-auto px-[20px] py-[60px]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
