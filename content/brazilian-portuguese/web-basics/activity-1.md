---
title: "Atividade 1 – Familiarize-se com o editor online"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 4
---

## Atividade 1 – Criando um site básico

Agora é hora de começar a construir um site básico. Para concluir esta atividade, você precisará concluir as seguintes etapas:

1. Abra o editor web (clique no botão "Try it yourself!" abaixo)
2. Use as tags de cabeçalho para adicionar um título e as tags de parágrafo para escrever um parágrafo sobre Benji
3. Se tiver tempo: escreva uma lista das guloseimas favoritas de Benji: peru, manteiga de amendoim e queijo ralado

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Try it yourself!</a>

Use este gráfico de referência para testar algumas tags HTML por conta própria.

Etiqueta | Descrição | Exemplo
---|--------------|----------
`<html></html>`                         | Descreve um documento HTML. Qualquer site deve começar com a tag de abertura <html> e terminar com a tag de fechamento </html>. | Veja o exemplo do Codepen acima.
`<!-- -->`                              | Descreve um comentário. Os comentários devem ser vistos por outros programadores, mas não são exibidos no site. |`<!-- Esta linha não será exibida no navegador -->`
`<head></head>`                         | Contém todos os elementos HTML que fornecem informações ao navegador para exibir o site corretamente. Os elementos HTML entre as tags <head> e </head> não são exibidos. | Veja o exemplo da Code Pen acima
`<title></title>`                       | Contém o título do site a ser usado para nomear a aba do navegador. | &lt;head&gt;<br>&lt;título&gt; Meu site &lt;/title&gt;<br>&lt;/head&gt;
`<body></body>`                         | Contém todos os elementos HTML exibidos na página, como texto e imagens. | Veja o exemplo da Code Pen acima.
`<h1></h1>`<br> ... <br> `<h6></h6>`    | Define um cabeçalho/título. &lt;h1&gt; define o cabeçalho/título mais importante (maior), enquanto &lt;h6&gt; define o título menos importante (menor). | &lt;h1&gt;Este será um título grande&lt;/h1&gt;<br> &lt;h4&gt;Este será um título menor&lt;/h4&gt;
`<p></p>`                               | Descreve um parágrafo. | &lt;p&gt;Os cães evoluíram para amar os humanos. Concluindo, os cães são os melhores amigos do ser humano.&lt;/p&gt;
`<div></div>`                           | Define uma divisão ou seção no site. | &lt;div&gt;<br>&lt;h1&gt;Tudo sobre mim&lt;/h1&gt;<br>&lt;/div&gt;
`<img>`                                 | Uma imagem. É uma tag de fechamento automático, mas você deve especificar a origem da imagem para que o navegador saiba de onde obtê-la. | &lt;img src="aka.ms/Benji-the-dog"&gt;
`<hr>`                                  | Desenha uma linha horizontal. Outra tag de fechamento automático que é útil se você deseja dividir o conteúdo da página.           | ... <br> &lt;hr&gt; <br> ...
`<ul>`<br>`<li>`<br>`</li>`<br>`</ul>`  | Uma lista. Para iniciar a lista, use um &lt;ul&gt; marcação. Para cada item a ser adicionado à lista, coloque o item entre os caracteres &lt;li&gt; e tags &lt;/li&gt;. Termine a lista com &lt;/ul&gt; marcação. | &lt;ul&gt;<br>&lt;li&gt;Este é um item de lista.&lt;/li&gt;<br>&lt;/ul&gt;