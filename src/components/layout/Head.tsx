import NextHead from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description: string;
  og?: {
    title?: string;
    type?: 'website' | 'blog' | 'article';
    url?: string;
  };
};

export const Head = ({ title, description, og = {} }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const canonical = `https://www.kimromi.com${asPath}`;

  return (
    <NextHead>
      <meta name="robots" content="all" />
      <link rel="canonical" href={canonical} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={og.title || title} />
      <meta property="og:type" content={og.type || 'website'} />
      <meta property="og:site_name" content="kimromi" />
      <meta property="og:url" content={og.url || canonical} />
      <meta property="og:image" content="https://www.kimromi.com/logo.png" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kimromi" />
    </NextHead>
  );
};
