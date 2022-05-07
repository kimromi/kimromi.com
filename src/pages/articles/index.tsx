import { client } from '../../lib/microCMSClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Articles } from '../../lib/microCMSClient';
import { StickyHeader } from '../../components/Header';
import { LinkCard } from '../../components/LinkCard';
import { Footer } from '../../components/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { Link } from '../../components/Link';
import { Head } from '../../components/layout/Head';

type Props = Articles;

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head
        title="Blog | kimromi"
        description="Daily blog"
        og={{ type: 'blog' }}
      />

      <StickyHeader>
        <Link href="/articles">Blog</Link>
      </StickyHeader>

      <PageTransition>
        <div className="container px-4 mx-auto">
          <h1 className="mt-12 mb-8 text-4xl">Blog</h1>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/articles/${article.id}`}>
                  <LinkCard
                    note={`${new Date(
                      article.publishedAt
                    ).toLocaleDateString()}`}
                  >
                    {article.title}
                  </LinkCard>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageTransition>

      <Footer showExternalServices />
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
