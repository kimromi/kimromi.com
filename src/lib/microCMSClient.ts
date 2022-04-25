import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kimromi',
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Note = {
  id: string;
  title: string;
  body: string;
  category?: string;
  publishedAt: string;
};

export type Notes = {
  notes: Note[];
};
