import React from 'react';

export default function PostList({ children }: { children?: React.ReactNode }) {
  return <ul className="list-disc pl-[20px]">{children}</ul>;
}
