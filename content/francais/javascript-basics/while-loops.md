---
title: "Boucles While"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Une boucle `while` est simplement cela, une section de code qui continue à effectuer quelques actions "tant que" la condition est vraie. Nous commençons avec le mot `while` suivi de la condition vraie entre parenthèses `()`, puis mettons l'action (ou les actions) à exécuter entre accolades `{}`. Voici la configuration :

```javascript
// Configuration de la boucle While
while (condition est vraie) {
  // action à effectuer
}
```

Passons maintenant à quelques exemples !

## Exemples
Disons que nous voulons créer une boucle qui s'exécute 8 fois.

```javascript
// Exemple 8x
let i = 0; // définir une variable compteur
while (i < 8) {
  i++; // passe à l'itération suivante de la boucle (fait que la boucle s'exécute à nouveau dans cette partie)
}
```

La condition pourrait également être une déclaration, comme un booléen (vrai/faux). Par exemple, disons que nous voulons parcourir différents commentaires sur une vidéo jusqu'à ce que nous les ayons tous lus. Pour faire cela dans une boucle while, nous aurions besoin de quelques variables différentes (vous pouvez ignorer les termes node sophistiqués).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // c'est un moyen de passer d'un commentaire à l'autre sur la vidéo
let currentComment; // c'est un espace réservé pour le commentaire actuel

// cette boucle while continuera à boucler tant qu'il y a un "nextNode", ce qui est une autre façon de dire qu'il y a un autre commentaire après celui-ci
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // cela imprime le commentaire actuel pour que nous puissions le lire !
}
```