```markdown
---
title: "Instructions if-else"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 14
---

## Instructions if-else

Vous pouvez utiliser les instructions `if` pour **exécuter** une instruction uniquement si certaines conditions sont remplies. Voici un exemple :

```csharp
var myNum = (93 + 41) / 12;
if (myNum == 11)
{
    Console.WriteLine("Ils sont égaux !");
}
```

Dans les `()` à côté de `if`, vous devez spécifier une expression booléenne. Si l'expression est `true`, le code à l'intérieur de `{ }` est exécuté. Dans ce cas, puisque `myNum` est égal à `11`, `Ils sont égaux !` est affiché.

![alt text height="600px" width="70%"](../media/if-true.png "Cas vrai pour If-else")

Si la condition est `false`, rien ne se passe ! Par exemple, puisque `10` n'est pas supérieur à `11`, `Affiche-moi !` ne s'affichera pas dans la console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Affiche-moi !");
}
```

![alt text height="600px" width="70%"](../media/if-false.png "Cas faux pour If-else")

Utilisez `else` pour dire à l'ordinateur quoi faire si la condition est fausse. Dans cet exemple, `Maintenant, j'ai été affiché à la place !` sera imprimé dans la console.

```csharp
var happy = 10;
if (happy > 11)
{
    Console.WriteLine("Affiche-moi !");
}
else
{
    Console.WriteLine("Maintenant, j'ai été affiché à la place !");
}
```

![alt text height="600px" width="70%"](../media/if-else.png "If-else")

Vous pouvez enchaîner plusieurs cas ensemble en utilisant `else if`. Notez que lors de l'utilisation de `else if`, seul le premier cas sera évalué. Par exemple, dans l'extrait de code suivant, l'`Énoncé 1` sera imprimé. Nous ignorerons la vérification que `sad == 4` et l'`Énoncé 2` ne sera pas imprimé, bien que `sad == 4` soit `true`.

```csharp
var sad = 4;
if (sad < 9)
{
    Console.WriteLine("Énoncé 1");
}
else if (sad == 4)
{
    Console.WriteLine("Énoncé 2");
}
else
{
    Console.WriteLine("Énoncé 3");
}
```

![alt text height="600px" width="70%"](../media/if-three.png "Trois instructions If-else")

Vous pouvez également placer des instructions `if` à l'intérieur d'autres instructions `if` pour obtenir des comportements intéressants :

```csharp
var num1 = 10;
var num2 = 20;
if (num1 < num2)
{
    if (num2 < 30)
    {
        Console.WriteLine("Bonjour !");
    }
    else
    {
        Console.WriteLine("Hola !");
    }
}
```

![alt text height="600px" width="70%"](../media/if-nested.png "If-else imbriqué")

{{% notice tip %}}

## Travaillons ensemble

Écrivons un programme qui commence par imprimer la ligne suivante dans la console :

```
La programmation est-elle amusante ?
```

Ensuite, la console attend une saisie utilisateur.

- Si l'utilisateur entre "oui", l'ordinateur affiche : `Oui, je suis content que cela te plaise !`.
- Si l'utilisateur entre "non", l'ordinateur affiche : `Oh non, c'est dommage !`.
- Sinon, l'ordinateur affiche : `Je ne te comprends pas ! Au revoir !`.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Instructions if-else - éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}

{{% notice info %}}

## Fait amusant : Instructions switch

L'utilisation de plusieurs instructions `if`, `else` peut devenir très longue et déroutante. Vous pouvez utiliser les instructions `switch` à la place si vous souhaitez comparer une seule variable à plusieurs valeurs. Par exemple, l'activité **Travaillons ensemble** peut être accomplie en utilisant le morceau de code suivant :

```csharp
    var input = Console.ReadLine();
    switch (input)
    {
        case "oui":
            Console.WriteLine("Oui, je suis content que cela te plaise !");
            break;
        case "non":
            Console.WriteLine("Oh non, c'est dommage !");
            break;
        default:
            Console.WriteLine("Je ne te comprends pas ! Au revoir !");
            break;
    }
```

Chaque `case` représente une valeur possible que la variable `input` pourrait prendre. Assurez-vous d'utiliser l'instruction `break` pour indiquer à l'ordinateur que vous avez terminé toutes les actions associées à ce cas.

{{% /notice %}}
```