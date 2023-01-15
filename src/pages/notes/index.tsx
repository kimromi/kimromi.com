import Link from 'next/link';
import { StickyHeader } from '../../components/ui/Header';
import { Footer } from '../../components/ui/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { ExternalLink } from '../../components/ui/Link';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';
import { LinkCard } from '../../components/ui/LinkCard';
import { getIssues } from '../../lib/githubClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Issues } from '../../lib/githubClient';

type Props = {
  issues: Issues;
};

const NotesPage: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <Head
        title="Notes | kimromi"
        description="ブログ・作業ログ・読書・インプットログなど"
        og={{ title: 'Notes', type: 'blog' }}
      />

      <StickyHeader>Notes</StickyHeader>

      <PageTransition>
        <div className="container mx-auto px-4">
          <Heading level={2}>Notes</Heading>
          <ul>
            {issues.map(({ node_id, number, title, labels, html_url }) => {
              if (/pull/.test(html_url)) return;

              let tags: string[] = [];
              for (const label of labels) {
                const tag = typeof label === 'string' ? label : label.name;
                if (tag) tags.push(tag);
              }

              let note = '🙂 ブログ';
              if (tags.includes('Scrap')) {
                note = '📝 作業ログ・知見';
              } else if (tags.includes('Book')) {
                note = '📚 読書ログ';
              } else if (tags.includes('Audio')) {
                note = '👂 Podcastなどを聴いて';
              }

              return (
                <li key={node_id}>
                  <Link href={`/notes/${number}`}>
                    <LinkCard note={note}>{title}</LinkCard>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-16 text-sm text-tertiary">
            Based on{' '}
            <ExternalLink
              underline
              href="https://github.com/kimromi/notes/issues"
            >
              https://github.com/kimromi/notes/issues
            </ExternalLink>
          </p>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const issues = await getIssues({});

  return {
    props: {
      issues,
    },
  };
};

export default NotesPage;
