import { Tags, Tag } from '../Tag';

type Props = {
  children: React.ReactNode;
  note?: string;
  tags?: string[];
};

export const LinkCard: React.FC<Props> = ({ children, note, tags }) => (
  <div className="mb-6 border-l-4 border-tertiary py-2 pl-4 duration-150 ease-in hover:border-tertiary pc:border-secondary">
    <p className="text-2xl">{children}</p>
    {note && <span className="text-sm text-tertiary">{note}</span>}
    {tags && (
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    )}
  </div>
);
