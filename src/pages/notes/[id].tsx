import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { Note } from '../../lib/microCMSClient';

type Props = {
  note: Note;
};

const NotePage: NextPage<Props> = ({ note }) => {
  return (
    <div className="container mx-auto px-4">
      <main>
        <h1>{note.title}</h1>
        <p>{note.publishedAt}</p>
        <p>{note.category}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${note.body}`,
          }}
        />
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'notes' });

  const paths = data.contents.map((content) => `/notes/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string;
  const data = await client.get({ endpoint: 'notes', contentId: id });

  return {
    props: {
      note: data,
    },
  };
};

export default NotePage;
