import React from 'react';

export default function Blockquote({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <blockquote className="py-[4px] pl-[16px] border-cyan-500 border-l-2 text-cyan-500">
      {children}
    </blockquote>
  );
}
