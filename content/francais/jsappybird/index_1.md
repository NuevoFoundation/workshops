```markdown
---
title: "Javascript : JSappy Bird"
description: "Apprenez les variables, les fonctions et les conditions tout en créant un clone de Flappy Bird."
date: 2019-07-23T10:42:43-07:00
difficulties: ["débutant", "intermédiaire"]
draft: true
hidden: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Téléchargez les fichiers requis.** <link_here>

Le modèle contient les fichiers suivants :

- phaser.min.js, le framework Phaser v2.4.3.
- index.html, où le jeu sera affiché.
- main.js, un fichier où nous écrirons tout notre code.
- assets/, un répertoire avec 2 images.
- Activity 1.js
- Activity 2.js
- Activity 3.js

Le fichier index.html est la page principale de notre jeu Flappy Bird qui utilise également nos deux fichiers Javascript (`.js`). Le fichier **phaser.min.js** est notre framework de jeu que nous utiliserons pour créer des jeux dans un navigateur. L'autre fichier est **main.js** qui contiendra toute notre logique Javascript. Les trois fichiers d'activités vous aideront à rendre votre jeu opérationnel. Les parties que vous devrez ajouter sont marquées avec un 🐤🐤🐤.

Amusez-vous bien !

### Variables

Les variables sont tout simplement des noms que nous pouvons attribuer à des valeurs telles que des chaînes de caractères, des nombres et des booléens. Nous utilisons les variables pour stocker des informations afin que l'ordinateur puisse s'en souvenir. Les variables sont créées en utilisant le mot-clé `var` suivi du nom de la variable. Ensuite, vous pouvez assigner à cette variable l'information que vous souhaitez stocker en utilisant un signe `=` suivi de l'information.

Par exemple :

```js
var world = "Hello World";
var x = 88;
var happy = true;
```

Vous pouvez également changer la valeur que représente un nom comme ceci :

```js
var x = 4;
x = 10;
```

Dans cet exemple, la variable `x` est d'abord assignée à 4, puis elle est réassignée à 10.

Le code ci-dessous crée un nouvel objet Phaser Game et le stocke dans une variable pour l'utiliser dans notre jeu.

```js
var game = new Phaser.Game(800, 600);
```

## Activité 1 : Utilisons à la fois des booléens et des expressions booléennes

### Conditions

Nous pouvons utiliser des instructions if pour exécuter un bloc de code uniquement si certaines conditions sont remplies.

Par exemple :

```js
if (isRainingOutside == true) {
  takeUmbrella = true;
}
```

À l'intérieur des `()` à côté de `if`, vous devez spécifier une _expression booléenne_. Les **booléens** sont des déclarations qui valent `true` ou `false`. Nous pouvons les utiliser dans notre instruction if. Si l'expression est `true`, le code à l'intérieur des `{ }` est exécuté.

Nous pouvons également utiliser des expressions booléennes pour vérifier si un nombre est compris dans une plage spécifique :

![Opérateurs de comparaison](https://imgur.com/F9gGHiI.png)

Vous pouvez également connecter les **expressions booléennes** en utilisant les opérateurs `&&` (ET) et `||` (OU).

![alt text](resources/_gen/images/statements.png "statements")

`&&` nécessite que les deux _expressions booléennes_ soient `true`, tandis que `||` nécessite uniquement qu'une des deux _expressions booléennes_ soit `true`.

Par exemple :

```js
// produit true car à la fois 5 est inférieur à 8 et 9 n'est pas égal à 10.

(1 < 100 &&
  (5 != 10)(
    // produit true car au moins l'une des expressions donne true
    5 == 5
  )) ||
  10 > 20;
```

#### Ouvrez `Activity 1.js` où vous ajouterez une condition qui vérifie si l'oiseau est entre le haut de l'écran (y = 0) et le bas de l'écran (y = 490) !

## Activité 2 : Ajoutons maintenant une fonction qui fait sauter l'oiseau

### Fonctions

**Une fonction peut être vue comme une tâche.** Certaines tâches sont courtes et simples, comme ajouter `1 + 1` ou afficher `‘Hello World!’`. Les fonctions peuvent être utilisées pour exécuter plusieurs fois les mêmes tâches. Dans ce cas, nous écrirons une fonction pour faire sauter l'oiseau !

"Sauter" dans ce jeu consiste simplement à changer la _position y_ de l'oiseau.

#### Ouvrez `Activity 2.js` où nous ajouterons une fonction appelée `jump`.

Nous pouvons le faire avec cette instruction à l'intérieur de la fonction `jump` :

```js
bird.body.velocity.y = -300;
```

Le nombre peut être ajusté en fonction de la hauteur que vous souhaitez donner au saut de l'oiseau ! Essayez de changer le nombre pour voir les différences dans la hauteur du saut de l'oiseau lorsque vous appuyez sur la barre d'espace.

Maintenant, votre oiseau peut voler dans les airs !

## Activité 3 : Ajoutons des obstacles

Actuellement, votre oiseau n'a vraiment pas d'obstacles à éviter sur l'écran, ce qui semble trop facile ! Nous pouvons utiliser du code pour augmenter la difficulté du jeu en ajoutant des objets à éviter ! Pour ce faire, vous devrez utiliser des conditions et des boucles. Nous avons déjà abordé les conditions, alors parlons maintenant des boucles.

### Boucles

Les boucles sont utilisées pour exécuter un bloc de code plusieurs fois. Il existe de nombreux types de boucles, mais celle que vous utiliserez pour ce projet est une boucle for.

Les boucles for se présentent comme suit :

```js
for (statement 1; statement 2; statement 3) {
  // bloc de code à exécuter
}
```

- L'instruction 1 est exécutée une seule fois avant d'exécuter le code dans les `{ }`.
- L'instruction 2 est utilisée pour définir la condition dans laquelle la boucle cessera de s'exécuter.
- L'instruction 3 est exécutée à chaque itération de la boucle.

Par exemple :

```js
var sum = 0;
for (var i = 0; i < 7; i += 1) {
  sum = sum + 1;
}
```

Après l'exécution de ce code, `sum` vaudra 6. C'est parce que la boucle a ajouté 1 à cette variable 6 fois.  
Vous remarquerez que nous avons créé une variable appelée `i` dans la première instruction de la boucle for. Cette variable est ensuite utilisée pour suivre combien de temps la boucle doit s'exécuter. À chaque