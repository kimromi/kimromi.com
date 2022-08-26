import { StickyHeader } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link, ExternalLink } from '../../components/ui/Link';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';
import { getIssues } from '../../lib/githubClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Issues } from '../../lib/githubClient';
import { Tags, Tag } from '../../components/ui/Tag';

type Props = {
  issues: Issues;
};

const ReportsPage: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <Head
        title="Reports | kimromi"
        description="読書や記事を呼んでの感想"
        og={{ type: 'blog' }}
      />

      <StickyHeader>
        <Link href="/reports">Reports</Link>
      </StickyHeader>

      <PageTransition>
        <div className="container mx-auto px-4">
          <Heading level={2}>Reports</Heading>
          <ul>
            {issues.map(({ node_id, number, title, labels }) => {
              let tags: string[] = [];
              for (const label of labels) {
                if (typeof label === 'string') {
                  tags.push(label);
                } else if (label.name) {
                  tags.push(label.name);
                }
              }

              return (
                <li key={node_id}>
                  <Link href={`/reports/${number}`}>
                    <Card
                      title={title}
                      tags={tags.filter((tag) => tag !== 'Report')}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="mt-16 text-sm text-tertiary">
            Based on{' '}
            <ExternalLink
              underline
              href="https://github.com/kimromi/scraps/issues"
            >
              https://github.com/kimromi/scraps/issues
            </ExternalLink>
          </p>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

type CardProps = {
  title: string;
  tags: string[];
};

const Card: React.FC<CardProps> = ({ title, tags }) => (
  <div className="mb-6 border-l-4 border-tertiary py-2 pl-4 duration-150 ease-in hover:border-tertiary pc:border-secondary">
    <p className="mb-2 text-2xl">{title}</p>
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const issues = await getIssues({ labels: 'Report' });

  return {
    props: {
      issues,
    },
  };
};

export default ReportsPage;
