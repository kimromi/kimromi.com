import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/layout/PageTransition';

const Home: NextPage = () => (
  <div className="container px-4 mx-auto">
    <Head>
      <title>kimromi</title>
    </Head>

    <Header />

    <PageTransition>
      <Link href="/hello">
        <a>
          <Card note="About me">Hello</Card>
        </a>
      </Link>
      <Link href="/articles">
        <a>
          <Card note="Daily blog">Blog</Card>
        </a>
      </Link>
      <a href="https://twitter.com/kimromi" target="_blank" rel="noreferrer">
        <Card note="Daily tweets">Twitter</Card>
      </a>
      <a href="http://github.com/kimromi" target="_blank" rel="noreferrer">
        <Card note="Developments">GitHub</Card>
      </a>
      <a href="https://zenn.dev/kimromi" target="_blank" rel="noreferrer">
        <Card note="Technical articles">Zenn</Card>
      </a>
      <a href="https://note.com/kimromi_dev" target="_blank" rel="noreferrer">
        <Card note="Work articles">note</Card>
      </a>
      <a
        href="https://speakerdeck.com/kimromi"
        target="_blank"
        rel="noreferrer"
      >
        <Card note="Slides for speaks">Speaker Deck</Card>
      </a>
      <a href="https://kimromi.hatenablog.jp/" target="_blank" rel="noreferrer">
        <Card note="Old Blog">Hatena Blog</Card>
      </a>
    </PageTransition>

    <Footer />
  </div>
);

export default Home;
