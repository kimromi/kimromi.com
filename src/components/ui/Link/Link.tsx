import NextLink from 'next/link';
import type { LinkProps } from 'next/link';

type Props = React.PropsWithChildren<LinkProps>;

export const Link: React.FC<Props> = ({ children, ...rest }) => (
  <NextLink {...rest}>
    <a>{children}</a>
  </NextLink>
);
