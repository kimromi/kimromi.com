import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { LinkCard } from '../components/LinkCard';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { Link, ExternalLink } from '../components/Link';
import { Head } from '../components/layout/Head';

const Home: NextPage = () => (
  <div className="container px-4 mx-auto">
    <Head title="kimromi" description="Portfolio site of kimromi" />

    <Header />

    <PageTransition>
      <Link href="/hello">
        <LinkCard note="About me">Hello</LinkCard>
      </Link>
      <Link href="/articles">
        <LinkCard note="Daily blog">Blog</LinkCard>
      </Link>
      <ExternalLink href="/storybook/index.html">
        <LinkCard note="Storybook of this site">Storybook</LinkCard>
      </ExternalLink>
      <ExternalLink href="https://kimromi.hatenablog.jp/">
        <LinkCard note="Old Blog">Hatena Blog</LinkCard>
      </ExternalLink>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
