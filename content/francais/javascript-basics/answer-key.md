```markdown
---
title: "JavaScript : Bases - Clé de réponse"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est un guide de référence pour les enseignants pour l'atelier JavaScript : Bases. Il regroupe tous les exemples de code avec leurs sorties attendues, afin que vous disposiez d'une seule page pour référence pendant le cours. Les étudiants utilisent [playcode.io](https://playcode.io) comme environnement de codage.
{{% /notice %}}

## Liste de vérification de la configuration de l'environnement

Avant de commencer, les étudiants doivent :
1. Ouvrir [playcode.io](https://playcode.io)
2. Fermer tous les fichiers sauf **script.js**
3. Supprimer tout le contenu dans script.js
4. Désactiver le mode **live** (cliquez une fois sur le bouton live)

## Boucles While

### Compteur basique (tourne 8 fois)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Sortie :
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**Question fréquente des étudiants :** "Pourquoi cela affiche 0-7 au lieu de 1-8 ?"

Parce que `i` commence à 0 et `i++` s'exécute après le `console.log`. Si vous voulez 1-8, commencez avec `let i = 1` et utilisez `i <= 8`.
{{% /notice %}}

### Concept clé : `i++`

`i++` est une abréviation pour `i = i + 1`. Cela augmente le compteur de 1 à chaque itération de la boucle. Sans cela, la boucle tourne indéfiniment (boucle infinie).

## Variables et types de données

### Trois manières de déclarer des variables

```javascript
var x = 5;    // ancienne méthode (scopée à la fonction)
let y = 6;    // méthode moderne (scopée au bloc, peut changer)
const z = 11; // constante (ne peut pas changer après attribution)
```

Sortie (si vous les affichez) :
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### Exemples de chaînes de caractères

```javascript
let animal = "Éléphant";
let alphabet = "abc";
let name = "Jean";
console.log(animal);
console.log(typeof animal);
```

Sortie :
```
Éléphant
string
```

### Exemples de nombres

```javascript
let age = 16;
let poids = 7.5;
console.log(age);
console.log(poids);
console.log(typeof age);
```

Sortie :
```
16
7.5
number
```

### Exemples de Booléens

```javascript
let vrai = true;
let faux = false;
console.log(vrai);
console.log(faux);
console.log(typeof vrai);
```

Sortie :
```
true
false
boolean
```

### Exemple d'Undefined

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Sortie :
```
undefined
undefined
```

### Exemples d'Objets

```javascript
const personne = {prenom: "Jean", nom: "Dupont"};
const voitures = ["Saab", "Volvo", "BMW"];
const date = new Date("2022-03-25");

console.log(personne);
console.log(voitures);
console.log(typeof personne);
```

Sortie :
```
{prenom: "Jean", nom: "Dupont"}
["Saab", "Volvo", "BMW"]
object
```

### L'opérateur `typeof`

```javascript
console.log(typeof "Amy");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**Question fréquente des étudiants :** "Pourquoi le type d'un tableau est `object` et non `array` ?"

En JavaScript, les tableaux sont un type particulier d'objet. Pour vérifier si quelque chose est un tableau, utilisez `Array.isArray([1, 2])`, ce qui renvoie `true`.
{{% /notice %}}

## Tableaux

### Création de tableaux

```javascript
// Ces trois méthodes créent le même tableau :
let fruits1 = new Array("Pomme", "Orange", "Mangue");
let fruits2 = Array("Pomme", "Orange", "Mangue");
let fruits3 = ["Pomme", "Orange", "Mangue"];

console.log(fruits3);
console.log(fruits3.length);
```

Sortie :
```
["Pomme", "Orange", "Mangue"]
3
```

### Propriétés du tableau

#### Accès par index

```javascript
let fruits = ["Pomme", "Orange", "Mangue"];
console.log(fruits[0]); // premier élément
console.log(fruits[1]); // deuxième élément
console.log(fruits[2]); // troisième élément
```

Sortie :
```
Pomme
Orange
Mangue
```

{{% notice tip %}}
**Question fréquente des étudiants :** "Pourquoi le premier élément commence à 0 ?"

Les index des tableaux commencent à 0 dans la plupart des langages de programmation. Donc `fruits[0]` est le premier élément, `fruits[1]` est le deuxième, et ainsi de suite.
{{% /notice %}}

#### Modification par index

```javascript
let fruits = ["Pomme", "Orange", "Mangue"];
fruits[1] = "Banane";
console.log(fruits);
```

Sortie :
```
["Pomme", "Banane", "Mangue"]
```

#### Propriété Length

```javascript
let fruits = ["Pomme", "Orange", "Mangue"];
console.log(fruits.length);
```

Sortie :
```
3
```

#### Propriété Constructor

```javascript
let fruits = ["Pomme", "Orange", "Mangue"];
console.log(fruits.constructor);
```

Sortie :
```
function Array() { [native code] }
```

### Itération sur un tableau (forEach)

```javascript
let nombres = [1, 2, 3, 4, 5];
nombres.forEach(function(item) {
  console.log(item);
});
```

Sortie :
```
1
2
3
4
5
```

### Méthodes sur les tableaux

#### concat() - fusionner des tableaux

```javascript