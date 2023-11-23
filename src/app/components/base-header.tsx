'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

function SubLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const currentPathname = usePathname();

  const baseClassNames =
    'flex items-center w-[120px] h-full px-[16px] border-r border-cyan-600 font-mono';
  const activePattern = new RegExp(href);
  const activeClass = activePattern.test(currentPathname)
    ? 'bg-cyan-700 text-gray-500'
    : 'bg-[#00111f] text-cyan-500';
  const className = `${baseClassNames} ${activeClass}`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function BaseHeader() {
  return (
    <header className="h-header">
      <div className="flex fixed top-0 left-0 right-0 h-header border-b border-cyan-600 bg-cyan-800">
        <div>
          <Link
            href="/"
            className="flex items-center w-[200px] h-full px-[16px] border-r border-cyan-600 text-cyan-500 font-mono font-bold"
          >
            kkole.dev
          </Link>
        </div>
        <div>
          <SubLink href="/blog">blog</SubLink>
        </div>
      </div>
    </header>
  );
}
