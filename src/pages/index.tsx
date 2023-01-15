import Link from 'next/link';
import type { NextPage } from 'next';
import { Center } from '../components/layout/Center';
import { Header } from '../components/ui/Header';
import { LinkCard } from '../components/ui/LinkCard';
import { Footer } from '../components/ui/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { ExternalLink } from '../components/ui/Link';
import { Head } from '../components/head';

const Home: NextPage = () => (
  <Center>
    <Head title="kimromi" description="Portfolio site of kimromi" />

    <Header />

    <PageTransition>
      <main>
        <Link href="/about">
          <LinkCard note="こんにちは！">About</LinkCard>
        </Link>
        <Link href="/notes">
          <LinkCard note="作業メモ・読書ログ・ブログなど">Notes</LinkCard>
        </Link>
        <ExternalLink href="https://kimromi.hatenablog.jp/">
          <LinkCard note="旧ブログ">Hatena Blog</LinkCard>
        </ExternalLink>
      </main>
    </PageTransition>

    <Footer />
  </Center>
);

export default Home;
