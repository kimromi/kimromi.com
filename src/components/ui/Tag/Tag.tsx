type Props = {
  children: string;
};

export const Tag: React.FC<Props> = (props) => (
  <li className="rounded-lg bg-secondary py-1 px-2 text-sm" {...props} />
);
