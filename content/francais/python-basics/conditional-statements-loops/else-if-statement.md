```markdown
---
title: "Condition Else-if"
draft: false
weight: 2
---

Lors du dernier exercice, nous avons appris les conditions de base if-else. Si vous avez besoin d’un petit rappel, vous pouvez consulter <a href="../conditional-statements/"> les déclarations conditionnelles</a>.

Dans cette section, nous allons approfondir avec une nouvelle condition appelée "elif".

### Condition Elif

Le **mot clé Elif** représente la condition "else-if". Un exemple dans le monde réel serait : si j'ai très faim, je mangerai un gâteau, sinon si j'ai juste un peu faim, je prendrai une pomme, sinon je ne mangerai rien. Vous pouvez voir qu'il est utilisé lorsque vous souhaitez tester une autre condition si la première n'est pas vraie.

```python
# Voici la syntaxe basique d'elif
if expression:
    statement(s)
elif expression:
    statement(s)
else:
    statement(s)
```

#### Voyons un exemple
```python
# Voici un exemple
if 1 > 3:
    print('1>3')
elif 1 == 3:
    print('1=3')
else:
    print('1<3')
```
Puisque nous pouvons voir que la première déclaration, `1` est supérieur à `3`, est fausse, elle est évaluée comme `false`. L’intérieur de la déclaration `if` ne sera donc pas exécuté. Ensuite, nous évaluons la déclaration `elif`, `1` est égal à `3`, ce qui est également évalué comme `false`. L’intérieur du `elif` ne sera pas exécuté. Ainsi, ce qui est dans `else` sera affiché.

### Attention : `elif` est différent de `if`  
#### Voyons deux exemples
#### Exemple A
```python
# Ceci est l'Exemple A avec deux déclarations if
if 1 == 1:
    print('1=1')
if 3 == 3:
    print('3=3')
else:
    print('wrong')
```
L'Exemple A affichera :

```
1 = 1
3 = 3
```

#### Exemple B
```python
# Ceci est l'Exemple avec des déclarations elif
if 1 == 1:
    print('1=1')
elif 3 == 3:
    print('3=3')
else:
    print('wrong')
```
L'Exemple B affichera :

```
1 = 1
```

Dans l'Exemple A, nous évaluons la première déclaration `if` (`1==1`) comme étant `true`. L’intérieur de la première déclaration `if` sera alors exécuté. Ensuite, nous évaluons la deuxième déclaration `if` (`3==3`) comme étant `true` également. L’intérieur de la deuxième déclaration `if` sera aussi exécuté.

Dans l'Exemple B, nous évaluons la première déclaration `if` (`1==1`) comme étant `true`. Ensuite, les parties suivantes du `elif` et du `else` ne seront pas évaluées, car le `if` est déjà correct.

#### Défi
Pouvez-vous utiliser les connaissances que vous avez apprises dans Python-Basics-booleans pour créer votre propre exemple pour `elif` ?
Il serait utile de revoir les booléens pour terminer ce défi.
- <a href="../../data-types/booleans/"> Booléens </a>
<br/><br/>

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/7e6i4vm8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```