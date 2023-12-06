import React from 'react';

export default function PostOrderedList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ol className="list-decimal pl-[20px]">{children}</ol>;
}
