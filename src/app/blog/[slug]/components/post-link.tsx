import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  children?: React.ReactNode;
}

export default function PostLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-blue-500 hover:underline underline-offset-[3px]"
    >
      {children}
    </Link>
  );
}
