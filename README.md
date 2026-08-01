# Glossário de fatores psicossociais no trabalho

Glossário técnico da Escutaris com os termos usados na avaliação de fatores psicossociais
exigida pela NR-1: conceitos, termos do dia a dia das organizações, instrumentos de avaliação
e legislação, cada um com definição e exemplo prático.

No ar em **https://glossario.escutaris.com**

## Como mexer

Precisa de Node.js instalado.

```sh
npm install     # uma vez
npm run dev     # abre em http://localhost:8080
npm run build   # gera a versão de produção em dist/
npm run preview # confere a versão de produção antes de publicar
```

## Onde fica cada coisa

| O que | Onde |
| --- | --- |
| Os termos do glossário | `src/data/*.ts` (um arquivo por seção) |
| Cores e fontes da marca | `tailwind.config.ts` e `src/index.css` |
| Fontes Garet | `public/fonts/` |
| Logos, ícones e imagem de compartilhamento | `public/` |
| Título, descrição e dados de compartilhamento | `index.html` |

Para acrescentar um termo, basta adicionar um item no arquivo da seção correspondente,
seguindo o formato dos que já existem. O campo `aliases` serve para siglas e sinônimos:
o que estiver ali também é encontrado na busca.

## Publicação

Deploy na Vercel, projeto `escutaris-glossario-interativo`.

```sh
npx vercel --prod
```

## Tecnologias

Vite, React, TypeScript, Tailwind CSS e shadcn/ui.
