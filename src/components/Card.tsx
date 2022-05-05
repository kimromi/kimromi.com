type Props = {
  children: React.ReactNode;
  note: string;
};

export const Card: React.FC<Props> = ({ children, note }) => (
  <div className="py-2 pl-4 mb-6 border-l-4 border-gray-300 hover:border-gray-300 duration-150 ease-in pc:border-gray-600">
    <p className="text-2xl">{children}</p>
    <span className="text-sm text-gray-600">{note}</span>
  </div>
);
