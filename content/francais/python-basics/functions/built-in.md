```markdown
---
title: "Fonctions intégrées"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

Il existe de nombreuses fonctions intégrées en Python qui peuvent être utilisées pour faciliter l'écriture de code. Discutons de quelques-unes d'entre elles ici.

# sort()
Cette fonction est utilisée pour trier les valeurs dans des structures de données telles que les tableaux et les listes.
```python
arr = [8,5,1,4,6]
arr.sort()
print('Le tableau trié est :',arr)
#affiche Le tableau trié est [1,4,5,6,8]
```

# find()
Renvoie la première occurrence de l'entrée (modèle) donnée à `find()` dans la chaîne donnée.
```python
str1 = "Hello World"
index = str1.find("World")
print(index) #affiche 6
```

# len()
`len()` aide à déterminer la taille de la structure de données donnée.
```python
arr = [10,5,4,2,3]
print(len(arr)) #affiche 5
```

# isdigit()
Cette fonction retourne `True` si la chaîne passée en tant qu'argument contient uniquement des chiffres ; sinon, elle retourne `False`.
```python
s = "123";  
print(s.isdigit()) #affiche True

s = "Hello World";
print(s.isdigit()) #affiche False

s = "123Hello"
print(s.isdigit()) #affiche False car il a des lettres avec des chiffres
```

# reverse()
Cette fonction est utilisée pour inverser le contenu d'un tableau ou d'une liste.
```python
arr = [5, 6, 7, 8, 9];
arr.reverse();
print(arr) #affiche [9,8,7,6,5]
```

# replace()
Cette fonction remplace le premier argument passé à la fonction par le second argument dans une chaîne donnée.

```python
initial_str = "My name is Harry. Harry is a good boy."
final_str = initial_str.replace("Harry", "Potter")
print(final_str) #affiche Mon nom est Potter. Potter est un bon garçon.
```

# append()
Cette fonction est utilisée pour ajouter un numéro, un caractère ou un élément de n'importe quel type de données à la fin d'une liste ou d'un tableau.
```python
arr = [1,2,3,4,5];
arr.append(6);
print(arr) #affiche [1,2,3,4,5,6]

arr = ['Harry','Ram',1,2]
arr.append("Jenifer")
print(arr) #affiche [Harry,Ram,1,2,Jenifer]
```

# remove()
Supprime la première occurrence de l'argument passé pour l'objet donné. Si vous essayez de supprimer un élément non présent dans la liste, cela génère une exception indiquant que l'élément ne figure pas dans la liste.
```python
arr = [1,1,2,3,3]  
arr.remove(1)  
print(arr) #affiche 1,2,3,3

arr.remove(4) #génère une exception indiquant que l'élément ne figure pas dans la liste
```

### Challenge 1
 Créez un tableau appelé `arr`

- Initialisez-le à `[1,2,3,4,5]`

- Ajoutez le nombre `6` à la fin et affichez.

- Inversez `arr` et affichez-le.

- Triez `arr` et affichez-le.

- Affichez la longueur de `arr`.

- Supprimez l'élément 6 de `arr` et affichez-le.

- Affichez la longueur de `arr`.

#### Résultat attendu
```Output
    [1,2,3,4,5,6]
    [6,5,4,3,2,1]
    [1,2,3,4,5,6]
    6
    [1,2,3,4,5]
    5
```

### Challenge 2
- Initialisez une chaîne `s` à "Hello all.Hello people".

- Trouvez l'occurrence du mot `Hello` dans la chaîne `s` et affichez-la.

- Remplacez le mot `Hello` par `Hi` dans `s`.

- Vérifiez si la chaîne `s` contient uniquement des chiffres et affichez le verdict.

#### Résultat attendu
```Output
    0
    Hi all.Hi people.
    False
```

<iframe title="Résultat attendu - Codebunga" src="https://codebunga.com/embed/pjz7g5n5" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```