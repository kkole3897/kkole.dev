import React from 'react';

interface Props {
  children: React.ReactNode;
}

function PostList({ children }: Props) {
  return (
    <div role="list" className="flex flex-col gap-y-[24px]">
      {children}
    </div>
  );
}

export default PostList;
