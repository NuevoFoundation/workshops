```markdown
---
title: "Structures de Contrôle"
description: "Introduction aux instructions if-else, for, et while en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Prendre une Décision : Instruction If

Patrick 🐥 est un canard très poli qui aime saluer tout le monde qu'il rencontre avec "Bonjour", "Bon Après-midi" ou "Bonne Nuit" selon l'heure actuelle.

![Le soleil se levant rapidement sur une montagne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(image par National Geographic: giphy.com/natgeochannel)</p>

Comme nous l'avons appris précédemment, nous pouvons imprimer ces déclarations comme ci-dessous :

```C#
Console.WriteLine("Bonjour");        // dire entre 0:00 - 11:59
Console.WriteLine("Bon Après-midi"); // dire entre 12:00 - 19:59
Console.WriteLine("Bonne Nuit");     // dire entre 20:00 - 23:59
```

Cependant, nous savons aussi que Patrick 🐥 devrait seulement décider de dire l'une de ces déclarations selon l'heure actuelle.

En d'autres termes, nous avons besoin d'écrire un code qui prend une décision sur ce qu'il faut imprimer basé sur les conditions de la situation (conditionnellement).

En C#, nous prenons une décision en utilisant une **instruction if** ou une **instruction if...else**. Lisez les notes ci-dessous :

{{% notice note %}}
### Instruction If

```
if(expression booléenne){
    Action(s) à Prendre
}
```

Une **instruction if** suit la structure indiquée ci-dessus. Les actions à prendre (déclarations) dans le bloc ne seront exécutées que si l'expression booléenne est `true`. Sinon, le programme passera à l'instruction après le bloc si l'expression booléenne est `false`.
### Instruction If-Else

```
if(expression booléenne){
    Action(s) à Prendre A
}else{
    Action(s) à Prendre B
}
```

Une **instruction if-else** suit la structure indiquée ci-dessus. Si l'expression booléenne est `true`, le programme exécutera `Action(s) à Prendre A` dans le bloc `if`. Sinon, le programme exécutera uniquement `Action(s) à Prendre B` dans le bloc `else`.

### Exemple

```C#
    bool aimeLaMusique = true;
    if(aimeLaMusique == true) 
    {
        Console.WriteLine("J'aime la Musique");
    } 
    else 
    {
        Console.WriteLine("Je n'aime pas la Musique");
    }   
```

Le code ci-dessus imprimera la déclaration `J'aime la Musique` car l'expression booléenne, `aimeLaMusique == true`, est vraie.
{{% /notice %}}

Revisitons l'exemple de salutation ci-dessus, et prenons une décision pour Patrick sur s'il faut dire "Bonjour", "Bon Après-midi", "Bonne Nuit". 

Patrick devrait dire "Bonjour" entre 0:00 - 11:59, "Bon Après-midi" entre 12:00 - 19:59, et "Bonne Nuit" entre 20:00 - 23:59.

1. Nous avons une variable `currentHour` qui stocke l'heure actuelle. 
2. Remplissez l'expression booléenne correcte `A` et `B` pour compléter le programme.
3. Testez votre résultat en assignant la variable `currentHour` à des nombres de 0 à 23:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Répétez Encore : Boucle For, Boucle While

En classe de maths, le professeur de Patrick 🐥 demande à la classe de résoudre un défi mathématique, et il pourrait avoir besoin d'aide.

Le professeur leur demande de trouver la **somme de 1, 2, 3, ...., 100**. C'est-à-dire, quel est **1 + 2 + 3 + 4 ... + 99 + 100**?

Bien que nous puissions calculer cela avec une calculatrice, ça va prendre du temps. Heureusement, en C#, vous pouvez facilement calculer cela en 3 lignes avec l'aide d'une **boucle for** ou **boucle while**.

{{% notice note %}}
Les **boucles for** et **boucles while** sont des structures de contrôle