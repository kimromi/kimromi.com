import { StickyHeader } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link, ExternalLink } from '../../components/ui/Link';
import { Head } from '../../components/layout/Head';
import { Heading } from '../../components/Heading';
import { getIssues } from '../../lib/githubClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Issues } from '../../lib/githubClient';
import { Tags, Tag } from '../../components/ui/Tag';

type Props = {
  issues: Issues;
};

const BookReportsPage: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <Head
        title="Book Reports | kimromi"
        description="読書感想"
        og={{ type: 'blog' }}
      />

      <StickyHeader>
        <Link href="/book-reports">Book Reports</Link>
      </StickyHeader>

      <PageTransition>
        <div className="container px-4 mx-auto">
          <Heading level={2}>Book Reports</Heading>
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
                  <Link href={`/book-reports/${number}`}>
                    <Card
                      title={title}
                      tags={tags.filter((tag) => tag != 'Book Report')}
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
  <div className="py-2 pl-4 mb-6 border-l-4 border-tertiary hover:border-tertiary duration-150 ease-in pc:border-secondary">
    <p className="mb-2 text-2xl">{title}</p>
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const issues = await getIssues({ labels: 'Book Report' });

  return {
    props: {
      issues,
    },
  };
};

export default BookReportsPage;
