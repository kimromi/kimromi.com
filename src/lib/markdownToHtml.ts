import { marked } from 'marked';
import { load } from 'cheerio';
import hljs from 'highlight.js';

import 'highlight.js/styles/atom-one-dark.css';

export function toHtml(markdownBody?: string | null) {
  if (!markdownBody) return '';

  // syntax highlight & parse HTML
  const html = marked.parse(markdownBody);
  const $ = load(html);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  return $.html();
}
