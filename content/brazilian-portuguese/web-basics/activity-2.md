---
title: "Atividade 2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

## Estilize-o com CSS

As tags informam ao navegador quais elementos do site usar. Mas também precisamos dizer como exibir os elementos e onde colocá-los. Podemos querer o título no centro ou no lado direito. Podemos querer uma imagem à direita e um parágrafo à esquerda. Existem duas maneiras de fazer isso: através de atributos HTML ou `Cascading Style Sheets`.

## Folhas em estilo cascata (CSS)

Os atributos HTML são simples, mas podem ficar confusos rapidamente. Se quisermos estilizar muito, cada elemento HTML pode se tornar longo e difícil de ler. Além disso, e se quisermos estilizar muitos elementos da mesma maneira? Teríamos que copiar todos os atributos de cada elemento, o que não é eficiente e sujeito a erros. Para a maioria dos estilos, é melhor usar CSS.

Os arquivos CSS funcionam em estreita colaboração com tags HTML. Cada tag HTML pode ter um atributo `class` e/ou um atributo `id` que ajuda a identificar cada elemento. Muitos elementos podem ter a mesma classe e um elemento pode ter várias classes. No entanto, um elemento pode ter apenas um único id e o id não pode ser compartilhado entre os elementos. O arquivo CSS usa esses atributos para exibir estilos específicos para cada `class` ou `id`.

Veja este exemplo abaixo:
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Estilizando"> Veja a Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Estilizando</a> por Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<b>Clique na guia "HTML" no canto superior esquerdo para ver o código HTML e na guia "CSS" para ver o código CSS.</b>

Vamos dar uma olhada no código HTML. Tente encontrar um &lt;div&gt; tag com o atributo <code>"info"</code>. Parece <code>&lt;div id="info"&gt;</code>. Ao atribuir um ID a esse div, podemos usar CSS para especificar o estilo para esse elemento específico.

Mude para o arquivo CSS. Também podemos dar estilo a todos os elementos de um tipo específico - por exemplo, poderíamos usar CSS dar todos os &lt;p&gt; elementos do mesmo estilo. No bloco de cabeçalho, dizemos ao navegador para colorir todos os cabeçalhos #0097A7 (que é a cor azul-petróleo).

Vamos falar sobre a sintaxe (ou a forma de escrever) do CSS. Primeiro, você começa com o elemento que deseja estilizar. Se você quiser estilizar todos os elementos com a mesma tag (como &lt;header&gt;), basta escrever o nome. Se você deseja estilizar um elemento com uma classe ou id, coloque um <code>.</code> ou um <code>#</code> na frente do nome da classe ou do id, respectivamente. Então, para cada propriedade que você deseja alterar, use o formato <code>nome-do-atributo: valor;</code>. Não se esqueça de terminar cada linha com um <code>;</code>. Todos esses estilos devem ser colocados entre chaves { e }.

Existem muitos elementos de estilo para cobrir todos eles neste tutorial. Se, no esboço que você fez anteriormente, você não tiver certeza de como usar CSS para obter o estilo desejado, tente pesquisar online.

![texto alternativo](../media/web-search.gif "gif de css de pesquisa na web")

{{% notice tip %}}

Embora o CSS entenda 140 nomes de cores, como “verde”, “vermelho” e “azul”, isso ainda pode ser limitante. E se quisermos um verde escuro ou um verde um pouco mais claro? Para conseguir isso, também podemos nos referir às cores na forma hexadecimal ou RGB. Verifique <a href="https://htmlcolorcodes.com/color-names/" target="_blank">este link</a> para ver as cores e sua forma hexadecimal correspondente.

{{% /notice %}}

## Adicionando uma nova fonte

Como você deve saber, existem várias fontes que você pode usar. Esta parte mostrará como importar diferentes fontes para o seu site.

- Vamos importar a fonte Heebo da internet. Primeiro importamos a fonte no topo do arquivo CSS com esta instrução:
`@importar url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- Então atribuímos à tag body. Como esta tag conterá todos os outros elementos HTML, nossa escolha de fonte será usada para todos os elementos.

![texto alternativo](../media/bodytag.PNG "exemplo de tag body")

- Observe que o formato entre chaves é: `nome: valor;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');` </span><br> `font-family: 'Roboto Mono', monospace;`
  - <span style="color:purple"> `@import url('https://fonts.googleapis.com/css?family=Indie+Flower');`</span><br> `font-family: 'Indie Flower', cursive;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Pacifico');` </span><br> `font-family: 'Pacifico', cursive;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');`</span><br> `font-family: 'Permanent Marker', cursive;`

## Atividade 2 – Adicionando atributos e estilo

Agora é hora de deixar nosso site lindo! Para concluir esta atividade, você precisará concluir as seguintes etapas:

1. Abra o editor web (clique no botão "Experimente você mesmo!" abaixo)
2. Adicione um atributo id à tag de parágrafo. Por exemplo,
<font color="red">`<p id="page-subtitle">`</font>

3. Vá para a aba CSS e crie uma nova regra
<font color="red">`#page-subtitle
{
}`
</font>
4. Altere a cor da legenda adicionando `color: yellow;` dentro das chaves
5. Altere a fonte adicionando `font-family: 'Roboto Mono', monospace;` dentro das chaves e adicionando <span style="color:purple">`@import url('https://fonts.googleapis. com/css?family=Roboto+Mono');`</span> na parte superior da guia CSS
                            
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">Tente você mesmo!</a>