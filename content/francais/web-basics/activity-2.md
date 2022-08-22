---
title: "Activité 2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

## Style avec CSS

Les tags indiquent au navigateur les éléments du site Web à utiliser. Mais on doit également lui indiquer comment afficher les éléments et où les placer. Le titre peut être placé au centre ou sur le côté droit. On peut vouloir une image sur la droite et un paragraphe sur la gauche. Il y a deux façons de le faire : par les attributs HTML ou les `Cascading Style Sheets` (les Feuilles de Style en Cascade).

## Cascading Style Sheets (CSS)

Les attributs HTML sont simples, mais ils peuvent rapidement devenir désordonnés. Si on veux ajouter beaucoup de style, chaque élément de HTML peut devenir long et difficile à lire. En outre, que se passe-t-il si on veux donner le même style à plusieurs éléments ? On devrait copier tous les attributs à chaque élément; ceci n'est pas efficace et donne lieu à des erreurs. Pour la plupart des styles, il est préférable d'utiliser les CSS.

Les fichiers CSS travaillent ensemble avec les tags HTML. Chaque tag HTML peut avoir un attribut `class` et/ou un attribut `id` qui aide à identifier chaque élément. Plusieurs éléments peuvent avoir la même classe, et un élément peut avoir plusieurs classes. Toutefois, un élément ne peut avoir qu'un seul identifiant et ce identifiant ne peut pas être partagé entre plusieurs éléments. Le fichier CSS utilise ces attributs pour afficher un style spécifique à chaque `class` ou `id`.

Vois l'exemple ci-dessous :
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> See the Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Styling it up</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<b>Cliquez sur l'onglet "HTML" à la gauche pour voir le code HTML, et sur l'onglet "CSS" pour voir le code CSS.</b>

Jetons un coup d'œil au code de HTML. Essaie de trouver une tag `<div>` avec l'attribut `"info"`. Cela ressemble à <code>&lt;div id="info"&gt;</code>. En donnant un `id` à cet élement `<div>`, on peut ensuite utiliser le CSS pour spécifier le style de cet élément spécifique.

Passez au fichier CSS. On peut également donner un style à tous les éléments d'un type spécifique - par exemple, on peut utiliser le CSS pour donner le même style à tous les éléments `<p>`. Dans le bloc `header`, on indique au navigateur de colorer tous les headers avec la couleur `#0097A7` (qui est la couleur sarcelle).

Parlons de la syntaxe (ou de la façon d'écrire) de CSS. Tout d'abord, tu commences par l'élément que tu veux styliser. Si tu veux styliser tous les éléments ayant la même tag (comme `<header>`), écrivez simplement le nom. Si tu veux donner un style à un élément avec une `class` ou un `id`, mettez <code>.</code> ou <code>#</code> devant le nom de la `class` ou de l'`id` respectivement. Ensuite, pour chaque propriété que tu souhaites modifier, utilisez le format <code>nom-d'attribut: valeur;</code>. N'oubliez pas de terminer chaque ligne avec <code>;</code>. Tous ces styles doivent être entourés des accolades `{` et `}`.

Il y a beaucoup trop d'éléments de style pour les couvrir tous dans ce tutoriel. Si tu ne sais pas comment utiliser les CSS pour obtenir le style souhaité, essayez de faire une recherche en ligne.

![alt text](../media/web-search.gif "gif of web searching css")

{{% notice tip %}}

Bien que CSS comprenne 140 noms de couleurs tels que "green" (vert), "red" (rouge) et "blue" (bleu), cela peut encore être limitatif. Que fait-on si on veut un vert foncé ou un vert légèrement plus clair ? Pour y parvenir, on peut également faire référence aux couleurs sous forme hexadécimale ou RVB. Consulte <a href="https://htmlcolorcodes.com/color-names/" target="_blank">ce lien</a> pour voir les couleurs et leur forme hexadécimale correspondante.

{{% /notice %}}

## Ajout d'une nouvelle police

Comme tu le sais peut-être, il existe de nombreuses polices de caractères que tu peux utiliser. Cette partie te montrera comment importer différentes polices sur tu site.

- Importons la police Heebo depuis l'Internet. Tout d'abord, on importe la police en haut du fichier CSS avec cette déclaration :
`@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- Attachons ce style à la tag `body`. Comme cette tag contiendra tous les autres éléments de HTML, notre choix de police sera utilisé pour tous les éléments.

![alt text](../media/bodytag.PNG "body tag example")

- Remarquez que le format à l'intérieur des accolades est : `nom: valeur;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono'); </span><br> `font-family: 'Roboto Mono', monospace;`
  - <span style="color:purple"> @import url('https://fonts.googleapis.com/css?family=Indie+Flower');</span><br> `font-family: 'Indie Flower', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Pacifico'); </span><br> `font-family: 'Pacifico', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');</span><br> `font-family: 'Permanent Marker', cursive;`

## Activité 2 - Ajouter des attributs et du style

Il est maintenant temps de rendre notre site Web joli ! Pour réaliser cette activité, tu dois suivre les étapes suivantes :

1. Ouvre l'éditeur Web (cliquez sur le bouton "Essaie toi-même !" ci-dessous).
2. Ajoute un attribut id à l'une des tags de header. Par exemple,
<font color="red">`<header id="page-title">`</font>

3. Passe à l'onglet CSS
<font color="red">`#page-title
{
  styling here...
}`
</font>
4. Change la couleur du titre en ajoutant `color: yellow;` à l'intérieur des accolades
5. Modifie la police en ajoutant `font-family: 'Roboto Mono', monospace;` à l'intérieur des accolades et en ajoutant `<span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');</span>` en haut du fichier CSS.
                            
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">Essaie toi-même !</a>