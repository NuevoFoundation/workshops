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

3. En utilisant `const` (qui est l'abréviation de constant) comme ceci :
```javascript
const x = 5;
const y = 6;
```
Il est important de comprendre qu'une constante ne change pas. Cela signifie que ces valeurs restent ce qu'elles sont définies au départ.

Vous pouvez utiliser `var`, `let`, et `const` pour contenir n'importe lequel des différents types de données en JavaScript. C'est ce qu'on appelle avoir des _types dynamiques_.

JavaScript a 8 types de données différents :
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

Nous allons passer en revue les plus importants : String, Number, Boolean, Undefined, et Object !

## String
Les chaînes peuvent être composées de mots ou d'un groupe de lettres.

```javascript
// Exemples de chaînes
let animal = "Elephant";
let alphabet = "abc";
let name = "John";
```

## Number
Les nombres peuvent être utilisés pour tous types de nombres (petits et grands !). C'est-à-dire, jusqu'à ce que vous ayez besoin de TRÈS grands nombres, alors vous aurez besoin d'une variable spéciale appelée bigint (mais c'est un sujet pour une autre fois).

```javascript
// Exemples de nombres
let age = 16;
let weight = 7.5;
```

## Boolean
Les booléens représentent les valeurs vrai et faux, donc comme dire la vérité et mentir.

```javascript
// Exemples de booléens
let truth = true;
let lie = false;
let x = true;
let y = false;
```

## Undefined
Undefined signifie que la variable n'a pas de valeur (car 0 est techniquement une valeur) !

```javascript
// Exemple de undefined
let x = undefined;
```

## Object
Un objet en JavaScript est un peu plus compliqué. Il peut être un objet intégré tel qu'un tableau, des dates, des maps, des sets, et plus encore, ou il peut être un tableau défini par l'utilisateur, ce qui signifie qu'il peut s'agir de n'importe quel groupe de données.

```javascript
const person = {firstName:"John", lastName:"Doe"};

// Objet tableau :
const cars = ["Saab", "Volvo", "BMW"];

// Objet date :
const date = new Date("2022-03-25");

// Objet défini par l'utilisateur (dans ce cas, prénom et nom)
const person = {firstName:"John", lastName:"Doe"};
```

## Quand vous n'êtes pas sûr du type de variable...
Utilisez l'opérateur `typeof` ! Si vous exécutez l'opérateur `typeof` avec une variable, il vous dira ce que c'est :

```javascript
typeof "Amy" // renvoie "string"
typeof 0 // renvoie "number"
typeof (3) // renvoie "number" (les parenthèses ne font rien)
typeof (3 + 4) // renvoie "number"
```