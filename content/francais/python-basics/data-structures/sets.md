```markdown
---
title: "Ensembles"
draft: false
weight: 3
---

Tout comme une liste, un ensemble est une collection d'éléments. La différence entre un ensemble et une liste est qu'un ensemble ne peut pas contenir de doublons. Donc, si vous avez 5 chocolats et que vous les mettez dans un ensemble, vous ne conserverez qu'un chocolat car les doublons seront supprimés. 😢

<a href = "https://www.youtube.com/watch?v=mLIuHU5Sj5w">
<img src="../../img/sets_example.jpg" width="500" alt="Image de deux cercles, avec les échecs et le tennis de table dans le cercle gauche, le football et la batte de cricket dans le cercle droit, et le basketball et le badminton dans les deux cercles où ils se chevauchent" />
</a>

Dans l'image ci-dessus, le côté gauche représente les **<font color="#b00020">Jeux Intérieurs</font>** (Échecs & Tennis de Table) tandis que le côté droit représente les **<font color="#2e6b2e">Jeux Extérieurs</font>** (Cricket & Football). La partie centrale représente la zone commune entre ces deux ensembles. Ce sont les jeux qui peuvent être joués à l'intérieur comme à l'extérieur (Basketball & Badminton). La partie centrale est également appelée intersection entre deux ensembles.

{{% notice tip %}}
Un ensemble est créé en utilisant la fonction `set()` ou en plaçant tous les éléments entre une paire d'accolades.
{{% /notice %}}

```python
indoorGames = set(["Chess", "Table Tennis", "Basketball", "Badminton"])
outdoorGames = {"Cricket", "Football", "Basketball", "Badminton"}
print('** Jeux Intérieurs **')
print(indoorGames)
print('** Jeux Extérieurs **')
print(outdoorGames)
```

**Sortie**
```
** Jeux Intérieurs **
set(["Chess", "Table Tennis", "Basketball", "Badminton"])
** Jeux Extérieurs **
set(["Cricket", "Football", "Basketball", "Badminton"])
```

### Union d'Ensembles
Si nous avons 2 ensembles comme ci-dessus, l'union de ces deux ensembles contient les jeux des deux ensembles. La sortie sera un nouvel ensemble. Les doublons seront supprimés.

Le symbole utilisé pour l'union est `|`.

```python
allGames = indoorGames | outdoorGames
print('** Tous les Jeux **')
print(allGames)
```

**Sortie**
```
** Tous les Jeux **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Cricket", "Football"])
```

### Intersection d'Ensembles
L'intersection de 2 ensembles sera l'ensemble contenant des jeux présents à la fois dans les jeux intérieurs et extérieurs.

Le symbole utilisé pour l'intersection est `&`.

```python
commonGames = indoorGames & outdoorGames
print('** Jeux Communs **')
print(commonGames)
```

**Sortie**
```
** Jeux Communs **
set(["Basketball", "Badminton"])
```

### Différence des Ensembles
La différence entre 2 ensembles sera l'ensemble contenant les jeux d'un ensemble qui ne sont pas présents dans l'autre ensemble.

Le symbole utilisé pour la différence est `-`.

```python
indoorOnlyGames = indoorGames - outdoorGames
print('** Jeux Intérieurs Seulement **')
print(indoorOnlyGames)
```

**Sortie**
```
** Jeux Intérieurs Seulement **
set(["Chess", "Table Tennis"])
```

### Afficher les éléments d'un ensemble
Vous ne pouvez pas afficher les éléments d'un ensemble en utilisant leur numéro comme dans une liste. Les éléments d'un ensemble ne suivent pas une séquence fixe.

Ainsi, vous ne pouvez pas faire quelque chose comme `indoorGames[0]`, ou `indoorGames[1]` comme vous le feriez avec une liste. Cependant, vous pouvez parcourir les éléments d'un ensemble à l'aide d'une boucle `for`.

```python
for g in indoorGames:
  print(g)
```

**Sortie**
```
Chess
Table Tennis
Basketball
Badminton
```

### Ajouter des éléments à un ensemble
Nous pouvons utiliser la fonction `.add` pour ajouter un nouveau jeu à un ensemble. 
```python
indoorGames.add("Carrom")
print('** Jeux Intérieurs **')
print(indoorGames)
```

**Sortie**
```
** Jeux Intérieurs **
set(["Chess", "Table Tennis", "Basketball", "Badminton", "Carrom"])
```

### Supprimer des éléments d'un ensemble
Nous pouvons utiliser la fonction `.discard` pour supprimer un élément d'un ensemble. 
```python
indoorGames.discard("Chess")
print('** Jeux Intérieurs **')
print(indoorGames)
```

**Sortie**

```
** Jeux Intérieurs **
set(["Table Tennis", "Basketball", "Badminton", "Carrom"])
```
{{% notice note %}}
Si vous supprimez un élément qui n'est pas présent dans l'ensemble, vous ne recevrez aucune erreur. En revanche, si vous essayez de supprimer un élément qui n'est pas présent dans une liste, vous obtiendrez une `ValueError` !
{{% /notice %}}

### Défi
Essayons le même exercice que nous avons fait avec les listes et les tuples, mais en utilisant des ensembles.

Commencez avec la liste de fruits ci-dessous. Affichez la liste des fruits et pour chaque fruit, demandez à l'utilisateur s'il l'aime. Si l'utilisateur aime le fruit, conservez-le. Si ce n'est pas le cas, supprimez-le de la liste. Ensuite, demandez à l'utilisateur d'ajouter un fruit qui manque à la liste. Ajoutez-le à la liste et affichez le nombre de fruits que l'utilisateur aime.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Défi - Codebunga" src="https://codebunga.com/embed/i7wzei96" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```