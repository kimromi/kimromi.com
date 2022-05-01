import Head from 'next/head';
import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Articles } from '../../lib/microCMSClient';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link } from '../../components/Link/Link';

type Props = Articles;

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog | kimromi</title>
      </Head>

      <Header isSticky>
        <span className="px-2 text-sm text-gray-600">/</span>
        <Link href="/articles">Blog</Link>
      </Header>

      <PageTransition>
        <div className="container px-4 mx-auto">
          <h1 className="mt-12 mb-8 text-4xl">Blog</h1>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/articles/${article.id}`}>
                  <Card
                    note={`${new Date(
                      article.publishedAt
                    ).toLocaleDateString()}`}
                  >
                    {article.title}
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageTransition>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({
    endpoint: 'articles',
    queries: { limit: 1000, orders: '-publishedAt' },
  });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default ArticlesPage;
