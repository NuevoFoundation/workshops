---
title: "Lecture depuis la console"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 12
---

## Lecture depuis la console

Maintenant que nous connaissons les bases des variables, nous pouvons accepter une entrée de l'utilisateur. Utilisez la ligne suivante pour indiquer à la console d'attendre que l'utilisateur saisisse quelque chose. Ensuite, l'ordinateur prend ce qui a été saisi dans la console et le stocke dans la variable appelée `input`.

```csharp
var input = Console.ReadLine();
```

Voici un exemple d'utilisation de `Console.ReadLine` pour accepter une entrée utilisateur :

```csharp
Console.WriteLine("Tapez quelque chose :");
var input = Console.ReadLine();
Console.WriteLine("Vous avez tapé : " + input);
```

Lorsque l'utilisateur appuie sur **exécuter**, le programme présente le comportement suivant :

![alt text height="600px" width="70%"](../media/reading-input-1.png "Lecture depuis l'entrée avant la saisie")

Dans cet exemple, après que l'utilisateur ait saisi `Hello World!` dans la console, le programme termine en affichant dans la console :

![alt text height="600px" width="70%"](../media/reading-input-2.png "Lecture depuis l'entrée après la saisie")

{{% notice tip %}}

## Travailler ensemble

Écrivez un programme qui affiche d'abord les deux lignes suivantes dans la console :

```
Bienvenue !
Comment puis-je vous aider aujourd'hui ?
```

Ensuite, la console attend une entrée de l'utilisateur. Après que l'utilisateur ait saisi quelque chose et appuyé sur Entrée, l'ordinateur affiche :

```
Vous avez demandé : [input] ?
Je ne connais pas la réponse à cela ! Au revoir !
```

`[input]` doit être remplacé par ce que l'utilisateur a saisi dans la console.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ULv0JH" title="Lecture depuis la console - Éditeur .NET Fiddle" frameborder="0"></iframe>

{{% /notice %}}