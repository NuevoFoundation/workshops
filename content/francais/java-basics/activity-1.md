---
title: "Instructions d'affichage et commentaires"
description: "Introduction aux méthodes println() et aux commentaires en Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Faites parler le programme !

Essayons d’écrire un programme qui affiche `Hello World` en tapant la ligne de code `System.out.print("Hello World");`

Le programme affiche tout ce que vous tapez entre parenthèses dans `System.out.print`. Et chaque ligne de code se termine par `;`.

Ensuite, ajoutez plus d’instructions pour afficher des nombres en plaçant des nombres dans les parenthèses (par exemple `System.out.print(2020)`) ou un symbole en mettant un seul symbole entre deux apostrophes `'` (par exemple `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Lancer Replit</a>

{{% notice tip %}}
### Avez-vous remarqué que toutes les instructions que vous avez tapées s’affichent sur une seule ligne ?

Parfois, nous souhaitons aller à la ligne suivante lors de la saisie.
Pour ce faire, nous tapons un code légèrement différent : `System.out.println();`

(Note : nous écrivons `println` au lieu de `print` pour créer une nouvelle ligne après.)

Revenez en haut et essayez. Faites en sorte que toutes les instructions s'affichent sur des lignes différentes !
{{% /notice %}}

{{% notice tip %}}
### Comment afficher plusieurs symboles dans une seule ligne de code ?

Nous avons appris qu'il faut entourer un symbole avec deux apostrophes `'` pour l'afficher, mais comment afficher plusieurs symboles sur une seule ligne ?

Nous pouvons simplement les mettre entre deux guillemets doubles `"` (par exemple `System.out.print("@ , - h A #");`)

{{% /notice %}}

{{% notice tip %}}
### !! Important !! Parfois, vous ne pouvez pas simplement mettre des caractères entre " "

Lorsqu'on insère des caractères entre `" "` dans une instruction d'affichage, cela peut parfois prêter à confusion pour l'ordinateur sur les caractères à afficher.

Par exemple, comment dire à l'ordinateur d'afficher `"` ?

Si vous écrivez `System.out.print(""");`, vous obtiendrez une erreur ! Car l'ordinateur ne peut pas identifier où le texte se termine !

Certains caractères doivent donc être <strong>échappés</strong> en ajoutant un `\` devant eux.

     System.out.print("\"");  // cela affiche "

Les autres caractères qui doivent être échappés en Java incluent : `'`, `"`, `\`.
{{% /notice %}}

## Afficher un hibou

Rencontrons 🐥 Minerva 🦉, la première amie de Patrick !

Utilisez ce que vous venez d'apprendre pour recréer ce hibou ci-dessous en seulement 4 lignes de code ! (Crédit artistique : asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <   Salut, je suis Minerva. L'amie de Patrick !  |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Lancer Replit</a>

{{% notice warning %}}
#### J'ai une erreur !

     Main.java:4: error: reached end of file while parsing
Si vous obtenez une erreur comme celle-ci, il est possible que vous ayez oublié d’échapper des caractères comme `"` et `\`.

Revenez au troisième conseil ci-dessus pour voir comment échapper des caractères dans une instruction d'affichage !
{{% /notice %}}

## Ajouter un commentaire

Lorsque vous créez un programme Java, vous pouvez prendre des notes en ajoutant un commentaire sur une ligne à l’aide de `//` ou un commentaire sur plusieurs lignes en utilisant `/*` et `*/` (Note : Les instructions dans les activités précédentes