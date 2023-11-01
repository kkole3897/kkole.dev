import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kkole.dev",
  description: "jinkwan's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}