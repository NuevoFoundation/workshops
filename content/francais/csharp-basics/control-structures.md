```markdown
---
title: "Structures de Contrôle"
description: "Introduction aux structures if-else, for et while en C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Prendre une Décision : Instruction If

Patrick 🐥 est un canard très poli qui aime saluer tout le monde qu'il rencontre avec "Bonjour", "Bon Après-midi" ou "Bonne Nuit" en fonction de l'heure actuelle.

![Le soleil se levant rapidement au-dessus d'une montagne](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(image par National Geographic : giphy.com/natgeochannel)</p>

Comme nous l'avons vu précédemment, nous pouvons afficher ces phrases ainsi :

```C#
Console.WriteLine("Bonjour");           // dire cela entre 0:00 - 11:59
Console.WriteLine("Bon Après-midi");    // dire cela entre 12:00 - 19:59
Console.WriteLine("Bonne Nuit");        // dire cela entre 20:00 - 23:59
```

Cependant, nous savons aussi que Patrick 🐥 ne devrait décider de dire qu'une seule de ces phrases en fonction de l'heure actuelle.

En d'autres termes, nous devons écrire du code qui prend une décision sur ce qu'il faut afficher en fonction des conditions de la situation (conditionnellement).

En C#, nous prenons une décision à l'aide d'une **instruction if** ou d'une **instruction if...else**. Lisez les notes ci-dessous :

{{% notice note %}}
### Instruction If

```
if(expression booléenne){
    Action(s) à Entreprendre
}
```

Une **instruction if** suit la structure ci-dessus. Les actions (instructions) du bloc seront exécutées uniquement si l'expression booléenne est `true`. Sinon, le programme passera à l'instruction après le bloc si l'expression booléenne est `false`.
### Instruction If-Else

```
if(expression booléenne){
    Action(s) à Entreprendre A
}else{
    Action(s) à Entreprendre B
}
```

Une **instruction if-else** suit la structure ci-dessus. Si l'expression booléenne est `true`, le programme exécutera les `Action(s) à Entreprendre A` dans le bloc `if`. Sinon, le programme exécute uniquement les `Action(s) à Entreprendre B` dans le bloc `else`.

### Exemple

```C#
    bool aimeLaMusique = true;
    if(aimeLaMusique == true) 
    {
        Console.WriteLine("J'aime la musique");
    } 
    else 
    {
        Console.WriteLine("Je n'aime pas la musique");
    }   
```

Le code ci-dessus affichera la phrase `J'aime la musique` car l'expression booléenne, `aimeLaMusique == true`, est vraie.
{{% /notice %}}

Revenons à l'exemple de salutation ci-dessus, et prenons une décision pour Patrick : doit-il dire "Bonjour", "Bon Après-midi" ou "Bonne Nuit" ? 

Patrick devrait dire "Bonjour" entre 0:00 - 11:59, "Bon Après-midi" entre 12:00 - 19:59, et "Bonne Nuit" entre 20:00 - 23:59.

1. Nous avons une variable `currentHour` qui stocke l'heure actuelle. 
2. Complétez les `expression booléenne A` et `expression booléenne B` correctes pour compléter le programme.
3. Testez votre résultat en attribuant des valeurs comprises entre 0 et 23 à la variable `currentHour` :

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="Exercice interactif sur les instructions conditionnelles C#" frameborder="0"></iframe>

## Répétez-le Encore : Boucle For, Boucle While

En cours de maths, l'enseignant de Patrick 🐥 pose un défi mathématique à la classe, et il pourrait avoir besoin d'un coup de main. 

L'enseignant leur demande de trouver la **somme de 1, 2, 3, ..., 100**. C'est-à-dire quelle est la valeur de **1 + 2 + 3 + 4 ... + 99 + 100** ?

Bien que nous puissions entrer cela dans une calculatrice, cela prendrait beaucoup de temps. Heureusement, en C#, vous pouvez facilement calculer cela en 3 lignes grâce à une **boucle for** ou une **boucle while**.

{{% notice note %}}
**Les boucles for** et **les boucles while** sont des structures de contrôle en C# qui vous permettent d'exécuter des blocs de code plusieurs fois.

### Boucle While

```
while(expression booléenne){
    Action(s) à Entreprendre
}
```

Les `Action(s) à Entreprendre` dans le bloc while seront exécutées tant que l'`expression booléenne` est `true`. 

Voici un exemple qui affiche les chiffres de 1 à 10 :

```C#
int numéro = 1;
while(numéro <= 10){
    Console.WriteLine(numéro);
    numéro = numéro + 1;        // numéro est incrémenté de 1
}
```

Dans la boucle while ci-dessus, le programme affichera la valeur de `numéro` et incrémentera `numéro`. Cette étape sera effectuée tant que `numéro <= 10`, et dans ce cas, la boucle se termine lorsque `numéro` vaut 11.

**Remarque :** Pour les boucles `while`, vous devez vous rappeler d'incrémenter la variable conditionnelle, sinon vous introduirez une boucle infinie dans votre programme.

### Boucle For

```
for(initialisation; condition de terminaison; instruction de mise à jour){
    Action(s) à Entreprendre
}
```

Dans une boucle `for`, il y a trois parties dans le bloc conditionnel : `initialisation`, `condition de terminaison` et `instruction de mise à jour`.

1. Lors de l'exécution d'une boucle for, le programme exécutera la partie `initialisation`. Un exemple est, `int numéro = 1`.
2. Ensuite, le programme vérifie la `condition de terminaison`. Un exemple est `numéro <= 10`.
3. Si c'est `true` :
    1. exécutez les `Action(s) à Entreprendre` 
    2. exécutez l'`instruction de mise à jour` (un exemple est `numéro = numéro + 1`) 
4. Répétez les étapes 2 et 3.
5. Si la `condition de terminaison` est `false`, quittez la boucle `for`.

Voici un exemple qui affiche les chiffres de 1 à 10 :

```C#
for(int numéro = 1; numéro <= 10; numéro = numéro