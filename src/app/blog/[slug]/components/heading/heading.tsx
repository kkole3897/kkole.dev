import React from 'react';
import './heading.css';

type HeadingElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  as?: HeadingElementType;
  children?: React.ReactNode;
}

export default function Heading(props: Props) {
  const { as = 'h1', children, ...rest } = props;

  return React.createElement(
    as,
    { ...rest, className: 'post-heading' },
    children
  );
}
