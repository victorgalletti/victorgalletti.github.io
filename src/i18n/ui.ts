export const languages = { pt: 'Português', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    'meta.title': 'Victor Galletti · desenvolvedor que resolve problemas com IA',
    'meta.description':
      'Victor Galletti, desenvolvedor em Brasília. Uso agentes de IA para desenvolver software e resolver problemas, de apps nativos em Rust e Swift a integrações com o WhatsApp.',
    'hero.kicker': 'Victor Galletti · Brasília',
    'hero.title': 'Resolvo problemas com software e IA.',
    'hero.lead':
      'Sou desenvolvedor em Brasília. A IA está no meu dia a dia: é com ela que eu aprendo, investigo, desenvolvo e coloco no ar.',
    'hero.cta': 'Ver projetos',
    'projects.title': 'Projetos',
    'projects.video': 'Vídeo em breve',
    'project.repo': 'Código',
    'carousel.prev': 'Projeto anterior',
    'carousel.next': 'Próximo projeto',
    'project.private': 'Código privado',
    'footer.contact': 'Fale comigo',
    'footer.building': 'Site em construção: os vídeos dos projetos estão chegando.',
  },
  en: {
    'meta.title': 'Victor Galletti · a developer who solves problems with AI',
    'meta.description':
      'Victor Galletti, a developer in Brasília, Brazil. I use AI agents to build software and solve problems, from native apps in Rust and Swift to WhatsApp integrations.',
    'hero.kicker': 'Victor Galletti · Brasília, Brazil',
    'hero.title': 'I solve problems with software and AI.',
    'hero.lead':
      "I'm a developer in Brasília, Brazil. AI is part of my everyday work: it's how I learn, investigate, build and ship.",
    'hero.cta': 'See projects',
    'projects.title': 'Projects',
    'projects.video': 'Video coming soon',
    'project.repo': 'Code',
    'carousel.prev': 'Previous project',
    'carousel.next': 'Next project',
    'project.private': 'Private code',
    'footer.contact': 'Get in touch',
    'footer.building': 'Site under construction: project videos are on the way.',
  },
} as const;

export function t(lang: Lang) {
  return (key: keyof (typeof ui)['pt']) => ui[lang][key];
}

export const homePath = (lang: Lang) => (lang === 'pt' ? '/' : `/${lang}/`);
