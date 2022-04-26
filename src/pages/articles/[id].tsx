import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import type { Article } from '../../lib/microCMSClient';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from '../../styles/article.module.css';

type Props = {
  article: Article;
};

const ArticlePage: NextPage<Props> = ({ article }) => {
  return (
    <>
      <Header />

      <div className="container px-4 mx-auto">
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

      <Footer />
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
