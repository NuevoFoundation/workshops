---
title: "Atividade 2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/2Qm1ffc352o" title="Player de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Estilize com CSS

Tags informam ao navegador quais elementos do site usar. Mas também precisamos dizer como exibir os elementos e onde colocá-los. Podemos querer o título no centro ou no lado direito. Podemos querer uma foto à direita e um parágrafo à esquerda. Existem duas maneiras de fazer isso: através de atributos HTML ou `Cascading Style Sheets`.

## Cascading Style Sheets (CSS)

Os atributos HTML são diretos, mas podem se tornar confusos rapidamente. Se quisermos fazer muitos estilos, cada elemento HTML pode se tornar longo e difícil de ler. Além disso, e se quisermos estilizar muitos elementos da mesma maneira? Teríamos que copiar todos os atributos de cada elemento, o que não é eficiente e sujeito a erros. Para a maioria dos estilos, é melhor usar CSS.

Os arquivos CSS trabalham em estreita colaboração com tags HTML. Cada tag HTML pode ter um atributo 'class' e/ou um atributo 'id' que ajuda a identificar cada elemento. Muitos elementos podem ter a mesma classe, e um elemento pode ter várias classes. No entanto, um elemento só pode ter um único id e o id não pode ser compartilhado entre elementos. O arquivo CSS usa esses atributos para exibir estilos específicos para cada 'classe' ou 'id'.

Veja este exemplo abaixo:
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> Veja a caneta <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Estilizando</a> por Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) em <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<b>Clique na guia "HTML" no canto superior esquerdo para ver o código HTML e a guia "CSS" para ver o código CSS.</b>

Vamos dar uma olhada no código HTML. Tente encontrar uma tag &lt;div&gt; com o atributo <code>"info".</code> Parece <code>&lt;div id="info"&gt;</code>. Ao dar a essa div uma id, podemos usar CSS para especificar o estilo para esse elemento específico.

Mude para o arquivo CSS. Também podemos dar estilo a todos os elementos de um tipo específico - por exemplo, podemos usar CSS para dar a todos os elementos &lt;p&gt; elementos do mesmo estilo. No bloco de cabeçalho, dizemos ao navegador para colorir todos os cabeçalhos #0097A7 (que é a cor azul-petróleo).

Vamos falar sobre a sintaxe (ou forma de escrever) para CSS. Primeiro, você começa com o elemento que deseja estilizar. Se você deseja estilizar todos os elementos com a mesma tag (como &lt;cabeçalho&gt;), basta escrever o nome. Se você deseja estilizar um elemento com uma classe ou id, coloque um <code>.</code> ou um <code>#</code> na frente do nome da classe ou id, respectivamente. Em seguida, para cada propriedade que deseja alterar, use o formato <code>attribute-name: value;</code>. Não se esqueça de terminar cada linha com <code>;</code>. Todos esses estilos devem estar entre chaves { e }.

Existem muitos elementos de estilo para cobri-los todos neste tutorial. Se, no esboço feito anteriormente, você não tiver certeza de como usar o CSS para obter o estilo desejado, tente pesquisar online.

![alt text](../media/web-search.gif "gif of web searching css")

{{% notice tip %}}

Embora o CSS entenda 140 nomes de cores, como "verde", "vermelho" e "azul", isso ainda pode ser limitador. E se quisermos um verde escuro ou um verde um pouco mais claro? Para conseguir isso, também podemos nos referir a cores em formato hexadecimal ou RGB. Verifique <a href="https://htmlcolorcodes.com/color-names/" target="_blank">este link</a> para ver as cores e sua forma hexadecimal correspondente.

{{% /notice %}}

## Adicionando uma nova fonte

Como você deve saber, existem várias fontes que você pode usar. Esta parte mostrará como importar fontes diferentes para o seu site.

- Vamos importar a fonte Heebo da Internet. Primeiro, importaremos a fonte no topo do arquivo CSS com esta declaração:
`@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- Em seguida, atribuímos à tag body. Como essa tag conterá todos os outros elementos HTML, nossa escolha de fonte será usada para todos os elementos.

![alt text](../media/bodytag.PNG "exemplo: body tag ")

- Observe que o formato dentro das chaves é: `name: value;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');` </span><br> `font-family: 'Roboto Mono', monospace;`
  - <span style="color:purple"> `@import url('https://fonts.googleapis.com/css?family=Indie+Flower');`</span><br> `font-family: 'Indie Flower', cursive;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Pacifico');` </span><br> `font-family: 'Pacifico', cursive;`
  - <span style="color:purple">`@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');`</span><br> `font-family: 'Permanent Marker', cursive;`

## Atividade 2 - Adicionando atributos e estilo

Agora é hora de deixar nosso site bonito! Para concluir esta atividade, você precisará concluir as seguintes etapas:

1. Abra o editor da Web (clique no botão "Tente você mesmo!" abaixo)
2. Adicione um atributo id à tag de parágrafo. Por exemplo,
<font color="red">`<p id="page-subtitle">`</font>

3. Alterne para a guia CSS e crie uma nova regra
<font color="red">`#page-subtitle
{
}`
</font>
4. Altere a cor da legenda adicionando `color: yellow;` dentro das chaves
5. Altere a fonte adicionando `font-family: 'Roboto Mono', monospace;` dentro das chaves e adicionando <span style="color:purple">`@import url('https://fonts.googleapis.com/ css?family=Roboto+Mono');`</span> na parte superior da guia CSS
                            
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">Tente você mesmo!</a>