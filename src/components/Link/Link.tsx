import NextLink from 'next/link';
import type { LinkProps } from 'next/link';

type Props = React.PropsWithChildren<LinkProps>;

export const Link = ({ children, ...rest }: Props): JSX.Element => (
  <NextLink {...rest}>
    <a>{children}</a>
  </NextLink>
);
