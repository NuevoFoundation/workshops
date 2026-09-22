---
title: "Boucles imbriquées"
description: "Applications avancées pour les boucles"
date: 2020-07-16T00:00:00Z
weight: 4
---

### Boucles imbriquées
Les *boucles imbriquées* sont une extension de ce que nous avons appris sur les boucles `for` et `while` dans l'exercice précédent. Il peut être utile de revoir la page <a href="../loops/" target="blank">For-loop et While-loop</a> avant de continuer.

Dans cette section, nous utiliserons une boucle à l'intérieur d'une autre, ce qui est appelé une *boucle imbriquée*.  
<hr/>

### Boucle `while` imbriquée
```python
#Ceci est le format pour une boucle while imbriquée
while expressionA:
    while expressionB:
        statement(B)
    statement(A)
```
Dans la boucle `while` ci-dessus, lorsque `expressionA` donne `False`, nous passerons tout le bloc. Lorsque `expressionA` donne `True`, nous passerons à la boucle while interne et vérifierons `expressionB`. Si `expressionB` donne `True`, `statement(B)` sera exécuté. Si `expressionB` donne `False`, nous passerons la boucle while interne et passerons à `statement(A)`.

Si `expressionA` donne `False`, aucune des instructions ne sera exécutée ; `statement(A)` et `statement(B)` seront tous deux exécutés uniquement si `expressionA` et `expressionB` donnent tous deux `True`.

Regardons un exemple de boucle `while` imbriquée.
 ```python
 #Ceci est un exemple de boucle `while` imbriquée.
 x = 0
 y = 0
 #Ci-dessous se trouve notre boucle externe
 while x < 3:
     #Imprime si « x < 3 » donne True
     print("Passe par la boucle while externe, x est", x, "y est", y, sep = " ")
     #Ci-dessous se trouve notre boucle interne
     while y < 5:
         #Imprime si « y < 5 » donne True
         print("Passe par la boucle while interne, x est", x, "y est", y, sep = " ")
         y += 1
     #Ces codes ci-dessous sont exécutés après avoir terminé chaque boucle interne.
     x += 1
     y = 0
 ```
Voici le résultat de notre exemple.

 ```output
Passe par la boucle while externe, x est 0 y est 0
Passe par la boucle while interne, x est 0 y est 0
Passe par la boucle while interne, x est 0 y est 1
Passe par la boucle while interne, x est 0 y est 2
Passe par la boucle while interne, x est 0 y est 3
Passe par la boucle while interne, x est 0 y est 4
Passe par la boucle while externe, x est 1 y est 0
Passe par la boucle while interne, x est 1 y est 0
Passe par la boucle while interne, x est 1 y est 1
Passe par la boucle while interne, x est 1 y est 2
Passe par la boucle while interne, x est 1 y est 3
Passe par la boucle while interne, x est 1 y est 4
Passe par la boucle while externe, x est 2 y est 0
Passe par la boucle while interne, x est 2 y est 0
Passe par la boucle while interne, x est 2 y est 1
Passe par la boucle while interne, x est 2 y est 2
Passe par la boucle while interne, x est 2 y est 3
Passe par la boucle while interne, x est 2 y est 4
 ```

#### Questions
Pouvez-vous essayer de déterminer comment les valeurs de `x` et `y` changent et expliquer pourquoi ?

(**Indice** : Combien de fois passons-nous par la boucle externe et la boucle interne séparément ?)

<hr/>

### Défi Un
Essayez de changer les entiers dans la boucle while imbriquée et prédisez les résultats. Ensuite, exécutez le code et observez les résultats. Correspondent-ils à vos prédictions ?

<iframe title="Défi Un - Codebunga" src="https://codebunga.com/embed/wgwzwt4z" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### Boucle `for` imbriquée

```python
#Ceci est le format pour une boucle for imbriquée
for variableA in rangeA:
   for variableB in rangeB:
      statements(B)
   statements(A)
```
Dans la boucle `for` ci-dessus, lorsque `variableA` n'est pas dans `rangeA`, nous passerons tout le bloc. Lorsque `variableA` est dans `rangeA`, nous passerons à la boucle `for` interne. Si `variableB` est dans `rangeB`, `statement(B)` sera exécuté. Si `variableB` n'est pas dans `rangeB`, nous passerons la boucle interne et passerons à la boucle externe.

Si `variableA` n'est pas dans `rangeA`, aucune des instructions ne sera exécutée ; `statement(B)` et `statement(A)` seront tous deux exécutés uniquement si `variableA` est dans `rangeA` et `variableB` est dans `rangeB`.

Regardons un exemple.

```python
#Ceci est un exemple de boucle for imbriquée
#Ci-dessous se trouve notre boucle externe
for n in range(0, 3):
    #Ci-dessous se trouve notre boucle interne
    for m in range(0, 3):
        #Imprime si m est dans range(0, 3)
        print("(", n, ",", m, ")", end = " ")
    #Imprime si n est dans range(0, 3)
    print("")
```
Voici le résultat de notre exemple.

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

#### Questions
Pouvez-vous essayer d'expliquer le motif d'affichage ?

(**Indice** : Combien de fois passons-nous par la boucle externe et la boucle interne séparément ?)

<hr/>

### Défi Deux
Essayez de changer les entiers dans la boucle for imbriquée et prédisez les résultats.  
Ensuite, exécutez le code et observez les résultats. Correspondent-ils à vos prédictions ?

<iframe title="Défi Deux - Codebunga" src="https://codebunga.com/embed/wgwzwt4