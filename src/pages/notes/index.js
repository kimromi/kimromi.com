import Link from "next/link";
import { client } from "../../lib/microCMSClient";

const Notes = ({ notes }) => {
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
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "notes" });

  return {
    props: {
      notes: data.contents,
    },
  };
};

export default Notes
