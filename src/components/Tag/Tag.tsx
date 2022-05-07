type Props = {
  children: string;
};

export const Tag: React.FC<Props> = (props) => (
  <li className="px-2 py-1 bg-gray-800 rounded-lg text-sm" {...props} />
);
