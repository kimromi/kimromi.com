import Link from 'next/link';
import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { Article } from '../../lib/microCMSClient';
import { StickyHeader, Devider } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from '../../styles/article.module.css';
import { PageTransition } from '../../components/layout/PageTransition';
import { Head } from '../../components/layout/Head';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

type Props = {
  article: Article;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  const description =
    article.body.replace(/<.+?>/g, '').substring(0, 100) + '...';

  return (
    <>
      <Head
        title={`${article.title} | kimromi`}
        description={description}
        og={{ type: 'article' }}
      />

      <StickyHeader>
        <Link href="/articles">Blog</Link>
        <Devider className="hidden pc:inline" />
        <span className="hidden pc:inline">{article.title}</span>
      </StickyHeader>

      <PageTransition>
        <div className="container px-4 mx-auto mt-16">
          <main>
            <div className="pb-8 mb-12 border-b border-gray-600">
              <h1 className="pb-2 text-3xl">{article.title}</h1>
              <span className="text-sm text-gray-600">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span className="ml-2 text-sm text-gray-600">
                {article.category}
              </span>
            </div>

            <article
              className={styles.article}
              dangerouslySetInnerHTML={{
                __html: `${article.body}`,
              }}
            />
          </main>
        </div>
      </PageTransition>

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'articles',
    queries: { limit: 1000, orders: '-publishedAt' },
  });

  const paths = data.contents.map(
    (content: Article) => `/articles/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const draftKey = (context?.previewData as { draftKey?: string })?.draftKey;

  const data = await client.get({
    endpoint: 'articles',
    contentId: id,
    queries: { draftKey },
  });

  // syntax highlight
  const $ = load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      article: { ...data, body: $.html() },
    },
  };
};

export default ArticlePage;
