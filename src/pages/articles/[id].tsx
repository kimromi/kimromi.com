import Link from 'next/link';
import { getIssues, getIssue, getIssueComments } from '../../lib/githubClient';
import type { Issue, Comments } from '../../lib/githubClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { StickyHeader, Devider } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import styles from '../../styles/article.module.css';
import { PageTransition } from '../../components/layout/PageTransition';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';
import { ExternalLink } from '../../components/ui/Link';
import { toHtml } from '../../lib/markdownToHtml';

type Props = {
  issue: Issue;
  comments: Comments;
};

const ArticlePage: NextPage<Props> = ({
  issue: { number, title: issueTitle, body },
  comments,
}) => {
  const [date, title] = issueTitle.split(' - ');
  const description =
    (body || '').replace(/<.+?>/g, '').substring(0, 100) + '...';

  return (
    <>
      <Head
        title={`${title} | kimromi`}
        description={description}
        og={{ type: 'article' }}
      />

      <StickyHeader>
        <Link href="/articles">Blog</Link>
        <Devider className="hidden pc:inline" />
        <span className="hidden pc:inline">{title}</span>
      </StickyHeader>

      <PageTransition>
        <div className="container mx-auto mt-16 px-4">
          <main>
            <div className="mb-12 border-b border-tertiary pb-8">
              <p className="mb-4 text-xs">{date}</p>
              <Heading level={1}>{title}</Heading>
            </div>

            <article className={styles.article}>
              {body && (
                <section dangerouslySetInnerHTML={{ __html: toHtml(body) }} />
              )}

              {comments.map(
                ({ node_id, body }) =>
                  body && (
                    <section
                      key={node_id}
                      dangerouslySetInnerHTML={{
                        __html: toHtml(body),
                      }}
                    />
                  )
              )}
            </article>

            <p className="mt-16 text-sm text-tertiary">
              Based on{' '}
              <ExternalLink
                underline
                href={`https://github.com/kimromi/notes/issues/${number}`}
              >
                https://github.com/kimromi/notes/issues/{number}
              </ExternalLink>
            </p>
          </main>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const issues = await getIssues({ labels: 'Blog' });

  const paths = issues.map((issue) => `/articles/${issue.number}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
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

export default ArticlePage;
