import Link from 'next/link';
import type { NextPage } from 'next';
import { Header } from '../components/ui/Header';
import { LinkCard } from '../components/ui/LinkCard';
import { Footer } from '../components/ui/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { ExternalLink } from '../components/ui/Link';
import { Head } from '../components/head';

const Home: NextPage = () => (
  <div className="container mx-auto px-4">
    <Head title="kimromi" description="Portfolio site of kimromi" />

    <Header />

    <PageTransition>
      <Link href="/about">
        <LinkCard note="こんにちは！">About</LinkCard>
      </Link>
      <Link href="/notes">
        <LinkCard note="作業メモ・読書ログ・ブログなど">Notes</LinkCard>
      </Link>
      <ExternalLink href="https://kimromi.hatenablog.jp/">
        <LinkCard note="旧ブログ">Hatena Blog</LinkCard>
      </ExternalLink>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
