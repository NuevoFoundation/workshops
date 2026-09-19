---
title: "Instructions print et commentaires"
description: "Introduction aux méthodes println() et aux commentaires en Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" title="Vidéo sur les instructions print et les commentaires en Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Faites parler le programme !

Essayons d'écrire un programme qui affiche `Hello World` en tapant la ligne de code `System.out.print("Hello World");`

Le programme affiche tout ce que vous avez tapé entre parenthèses dans `System.out.print`. Et, chaque ligne de code se termine par `;`.

Ensuite, ajoutez d'autres instructions pour afficher des nombres en mettant des nombres entre les parenthèses (par exemple `System.out.print(2020)`) ou un symbole en mettant un seul symbole entre deux apostrophes `'` (par exemple `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Lancer Replit</a>

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s'affichent sur une seule ligne ?

Parfois, nous souhaitons aller à la ligne suivante lors de la saisie.  
Pour cela, tapez un code légèrement différent : `System.out.println();`

(Remarque : nous tapons `println` au lieu de `print` pour créer une nouvelle ligne)

Revenez en haut et essayez-le. Faites en sorte que toutes les instructions s'affichent sur des lignes différentes !
{{% /notice %}}

{{% notice tip %}}
### Comment afficher plusieurs symboles sur une seule ligne de code ?

Nous avons appris qu'il faut entourer les symboles d'apostrophes `'` pour les afficher, mais comment afficher plusieurs symboles sur une ligne ?

Nous pouvons simplement les entourer de guillemets doubles `"` (par exemple, `System.out.print("@ , - h A #");`)

{{% /notice %}}

{{% notice tip %}}
### !! Important !! Parfois, on ne peut pas juste mettre des caractères entre " "

Lorsque vous mettez des caractères entre guillemets doubles `" "` dans une instruction print, cela peut parfois troubler l'ordinateur sur les caractères qu'il doit afficher.

Par exemple, comment demander à l'ordinateur d'afficher `"` ?

Si vous tapez `System.out.print(""");`, vous obtiendrez une erreur ! Car l'ordinateur ne peut pas identifier où le texte se termine !

Dans ce cas, certains caractères doivent être <b>échappés</b> en ajoutant un `\` devant.

     System.out.print("\"");  // cela affiche "

D'autres caractères qui doivent être échappés en Java incluent : `'`, `"`, `\`.
{{% /notice %}}

## Afficher un hibou

Faisons la connaissance de 🐥 Minerva, la première amie de Patrick, un hibou 🦉 !

Utilisez ce que vous venez d'apprendre pour recréer ce hibou ci-dessous en seulement 4 lignes de code ! (Crédit artistique : asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Salut, je suis Minerva. L'amie de Patrick !  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Lancer Replit</a>

{{% notice warning %}}
#### J'ai une erreur !

     Main.java:4: error: reached end of file while parsing
Si vous obtenez une erreur comme celle ci-dessus, il est possible que vous ayez oublié d'échapper des caractères tels que `"` et `\`.

Revenez à la troisième astuce ci-dessus pour voir comment échapper des caractères dans une instruction print !
{{% /notice %}}

## Ajouter un commentaire

Lors de la création d'un programme en Java, nous pouvons prendre quelques notes en ajoutant un commentaire sur une seule ligne avec `//` ou un commentaire multi-lignes avec `/*` et `*/` (Remarque : les instructions des activités précédentes étaient écrites sous forme de commentaires).

En outre, l'ajout de commentaires n'affectera en aucun cas le programme. Vous pouvez donc ajouter toutes les notes que vous souhaitez sous forme de commentaires dans votre code !

     // exemple de commentaire d'une seule ligne
     /* exemple
      * commentaire
      * multi-lignes */