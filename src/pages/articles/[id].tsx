import Link from 'next/link';
import { getIssues, getIssue, getIssueComments } from '../../lib/githubClient';
import type { Issue, Comments } from '../../lib/githubClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { StickyHeader, Devider } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import styles from '../../styles/article.module.css';
import { PageTransition } from '../../components/layout/PageTransition';
import { Head } from '../../components/head';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import { marked } from 'marked';
import 'highlight.js/styles/atom-one-dark.css';
import { Heading } from '../../components/ui/Heading';
import React from 'react';
import { ExternalLink } from '../../components/ui/Link';

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
                <section
                  dangerouslySetInnerHTML={{ __html: parseHtml(body) }}
                />
              )}

              {comments.map(
                ({ node_id, body }) =>
                  body && (
                    <section
                      key={node_id}
                      dangerouslySetInnerHTML={{
                        __html: parseHtml(body),
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

function parseHtml(markdownBody?: string | null) {
  if (!markdownBody) return '';

  // syntax highlight & parse HTML
  const html = marked.parse(markdownBody);
  const $ = load(html);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  return $.html();
}
