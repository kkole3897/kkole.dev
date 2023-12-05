import type { Metadata } from 'next';
import './globals.css';
import BaseHeader from '@/app/components/base-header';
import { mono, sans } from '@/theme/fonts';

export const metadata: Metadata = {
  title: 'kkole.dev',
  description: "jinkwan's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${mono.variable} ${sans.variable}`}>
      <body>
        <BaseHeader />
        <div className="flex justify-center">
          <div className="w-[768px] px-[20px] pt-[60px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
