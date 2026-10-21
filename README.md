# Arretech

Landing page em React, TypeScript, Vite e Tailwind CSS.

Use Node.js 22.12 ou superior e instale as dependências com `npm ci`.

## Desenvolvimento

```sh
npm run dev
```

Os mocks de API são ativados somente em desenvolvimento.

## Verificação e build

```sh
npm run build
npm run preview
npm audit
```

O build executa a checagem TypeScript antes de gerar a pasta `dist`. O projeto não usa ESLint.

## Dependências

O override de `source-map-js` exige a versão corrigida 1.2.2 ou superior dentro da versão principal 1. O pacote npm `gh-pages` foi substituído pelo script `scripts/deploy.mjs` para remover sua dependência transitiva de `braces`, apontada como vulnerável na auditoria.

## Publicação

```sh
npm run deploy
```

É necessário ter Git instalado, `user.name` e `user.email` configurados e permissão de escrita no remoto `origin`.

Ao executar `npm run deploy`:

1. O npm executa `predeploy`, que verifica o TypeScript e gera `dist`.
2. O `deploy.mjs` prepara um checkout temporário da branch `gh-pages`.
3. O script substitui os arquivos publicados pelo conteúdo de `dist` e cria um commit quando há mudanças.
4. O Git envia esse commit para `origin/gh-pages`, e o script remove a pasta temporária.

A branch de trabalho e o histórico de publicação são preservados. O site continua hospedado no GitHub Pages; apenas a ferramenta que envia os arquivos foi substituída.

O script mantém `npm run deploy` funcionando sem reinstalar a dependência vulnerável. Ele não é uma exigência do GitHub Pages e pode ser substituído por outra ferramenta de publicação. Sua manutenção fica a cargo do projeto.

Executar `node scripts/deploy.mjs` diretamente publica o conteúdo já existente em `dist`, sem gerar um novo build. Prefira `npm run deploy` para publicar uma versão atualizada.
