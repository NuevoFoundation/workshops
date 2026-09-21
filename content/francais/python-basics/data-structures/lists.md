```markdown
---
title: "Listes"
draft: false
weight: 1
---

Les listes sont des collections ordonnées d'éléments et peuvent être écrites sous forme de valeurs séparées par des virgules à l'intérieur de crochets `[]`. Comme nous l'avons vu dans notre leçon sur les boucles, les listes peuvent contenir des données de n'importe quel type, par exemple des chaînes de caractères ou des entiers.

```python
#Créer une liste de 5 fruits
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']
```

Si vous voulez référencer un élément spécifique d'une liste, vous pouvez le faire en utilisant des indices (position) à l'intérieur de crochets. Le premier élément a l'indice (position) `0` et la liste va jusqu'à `(nombre d'éléments dans la liste - 1)`. Ainsi, une liste ayant 6 éléments aura des indices de 0 à 5. 

```python
#Créer une liste de 5 fruits
fruits = ['orange', 'apple', 'banana', 'apple', 'mango']

#Afficher l'élément à l'indice 2
print(fruits[2])     ##cela imprime "banana"
```

**Indice** | **Élément**
-------|-------
0 | orange
1 | apple
2 | banana
3 | apple
4 | mango

{{% notice note %}}

Comme vous le voyez dans cet exemple, les listes peuvent contenir des éléments en double.

{{% /notice %}}

En Python, les listes n'ont pas besoin d'avoir des éléments du même type de données, donc une seule liste peut contenir une combinaison de chaînes de caractères et de nombres.

```python
#Les listes peuvent aussi contenir différents types de données
my_list = ['candy', 10, 2.5]
```

### Longueur de la liste

Vous pouvez obtenir la longueur d'une liste en utilisant la fonction `len(list)` où vous passez le nom de la liste en paramètre.

```python
length = len(fruits)  ##length = 5
```

### Ajouter un élément à la liste

Vous pouvez ajouter des éléments à une liste en utilisant la fonction `append`, `list.append(x)` où `list` est le nom de la liste et `x` est l'élément que vous souhaitez ajouter. L'élément est ajouté à la fin de la liste.

```python
#Avant, la liste est ['orange', 'apple', 'banana', 'apple', 'mango']
fruits.append('lemon')
#Maintenant, la liste est ['orange', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Insérer un élément à un indice spécifique

Si vous souhaitez contrôler où vous placez un nouvel élément, vous pouvez insérer un élément à un indice spécifique d'une liste en utilisant la fonction `list.insert(i, x)`. Ici, `list` est le nom de la liste, `i` est l'indice où vous voulez insérer et `x` est l'élément que vous souhaitez insérer. Remarque : cela déplace tous les éléments à partir de la position `i` d'un indice.

```python
fruits.insert(1, 'guava')
#Maintenant, la liste est ['orange', 'guava', 'apple', 'banana', 'apple', 'mango', 'lemon']
```

### Supprimer un élément de la liste

La fonction `list.remove(x)` recherche la première occurrence de l'élément donné `x` et le supprime de la liste.

```python
fruits.remove('apple')
#Maintenant, la liste est ['orange', 'guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

La fonction `list.remove(x)` génère une erreur de type si l'élément `x` n'est pas présent dans la liste.

Remarquez aussi que la deuxième occurrence de `'apple'` est toujours dans la liste.

{{% /notice %}}

### Supprimer un élément à une position spécifique

La fonction `list.pop(i)` supprime l'élément à l'indice `i`.

```python
fruits.pop(0)
#Maintenant, la liste est ['guava', 'banana', 'apple', 'mango', 'lemon']
```

{{% notice note %}}

Si vous ne spécifiez pas l'indice, `list.pop()` supprime alors le dernier élément de la liste.

{{% /notice %}}

### Inverser les éléments de la liste

La fonction `list.reverse()` inverse les éléments de la liste.

```python
fruits.reverse()
#Maintenant, la liste est ['lemon', 'mango', 'apple', 'banana', 'guava']
```

### Obtenir l'élément minimum et maximum de la liste

La fonction `min(list)` renvoie l'élément minimum d'une liste, et l'élément maximum peut être trouvé en utilisant la fonction `max(list)`. Si la liste est composée de nombres, elle renverra la valeur numérique la plus petite ou la plus grande. Si la liste est composée de chaînes de caractères, elle renverra la première ou dernière valeur par ordre alphabétique.

```python

my_list = [4, 1, 2, 5, 3]  ## Définit une nouvelle liste d'entiers

print(min(my_list)) ## imprime 1, l'élément minimum de my_list
print(max(my_list)) ## imprime 5, l'élément maximum de my_list

```
{{% notice note %}}

Si votre liste est un mélange de chaînes de caractères et de nombres, les fonctions `min` et `max` généreront une erreur.

{{% /notice %}}

### Défi

Essayons maintenant par vous-même. Commencez par la liste de fruits ci-dessous. Affichez la liste des fruits et, pour chaque fruit, demandez à l'utilisateur s'il l'aime. S'il l'aime, conservez-le. Sinon, supprimez-le de la liste. Ensuite, demandez à l'utilisateur d'ajouter un fruit qui manque à la liste. Ajoutez-le à la liste et affichez le nombre de fruits que l'utilisateur aime.

```python
fruits = ['orange', 'kiwi', 'banana', 'apple', 'mango', 'lemon']
```

<iframe title="Défi - Codebunga" src="https://codebunga.com/embed/cv4h3m89" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Indice : Vous devrez convertir l'entier `length` en une chaîne de caractères en utilisant la fonction `str(int)`.
```