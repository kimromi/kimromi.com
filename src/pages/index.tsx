import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="container mx-auto px-4">
    <Link href="/notes">Notes</Link>
  </div>
);

export default Home;
