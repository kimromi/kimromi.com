type Props = {
  children: string;
};

export const Tag: React.FC<Props> = (props) => (
  <li className="py-1 px-2 text-sm bg-secondary rounded-lg" {...props} />
);
