import { client } from '../../lib/microCMSClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function preview(
  { query }: NextApiRequest,
  res: NextApiResponse
) {
  const slug = query.slug as string;
  const draftKey = query.draftKey as string;

  if (!slug) return res.status(404).end();

  const { id } = await client.get({
    endpoint: 'articles',
    contentId: slug,
    queries: { fields: 'id', draftKey },
  });

  if (!id) return res.status(401).json({ message: 'Invalid slug' });

  res.setPreviewData({ slug: id, draftKey });
  res.writeHead(307, { Location: `/articles/${id}` });
  res.end('Preview mode enabled');
}
