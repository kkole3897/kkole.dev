'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import styles from './base-header.module.css';

function SubLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const currentPathname = usePathname();

  const baseClassNames =
    'flex items-center grow-0 shrink-0 w-[120px] h-full px-[16px] border-r border-cyan-600 font-mono';
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
    <header className="grow-0 shrink-0 h-header">
      <div className="flex md:justify-between fixed top-0 left-0 right-0 h-header border-b border-cyan-600 bg-cyan-800">
        <Link
          href="/"
          className="flex items-center grow-0 shrink-0 w-[200px] md:w-auto h-full px-[16px] border-r border-cyan-600 text-cyan-500 font-mono font-bold"
        >
          kkole.dev
        </Link>
        <div className="md:hidden">
          <SubLink href="/blog">blog</SubLink>
        </div>
        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="flex justify-center items-center w-[52px] h-[52px] border-l border-l-cyan-600 text-cyan-500">
                <IoMenuOutline className={styles['menu-icon']} size="24" />
                <IoCloseOutline className={styles['close-icon']} size="24" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="fixed top-header left-0 right-0 bottom-0 bg-cyan-800">
                <NavigationMenu.Link
                  className="block px-[16px] py-[10px] text-cyan-500 font-mono"
                  href="/blog"
                >
                  blog
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
