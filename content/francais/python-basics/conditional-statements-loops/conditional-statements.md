---
title: "Instructions conditionnelles"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 1
---

Maintenant que nous connaissons les bases des instructions d'impression, des variables et de la lecture des entrées utilisateur, nous pouvons combiner toutes ces compétences impressionnantes avec les instructions conditionnelles. Les instructions conditionnelles permettent à l'ordinateur de prendre des **décisions** en fonction de la **valeur** d'une expression. Dans le monde réel, nous utilisons tout le temps des instructions conditionnelles pour prendre des décisions ! Par exemple, s'il pleut dehors, alors j'utilise un parapluie. Dans cet exemple, j'ai évalué la météo extérieure et, comme il pleuvait, j'ai pris la décision de manière séquentielle d'utiliser un parapluie.

Quels exemples d'instructions conditionnelles utilisez-vous dans votre vie quotidienne ?

# Les instructions If

Commençons par une instruction `if` dans sa forme la plus simple ! En regardant l'exemple du monde réel, vous pouvez voir certains mots utilisés qui s'appliquent également aux instructions en programmation. **Si** il pleut, alors j'utilise un parapluie. `if` nous indique que nous devons prendre une décision. Pleut-il dehors ? Cette question est appelée l'expression. Ensuite, si c'est le cas, j'utilise un parapluie. C'est une instruction qui s'applique lorsque l'expression est vraie.

```python
if (expr):
    statement
```

Comme montré ci-dessus, nous avons trois parties différentes :

1. If – cela indique à l’ordinateur que nous allons prendre une décision en fonction de l’expression à l’intérieur des parenthèses.
2. Expr – cela représente l’expression que nous évaluons. Si l’expression est "vraie", l’ordinateur entrera dans l'instruction `if` et exécutera l'instruction.
3. Statement – ce que l’ordinateur exécutera si l’expression est "vraie".

```python
x = 0
y = 5

if (x<y):       # vrai
    print('oui')
if (y<x):       # faux
    print('oui')
if (x == 10):   # faux
    print('oui')
```

Analisons cet exemple et comprenons pourquoi certaines instructions sont "vraies" ou "fausses".

On a deux variables `x` et `y`, chacune ayant une valeur assignée. Dans la première instruction `if`, nous testons si la valeur de `x` est inférieure à la valeur de `y`. Comme `0` est inférieur à `5`, cela est vrai ! Donc, la première instruction `if` imprimera 'oui'.

Cependant, nous voyons que `y` n’est pas inférieur à `x`, donc cela est évalué comme `faux`. L’intérieur de l'instruction `if` ne sera donc pas exécuté. La même chose s’applique pour l'instruction `if` qui évalue si `x` est égal à `10`. Nous voyons que `x` est égal à `0`, donc cette expression est `fausse` et l’intérieur de l'instruction `if` ne sera pas exécuté.

# Les instructions Else

Maintenant que nous savons comment utiliser les instructions `if` pour exécuter conditionnellement une seule instruction ou plusieurs instructions, voyons ce que nous pouvons faire d’`autre` !

Parfois, il faut évaluer une condition pour agir en conséquence si elle est `vraie`, mais si elle est `fausse`, agir différemment. Voici la forme la plus simple de l'instruction `else`.

```python
if (expr):
    statement1
else: 
    statement2
```    

C'est vraiment similaire à l’instruction `if` ! Cependant, ici, si l'instruction `if` est `fausse` (non vraie), le programme exécutera automatiquement l’instruction `statement2` dans l'instruction `else`.

Un exemple de la vie réelle serait : si j’ai faim, je mange. Sinon (en d’autres termes, si je n’ai pas faim), je ne mange pas. Jetons un œil au code Python !

```python
if (hungry):
    eat
else:
    dont_eat
```

### Défi

Assemblons tout ce que nous avons appris jusqu’à présent ! Voyons si nous pouvons créer un programme qui demande à l'utilisateur son nom. L’utilisateur peut écrire son nom dans la console. Alors, l’ordinateur peut décider si son nom est égal au vôtre et imprimer une réponse. Sinon, il imprimera une réponse différente !

<iframe title="Challenge - Codebunga" src="https://codebunga.com/embed/y8b9pj44" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Astuce : Essayez de réfléchir aux différents chemins qu’un ordinateur peut emprunter ! Assurez-vous d'identifier quelles sont les conditions `if` et `else`.