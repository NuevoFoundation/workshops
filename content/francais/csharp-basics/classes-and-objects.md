```markdown
---
title: "Classes et Objets"
description: "Introduction aux classes et objets en C#."
date: 2024-09-16T00:00:00Z
weight: 8
---

## Qu'est-ce qu'un Objet et une Classe ?

Un Objet est une chose (nom) qui possède certaines caractéristiques et peut effectuer certaines tâches. Une Classe est le modèle ou la définition de cet objet lorsqu'il est créé.

Un exemple est une Personne. Une Personne est une sorte de Classe. Une personne peut avoir certaines caractéristiques qui la différencient d'une autre personne. Elle peut avoir les yeux bleus, avoir 15 ans, etc. Une personne peut également effectuer certaines tâches. Elle peut marcher, parler, etc.

Un Objet en C# est une instance d'une Classe en C#. Dans cet exemple, "Bea" est une "Personne". "Bea" a les yeux marron. C'est une propriété (ou champ de données) de "Bea". "Bea" peut parler en anglais. "Bea" peut parler en espagnol. Ce sont des méthodes que "Bea" peut effectuer.

## Créer une Classe !

C# est un langage de programmation **orienté objet**, ce qui signifie que tout en C# est associé à un **objet** et à une **classe** (le modèle pour l'objet).

Pour commencer, la ligne de code que nous avons utilisée pour afficher des déclarations dans l'activité 1 est en réalité un appel de méthode d'une classe prédéfinie appelée `System`.

```csharp
Console.WriteLine("Hello World");
```

1. `Console` est une classe qui gère les entrées et sorties utilisateur.
3. `WriteLine()` est une méthode définie dans la classe `Console`.

Une autre classe prédéfinie avec laquelle nous avons interagi dans les exercices précédents est `string`. La classe `string` définit un ensemble de règles sur la façon dont une liste de caractères devrait se comporter.

Avec la ligne de code suivante, nous avons créé un objet `string` appelé `name` en utilisant les règles définies dans la classe `string` :

```csharp
string name = "Patrick";
```

`Console`, et `string` sont des classes prédéfinies en C#. Cependant, nous ne sommes pas limités à ces classes prédéfinies, et nous pouvons créer notre propre type de données en écrivant une classe ! Cela permet aux programmeurs de créer des objets spécifiques ayant certains attributs et comportements. Avoir accès à ces types définis par l'utilisateur nous permet de construire des programmes distincts.

Apprenons les différentes parties d'une classe ci-dessous :

{{% notice note %}}
### Classe
Une classe est un modèle ou prototype d'un nouveau type d'objet. En général, une classe contient trois parties importantes : 

<img src="../images/class.png" height="400" alt="Un modèle de classe d’un objet contient des variables d'instance/champs de données qui sont des données/attributs dans l'objet, un constructeur qui est une méthode permettant de créer l'objet de la classe, et des méthodes, qui sont des comportements possibles pour l'objet."/> 

**Élément** | **Description** | **Exemple**
---|---|---
**variables d'instance/champs de données** | variables auxquelles un objet de cette classe a accès et qui décrivent l'objet | Par exemple, une classe Person pourrait avoir des champs eyeColor, age, height.
**constructeur** | méthode appelée automatiquement lorsqu'un objet de cette classe est créé, les constructeurs portent le même nom que la classe | Il peut y avoir plusieurs constructeurs par classe.
**méthodes** | méthodes pour que l'objet de cette classe effectue certaines tâches | La classe Person pourrait avoir des méthodes talk et walk.

Par exemple :

```csharp
public class Person{
    // (1) variables d'instance/champs de données
    private String name; // exemple
    private int age;
    private int height;

    // (2) constructeur - les constructeurs portent le même nom que la classe
    public Person()
    {
        name = "Bea";
        age = 29;
        height = 167;
    }

    // (2) constructeur - il peut y en avoir plus d'un
    public Person( String nameInput, int ageInput, int heightInput)
    {
        name = nameInput;
        age = ageInput;
        height = heightInput;
    }

    // (3) méthodes
    public void talk()
    {
        Console.WriteLine($"Bonjour de la part de {name}");
    }
}
```

{{% /notice %}}

## Essayez 🐥 !

Créons une classe `Bird` pour représenter Patrick 🐥 et tous ses amis oiseaux en suivant les étapes ci-dessous !

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/OH5XQO" title="Exercice interactif sur la classe C# Bird" frameborder="0"></iframe>

### Premièrement, commençons par définir le nom de la classe au format `public` `class` `nom`.

```csharp
public class Bird{}
```

<br />

### Deuxièmement, déclarons tous les champs de la classe Bird : species, name, hobby, age, loveMusic.

Chaque champ est déclaré dans le format : `spécificateur d'accès` `type de données` `nom` `;`.

1. Nous déclarons les 5 champs comme `private` dans la classe `Bird`. Cela garantit que ces champs ne peuvent être accessibles qu'à l'intérieur de cette classe.

2. Identifions le type approprié pour chaque champ :

- `species` devrait être un `String` qui stocke par exemple : "duck", "swan", "owl".
- `name` devrait être un `String` qui stocke par exemple : "Patrick".
- `hobby` devrait être un `String` qui stocke par exemple : "play basketball".
- `age` devrait être un `int` qui stocke par exemple : 25.
- `loveMusic` devrait être un `bool` qui stocke soit true soit false.

Par exemple, pour déclarer `species` comme un champ privé de la classe `Bird`, vous écririez `private String species;`.

3. Terminez la création des 4 autres champs de la classe Bird !

### Troisièmement, créons le constructeur pour la classe `Bird`.

En général, un constructeur est la méthode qui initialise les valeurs de tous les champs d'une classe. Il a le format `public` `nom de la classe` `(paramètre)`. Étant donné que nous avons 5 champs dans cette classe, le constructeur prendra 5 paramètres/entrées.

```csharp
public Bird(string speciesInput, string nameInput, string hobbyInput, int ageInput, bool loveMusicInput){
    // corps du constructeur
}
```

Dans le corps du constructeur, nous devons initialiser toutes les variables d'instance, en attribuant à chaque variable ses valeurs initiales :

```csharp
species = speciesInput;
name = nameInput