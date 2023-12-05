import React from 'react';

export default function PostListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li className="pl-[6px]">{children}</li>;
}
