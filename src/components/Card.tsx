type Props = {
  children: React.ReactNode;
  note: string;
};

export const Card = ({ children, note }: Props): JSX.Element => (
  <div className="mb-6 py-2 pl-4 border-l-4 border-gray-300 pc:border-gray-600 hover:border-gray-300 ease-in duration-150">
    <p className="text-2xl">{children}</p>
    <span className="text-sm text-gray-600">{note}</span>
  </div>
);
