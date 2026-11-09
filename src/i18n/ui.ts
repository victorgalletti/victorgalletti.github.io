export const languages = { pt: 'Português', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    'meta.title': 'Victor Galletti · apps nativos com IA',
    'meta.description':
      'Portfolio de Victor Galletti: apps nativos para Mac, iPhone e WhatsApp em Rust e Swift, construídos com agentes de IA.',
    'hero.kicker': 'Victor Galletti · Brasília',
    'hero.title': 'Apps nativos de verdade, feitos com IA.',
    'hero.lead':
      'Construo apps para Mac, iPhone e WhatsApp em Rust e Swift, com agentes de IA no fluxo do começo ao fim.',
    'hero.cta': 'Ver projetos',
    'projects.title': 'Projetos',
    'projects.video': 'Vídeo em breve',
    'project.repo': 'Código',
    'project.watch': 'Assistir',
    'project.private': 'Código privado',
    'footer.contact': 'Fale comigo',
    'footer.building': 'Site em construção: os vídeos dos projetos estão chegando.',
  },
  en: {
    'meta.title': 'Victor Galletti · native apps built with AI',
    'meta.description':
      "Victor Galletti's portfolio: native apps for Mac, iPhone and WhatsApp in Rust and Swift, built with AI agents.",
    'hero.kicker': 'Victor Galletti · Brasília, Brazil',
    'hero.title': 'Real native apps, built with AI.',
    'hero.lead':
      'I build apps for Mac, iPhone and WhatsApp in Rust and Swift, with AI agents in the loop from start to finish.',
    'hero.cta': 'See projects',
    'projects.title': 'Projects',
    'projects.video': 'Video coming soon',
    'project.repo': 'Code',
    'project.watch': 'Watch',
    'project.private': 'Private code',
    'footer.contact': 'Get in touch',
    'footer.building': 'Site under construction: project videos are on the way.',
  },
} as const;

export function t(lang: Lang) {
  return (key: keyof (typeof ui)['pt']) => ui[lang][key];
}

export const homePath = (lang: Lang) => (lang === 'pt' ? '/' : `/${lang}/`);
