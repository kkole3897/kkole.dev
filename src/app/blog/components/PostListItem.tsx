import React from 'react';

interface Props {
  children: React.ReactNode;
}

function PostListItem({ children }: Props) {
  return <div role="listitem">{children}</div>;
}

export default PostListItem;
