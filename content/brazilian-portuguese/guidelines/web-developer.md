---
title: "Regras para Desenvolvedores Web"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

Este documento é destinado apenas a **desenvolvedores de sites** para alterar os modelos e estilos do [projeto de workshop da Nuevo Foundation](https://github.com/nuevoFoundation/workshops).

## Antes de começar

Antes de adicionar/atualizar o site, certifique-se de ter sincronizado com a equipe do projeto e o trabalho existente no [Project Backlog](https://github.com/NuevoFoundation/workshops/projects/1).

## Configurando

Siga as instruções na página [Introdução](../getting-started/) para instalar o Git e o Hugo para testar o projeto localmente.

## Estilos e estrutura de web design

- **Imagens:** As imagens do site devem ser `temas/imagens`
- **CSS** Ignore os arquivos SCSS e use apenas arquivos CSS em `/themes/docdock/static/css/` Certifique-se de adicionar uma referência ao CSS que deseja incluir no arquivo `head.html` em ` /themes/docdock/layouts/partials/flex/head.html`

## Como é feita uma página de workshop 📄  

- **Página completa:** Para ver como tudo funciona junto (cabeçalho, menu, corpo e rodapé), olhe o arquivo `/themes/docdock/layouts/_default/baseof.html`.  
- **Cabeçalho:** Aqui ficam os arquivos Meta, CSS e JS: `/themes/docdock/layouts/partials/flex/head.html`.  
- **Menu superior:** Não mexa no arquivo `config.toml`, altere diretamente o HTML em `/themes/docdock/layouts/partials/flex/body-before-content.html`.  
- **Menu lateral:** Está em `/themes/docdock/layouts/partials/flex/menu.html`.  
- **Rodapé:** Fica em `/themes/docdock/layouts/partials/flex/body-after-content.html`.  
- **Caixa de informações da página:** Também está em `/themes/docdock/layouts/partials/flex/body-after-content.html`.  

## Socorro, o CSS sumiu

Um desafio do Hugo é que um parâmetro chave na construção é a variável `baseURL`. Se o conteúdo estiver carregando e o CSS não, provavelmente há um problema com a configuração `baseURL`.

Você pode alterar o `baseURL` ao criar conteúdo em vez de alterar o arquivo config.toml. O exemplo abaixo irá reduzir o CSS e JS, definir o baseURL para o URL .org de produção e copiar os resultados para o diretório `public`.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## Dicas e truques

- **Ignorar Público**: Por padrão, executar `hugo` sem parâmetros criará o site no diretório público. Certifique-se de não adicionar o diretório público ao controle de origem (está no gitignore agora).
- **Navegação esquerda**: você pode ocultar o conteúdo da navegação esquerda definindo metadados no arquivo oculto: true (como a marcação index.md deste workshop!)
- **Parciais**: Para componentes reutilizáveis ​​em uma página, crie um novo parcial em `/themes/docdock/layouts/partials/flex/`.
