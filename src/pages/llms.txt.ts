import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  const lines = [
    '# Victor Galletti',
    '',
    '> Software developer in Brasília, Brazil. Builds native apps for Mac, iPhone and WhatsApp in Rust and Swift, with AI agents in the workflow.',
    '',
    `Site: ${base}/ (Portuguese) · ${base}/en/ (English)`,
    'GitHub: https://github.com/victorgalletti',
    'Contact: victors.galletti@gmail.com',
    '',
    '## Projects',
    '',
    ...projects.map((p) => {
      const links = [p.repo && `code: ${p.repo}`, p.watch && `video: ${p.watch}`].filter(Boolean).join(' · ');
      return `- [${p.name}](${base}/en/#${p.slug}): ${p.summary.en} Stack: ${p.stack.join(', ')}.${links ? ` (${links})` : ''}`;
    }),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
