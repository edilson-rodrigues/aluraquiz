import React from 'react';
import NextLink from 'next/link';

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a {...props}>
      {children}
    </a>
  </NextLink>
);

export default Link;
