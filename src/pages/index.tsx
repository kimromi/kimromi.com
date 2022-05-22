import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/layout/Header';
import { LinkCard } from '../components/ui/LinkCard';
import { Footer } from '../components/layout/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { Link, ExternalLink } from '../components/ui/Link';
import { Head } from '../components/head';

const Home: NextPage = () => (
  <div className="container px-4 mx-auto">
    <Head title="kimromi" description="Portfolio site of kimromi" />

    <Header />

    <PageTransition>
      <Link href="/about">
        <LinkCard note="Hello!">About</LinkCard>
      </Link>
      <Link href="/articles">
        <LinkCard note="Daily blog">Blog</LinkCard>
      </Link>
      <Link href="/book-reports">
        <LinkCard note="Impressions of reading a book">Book Reports</LinkCard>
      </Link>
      <ExternalLink href="/storybook/index.html">
        <LinkCard note="Component catalog of this site">Storybook</LinkCard>
      </ExternalLink>
      <ExternalLink href="https://kimromi.hatenablog.jp/">
        <LinkCard note="Old Blog">Hatena Blog</LinkCard>
      </ExternalLink>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
