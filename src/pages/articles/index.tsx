import type { NextPage, GetStaticProps } from 'next';
import { getIssues } from '../../lib/githubClient';
import type { Issues } from '../../lib/githubClient';
import { StickyHeader } from '../../components/layout/Header';
import { LinkCard } from '../../components/ui/LinkCard';
import { Footer } from '../../components/layout/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link } from '../../components/ui/Link';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';

type Props = {
  issues: Issues;
};

const ArticlesPage: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <Head
        title="Blog | kimromi"
        description="Daily blog"
        og={{ type: 'blog' }}
      />

      <StickyHeader>
        <Link href="/articles">Blog</Link>
      </StickyHeader>

      <PageTransition>
        <div className="container mx-auto px-4">
          <Heading level={2}>Blog</Heading>
          <ul>
            {issues.map((issue) => {
              const [date, title] = issue.title.split(' - ');
              return (
                <li key={issue.id}>
                  <Link href={`/articles/${issue.number}`}>
                    <LinkCard note={date}>{title}</LinkCard>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const issues = await getIssues({
    labels: 'Blog',
    state: process.env.NODE_ENV === 'production' ? 'closed' : 'all',
  });

  return {
    props: {
      issues,
    },
  };
};

export default ArticlesPage;
