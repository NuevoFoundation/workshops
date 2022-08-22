---
title: "Activité 1 - Se familiariser avec l'éditeur en ligne"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 4
---

## Activité 1 - Créer un site Web de base

Il est maintenant le temps de commencer à créer un site Web de base. Pour réaliser cette activité, tu dois suivre les étapes suivantes :

1. Ouvrez l'éditeur Web (cliquez sur le bouton "Essaie toi-même !" ci-dessous).
2. Utilisez les tags de `header` pour ajouter un titre, et les tags de paragraphe pour écrire un paragraphe à propos de Benji.
3. Si tu as le temps, écris une liste des friandises préférées de Benji : du dinde, du beurre de cacahuètes et du fromage à effilocher. 

<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Essaie toi-même !</a>

Utilise ce tableau de référence pour essayer toi-même quelques tags HTML.

Tag | Déscription | Exemple
---|--------------|----------
`<html></html>`                         | Décrit un document HTML. Tous les sites Web doit commencer par la tag d'ouverture `<html>` et se terminer par la tag de fermeture `</html>`. | Voir l'exemple CodePen ci-dessus. 
`<!-- -->`                              | Décrit un comment (commentaire). Les comments sont destinés à être vus par les autres codeurs, mais ils ne sont pas affichés sur le site web.  |`<!-- This line will not show in the browser -->`
`<head></head>`                         | Contient tous les éléments HTML qui donnent des informations au navigateur pour afficher correctement le site web. Les éléments HTML situés entre les tags `<head>` et `</head>` ne sont pas affichés. | Voir l'exemple CodePen ci-dessus. 
`<title></title>`                       | Contient le titre du site Web à utiliser pour nommer l'onglet du navigateur. | &lt;head&gt;<br>&lt;title&gt; Mon site Web &lt;/title&gt;<br>&lt;/head&gt;
`<body></body>`                         | Contient tous les éléments HTML qui sont affichés dans la page, comme le texte et les images. | Voir l'exemple CodePen ci-dessus. 
`<h1></h1>`<br> ... <br> `<h6></h6>`    | Décrit un titre. `<h1>` définit le titre le plus important (le plus grand), tandis que `<h6>` définit le titre le moins important (le plus petit). | &lt;h1&gt;Ce sera un titre important&lt;/h1&gt;<br> &lt;h4&gt;Ce sera un titre moins important&lt;/h4&gt;
`<p></p>`                               | Décrit un paragraphe. | &lt;p&gt;Les chiens ont évolué pour aimer les humains. En conclusion, les chiens sont le meilleur ami de l'homme.&lt;/p&gt;
`<div></div>`                           | Décrit une division ou une section du site. | &lt;div&gt;<br>&lt;h1&gt;Tout sur moi&lt;/h1&gt;<br>&lt;/div&gt;
`<img>`                                 | Une image. Il s'agit d'une tag à fermeture automatique, mais tu dois spécifier la source de l'image pour que le navigateur sache où trouver l'image. | &lt;img src="aka.ms/Benji-the-dog"&gt;
`<hr>`                                  | Dessine une ligne horizontale. Il s'agit d'une autre tag à fermeture automatique, utile si tu souhaites séparer le contenu de la page. | ... <br> &lt;hr&gt; <br> ...
`<ul>`<br>`<li>`<br>`</li>`<br>`</ul>`  | Une liste. Pour commencer la liste, utilisez une tag `<ul?>`. Pour chaque élément à ajouter à la liste, entourez-le en utilisant des tags `<li>` et `</li>`. Terminez la liste avec la tag `</ul>`. | &lt;ul&gt;<br>&lt;li&gt;Ceci est un élément de liste.&lt;/li&gt;<br>&lt;/ul&gt;