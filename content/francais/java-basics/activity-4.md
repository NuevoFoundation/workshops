```markdown
---
title: "Structures de Contrôle"
description: "Introduction aux conditions if-else, boucles for et while en Java."
date: 2021-10-13T00:00:00Z
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/X8HzOuCel9A" title="Vidéo sur les structures de contrôle en Java" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Prendre une Décision : La Condition If

Patrick 🐥 est un canard très poli qui aime saluer tout le monde qu'il rencontre avec "Bonjour", "Bon Après-midi" ou "Bonne Nuit" en fonction de l'heure actuelle.

![Le soleil se lève rapidement sur une montagne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(image par National Geographic : giphy.com/natgeochannel)</p>

Comme nous l'avons vu précédemment, nous pouvons afficher ces phrases comme ceci :

```java
System.out.println("Bonjour");         // dire cela entre 0:00 - 11:59
System.out.println("Bon Après-midi");  // dire cela entre 12:00 - 19:59
System.out.println("Bonne Nuit");      // dire cela entre 20:00 - 23:59
```

Cependant, nous savons aussi que Patrick 🐥 doit choisir de dire l'une de ces phrases en fonction de l'heure actuelle.

En d'autres termes, nous devons écrire un code qui décide quoi afficher en fonction des conditions de la situation (de manière conditionnelle).

En Java, nous prenons une décision à l'aide d'une **instruction if** ou d'une **instruction if...else**. Lisez les notes ci-dessous :

{{% notice note %}}
### Instruction If

```
if(expression booléenne){
    Action(s) à effectuer
}
```

Une **instruction if** suit la structure ci-dessus. Les actions à effectuer (instructions) dans le bloc ne seront exécutées que si l'expression booléenne est `true`. Sinon, le programme ignorera le bloc si l'expression booléenne est `false`.  
### Instruction If-Else

```
if(expression booléenne){
    Action(s) à effectuer A
}else{
    Action(s) à effectuer B
}
```

Une **instruction if-else** suit la structure ci-dessus. Si l'expression booléenne est `true`, le programme exécutera les `Action(s) à effectuer A` dans le bloc `if`. Sinon, le programme exécutera uniquement les `Action(s) à effectuer B` dans le bloc `else`.

### Exemple

```java
boolean aimeLaMusique = true;
if(aimeLaMusique == true) {
    System.out.println("J'aime la Musique");
} else {
    System.out.println("Je n'aime pas la Musique");
}
```

Le code ci-dessus affichera la phrase `J'aime la Musique` parce que l'expression booléenne `aimeLaMusique == true` est vraie.
{{% /notice %}}

Revenons à l'exemple de salutation ci-dessus, et prenons une décision pour Patrick sur le fait de dire "Bonjour", "Bon Après-midi", "Bonne Nuit".  

Patrick devrait dire "Bonjour" entre 0:00 - 11:59, "Bon Après-midi" entre 12:00 - 19:59, et "Bonne Nuit" entre 20:00 - 23:59.

1. Nous avons une variable `currentHour` qui stocke l'heure actuelle.  
2. Complétez les expressions booléennes appropriées `A` et `B` pour compléter le programme.  
3. Testez votre résultat en attribuant des nombres de 0 à 23 à la variable `currentHour` :

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">Lancer Replit</a>

## Répéter : Boucles For et While

En cours de mathématiques, le professeur de Patrick 🐥 pose une question de défi mathématique, et il pourrait avoir besoin d’aide.  

Le professeur leur demande de trouver la **somme de 1, 2, 3, ...., 100**. C'est-à-dire **1 + 2 + 3 + 4 ... + 99 + 100**?

Bien qu'on puisse le mettre dans une calculatrice, ça va prendre un certain temps. Heureusement, en Java, vous pouvez facilement calculer cela en 3 lignes grâce à une **boucle for** ou une **boucle while**.

{{% notice note %}}
Les **boucles for** et **boucles while** sont des structures de contrôle en Java qui permettent d'exécuter des blocs de code plusieurs fois.

### Boucle While

```
while(expression booléenne){
    Action(s) à effectuer
}
```

Les `Action(s) à effectuer` dans le bloc while seront exécutées tant que l'`expression booléenne` est `true`.  

Voici un exemple qui affiche les nombres de 1 à 10 :

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // le nombre est incrémenté de 1
}
```

Dans la boucle while ci-dessus, le programme affichera la valeur de `number` et incrémentera `number`. Cette étape sera répétée tant que `number <= 10`, et dans ce cas, la boucle se termine lorsque `number` vaut 11.

**Remarque :** Pour les boucles `while`, il est essentiel de se rappeler d'incrémenter la variable conditionnelle, sinon vous introduirez une boucle infinie dans votre programme.

### Boucle For

```
for(initialisation; condition de terminaison; instruction de mise à jour){
    Action(s) à effectuer
}
```

Dans une boucle `for`, il y a trois parties dans le bloc conditionnel : `initialisation`, `condition de terminaison`, et `instruction de mise à jour`.

1. Lors de l’exécution d’une boucle for, le programme exécute la partie `initialisation`. Exemple : `int number = 1`.
2. Ensuite, le programme vérifie la `condition de terminaison`. Exemple : `number <= 10`.
3. Si elle est `true` :
    1. exécute les `Action(s) à effectuer`  
    2. exécute l’`instruction de mise à jour` (exemple : `number = number + 1`)  
4. Répète étape 2 et 3.
5. Si la `condition de terminaison` est `false`, sort de la boucle `for`.

Voici un exemple qui affiche les nombres de 1 à 10 :

```java
for