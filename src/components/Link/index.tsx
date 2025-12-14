import React from 'react';
import NextLink from 'next/link';

type LinkProps = React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ children, href, ...props }) => (
  <NextLink href={href} {...props}>
    {children}
  </NextLink>
);

export default Link;
