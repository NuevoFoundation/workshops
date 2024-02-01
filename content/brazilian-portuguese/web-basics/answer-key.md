---
title: "Gabarito - Fundamentos de Web"
date: 2020-03-28T12:53:41-07:00
draft: false
hidden: true
weight: 15
---

### Nota especial:

Este currículo permite que os alunos sejam criativos. O texto abaixo é apenas um exemplo do que eles podem fazer. Use seu bom senso e peça orientação, se necessário. O gabarito fornecido aqui é bastante longo porque incluímos trechos de HTML completo para contexto.

Quando um aluno clica no botão 'Tente você mesmo!' abrirá uma nova guia com parte do código HTML (e código CSS) já estruturado.

## Desafio 1

A solução deve ter:
1. Tags de cabeçalho para adicionar um título e tags de parágrafo para escrever um parágrafo sobre Benji.
2. (opcional) Uma lista das guloseimas favoritas de Benji: peru, manteiga de amendoim e queijo ralado

```HTML
<head>
  <!-- Desafio 1: Adicione tags de título e cabeçalho. -->
   <title>Meu título emocionante!</title>
</head>
<body>
   <!-- O conteúdo entra no corpo -->
   <!-- Desafio 1: Adicione um cabeçalho, um parágrafo. -->
   <h1>Sobre Benji</h1>
   <p>Benji é um cachorrinho fofo. Seu esporte favorito é buscar a bolinha. Ele gosta de longas caminhadas na floresta. Uma vez ele encontrou um grande pedaço de pau.</p>
   <!-- Desafio 1 (opcional) Adicione uma lista. -->
   <h5> Os lanches favoritos de Benji </h5>
   <ul>
     <li>Peru</li>
     <li>Manteiga de amendoim</li>
     <li>Queijo ralado</li>
  </ul>
</body>
```

## Desafio 2

A solução deve ter:

1. HTML: um atributo id para uma das tags de cabeçalho. Por exemplo, ```<header id="page-title">```
2. CSS: Uma cor de título diferente adicionando ```color: yellow;``` dentro das chaves
3. CSS: Uma fonte diferente adicionada ```font-family: 'Roboto Mono', monospace;``` dentro das chaves e adicionando @import url('https://fonts.googleapis.com/css?family =Roboto+Mono'); na parte superior da guia CSS

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Metatags obrigatórias -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Isso será exibido na guia do navegador!</title>
  </head>
  <body>
    <!-- Desafio 2: atributo de id do título da página -->
    <header id="page-title">
      <h1 id="page-title">Meu nome é Benji</h1>
      <p>Estou procurando uma família.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Informações:</h2>
      <ul>
        <li>Sou uma mistura de Labrador e Cão dos Pirenéus</li>
        <li>Tenho 1 ano</li>
        <li>Eu como manteiga de amendoim, você quer?</li>
        <li>Vou proteger você dos esquilos</li>
      </ul>
    </div>
     <h3>Espero que possamos brincar em breve!</h3> 
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

GIFs da Fundação Nuevo: https://giphy.com/nuevofoundation
1. Clique em 'embed' e copie o código de incorporação do GIF.
2. Cole o código incorporado do GIF em qualquer lugar da tag ```<body>```

Exemplo de código iframe:

```HTML
<iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
```

Integrado no exemplo 'Tente codar você mesmo!':

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Meta Tags Obrigatórios -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Isso será exibido na aba do navegador!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">Meu nome é Benji</h1>
       <p>Estou procurando uma família.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Informações:</h2>
      <ul>
        <li>Sou uma mistura de Labrador e Cão dos Pirenéus</li>
        <li>Tenho 1 ano</li>
        <li>Eu como manteiga de amendoim, você quer?</li>
        <li>Vou proteger você dos esquilos</li>
      </ul>
    </div>
     <h3>Espero que possamos brincar em breve!</h3> 

    <!-- Desafio 3: Cole seu código aqui! -->
    <iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
  </body>
</html>
```

## Desafio 4

O formulário de contato já está adicionado para os alunos. Eles simplesmente precisarão modificar seu e-mail na seção de e-mail e alterar o estilo que desejarem!

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
      <p>Estou procurando uma família.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Informações:</h2>
      <ul>
        <li>Sou uma mistura de Labrador e Cão dos Pirenéus</li>
        <li>Tenho 1 ano</li>
        <li>Eu como manteiga de amendoim, você quer?</li>
        <li>Vou proteger você dos esquilos</li>
      </ul>
    </div>

   <!-- Desafio 4: Formulário de Contato -->
    <div class="contact-section">
      <h3>Contact me</h3> 
      <hr>
      <!-- Altere a seguinte linha -->
       <form action="https://formspree.io/email@nuevofoundation.com" method="POST">
         <label for="name">Nome: </label>
        <input type="text" name="name" placeholder="Tell Benji who you are"><br>
         <label for="message">Sua mensagem: </label>
        <textarea name="message" placeholder="Tell me about you"></textarea>
        <input type="submit" value="Hi!">
      </form>
    </div>

    <h3>Espero que possamos brincar em breve!</h3> 
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

Nenhuma solução aqui – os alunos estão criando seus próprios sites com base no que aprenderam. Algumas notas:
1. Incentive os alunos a usar todas as coisas diferentes que aprenderam (ou seja, CSS, formulário, GIF)
2. Incentive os alunos a criarem algo que gostariam de mostrar a outras pessoas.

Divirta-se!