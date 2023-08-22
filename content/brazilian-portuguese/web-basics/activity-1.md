---
title: "Atividade 1 - Familiarize-se com o editor online"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/xuzRE_OHGy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Atividade 1 - Criando um site básico

Agora é hora de começar a criar um site básico.Para concluir esta atividade, você precisará concluir as seguintes etapas:

1. Abra o editor da web (clique no botão "Experimente você mesmo!" Abaixo)
2. Use as tags do cabeçalho para adicionar um título e as tags de parágrafo para escrever um parágrafo sobre Benji
3. Se você tiver tempo: escreva uma lista das guloseimas favoritas de Benji: peru, manteiga de amendoim e queijo de cordão

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Tente você mesmo!</a>

Use este gráfico de referência para experimentar algumas tags HTML por conta própria.

Tag | Description | Example
---|--------------|----------
`<html></html>`                         | Descreve um documento HTML. Qualquer site deve começar com a tag <html> de abertura e terminar com a tag de fechamento </html>.|Veja o exemplo do Codepen acima.
`<!-- -->`                              | Descreve um comentário.Os comentários são destinados a outros codificadores, mas eles não são exibidos no site. |`<!-- This line will not show in the browser -->`
`<head></head>`                         | Contém todos os elementos HTML que fornecem informações ao navegador para exibir o site corretamente.Os elementos HTML entre <head> e </ad> tag não são exibidos. | Veja o exemplo de Code Pen acima
`<title></title>`                       | Contém o título do site a ser usado para nomear a guia Browser. | &lt;head&gt;<br>&lt;title&gt; My Website &lt;/title&gt;<br>&lt;/head&gt;
`<body></body>`                         | Contém todos os elementos HTML exibidos na página, como texto e imagens. | Veja o exemplo de Code Pen acima
`<h1></h1>`<br> ... <br> `<h6></h6>`    | Define um cabeçalho/título. &lt;h1&gt; define o mais importante (maior) cabeçalho/título, enquanto &lt;h6&gt; define o cabeçalho menos importante (menor). | &lt;h1&gt;This will be a big title&lt;/h1&gt;<br> &lt;h4&gt;Este será um título menor&lt;/h4&gt;
`<p></p>`                               | Descreve um parágrafo. | &lt;p&gt;Os cães evoluíram para amar os seres humanos. Em conclusão, os cães são o melhor amigo de um humano.&lt;/p&gt;
`<div></div>`                           | Define uma divisão ou seção no site. | &lt;div&gt;<br>&lt;h1&gt;All about me&lt;/h1&gt;<br>&lt;/div&gt;
`<img>`                                 | Uma imagem. É uma tag de fechamento automático, mas você deve especificar a fonte da imagem para o navegador saber de onde obter a imagem. | &lt;img src="aka.ms/Benji-the-dog"&gt;
`<hr>`                                  | Desenha uma linha horizontal. Outra tag de fechamento que é útil se você deseja dividir o conteúdo da página. | ... <br> &lt;hr&gt; <br> ...
`<ul>`<br>`<li>`<br>`</li>`<br>`</ul>`  | Uma lista.Para iniciar a lista, use a tag &lt;ul&gt;. Para que cada item seja adicionado à lista, envolva o item as tags &lt;li&gt; and &lt;/li&gt;. Finalize a lista com a tag &lt;/ul&gt;. | &lt;ul&gt;<br>&lt;li&gt;Este é um item de lista.&lt;/li&gt;<br>&lt;/ul&gt;