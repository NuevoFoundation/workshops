```markdown
---
title: "Fonctions mathématiques intégrées"
date: 2019-07-28T11:45:38-07:00
draft: false
weight: 3
---

Python fournit un certain nombre de fonctions intégrées importantes que nous pouvons utiliser sans avoir à fournir la définition de la fonction. Dans cette section, nous allons découvrir certaines des fonctions mathématiques intégrées grâce auxquelles vous pouvez effectuer des opérations mathématiques sur des nombres.

Les fonctions `max()` et `min()` nous donnent respectivement les valeurs la plus grande et la plus petite d'une liste :

```python
x = min(20, 10, 50, 25)		#x = 10
print(x)
y = max(20, 10, 50, 25)		#y = 50
print(y)
```

La fonction `abs()` nous donne la valeur absolue (positive) d'un nombre :

```python
x = abs(-34)		         #x = 34
print(x)
y = abs(90)			         #y = 90
print(y)
```

La fonction `pow(a, b)` nous donne la valeur de `a` élevé à la puissance `b` (a<sup>b</sup>) :

```python
x = pow(3,4)		        #x = 81
print(x)
```

### Défi

Regroupons tout cela ! Voyons si nous pouvons créer un programme qui prend 5 nombres de l'utilisateur et affiche la valeur du minimum de ces nombres élevé à la puissance du maximum. Par exemple, étant donné les nombres 2,7,4,11,9, retourner 2<sup>11</sup>. Des points bonus si vous pouvez diviser cela en plusieurs fonctions !

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/3sw68wix" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```