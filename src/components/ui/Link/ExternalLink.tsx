type Props = {
  href: string;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const ExternalLink: React.FC<Props> = ({
  underline,
  className = '',
  ...rest
}) => (
  <a
    target="_blank"
    rel="noreferrer"
    className={`${
      underline ? 'underline decoration-1 underline-offset-2' : ''
    } ${className}`.trim()}
    {...rest}
  />
);
