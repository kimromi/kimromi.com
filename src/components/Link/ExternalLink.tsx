type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const ExternalLink: React.FC<Props> = (props) => (
  <a target="_blank" rel="noreferrer" {...props} />
);
