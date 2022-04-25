import Link from 'next/link';
import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

const Home: NextPage = () => (
  <div className="container mx-auto px-4">
    <Header />

    <div>
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
    </div>
  </div>
);

export default Home;
