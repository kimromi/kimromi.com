type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Tags: React.FC<Props> = ({ className, ...rest }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} {...rest} />
);
