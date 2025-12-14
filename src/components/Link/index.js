import NextLink from 'next/link';

const Link = ({ children, href, ...props }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <NextLink href={href} {...props}>
    {children}
  </NextLink>
);

export default Link;
