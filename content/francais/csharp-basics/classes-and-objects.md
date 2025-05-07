---
title: "Classes et Objets"
description: "Introduction aux classes et objets en C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## Qu'est-ce qu'un Objet et qu'est-ce qu'une Classe ?

Un Objet est une chose (nom) qui a certaines caractéristiques et peut effectuer certaines tâches. Une Classe est le plan ou la définition de cet objet lorsqu'il est créé.

Un exemple est une Personne. Une Personne est un type de Classe. Une personne peut avoir certaines caractéristiques qui la distinguent d'une autre personne. Elle peut avoir les yeux bleus, elle peut avoir 15 ans, etc. Une personne peut également accomplir certaines tâches. Elle peut marcher, elle peut parler, etc.

Un Objet C# est une instance d'une Classe C#. Dans cet exemple "Bea" est une "Personne". "Bea" a les yeux marron. C'est une propriété (ou champ de données) de "Bea". "Bea" peut parler anglais. "Bea" peut parler espagnol. Ce sont des méthodes que "Bea" peut effectuer.

## Création d'une Classe !

C# est un langage de programmation **orienté objet**, ce qui signifie que tout en C# est associé à un **objet** et à une **classe** (le plan de l'objet).

Pour commencer, la ligne de code que nous avons utilisée pour imprimer des instructions à partir de l'activité 1 est en fait un appel de méthode d'une classe prédéfinie appelée `System` !

```csharp
Console.WriteLine("Bonjour le monde");
```

1. `Console` est une classe qui traite les entrées et sorties utilisateur.
3. `WriteLine()` est une méthode définie dans la classe `Console`.

Une autre classe intégrée avec laquelle nous avons interagi dans les exercices précédents est `string`. La classe `string` définit un ensemble de règles sur la manière dont une liste de caractères doit se comporter.

Avec la ligne de code suivante, nous avons créé un objet `string` appelé `name` en utilisant les règles définies dans la classe `string` :

```csharp
string name = "Patrick";
```

`Console` et `string` sont des classes prédéfinies en C#. Cependant, nous ne sommes pas limités à ces classes prédéfinies, et nous pouvons en fait créer notre propre type de données en écrivant une classe ! Cela est utile pour les programmeurs afin de créer des objets spécifiques ayant certains attributs et comportements. Avoir accès à ces types définis par l'utilisateur nous permet de construire des programmes distincts.

Apprenons les différentes parties d'une classe ci-dessous :

{{% notice note %}}
### Classe
Une classe est un plan ou prototype d'un nouveau type d'objet. En général, une classe contient trois parties importantes : 

<img src="../images/class.png" height="400" alt="Un plan de classe pour un objet contient des variables d'instance/champs de données qui sont des données/attributs dans l'objet, un constructeur qui sont des méthodes qui créent l'objet de la classe, et des méthodes, qui sont des comportements possibles pour l'objet."/> 

**Élément** | **Description** | **Exemple**
---|---|---
**champs de données/variables d'instance** | variables qu'un objet de cette classe peut accéder qui décrivent l'objet | Par exemple, une classe Personne pourrait avoir des champs eyeColor, age, height.
**constructeur** | méthode appelée automatiquement lorsqu'un objet de cette classe est créé, les constructeurs ont le même nom que la classe | Il peut y avoir plus d'un constructeur par classe
**méthodes** | méthodes pour que l'objet de cette classe effectue certaines tâches | La classe Personne pourrait avoir des méthodes parler et marcher.  

Par exemple :

```csharp
public class Person{
    // (1) champs de données/variables d'instance
    private String name; // exemple
    private int age;
    private int height;

    // (2) constructeur - les constructeurs ont le même nom que la classe
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) constructeur - vous pouvez en avoir plus d'un
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) méthodes
    public void talk()
    {
        Console.WriteLine($"Bonjour de {name}");
    }
}
```

{{% /notice %}}

## Essayez-le 🐥 !

Créons une classe `Bird` pour représenter