type Props = {
  children: React.ReactNode;
  note: string;
};

export const LinkCard: React.FC<Props> = ({ children, note }) => (
  <div className="py-2 pl-4 mb-6 border-l-4 border-tertiary hover:border-tertiary duration-150 ease-in pc:border-secondary">
    <p className="text-2xl">{children}</p>
    <span className="text-sm text-tertiary">{note}</span>
  </div>
);
