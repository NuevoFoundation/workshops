```yaml
---
title: "micro:bit: Programmer avec des Mini-Ordinateurs"
description: "Utiliser les MicroBits pour apprendre le JavaScript et le matériel"
date: 2019-07-23T14:54:53-07:00
download: "https://github.com/NuevoFoundation/workshops/tree/master/content/microbit"
draft: true
hidden: true
icon: "fas fa-microchip"
language: "blocks"
topics: ["hardware"]
prereq: "Aucun"
difficulties: ["débutant", "intermédiaire"]
---

### Une introduction au JavaScript et au matériel avec les [MicroBits](https://microbit.org/guide/)

![texte alternatif width="5%"](https://media.giphy.com/media/1nOL7s74KmSk0zDlDD/giphy.gif "Logo de Nuevo - Nuvi")

## Les Bases

## Qu'est-ce que JavaScript ?

JavaScript est l'un des nombreux langages de programmation et il est connu comme le langage de programmation du web. Il est utilisé pour contrôler le comportement des sites web, tels que les clics sur les boutons, les fenêtres contextuelles, les flux de données, et bien d'autres fonctions.

## Variables

Les variables sont des conteneurs dans votre code qui peuvent contenir un seul numéro, un mot ou d'autres informations. Ces informations peuvent être utilisées et modifiées en appelant la variable plus tard dans votre programme. Cela signifie que vous demandez à votre programme d'accéder aux informations que vous avez stockées.

À quelques exceptions près, les variables peuvent porter un nom contenant des lettres, des chiffres, des underscores et des signes dollar. MAIS dans tous les cas, elles ne peuvent pas contenir d'espaces et doivent toujours commencer par une lettre.

Les variables peuvent contenir différents types de données, passons en revue les types de base.

## Les Types de Données

### Entiers

Les entiers sont des nombres qui ne contiennent pas de décimales. Par exemple, les entiers sont des nombres entiers comme `3`, `100`, `6000`, `-3`, et ainsi de suite !

```javascript
// Ceci est un commentaire, ils sont utilisés pour décrire ce que fait votre code
// Ci-dessous, différents exemples de variables

// Exemples de variables entières (nombres sans décimales) :

var a = 5;
var b = 10;
var c = 15;
```

### Doubles

Les doubles sont des nombres qui supportent les décimales. Par exemple, des nombres comme `0.5`, `1.5`, et ainsi de suite.

```javascript
// Exemples de variables doubles (nombres à virgule) :

var x = 0.5;
var y = 1.5;
var z = 2.0;
```

### Chaînes de caractères

Les chaînes (ou "strings" en anglais) sont seulement un terme que les programmeurs utilisent pour désigner les mots. Si cela vous aide, pensez aux chaînes comme à une "chaîne" de caractères. Les chaînes peuvent être n'importe quoi comme votre nom ou le nom de votre animal préféré.

Les chaînes de caractères sont entourées par des guillemets.

```javascript
// Exemples de variables chaînes de caractères (un mot ou une "chaîne" de caractères) :
// les valeurs des chaînes sont entourées de guillemets

var company = "Ma compagnie";
var course = "Programmer avec Micro:Bits !";
var message = "La programmation est tellement fun !";
```

### Caractères

Les caractères sont des lettres individuelles. Ils sont entourés par des apostrophes.

```javascript
// Exemple de variable caractère (une seule lettre) :
// les valeurs des caractères sont entourées d'apostrophes

var letter = 'A';
```

### Booléens

Parfois, les programmeurs veulent vérifier si certaines conditions sont vraies ou fausses. Ces informations sont stockées dans un type de données booléen.

Si vous vous demandez pourquoi ils s'appellent booléens, c'est parce qu'un homme nommé George Boole les a créés.

```javascript
// Exemple de variable booléenne (vrai ou faux)

var canPigsFly = false;
var codingIsCool = true;
```

## Opérations Mathématiques

Ah, les mathématiques ! Les ordinateurs sont essentiellement des calculatrices, donc il est naturel que vous puissiez effectuer des calculs avec eux. Voici des exemples des opérations mathématiques que vous pouvez réaliser dans vos programmes JavaScript.

### Addition

```javascript
var a = 13;
var b = 10;
var c = a + b;     // c = 25
c += a;            // c = 40
c++;               // c = 41
```

### Soustraction

```javascript
var a = 15;
var b = 10;
var c = a - b;     // c = 5
c -= a;            // c = -10
c--;               // c = -11
```

### Multiplication

```javascript
var a = 2;
var b = 5;
var c = a * b;     // c = 10
c *= a;            // c = 20
```

### Division

```javascript
var a = 20;
var b = 2;
var c = a / b;     // c = 10
c /= a;            // c = 5
```

### Modulo

Ah oui, celui qui semble effrayant mais qui ne l'est pas du tout. Les opérations de modulo vous donnent simplement le reste après la division. Par exemple, `10 % 2 = 0` parce que lorsque vous divisez 10 par 2, il ne reste aucun reste.

```javascript
var d = 10 % 2;   // d = 0
var e = 5 % 2;    // e = 1
```

### Instructions d'Affichage

Parfois, vous voulez que votre ordinateur affiche du texte ou les données contenues dans vos variables. Pour cela, nous utilisons des instructions `print`.

```javascript
console.log("Cela s'affichera dans la console, mais pas sur la page web");
alert("Cela s'affichera sous forme de fenêtre contextuelle");

var userResponse = prompt("Ceci s'affichera comme une fenêtre contextuelle, avec une zone de saisie pour l'utilisateur");
```

### Conditions et Opérateurs Logiques

Les conditions, le plus souvent appelées instructions `if`, sont utilisées pour choisir quel code exécuter en fonction de la valeur de vos variables ou d'autres conditions.

```javascript
// Conditions
if (true) {
  // Cette section de code sera exécutée
}
if (false) {
  // Cette section de code ne sera pas exécutée
}

var age = 10;
if (age < 18) {
  // Si l'âge est inférieur à 18
  print("Tu n'es pas encore un adulte ! :( ");
}
```

### Boucles

Et enfin, nous avons