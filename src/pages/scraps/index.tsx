import Link from 'next/link';
import { StickyHeader } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { PageTransition } from '../../components/layout/PageTransition';
import { ExternalLink } from '../../components/ui/Link';
import { Head } from '../../components/head';
import { Heading } from '../../components/ui/Heading';
import { LinkCard } from '../../components/ui/LinkCard';
import { getIssues } from '../../lib/githubClient';
import type { NextPage, GetStaticProps } from 'next';
import type { Issues } from '../../lib/githubClient';

type Props = {
  issues: Issues;
};

const ScrapsPage: NextPage<Props> = ({ issues }) => {
  return (
    <>
      <Head
        title="Scraps | kimromi"
        description="作業メモや知見"
        og={{ type: 'blog' }}
      />

      <StickyHeader>
        <Link href="/scraps">Scraps</Link>
      </StickyHeader>

      <PageTransition>
        <div className="container mx-auto px-4">
          <Heading level={2}>Scraps</Heading>
          <ul>
            {issues.map(({ node_id, number, title }) => (
              <li key={node_id}>
                <Link href={`/scraps/${number}`}>
                  <LinkCard>{title}</LinkCard>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-16 text-sm text-tertiary">
            Based on{' '}
            <ExternalLink
              underline
              href="https://github.com/kimromi/notes/issues"
            >
              https://github.com/kimromi/notes/issues
            </ExternalLink>
          </p>
        </div>
      </PageTransition>

      <Footer showExternalServices />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      issues: await getIssues({ labels: 'Scrap' }),
    },
  };
};

export default ScrapsPage;
