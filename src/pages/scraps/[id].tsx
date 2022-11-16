import Link from 'next/link';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { StickyHeader, Devider } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';
import { getIssues, getIssue, getIssueComments } from '../../lib/githubClient';
import { marked } from 'marked';
import type { Issue, Comments } from '../../lib/githubClient';
import styles from '../../styles/reports.module.css';
import { Tags, Tag } from '../../components/ui/Tag';
import { ExternalLink } from '../../components/ui/Link';

type Props = {
  issue: Issue;
  comments: Comments;
};

const ScrapPage: NextPage<Props> = ({
  issue: { number, title, body, labels },
  comments,
}) => {
  let tags: string[] = [];
  for (const label of labels) {
    if (typeof label === 'string') {
      tags.push(label);
    } else if (label.name) {
      tags.push(label.name);
    }
  }

  return (
    <>
      <Head
        title={`${title} | kimromi`}
        description={title}
        og={{ type: 'article' }}
      />

      <StickyHeader>
        <Link href="/scraps">Scraps</Link>
        <Devider className="hidden pc:inline" />
        <span className="hidden pc:inline">{title}</span>
      </StickyHeader>

      <PageTransition>
        <div className="container mx-auto mt-16 px-4">
          <main>
            <Heading level={1}>{title}</Heading>
            <Tags className="mb-8">
              {tags
                .filter((tag) => tag != 'Scrap')
                .map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>

            {body && (
              <section
                className={styles.report}
                dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
              />
            )}

            {comments.map(
              ({ node_id, body }) =>
                body && (
                  <section
                    key={node_id}
                    className={styles.report}
                    dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
                  />
                )
            )}
          </main>

          <p className="mt-16 text-sm text-tertiary">
            Based on{' '}
            <ExternalLink
              underline
              href={`https://github.com/kimromi/notes/issues/${number}`}
            >
              https://github.com/kimromi/notes/issues/{number}
            </ExternalLink>
          </p>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const issues = await getIssues({ labels: 'Scrap' });

  const paths = issues.map((issue) => `/scraps/${issue.number}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id;

  const issue = await getIssue({
    issueNumber: Number(id),
  });
  const comments = await getIssueComments({
    issueNumber: Number(id),
  });

  return {
    props: {
      issue: issue.data,
      comments: comments.data,
    },
  };
};

export default ScrapPage;
