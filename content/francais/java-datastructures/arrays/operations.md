```yaml
---
title: "Opérations"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="Operations - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Création d'un tableau

Les tableaux sont utilisés pour stocker plusieurs valeurs dans une seule variable, au lieu de déclarer des variables distinctes pour chaque valeur. Pour déclarer un tableau, définissez le type de variable avec des crochets.

```js javascript
String[] restaurants;
```
Nous avons maintenant déclaré une variable qui contient un tableau de chaînes de caractères. Pour insérer des valeurs, nous pouvons utiliser un littéral de tableau - placez les valeurs dans une liste séparée par des virgules, entre accolades :

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

Pour créer un tableau d'entiers, vous pourriez écrire :

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## Accéder aux éléments d'un tableau

Vous accédez à un élément du tableau en faisant référence à son numéro d'index. Cette instruction accède à la valeur du premier élément dans le tableau `restaurants` :

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// Le système affichera "Burger King"
```

<hr>

## Modifier un élément d'un tableau

Pour modifier la valeur d'un élément spécifique, faites référence à son numéro d'index :

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// Le système affichera "Burger King"

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// Le système affichera maintenant "McDonalds"
```

<hr>

## Trouver la taille d'un tableau

Pour savoir combien d'éléments contient un tableau, utilisez la propriété `length` :

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// Le système affichera 4
```
<hr>

## Parcourir un tableau

Vous pouvez parcourir les éléments d'un tableau avec la boucle `for`, et utiliser la propriété `length` pour spécifier combien de fois la boucle doit s'exécuter. L'exemple suivant affiche tous les éléments dans le tableau `restaurants` :

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// Affichera :
// Burger King
// Chipotle
// Panda Express
// Subway
```
```