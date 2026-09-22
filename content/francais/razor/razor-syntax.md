```yaml
---
title: "Bases de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 5
---

## Syntaxe Razor

### Règles principales de la syntaxe Razor
Razor prend en charge C# et utilise le symbole @ pour passer du HTML au C#. Razor évalue les expressions C# et les rend dans le résultat HTML.

Lorsqu'un symbole @ est suivi d'un mot-clé réservé Razor, il passe à un balisage spécifique à Razor. Sinon, il reste en HTML simple.

Pour échapper un symbole @ dans un balisage Razor, utilisez un second symbole @ :

```csharp
<p>@@Utilisateur</p>
```

Le code ci-dessus est rendu en HTML avec un seul symbole @.

Voici quelques règles de base à retenir lors de l'écriture de code Razor.

* Les blocs de code Razor sont délimités par ```@{ ... }```
* Les expressions en ligne (variables et fonctions) commencent par ```@```
* Les instructions de code se terminent par un point-virgule (```;```)
* Les chaînes de caractères sont délimitées par des guillemets
* Le code C# est sensible à la casse
* Les fichiers C# ont l'extension .cshtml ou .razor

#### Expressions implicites Razor
Les expressions implicites Razor commencent par ```@``` suivi de code C#.

```csharp
<p>@DateTime.Now</p>
<p>@DateTime.IsLeapYear(2016)</p>
```

À l'exception du mot-clé C# ```await```, les expressions implicites ne doivent pas contenir d'espaces.

Les expressions implicites ***ne peuvent pas*** contenir de génériques C#, car les caractères à l'intérieur des (```<>```) sont interprétés comme une balise HTML.

#### Expressions explicites Razor
Les expressions explicites Razor consistent en un symbole @ avec des parenthèses équilibrées. Pour afficher l'heure de la semaine dernière, le balisage Razor suivant est utilisé :

```csharp
<p>La semaine dernière à cette heure : @(DateTime.Now - TimeSpan.FromDays(7))</p>
```
Tout contenu à l'intérieur des parenthèses ```@()``` est évalué et rendu dans le résultat.

Les expressions explicites peuvent être utilisées pour concaténer du texte avec le résultat d'une expression :

```csharp
@{
    var joe = new Person("Joe", 33);
}

<p>Âge@(joe.Age)</p>
```

Sans l'expression explicite, ```<p>Âge@joe.Age</p>``` est traité comme une adresse email, et ```<p>Âge@joe.Age</p>``` est rendu. Lorsqu'il est écrit comme une expression explicite, ```<p>Âge33</p>``` est rendu.

#### Blocs de code Razor
Les blocs de code Razor commencent par @ et sont délimités par {}. Contrairement aux expressions, le code C# à l'intérieur des blocs de code n'est pas rendu. Les blocs de code et les expressions dans une vue partagent le même espace de noms et sont définis dans l'ordre :

Dans les blocs de code, déclarez des fonctions locales avec du balisage pour servir de méthodes de gabarit :

```csharp
@{
    void AfficherNom(string nom)
    {
        <p>Nom : <strong>@nom</strong></p>
    }

    AfficherNom("Mahatma Gandhi");
    AfficherNom("Martin Luther King, Jr.");
}
```
Le code produit le HTML suivant :

```html
<p>Nom : <strong>Mahatma Gandhi</strong></p>
<p>Nom : <strong>Martin Luther King, Jr.</strong></p>
```

#### Rendu conditionnel d'attributs
Razor omet automatiquement les attributs qui ne sont pas nécessaires. Si la valeur passée est null ou false, l'attribut n'est pas rendu.

Par exemple, considérons le Razor suivant :

```csharp
<div class="@false">Faux</div>
<div class="@null">Null</div>
<div class="@("")">Vide</div>
<div class="@("false")">Faux Chaîne</div>
<div class="@("active")">Chaîne</div>
<input type="checkbox" checked="@true" name="true" />
<input type="checkbox" checked="@false" name="false" />
<input type="checkbox" checked="@null" name="null" />
```

Le balisage Razor précédent génère le HTML suivant :

```html
<div>Faux</div>
<div>Null</div>
<div class="">Vide</div>
<div class="false">Faux Chaîne</div>
<div class="active">Chaîne</div>
<input type="checkbox" checked="checked" name="true">
<input type="checkbox" name="false">
<input type="checkbox" name="null">
```

### Travail avec les objets
La programmation côté serveur implique souvent des objets.

L'objet "DateTime" est un objet ASP.NET intégré typique, mais les objets peuvent également être définis par l'utilisateur pour décrire une page web, une boîte de texte, un fichier, un enregistrement de base de données, etc.

Les objets peuvent avoir des méthodes qu'ils peuvent exécuter. Un enregistrement de base de données pourrait avoir une méthode "Sauvegarder", un objet image pourrait avoir une méthode "Pivoter", un objet email pourrait avoir une méthode "Envoyer", etc.

Les objets possèdent également des propriétés décrivant leurs caractéristiques. Un enregistrement de base de données pourrait avoir les propriétés Prénom et Nom (entre autres).

L'objet ASP.NET DateTime possède une propriété Now (écrite comme DateTime.Now), et la propriété Now possède une propriété Day (écrite comme DateTime.Now.Day). L'exemple ci-dessous montre comment accéder à certaines propriétés de l'objet DateTime :

```html
<table border="1">
<tr>
<th width="100px">Nom</th>
<td width="100px">Valeur</td>
</tr>
<tr>
<td>Jour</td><td>@DateTime.Now.Day</td>
</tr>
<tr>
<td>Heure</td><td>@DateTime.Now.Hour</td>
</tr>
<tr>
<td>Minute</td><td>@DateTime.Now.Minute</td>
</tr>
<tr>
<td>Seconde</td><td>@DateTime.Now.Second</td>
</tr>
</td>
</table>
```

### Structures de contrôle
Les structures de contrôle sont une extension des blocs de code. Tous les aspects des blocs de code (transition vers le balisage, C# en ligne) s'appliquent également aux structures suivantes :

#### Conditionnels ```@if, else if, else, et @switch```
```@if``` contrôle quand le code s'exécute :

```csharp
@if (valeur % 2 == 0)
{
    <p>La valeur est paire.</p>
}
```

```else``` et ```else if``` ne nécessitent pas