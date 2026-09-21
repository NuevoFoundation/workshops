```markdown
---
title: "Tuples"
draft: false
weight: 2
---

Un tuple est également une collection ordonnée d'éléments, tout comme les listes, mais les tuples sont immuables. Ainsi, vous ne pouvez pas modifier les éléments d'un tuple après qu'il ait été attribué (contrairement aux listes où cela est possible). Cette nature immuable rend les tuples très utiles lorsque vous ne voulez pas que vos données soient modifiées tout au long du programme. En plus de cela, les tuples sont généralement utilisés pour stocker des éléments de différents types de données. Alors qu'une liste est définie en utilisant des crochets (`[]`), un tuple peut être créé en plaçant tous les éléments entre parenthèses `()`, séparés par des virgules.

```python
# créer un tuple de deux éléments de type String
my_tuple = ('apple', 'orange')
```

{{% notice note %}}

Les tuples peuvent également être créés sans parenthèses. Cependant, il est recommandé de les utiliser.

{{% /notice %}}

Un tuple peut également contenir des éléments de différents types.

```python
# Un tuple contenant des éléments de différents types de données
my_tuple = ('apple', 1, 4.5)
```

### Accéder aux éléments d'un tuple

Nous pouvons accéder aux éléments d'un tuple en utilisant des index entre crochets `[]`, tout comme une liste. Aussi, comme pour les listes, l'index commence à `0`.

```python
# créer un tuple de trois éléments de type String
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple[0]) ## affiche apple
print(my_tuple[2]) ## affiche mango
```

### Combiner deux tuples

Nous pouvons combiner deux tuples en utilisant l'opérateur `+`.

```python
fruits = ('apple', 'orange', 'mango')
numbers = (1, 2, 3)

# Combiner deux tuples fruits et numbers
combined_tuple = fruits + numbers

print(combined_tuple) ## affiche ('apple', 'orange', 'mango', 1, 2, 3)
```

### Longueur d'un tuple

La fonction `len(tuple)` donne le nombre d'éléments présents dans le tuple.

```python
fruits = ('apple', 'orange', 'mango')

print(len(fruits))  ## affiche 3
```

### Réassigner un tuple

Étant donné que les tuples sont immuables, nous ne pouvons pas modifier un élément du tuple. Ainsi, `fruits[0] = 'lemon'` générera une erreur car ici nous essayons de modifier l'élément à l'index `0` de 'fruits'.
Cependant, nous pouvons réassigner un tuple (remplacer tout le tuple).

```python
my_tuple = ('apple', 'orange', 'mango')

print(my_tuple)  ## affiche ('apple', 'orange', 'mango')

# Réassignation de my_tuple
my_tuple = (1, 2, 3)

print(my_tuple)  ## affiche (1, 2, 3)
```

### Supprimer un tuple

Nous pouvons supprimer entièrement un tuple à l'aide du mot-clé `del`.

```python
fruits = ('apple', 'orange', 'mango')

print(fruits)  ## affiche ('apple', 'orange', 'mango')

# Suppression de fruits
del fruits 

print(fruits)  ## Génère une ERREUR car le tuple fruits n'est plus présent 
```

### Défi
Essayons le même exercice que nous avons fait avec les listes, mais en utilisant des tuples.  

Commencez avec la liste de fruits ci-dessous. Affichez la liste des fruits et, pour chaque fruit, demandez à l'utilisateur s'il l'aime. S'il l'aime, conservez-le. S'il ne l'aime pas, retirez-le de la liste. Ensuite, demandez à l'utilisateur d'ajouter un fruit qui manque dans la liste. Ajoutez-le à la liste et affichez le nombre de fruits que l'utilisateur aime.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/f25jnzdr" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```