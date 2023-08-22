---
title: "Diretrizes para desenvolvedores da Web"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

Este documento é para **somente desenvolvedores de sites** para alterar os modelos e estilo do [projeto de workshop da Nuevo Foundation](https://github.com/nuevoFoundation/workshops).

## Antes de começar

Antes de adicionar/atualizar o site, certifique-se de ter sincronizado com a equipe do projeto e o trabalho existente no [Project Backlog](https://github.com/NuevoFoundation/workshops/projects/1).

## Configurar

Siga as instruções na página [Getting Started](../getting-started/) para instalar o Git e o Hugo para testar o projeto localmente.

## Estilos e estrutura de design da Web

- **Imagens:** As imagens do site devem ser `themes/images`
- **CSS** Ignore os arquivos SCSS e apenas use os arquivos CSS em `/themes/docdock/static/css/` Certifique-se de adicionar uma referência ao CSS que deseja incluir no arquivo `head.html` em `/themes/docdock/layouts /partials/flex/head.html`

## Dissecando uma página de workshop

- **Modelo de página inteira**: Para ver todos os componentes de uma página, incluindo cabeçalho, menu, corpo, rodapé, consulte `/themes/docdock/layouts/_default/baseof.html`
- **Head**: arquivos meta, CSS e JS `/themes/docdock/layouts/partials/flex/head.html`
- **Navegação superior/menu**: Não use valores docDock config.toml, em vez disso adicione/edite HTML em: `/themes/docdock/layouts/partials/flex/body-before-content.html`
- **Menu esquerdo**: `/themes/docdock/layouts/partials/flex/menu.html`
- **Navegação no rodapé**: `/themes/docdock/layouts/partials/flex/body-after-content.html`
- **Caixa de metadados**: `/themes/docdock/layouts/partials/flex/body-after-content.html`

## Socorro, o CSS sumiu

Um desafio com Hugo é que um parâmetro chave na construção é a variável `baseURL`. Se o conteúdo estiver carregando e o CSS não, é provável que seja um problema com a configuração `baseURL`.

Você pode alterar o `baseURL` ao criar conteúdo em vez de alterar o arquivo config.toml. O exemplo abaixo reduzirá o CSS e o JS, definirá o baseURL para o URL .org de produção e copiará os resultados para o diretório `public`.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## Dicas e truques

- **Ignore Public**: Por padrão, executar `hugo` sem parâmetros irá construir o site para o diretório público. Certifique-se de não adicionar o diretório público ao controle de origem (está no gitignore agora).
- **Navegação à esquerda**: você pode ocultar o conteúdo da navegação à esquerda definindo metadados no arquivo hidden: true (como a marcação index.md deste workshop!)
- **Parciais**: Para componentes reutilizáveis em uma página, crie uma nova parcial em `/themes/docdock/layouts/partials/flex/`.