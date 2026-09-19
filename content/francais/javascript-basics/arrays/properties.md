```markdown
---
title: "Propriétés"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Les propriétés ou caractéristiques d'un tableau (array) permettent de décrire les attributs d'un tableau. Par exemple : le nombre total d'éléments, la valeur à un index particulier, etc...

Voici une liste des propriétés de l'objet Array et leur description.

## Constructor()

Renvoie une référence à la fonction tableau qui a créé l'objet.

**Syntaxe :**
```javascript
arrayName.constructor;
```

**Exemple :**
![#Impossible de trouver l'image](../../img/constructor.png)

## Index()

La propriété représente l'index basé sur zéro de l'élément correspondant dans le tableau. Index fournit un moyen d'accéder ou de modifier des éléments en fonction de leur position dans le tableau.

### Accéder à un élément d'un tableau par son index :

**Syntaxe :**
```javascript
var value = arrayName[index];
```

**Exemple :**
![#Impossible de trouver l'image](../../img/indexaccess.png)

### Modifier un élément d'un tableau par son index :

**Syntaxe :**
```javascript
arrayName[index] = newValue;
```

**Exemple :**
![#Impossible de trouver l'image](../../img/indexmodify.png)

## Length() 
Reflète le nombre d'éléments dans un tableau.

**Syntaxe :**
```javascript
var length = arrayName.length;
```

**Exemple :**
![#Impossible de trouver l'image](../../img/length.png)
```