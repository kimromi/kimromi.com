import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/layout/Header';
import { LinkCard } from '../components/ui/LinkCard';
import { Footer } from '../components/layout/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { Link, ExternalLink } from '../components/ui/Link';
import { Head } from '../components/head';

const Home: NextPage = () => (
  <div className="container mx-auto px-4">
    <Head title="kimromi" description="Portfolio site of kimromi" />

    <Header />

    <PageTransition>
      <Link href="/about">
        <LinkCard note="こんにちは！">About</LinkCard>
      </Link>
      <Link href="/articles">
        <LinkCard note="ブログ">Blog</LinkCard>
      </Link>
      <Link href="/reports">
        <LinkCard note="書籍や記事を読んだ感想">Reports</LinkCard>
      </Link>
      <ExternalLink href="https://kimromi.hatenablog.jp/">
        <LinkCard note="旧ブログ">Hatena Blog</LinkCard>
      </ExternalLink>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
