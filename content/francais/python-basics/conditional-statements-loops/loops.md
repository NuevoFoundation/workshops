```markdown
---
title: "Boucles"
draft: false
weight: 2
---

## Boucles en Python

Si vous souhaitez répéter une tâche plusieurs fois, Python offre un moyen simple de le faire en utilisant des boucles. 
Il existe deux types de boucles de base en Python : les boucles `for` et les boucles `while`.

### Boucles For

Les boucles `for` itèrent sur une séquence. Disons que vous voulez répéter une tâche simple 5 fois. Voici comment vous pourriez le faire.

La boucle `for` suivante parcourt chacun des nombres dans la liste [1,2,3,4,5], et leur attribue la valeur x. Ensuite, elle exécute le code à l'intérieur de la boucle.

```python
for x in [1,2,3,4,5]:    
    print("Nous sommes à la boucle numéro", x)
```

<iframe title="Boucles For - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Et si vous vouliez répéter une tâche 10 fois ? 100 fois ? 1000 fois ??

Il serait difficile d'écrire une liste avec 1000 nombres [1,2,3,4,5,6,..........,998,999,1000]. Il existe une fonction qui peut créer cette liste pour vous.

Voici un exemple de création de liste en utilisant la fonction `range` :

Le code ci-dessous crée une liste qui commence à 1 et se termine à 10.
```
range(1,11)
```
Essayez maintenant de remplacer la liste [1,2,3,4,5] dans l'exemple précédent par cette fonction `range` !

La liste dans une boucle `for` ne doit pas nécessairement être des nombres, elle peut être n'importe quoi ! Voici un autre exemple de ce que vous pouvez faire avec :

```python
fruits = ["pomme","banane","orange"]

for x in fruits:
    print(x)
```

<iframe title="Boucles For - Codebunga 2" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Boucles While

Les boucles `while` sont similaires aux boucles `for`, mais au lieu d'itérer sur une séquence, elles se répètent tant qu'une certaine condition est remplie. 
Par exemple, créons une boucle `while` qui se répète 5 fois.

```python
count = 0

while count < 5:
    print("Le compte actuel est", count)
    count += 1  # Cela revient au même que count = count + 1
```

<iframe title="Boucles While - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Comme vous pouvez le voir, tout le code sous la boucle `while` est exécuté tant que la variable `count` est inférieure à 5.

Attention ! Assurez-vous que la condition devienne `False` à un moment donné, sinon la boucle continuera indéfiniment.

### Instructions Break

Vous avez appris que les boucles `for` et `while` continuent d'itérer sur une séquence jusqu'à ce qu'elles atteignent la fin ou qu'une condition soit remplie.

Il existe une autre façon d'arrêter l'exécution de ces boucles avant la fin de la liste ou avant qu'une condition soit remplie.

Vous pouvez le faire grâce à l'instruction `break`. Cela vous permet de sortir de la boucle, que ce soit une boucle `for` ou `while`.

Voici un exemple d'utilisation de l'instruction `break` à l'intérieur d'une boucle `while` :

```python
count = 0

while True:  # Cela fera fonctionner la boucle `while` indéfiniment, sauf s'il y a une instruction `break` quelque part dans la boucle.
    print("le compte est", count)
    
    if (count == 10): # Cela signifie que si le compte est égal à 10, alors quittez la boucle `while`
        print("Sortir de la boucle !")
        break
    
    count += 1  # équivalent à count = count + 1
```

<iframe title="Instructions Break - Codebunga" src="https://codebunga.com/embed/2xipqayk" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

### Défis

1. Étant donné une liste de aliments, écrivez un programme qui écrit "J'aime [nom de l'aliment]" sauf si c'est l'aliment préféré du moins utilisateur, que vous demandez au début.

```python
foodList = ["pommes", "glace", "pizza", "bananes", "carottes", "courge", "concombres", "sandwich", "avoine", "biscuits", "gâteau", "épinards", "chou kale"]
```

2. Étant donné une grande liste comme celle ci-dessous, écrivez un programme qui peut trouver un nombre particulier dans cette liste.

```python
numList = [69, 430, 363, 80, 166, 476, 250, 38, 84, 405, 41, 302, 480, 57, 155, 17, 350, 87, 313, 36, 191, 367, 163, 167, 185, 93, 131, 314, 444, 452, 47, 457, 28, 21, 405, 350, 241, 121, 411, 152, 244, 207, 199, 371, 193, 4, 286, 482, 496, 283, 23, 466, 8, 84, 47, 231, 112, 329, 328, 85, 208, 161, 42, 251, 277, 207, 496, 3, 137, 138, 436, 447, 442, 313, 479, 464, 191, 19, 78, 333, 480, 36, 378, 232, 438, 451, 139, 444, 392, 75, 245, 151, 225, 50, 369, 49, 73, 325, 430, 335]
```

Par exemple, demandez à l'utilisateur d'entrer un nombre