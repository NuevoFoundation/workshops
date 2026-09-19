---
title: "Les Boucles While"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 3
---

Une boucle `while` est exactement cela : une section de code qui continue d'exécuter quelques actions "tant que" la condition est vraie. On commence avec le mot `while` suivi de la condition qui doit être vraie entre parenthèses `()`, puis on place l'action (ou les actions) à réaliser à l'intérieur d'accolades `{}`. Voici la configuration :

```javascript
// Configuration de la boucle While
while (condition is true) {
  // action à réaliser
}
```

Passons maintenant à des exemples !

## Exemples
Disons que nous voulons créer une boucle qui s'exécute 8 fois.

```javascript
// Exemple de 8x
let i = 0; // définir une variable compteur
while (i < 8) {
  i++; // passe à l'itération suivante de la boucle (fait que la boucle exécute cette partie à nouveau)
}
```

La condition peut également être une déclaration, comme un booléen (vrai/faux). Par exemple, supposons que nous voulons parcourir différents commentaires sur une vidéo jusqu'à ce que nous les ayons tous lus. Pour faire cela avec une boucle while, nous aurons besoin de quelques variables différentes (vous pouvez ignorer les mots compliqués liés aux nœuds).

```javascript
const commentIterator = video.createNodeIterator(video, NodeFilter.SHOW_COMMENT) // c'est une manière de passer d'un commentaire au suivant sur la vidéo
let currentComment; // c'est un espace réservé pour le commentaire actuel

// cette boucle while continuera de s'exécuter tant qu'il y aura un "nextNode", ce qui signifie qu'il y a un autre commentaire après celui-ci
while (currentComment = commentIterator.nextNode()) {
  console.log(currentComment.textContent.trim()); // cela imprime le commentaire actuel afin que nous puissions le lire !
}
```