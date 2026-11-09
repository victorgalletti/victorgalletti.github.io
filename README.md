# victorgalletti.github.io

Portfolio de Victor Galletti: apps nativos em Rust e Swift construídos com agentes de IA.

Site: https://victorgalletti.github.io (português) · https://victorgalletti.github.io/en/ (English)

Feito com [Astro](https://astro.build), publicado pelo GitHub Pages a cada push na `main`.

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # gera dist/
```

- Textos da interface: `src/i18n/ui.ts`
- Projetos (pt e en): `src/data/projects.ts`
- Índice para IA: `src/pages/llms.txt.ts` → `/llms.txt`
