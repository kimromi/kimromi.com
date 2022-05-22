import Link from 'next/link';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { StickyHeader, Devider } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Head } from '../../components/layout/Head';
import { Heading } from '../../components/Heading';
import { getIssues, getIssue, getIssueComments } from '../../lib/githubClient';
import { marked } from 'marked';
import type { Issue, Comments } from '../../lib/githubClient';
import styles from '../../styles/book-reports.module.css';
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
        title={`「${title}」の読書感想 | kimromi`}
        description={`「${title}」の読書感想`}
        og={{ type: 'article' }}
      />

      <StickyHeader>
        <Link href="/book-reports">Book Reports</Link>
        <Devider className="hidden pc:inline" />
        <span className="hidden pc:inline">{title}</span>
      </StickyHeader>

      <PageTransition>
        <div className="container px-4 mx-auto mt-16">
          <main>
            <Heading level={1}>{`「${title}」の読書感想`}</Heading>
            <Tags className="mb-8">
              {tags
                .filter((tag) => tag != 'Book Report')
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
              href={`https://github.com/kimromi/scraps/issues/${number}`}
            >
              https://github.com/kimromi/scraps/issues/{number}
            </ExternalLink>
          </p>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const issues = await getIssues({ labels: 'Book Report' });

  const paths = issues.map((issue) => `/book-reports/${issue.number}`);
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
