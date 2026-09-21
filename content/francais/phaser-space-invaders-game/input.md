```markdown
---
title: "Activer les Entrées Utilisateur"
date: 2020-08-20T11:45:38-07:00
draft: false
weight: 9
---

## Entrées Utilisateur

Les entrées sont essentielles, car sans que l'utilisateur n'interagisse avec des contrôles, notre jeu ne serait pas vraiment un jeu. Bien que Phaser prenne en charge une variété d'options d'entrée, nous allons aborder trois qui seront utilisées dans le jeu Space Invaders.

## Touches Fléchées

Commençons par l'un des contrôles les plus importants : les touches fléchées. Tout d'abord, nous allons créer une variable capable de détecter lorsque le joueur appuie sur une touche fléchée.

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

Pour utiliser cette variable, vous devez choisir entre 4 déclarations booléennes.

```javascript
this.cursors.up.isDown
this.cursors.down.isDown
this.cursors.left.isDown
this.cursors.right.isDown
```

Chacune de ces déclarations booléennes sera égale à `true` si la touche associée est pressée, et à `false` si ce n'est pas le cas.

## Barre Espace

Pour ajouter une fonctionnalité à la barre espace, le processus sera très similaire à celui des touches fléchées. Tout d'abord, nous allons créer une variable qui détecte si la barre espace est pressée.

```javascript
this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
```

Ensuite, nous pouvons utiliser une déclaration booléenne pour vérifier si l'entrée a été activée.

```javascript
Phaser.Input.Keyboard.JustDown(this.spacebar)
```

## Clic Unique

Vous pouvez également utiliser le même processus que nous avons utilisé pour ajouter les entrées des touches fléchées et de la barre espace afin d'ajouter des clics, mais nous allons expliquer une méthode légèrement différente ici, car elle sera probablement utilisée dans le jeu Space Invaders.

```javascript
this.input.once("pointerdown", this.restart, this);
```

Cette ligne appelle la méthode `this.restart` lorsque le joueur clique. Cependant, il s'agit d'une entrée à usage unique, ce qui signifie qu'après que le joueur a cliqué une fois, elle ne peut plus être utilisée sans être appelée à nouveau. Vous utiliserez généralement cela au sein de `update()` ou des fonctions auxiliaires plutôt que dans `create()`.
```