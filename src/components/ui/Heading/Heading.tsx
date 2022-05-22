type Props = {
  level: 1 | 2 | 3;
  children: string;
  className?: string;
};

export const Heading: React.FC<Props> = ({ level, ...rest }) => {
  switch (level) {
    case 1:
      return <H1 {...rest} />;
    case 2:
      return <H2 {...rest} />;
    case 3:
      return <H3 {...rest} />;
  }
};

const H1: React.FC<Omit<Props, 'level'>> = ({ className, ...rest }) => (
  <h1
    className={`mb-4 text-3xl font-medium leading-10 ${className}`}
    {...rest}
  />
);

const H2: React.FC<Omit<Props, 'level'>> = (props) => (
  <h2 className="mt-16 mb-8 text-3xl font-medium" {...props} />
);

const H3: React.FC<Omit<Props, 'level'>> = (props) => (
  <h3 className="mt-12 mb-4 text-lg font-bold" {...props} />
);
