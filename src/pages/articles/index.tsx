import Link from 'next/link';
import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Articles } from '../../lib/microCMSClient';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

type Props = Articles;

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4">
        <h1 className="mb-8 pb-4 border-b border-gray-600 text-2xl">Blog</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                <a>
                  <Card
                    note={`${new Date(
                      article.publishedAt
                    ).toLocaleDateString()}`}
                  >
                    {article.title}
                  </Card>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
