> # REACT, STYLED COMPONENTS E NEXT.JS
>
> PARTICIPE E VÁ MAIS FUNDO

Nessa primeira aula de React vamos criar uma página inicial para você montar seu quiz personalizado e também já vamos colocá-la no ar! O repositório para você acompanhar está aqui:

https://github.com/alura-challenges/aluraquiz-base/

Não se preocupe com o código que tem lá agora, você vai ver tudo durante a aula. Ele está no repositório para te auxiliar.

Vamos usar `styled-components` para criar componentes com estilo (literalmente falando) e diversos recursos do `Next.js` para, entre outras ferramentas que vamos ver nas próximas aulas, dar o código inicial do projeto e gerar os arquivos de _build_. Enquanto isso, vamos descobrindo como o React funciona e quais suas partes principais.

## Conteúdo detalhado dessa aula

- Iniciar um projeto com o boilerplate do React com Next.js e styled-components;
- Criar componentes React usando styled-components;
- Implementar tema _(theme)_ para a interface;
- Fornecer as informações de tema e dados do quiz através de uma base de dados "mockada";
- Usaremos o Next.js para criar a tag html `<head>` e as meta-infos necessárias;
- Faremos a publicação (deploy) na Vercel.

Lembre de postar o que você desenvolveu durante esta aula com a hashtag **#ImersaoReact** marcando a gente e a Alura! E vale marcar a Vercel também!

Além disso, não deixe de subir seu projeto no `GitHub` e publicá-lo na `Vercel` da forma que fizemos no vídeo.

```
Após publicar seu projeto na Vercel, adicione no About do GitHub o endereço com o seu nome de user, nos Topics marque imersao-react, alura e aluraquiz e dê uma star no repositório do projeto!
```

Também entre no [nosso server](https://discord.com/invite/uSZGtDrBep?utm_source=AluraWebsite&utm_medium=imersaopage) no **Discord** para compartilhar seus resultados e tirar suas dúvidas com a comunidade e o time da Alura. Lembre-se que a melhor forma de aprender é ensinando, então não deixe de ajudar a comunidade respondendo as dúvidas e compartilhando seu conhecimento.
 
## Atualizações do projeto (migrations)

- O projeto foi migrado para TypeScript: arquivos de código agora usam `.ts` e `.tsx`.
- Atualizado o Next.js para a versão `16.x` e React para `18.x` conforme `package.json`.
- Adicionados scripts e ferramentas de desenvolvimento: `biome` (formatação/checagem), `lefthook` (ganchos), e suporte a testes com `jest` e testes end-to-end com `@cucumber/cucumber` (Cucumber) + `ts-node`.
- Arquitetura atual: endpoints na pasta `pages/api` em TypeScript (por exemplo `pages/api/db.ts`), páginas em `pages/*.tsx`, e componentes em `src/components` usando `.tsx`.

Com essas atualizações, para desenvolvimento local use:

```bash
yarn install
yarn dev       # inicia o Next.js em modo de desenvolvimento
yarn build      # build de produção
yarn start      # inicia build em produção
yarn test       # roda os testes unitários (jest)
yarn test:e2e   # roda os testes end-to-end (Cucumber + ts-node)
```

Se abrir problemas ao rodar os comandos, verifique as versões no `package.json` e se o Node.js está atualizado.

## Desafios dessa aula!

- Crie seu próprio tema festivo, por exemplo de Halloween;
- Utilize o protótipo do Figma (link abaixo) e crie o CSS "do zero";
- Desafio do Paulo: Implemente a meta tag og:image utilizando a mesma imagem do background;
- Desafio da Ju: Pensar em como passar da página inicial para a página de quiz.

## Links importantes para você acompanhar a aula

- [Protótipo da interface no Figma](https://www.figma.com/file/cg1MIzSRRss8ggpypQbmdD/AluraQuiz?node-id=0%3A1)

- [Arquivo 'db.js'](https://github.com/alura-challenges/aluraquiz-base/blob/v1/db.json)

- [Código da Aula](https://github.com/alura-challenges/aluraquiz-base/tree/v1)

- [Gist com o CSS dos componentes usados na aula](https://github.com/alura-challenges/aluraquiz-base/pull/1/files)

- [Instale o NodeJS](https://nodejs.org/pt-br/)

- [Exemplo Next.js com styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)

- [Next.js](https://nextjs.org/)

- [styled-components](https://styled-components.com/)

- [VSCode Styled Components - melhora a sintaxe do CSS no JS](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

- [Repositório do código final da aula 1](https://github.com/alura-challenges/aluraquiz-base/tree/v1)

## Links citados nessa aula

- [Série Git e GitHub para sobrevivência](https://www.youtube.com/playlist?list=PLh2Y_pKOa4Uf-cUQOVNGlz_GVHx8QYoE6)

- [DOM e o que estudar antes de aprender React](https://youtu.be/QzDjdlF1BQI)

- [VisualStudio Code: instalação, teclas de atalho, plugins e integrações](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes)

- [Exemplos de paleta de cores com MaterialUI](https://material-ui.com/customization/color/)

- [Exemplos de paleta de cores com Adobe Color](https://color.adobe.com/trends)

- [Joguinho para treinar posicionamento com CSS Flexbox](https://flexboxfroggy.com/#pt-br)

- [O que são tagged functions](https://www.alura.com.br/artigos/tagged-template-literals)

## Conteúdos extras:

- [Features que fazem o Next.js valer a pena](https://www.youtube.com/watch?v=pb5yKjCW004)

- [Como é a infra por trás do build de um projeto React?](https://www.youtube.com/watch?v=LMCtGvLJT6c)

- [Como o React funciona? Implemente o seu](https://www.youtube.com/watch?v=5MzOCxSWrrc)

- [Criando uma Pokedex com Next.js](https://www.youtube.com/watch?v=c8mVlakBESE)

- [Styled Components, por onde começar? Os poderes do CSS in JS](https://www.youtube.com/watch?v=QdfjWRc4ySA)

- [CSS Reset](https://necolas.github.io/normalize.css/)

## Como compartilhar seu quiz:

Você pode, depois do deploy, simplesmente marcar a gente e também usar as hashtags **#ImersaoReact** e **#alura**. Quer fazer melhor? Você pode usar [esse plugin do Chrome](https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn) para gravar o seu site em ação, scrollar e mostrar efeitos especiais e ainda passear pelo seu código se usar o OBS.

Poste no seu `Instagram`, `Linkedin`, `Twitter` ou `Facebook` e marque **#ImersaoReact**, **@aluraonline** e nosso time para que a gente possa comentar. Quem sabe você aparece nos extras das aulas!
