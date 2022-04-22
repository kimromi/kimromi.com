import { client } from "../../lib/microCMSClient";

const Note = ({ note }) => {
  return (
    <main>
      <h1>{note.title}</h1>
      <p>{note.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${note.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "notes" });

  const paths = data.contents.map((content) => `/notes/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "notes", contentId: id });

  return {
    props: {
      note: data,
    },
  };
};

export default Note;
