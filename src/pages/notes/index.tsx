import Link from 'next/link';
import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Notes } from '../../lib/microCMSClient';

type Props = Notes;

const NotesPage: NextPage<Props> = ({ notes }) => {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <a>{note.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: 'notes' });

  return {
    props: {
      notes: data.contents,
    },
  };
};

export default NotesPage;
