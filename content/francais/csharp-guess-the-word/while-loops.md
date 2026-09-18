---
title: "Boucles While"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 16
---

## Boucles While

Les boucles `while` sont un moyen simple de répéter l'exécution de lignes sans avoir à réutiliser une ligne plusieurs fois. Par exemple, pour afficher `Hello World` cinq fois de suite, vous pouvez faire :

```csharp
var counter = 1;
while (counter <= 5)
{
    Console.WriteLine("Hello World");
    counter = counter + 1;
}
```

Comme avec une instruction `if`, à l'intérieur des parenthèses `()` à côté de `while`, vous devez spécifier une expression booléenne. Si l'expression est `true`, le code à l'intérieur des accolades `{ }` est exécuté. Cependant, après que tout ce qui se trouve dans les accolades a été exécuté, nous retournons au début de la boucle `while` et vérifions à nouveau l'expression booléenne. Si l'expression booléenne continue d'être `true`, la boucle sera répétée.

![alt text height="600px" width="70%"](../media/while-1.png "While 1")

Vous pouvez également placer des instructions `if` dans des boucles `while` pour produire des comportements intéressants :

```csharp
var counter = 1;
while (counter <= 10)
{
    if (counter < 5)
    {
        Console.WriteLine("Plus petit que 5 !");
    }
    else
    {
        Console.WriteLine("Supérieur ou égal à 5 !");
    }
    counter = counter + 1;
}
```

![alt text height="600px" width="70%"](../media/while-2.png "While 2")

Voici un exemple de boucle infinie - voyez-vous ce qui ne va pas ? Que pouvez-vous faire pour que le code suivant affiche `Spam!` seulement 100 fois ?

```csharp
var counter = 100;
while (counter > 0)
{
    Console.WriteLine("Spam!");
}
```

{{% notice tip %}}

## Travailler ensemble

Reprenez votre code de l'activité précédente. Étendons le code afin qu'au lieu que le programme se termine après qu'un utilisateur ait entré une réponse, le programme permette à l'utilisateur de répondre 10 fois avant de quitter. Faites attention à ne pas créer de boucles infinies !

{{% /notice %}}