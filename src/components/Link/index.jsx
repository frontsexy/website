import React from 'react';

const Link = ({
  children,
  href,
}) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;
