---
title: "Variables et Types de Données"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Pour créer une variable en JavaScript, vous avez 3 options.

1. En utilisant `var` (qui est l'abréviation de variable) comme ceci :
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. En utilisant `let` comme ceci :
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. En utilisant `const` (qui est l'abréviation de constante) comme ceci :
```javascript
const x = 5;
const y = 6;
```
Il est important de comprendre ici qu'une constante ne change pas. Cela signifie que ces valeurs restent fixées à ce qui a été défini au début.

Vous pouvez utiliser `var`, `let` et `const` pour stocker n'importe quel des différents types de données en JavaScript. Cela s'appelle avoir des _types dynamiques_.

JavaScript a 8 différents types de données :
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

Nous allons passer en revue les plus importants : String, Number, Boolean, Undefined et Object !

## String
Les strings peuvent être composées de mots ou d'un groupe de lettres.

```javascript
// Exemples de String
let animal = "Éléphant";
let alphabet = "abc";
let name = "Jean";
```

## Number
Les nombres peuvent être utilisés pour tous types de valeurs numériques (petites et grandes !). Cela, jusqu'à ce que vous ayez besoin de nombres TRÈS grands, auquel cas vous aurez besoin d'une variable spéciale appelée bigint (mais c'est un sujet pour une autre fois).

```javascript
// Exemples de Number
let age = 16;
let weight = 7.5;
```

## Boolean
Les booléens représentent des valeurs vrai et faux, comme dire la vérité ou mentir.

```javascript
// Exemples de Boolean
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## Undefined
Undefined signifie que la variable n'a pas de valeur (car 0 est techniquement une valeur !).

```javascript
// Exemple d'Undefined
let x = undefined;
```

## Object
Un objet en JavaScript est un peu plus complexe. Il peut s'agir d'un objet intégré tel qu'un tableau, des dates, des maps, des sets, et plus encore, ou il peut s'agir d'un objet défini par l'utilisateur, ce qui signifie qu'il peut représenter n'importe quel groupe de données.

```javascript
const person = {firstName:"Jean", lastName:"Dupont"};

// Objet tableau :
const cars = ["Saab", "Volvo", "BMW"];

// Objet Date :
const date = new Date("2022-03-25");

// Objet défini par l'utilisateur (dans ce cas prénom et nom de famille)
const person = {firstName:"Jean", lastName:"Dupont"};
```

## Lorsque vous ne savez pas quel type de variable c'est...
Utilisez l'opérateur `typeof` ! Si vous exécutez l'opérateur `typeof` avec une variable, il vous indiquera de quel type elle est :

```javascript
typeof "Amy" // retourne "string"
typeof 0 // retourne "number"
typeof (3) // retourne "number" (les parenthèses ne changent rien)
typeof (3 + 4) // retourne "number"
```