import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { Article } from '../../lib/microCMSClient';
import { Header } from '../../components/Header';

type Props = {
  article: Article;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4">
        <main>
          <h1>{article.title}</h1>
          <p>{article.publishedAt}</p>
          <p>{article.category}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${article.body}`,
            }}
          />
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'articles',
    queries: { limit: 1000, orders: '-publishedAt' },
  });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string;
  const data = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      article: data,
    },
  };
};

export default ArticlePage;
