type Props = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = (props: Props): JSX.Element => (
  <a target="_blank" rel="noreferrer" {...props} />
);
