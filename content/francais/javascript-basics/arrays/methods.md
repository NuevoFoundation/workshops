```yaml
---
title: "Méthodes"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Les méthodes représentent une action que nous souhaitons effectuer sur le tableau. Elles peuvent être utilisées pour modifier le comportement ou effectuer certaines opérations sur lui-même.

Pour faciliter les choses, les tableaux fournissent de nombreuses méthodes. Passons en revue quelques-unes des bases qui vous donneront une idée de leur apparence.

{{% notice note %}}

#### En quoi est-ce différent des propriétés ?

**Les propriétés** sont essentiellement des informations qu'un tableau possède. **Les méthodes** sont ce qu'un tableau peut faire.

{{% /notice %}}

## Concat()

Joint deux ou plusieurs tableaux et retourne un nouveau tableau.

**Syntaxe :**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Exemple :**
![#Image introuvable](../../img/concat.png)

## Push()
Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la longueur résultante du tableau.

**Syntaxe :**
```javascript
var value = arrayName.push(newElement);
```

**Exemple :**
![#Image introuvable](../../img/push.png)

## Pop()
Retire le dernier élément d'un tableau et retourne cet élément.

**Syntaxe :**
```javascript
var value = arrayName.pop();
```

<b>Exemple :</b>
![#Image introuvable](../../img/pop.png)

## Shift()

Retire le premier élément d'un tableau et retourne cet élément.

**Syntaxe :**
```javascript
var value = arrayName.shift();
```

**Exemple :**
![#Image introuvable](../../img/shift.png)

# Unshift()

Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur du tableau.

**Syntaxe :**
```javascript
var value = arrayName.unshift(newElement);
```

**Exemple :**
![#Image introuvable](../../img/unshift.png)

## Sort()

Trie les éléments d'un tableau en place et retourne une référence au tableau.

**Syntaxe :**
```javascript
var value = arrayName.sort();
```

**Exemple :**
![#Image introuvable](../../img/sort.png)

# Reverse()

Transpose les éléments d'un tableau en place : le premier élément du tableau devient le dernier et le dernier devient le premier. Il retourne une référence au tableau.

**Syntaxe :**
```javascript
var value = arrayName.reverse();
```

**Exemple :**
![#Image introuvable](../../img/reverse.png)
```