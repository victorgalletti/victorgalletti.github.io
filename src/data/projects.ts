import type { Lang } from '../i18n/ui';

export interface Project {
  slug: string;
  name: string;
  color: string;
  stack: string[];
  repo?: string;
  watch?: string;
  summary: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    slug: 'portward',
    name: 'Portward',
    color: '#ff2a36',
    stack: ['Rust', 'macOS'],
    repo: 'https://github.com/victorgalletti/portward',
    summary: {
      pt: 'Filtro de privacidade e monitor de rede para o Mac. Bloqueia anúncios e rastreadores no DNS e mostra qual app fala com qual servidor, em que país e qual IP seu cada servidor vê.',
      en: 'Privacy filter and network monitor for the Mac. Blocks ads and trackers at the DNS level and shows which app talks to which server, in which country, and which of your IPs each server sees.',
    },
  },
  {
    slug: 'android-link',
    name: 'Android Link',
    color: '#4e97fa',
    stack: ['Swift', 'SwiftUI', 'adb', 'scrcpy'],
    summary: {
      pt: 'Espelha o Android no Mac sem cabo e abre cada app do celular numa janela própria do Mac. Proxy no celular sem instalar nada, Spotlight e Atalhos.',
      en: 'Mirrors an Android phone on the Mac without a cable and opens each phone app in its own Mac window. Phone proxy with nothing to install, plus Spotlight and Shortcuts.',
    },
  },
  {
    slug: 'carteira',
    name: 'Carteira',
    color: '#1de966',
    stack: ['Tauri 2', 'Rust', 'Next.js', 'Swift', 'Supabase'],
    summary: {
      pt: 'Carteira de cripto (BTC, USDT, PAXG) e renda fixa com app de Mac, web e iPhone sincronizados em tempo real.',
      en: 'Crypto (BTC, USDT, PAXG) and fixed-income wallet with Mac, web and iPhone apps synced in real time.',
    },
  },
  {
    slug: 'zappion',
    name: 'Zappion',
    color: '#25d366',
    stack: ['Next.js', 'Supabase', 'WhatsApp Cloud API', 'MCP'],
    repo: 'https://github.com/victorgalletti/zappion',
    summary: {
      pt: 'Atendimento open source na API oficial do WhatsApp, com coexistência: o número continua no app do celular e as conversas aparecem também no Zappion.',
      en: 'Open-source customer service on the official WhatsApp API, with coexistence: the number stays in the phone app and conversations also show up in Zappion.',
    },
  },
  {
    slug: 'hauls',
    name: 'Hauls',
    color: '#e9a21d',
    stack: ['Swift', 'SwiftUI', 'Next.js', 'Prisma', 'SQLite'],
    repo: 'https://github.com/victorgalletti/hauls-china',
    summary: {
      pt: 'Calculadora do custo final de importação em reais, com registro de compras, reembolso por item e valor por pessoa. App nativo de Mac e app web no mesmo banco.',
      en: 'Calculates the final landed cost of imports in BRL, with a purchase log, per-item refunds and per-person amounts. Native Mac app and web app on the same database.',
    },
  },
  {
    slug: 'side-quest-stories',
    name: 'Side Quest Stories',
    color: '#b39ddb',
    stack: ['AI', 'SVG', 'ffmpeg', 'Whisper'],
    watch: 'https://youtu.be/lxiAWSQlyJE',
    summary: {
      pt: 'Canal de vídeos animados feitos com IA, com um pipeline próprio do roteiro ao vídeo final: fundos, personagens em SVG, música, efeitos e legendas.',
      en: 'Animated video channel made with AI, with an in-house pipeline from script to final cut: backgrounds, SVG characters, music, sound effects and captions.',
    },
  },
];
