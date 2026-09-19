```markdown
---
title: "Objets et Classes"
description: "Introduction aux objets et classes en Java."
date: 2021-10-13T00:00:00Z
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ejXgw0qchDg" title="Java objects and classes video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Qu'est-ce qu'un Objet et une Classe ?

Un objet est une chose (nom) qui possède certaines caractéristiques et peut effectuer certaines tâches. Une classe est le modèle ou la définition de cet objet.

Un exemple est une Personne. Une Personne est une Classe. Une personne peut avoir certaines caractéristiques qui la distinguent d'une autre personne. Elle peut avoir des yeux bleus, elle peut avoir 30 ans, etc. Une personne peut également effectuer certaines tâches. Elle peut marcher, elle peut parler, etc.

Un objet Java est une instance d'une Classe Java. Dans cet exemple, "Bea" est une "Personne". "Bea" a les yeux marron. Ceci est une propriété (ou champ de données) de "Bea". "Bea" peut parler en anglais. "Bea" peut parler en espagnol. Ce sont des méthodes que "Bea" peut exécuter.

## Créer une Classe !

Java est un langage de programmation <b>orienté objet</b>, ce qui signifie que tout en Java est associé à un <b>objet</b> et une <b>classe</b> (le modèle de l'objet).

Pour les débutants, la ligne de code que nous avons utilisée pour imprimer des instructions de l'activité 1 est en réalité un appel de méthode provenant d'une classe prédéfinie appelée `System` !

```java
System.out.println("Bonjour Monde");
```

1. `System` est une classe qui s'occupe des entrées et sorties utilisateur.
2. `out` est une variable dans la classe `System` du type `PrintStream`.
3. `println()` est une méthode définie dans la classe `PrintStream`.

<br />

Une autre classe avec laquelle nous avons interagi dans les exercices précédents est `String`. La classe `String` définit un ensemble de règles sur la façon dont une liste de caractères doit se comporter.

Avec la ligne de code suivante, nous avons créé un objet `String` appelé `name` en utilisant les règles définies dans la classe `String` :

```java
String name = "Patrick";
```

<br />

`System`, `PrintStream` et `String` sont des classes prédéfinies en Java. Cependant, nous ne sommes pas limités à ces classes prédéfinies, et nous pouvons en réalité créer notre propre type de données en écrivant une classe ! Cela est utile pour les programmeurs qui souhaitent créer des objets spécifiques avec certains attributs et comportements. Avoir accès à ces types définis par l'utilisateur nous permet de créer des programmes distincts.

Apprenons les différentes parties d'une classe ci-dessous :

{{% notice note %}}
### Classe
Une classe est un modèle ou prototype pour un nouveau type d'objet. En général, une classe contient trois parties importantes : (1) champs de données/variables d'instance (2) constructeur (3) méthodes.

<img src="../images/class.png" height="400" alt="Un modèle de Classe pour un objet contient des variables d'instance/des champs de données qui sont des données/des attributs dans l'objet, des constructeurs qui sont des méthodes créant l'objet de la classe, et des méthodes, qui sont les comportements possibles pour l'objet."/> 

**Élément** | **Description** | **Exemple**
---|---|---
**champs de données/variables d'instance** | variables dont un objet de cette classe a accès et qui décrivent l'objet | La classe Person possède des champs eyeColor, age, height.
**constructeur** | méthode appelée pour créer un objet à partir de cette Classe | Une classe peut avoir plus d'un constructeur
**méthodes** | méthodes qu'un objet de cette classe peut appeler pour effectuer certaines tâches | La classe Person possède des méthodes talk et walk.

Par exemple :

```java
public class SampleClass{
    // (1) champs de données / variables d'instance
    private String name; // exemple

    // (2) constructeur
    public SampleClass(){
        name = "exemple";
    }
    // (3) méthodes
    public sampleMethod(){}
}
```

{{% /notice %}}

## Essayez-le 🐥 !

Créons une classe `Bird` pour représenter Patrick 🐥 et tous ses amis oiseaux en suivant les étapes ci-dessous ! 
**Remarque :** Pour cet exercice, vous travaillerez dans Bird.java au lieu de Main.java.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsBird" target="_blank">Lancer Replit</a>

### Premièrement, nous commençons par définir le nom de la classe au format `public` `class` `name`.

```java
public class Bird{}
```

<br />

### Deuxièmement, déclarons tous les champs de la classe Bird : species, name, hobby, age, loveMusic.

Chaque champ est déclaré au format : `private` `data type` `name` `;`.

1. Nous déclarons les 5 champs comme `private` dans la classe `Bird`. Cela garantit que ces données ne peuvent être accessibles que dans cette classe.

2. Identifions le type approprié pour chaque champ :

- `species` devrait être une `String` qui stocke, par exemple : "canard", "cygne", "hibou".
- `name` devrait être une `String` qui stocke, par exemple : "Patrick".
- `hobby` devrait être une `String` qui stocke, par exemple : "jouer au basketball".
- `age` devrait être un `int` qui stocke, par exemple : 25.
- `loveMusic` devrait être un `boolean` qui stocke soit true soit false.

Par exemple, pour déclarer `species` comme champ privé de la classe `Bird`, vous devez écrire `private String species;` .

3. Terminez la création des autres 4 champs de la classe Bird !

<br/>

### Troisièmement, créons le constructeur de la classe `Bird`. 

En général, le constructeur est la méthode qui initialise les valeurs de tous les champs dans une classe. Il a le format `public` `class name` `(parameter)`. Puisque nous avons 5 champs dans cette classe, le constructeur prendra 5 paramètres/entrées.

```java
public Bird(String speciesInput, String nameInput, String hobbyInput, int ageInput, boolean loveMusicInput){
    // corps du constructeur
}
```

Dans le corps du constructeur, nous devons initialiser toutes les variables d'instance, en assignant à chaque variable ses