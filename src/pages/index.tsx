import Head from 'next/head';
import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/layout/PageTransition';
import { Link } from '../components/Link/Link';
import { ExternalLink } from '../components/Link/ExternalLink';

const Home: NextPage = () => (
  <div className="container px-4 mx-auto">
    <Head>
      <title>kimromi</title>
    </Head>

    <Header />

    <PageTransition>
      <Link href="/hello">
        <Card note="About me">Hello</Card>
      </Link>
      <Link href="/articles">
        <Card note="Daily blog">Blog</Card>
      </Link>
      <ExternalLink href="https://twitter.com/kimromi">
        <Card note="Daily tweets">Twitter</Card>
      </ExternalLink>
      <ExternalLink href="http://github.com/kimromi">
        <Card note="Developments">GitHub</Card>
      </ExternalLink>
      <ExternalLink href="https://zenn.dev/kimromi">
        <Card note="Technical articles">Zenn</Card>
      </ExternalLink>
      <ExternalLink href="https://note.com/kimromi_dev">
        <Card note="Work articles">note</Card>
      </ExternalLink>
      <ExternalLink href="https://speakerdeck.com/kimromi">
        <Card note="Slides for speaks">Speaker Deck</Card>
      </ExternalLink>
      <ExternalLink href="https://kimromi.hatenablog.jp/">
        <Card note="Old Blog">Hatena Blog</Card>
      </ExternalLink>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
