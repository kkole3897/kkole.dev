import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  target?: string;
  children?: React.ReactNode;
}

export default function PostLink({ href, target, children }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className="text-blue-500 hover:underline underline-offset-[3px]"
    >
      {children}
    </Link>
  );
}
