---
title: "Resposta chave - Noções básicas da web"
date: 2020-03-28T12:53:41-07:00
draft: false
hidden: true
weight: 15
---

### Nota especial:

Este currículo permite que os alunos sejam criativos. O abaixo é apenas um exemplo do que eles podem fazer, por favor, use seu bom senso e peça orientação, se necessário. A chave de resposta fornecida aqui é bastante longa porque incluímos trechos de HTML completo para contexto.

Quando um aluno clica em 'Experimente você mesmo!' ele abrirá uma nova guia com parte do código HTML (e código CSS) já montado.

## Desafio 1

Solução deve ter:
1. Tags de cabeçalho para adicionar um título e as tags de parágrafo para escrever um parágrafo sobre Benji.
2. (opcional) Uma lista das guloseimas favoritas de Benji: peru, manteiga de amendoim e queijo ralado

```HTML
<head>
  <!-- Challenge 1: Add title and header tags. -->
  <title>Meu título emocionante!</title>
</head>
<body>
  <!-- Content goes inside the body -->
  <!-- Challenge 1: Add a header, a paragraph. -->
  <h1>Sobre Benji</h1>
  <p>Benji é um cachorrinho fofo. Seu esporte favorito é buscar. Ele gosta de longas caminhadas na floresta. Uma vez ele encontrou um grande bastão.</p>
  <!-- Challenge 1 (optional) Add a list. -->
  <h5> Lanches favoritos de Benji </h5>
  <ul>
    <li>Peito de peru</li>
    <li>Manteiga de amendoim</li>
    <li>Queijo de corda</li>
  </ul>
</body>
```

## Desafio 2

A solução deve ter:

1. HTML: um atributo de identificação para uma das tags do cabeçalho. Por exemplo, ```<header id="page-title">```
2. CSS: A different title color by adding ```color: yellow;``` inside the curly braces
3. CSS: A different font by adding ```font-family: ‘Roboto Mono’, monospace;``` inside the curly braces and adding @import url(‘https://fonts.googleapis.com/css?family=Roboto+Mono'); at the top of the CSS tab

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Isso será exibido na guia do navegador!</title>
  </head>
  <body>
    <!-- Challenge 2: page-title id attribute -->
    <header id="page-title">
      <h1 id="page-title">Meu nome é Benji</h1>
      <p>Estou procurando minha família.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Informação:</h2>
      <ul>
        <li>Eu sou uma mistura de Lab/Grandes Pirinéus</li>
        <li>Tenho 1 ano de idade</li>
        <li>Eu como manteiga de amendoim que você não quer</li>
        <li>Eu protegerei você dos esquilos</li>
      </ul>
    </div>
    <h3>Espero que possamos jogar em breve!</h3> 
    <img id="dog" src="https://aka.ms/Benji-the-dog">
  </body>
</html>
```

```CSS
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

#page-title 
{
  color: yellow;
  font-family: 'Roboto Mono', monospace;
}
```

## Desafio 3

Gifs da Nuevo Foundation: https://giphy.com/nuevofoundation 
1. Clique em 'Incorporar' e copie o código de incorporação do GIF.
2. Cole o código de incorporação do GIF em qualquer lugar na tag ```<body>```

Exemplo de código IFRAME:

```HTML
<iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
```

Integrado no exemplo de 'código Experimente você mesmo!':

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Isso será exibido na guia do navegador!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">Meu nome é Benji</h1>
      <p>Estou procurando minha família.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Informação:</h2>
      <ul>
         <li>Sou uma mistura de Lab/Grandes Pirenéus</li>
         <li>Tenho 1 ano</li>
         <li>Eu como manteiga de amendoim que você não quer</li>
         <li>Eu protegerei você dos esquilos</li>
       </ul>
     </div>
     <h3>Espero que possamos jogar em breve!</h3>

    <!-- Challenge 3: Paste your code here! -->
    <iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
  </body>
</html>
```

## Desafio 4

O formulário de contato já está adicionado para os alunos. Eles simplesmente precisarão modificar seu e-mail na seção de e-mail e alterar qualquer estilo que desejarem!

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Isso será exibido na guia do navegador!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">Meu nome é Benji</h1>
      <p>Estou procurando minha família.</p>
      <hr>
    </header>

<div id="info">
       <h2>Informação:</h2>
       <ul>
         <li>Sou uma mistura de Lab/Grandes Pirenéus</li>
         <li>Tenho 1 ano</li>
         <li>Eu como manteiga de amendoim que você não quer</li>
         <li>Eu protegerei você dos esquilos</li>
       </ul>
     </div>

   <!-- Challenge 4: Contact Form -->
    <div class="contact-section">
      <h3>Contate-me</h3> 
      <hr>
      <!-- Change the following line -->
       <form action="https://formspree.io/email@nuevofoundation.com" method="POST">
         <label for="name">Nome: </label>
        <input type="text" name="name" placeholder="Diga a Benji quem você é"><br>
         <label for="message">Sua mensagem: </label>
        <textarea name="message" placeholder="Conte-me sobre você"></textarea>
        <input type="submit" value="Hi!">
      </form>
    </div>

    <h3>Espero que possamos jogar em breve!</h3> 
    <img id="dog" src="https://aka.ms/Benji-the-dog">
  </body>
</html>
```

```CSS
.contact-section
{
  width: 250px;
  margin: 10px;
  padding: 10px;
  background-color: #FCFC69; /* Desafio 4: mude a cor aqui para estilizar */
}
```

## Desafio 5

Nenhuma solução aqui - os alunos estão criando seus próprios sites com base no que aprenderam. Algumas notas:
1. Incentive os alunos a usar todas as coisas diferentes que aprenderam (ou seja, CSS, formulário, GIF)
2. Incentive os alunos a criar algo que gostariam de mostrar a outras pessoas.

Divirta-se!