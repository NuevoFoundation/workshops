```markdown
---
title: "Structures de Contrôle"
description: "Introduire if-else, for et while loops en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Prendre une Décision : Instruction If

Patrick 🐥 est un canard très poli qui aime saluer tout le monde qu'il rencontre avec "Bonjour," "Bon après-midi," ou "Bonne nuit" selon l'heure actuelle.

![Le soleil se levant rapidement sur une montagne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(image par National Geographic : giphy.com/natgeochannel)</p>

Comme nous l'avons appris précédemment, nous pouvons afficher ces déclarations comme suit :

```C#
Console.WriteLine("Bonjour");   // dire entre 0:00 - 11:59
Console.WriteLine("Bon après-midi"); // dire entre 12:00 - 19:59
Console.WriteLine("Bonne nuit");     // dire entre 20:00 - 23:59
```

Cependant, nous savons aussi que Patrick 🐥 ne devrait choisir de dire qu'une de ces déclarations en fonction de l'heure actuelle.

En d'autres termes, nous devons écrire du code qui prend une décision sur ce qu'il faut imprimer en fonction des conditions de la situation (conditionnellement).

En C#, nous prenons une décision en utilisant une **instruction if** ou une **instruction if...else**. Lisez les notes ci-dessous :

{{% notice note %}}
### Instruction If

```
if(expression booléenne){
    Action(s) à entreprendre
}
```

Une **instruction if** suit la structure montrée ci-dessus. Les actions à entreprendre (instructions) dans le bloc ne seront exécutées que si l'expression booléenne est `true`. Sinon, le programme passera à l'instruction après le bloc si l'expression booléenne est `false`.
### Instruction If-Else

```
if(expression booléenne){
    Action(s) à entreprendre A
}else{
    Action(s) à entreprendre B
}
```

Une **instruction if-else** suit la structure montrée ci-dessus. Si l'expression booléenne est `true`, le programme exécutera `Action(s) à entreprendre A` dans le bloc `if`. Sinon, le programme n'exécute que `Action(s) à entreprendre B` dans le bloc `else`.

### Exemple

```C#
    bool aimeMusique = true;
    if(aimeMusique == true) 
    {
        Console.WriteLine("J'aime la Musique");
    } 
    else 
    {
        Console.WriteLine("Je n'aime pas la Musique");
    }   
```

Le code ci-dessus affichera l'instruction `J'aime la Musique` car l'expression booléenne, `aimeMusique == true`, est vraie.
{{% /notice %}}

Revisons l'exemple de salutation ci-dessus et prenons une décision pour Patrick sur s'il doit dire "Bonjour," "Bon après-midi," "Bonne nuit". 

Patrick devrait dire "Bonjour" entre 0:00 - 11:59, "Bon après-midi" entre 12:00 - 19:59, et "Bonne nuit" entre 20:00 - 23:59.

1. Nous avons une variable `currentHour` qui stocke l'heure actuelle. 
2. Remplissez l'expression `boolean expression A` et `boolean expression B` correctes pour compléter le programme.
3. Testez votre résultat en assignant la variable `currentHour` à des nombres de 0 à 23 :

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Répétez-le Encore : Boucle For, Boucle While

En cours de maths, le professeur de Patrick 🐥 demande à la classe de résoudre un défi mathématique, et il pourrait avoir besoin d'aide. 

Le professeur leur demande de trouver la **somme de 1, 2, 3, ...., 100**. Que vaut **1 + 2 + 3 + 4 ... + 99 + 100** ?

Bien que nous puissions le mettre dans une calculatrice, cela prendra du temps. Heureusement, en C#, vous pouvez facilement calculer cela en 3 lignes grâce à une **boucle for** ou **boucle while**.

{{% notice note %}}
Les **boucles For** et **boucles While** sont des structures de contrôle en C# qui vous permettent d'exécuter