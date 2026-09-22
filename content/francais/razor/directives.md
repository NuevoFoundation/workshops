```yaml
---
title: "Directives Razor"
date: 2023-09-13T11:45:38-07:00
draft: false
weight: 6
---

## Directives
Les directives Razor sont représentées par des expressions implicites avec des mots-clés réservés suivant le symbole @. Une directive modifie généralement la manière dont une vue est analysée ou active différentes fonctionnalités.

Comprendre comment Razor génère du code pour une vue facilite la compréhension du fonctionnement des directives.

```csharp
@{
    string quote = "Vieillir n'est pas pour les mauviettes ! - Anonyme";
}

<div>Citation du jour : @quote</div>
```

Le code génère une classe similaire à la suivante :

```csharp
public class _Views_Something_cshtml : RazorPage<dynamic>
{
    public override async Task ExecuteAsync()
    {
        string output = "Vieillir n'est pas pour les mauviettes ! - Anonyme";

        WriteLiteral("/r/n<div>Citation du jour : ");
        Write(output);
        WriteLiteral("</div>");
    }
}
```

### ```@attribute```
La directive ```@attribute``` ajoute l'attribut donné à la classe de la page ou vue générée. L'exemple suivant ajoute l'attribut [Authorize] :

```csharp
@attribute [Authorize]
```

La directive ```@attribute``` peut également être utilisée pour fournir un modèle de route basé sur une constante dans un composant Razor. Dans l'exemple suivant, la directive ```@page``` dans un composant est remplacée par la directive ```@attribute``` et le modèle de route basé sur une constante, Constants.CounterRoute, qui est défini ailleurs dans l'application en tant que "/counter" :

```csharp
@page "/counter"
@attribute [Route(Constants.CounterRoute)]
```

### ```@code```
Ce scénario ne s'applique qu'aux composants Razor (.razor).

Le bloc ```@code``` permet à un composant Razor d'ajouter des membres C# (champs, propriétés et méthodes) à un composant :

```csharp
@code {
    // Membres C# (champs, propriétés et méthodes)
}
```

Pour les composants Razor, ```@code``` est un alias de ```@functions``` et est recommandé à la place de ```@functions```. Plus d'un bloc ```@code``` est permis.

### ```@functions```
La directive ```@functions``` permet d'ajouter des membres C# (champs, propriétés et méthodes) à la classe générée :

```csharp
@functions {
    // Membres C# (champs, propriétés et méthodes)
}
```

Dans les composants Razor, utilisez ```@code``` à la place de ```@functions``` pour ajouter des membres C#.

Par exemple :

```csharp
@functions {
    public string GetHello()
    {
        return "Bonjour";
    }
}

<div>Depuis la méthode : @GetHello()</div> 
```

Le code génère le marquage HTML suivant :

```html
<div>Depuis la méthode : Bonjour</div>
```

Le code suivant est la classe C# Razor générée :

```csharp
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor;

public class _Views_Home_Test_cshtml : RazorPage<dynamic>
{
    // Les fonctions sont placées entre ici 
    public string GetHello()
    {
        return "Bonjour";
    }
    // Et ici.
#pragma warning disable 1998
    public override async Task ExecuteAsync()
    {
        WriteLiteral("\r\n<div>Depuis la méthode : ");
        Write(GetHello());
        WriteLiteral("</div>\r\n");
    }
#pragma warning restore 1998
```

Les méthodes ```@functions``` servent de méthodes de gabarit lorsqu'elles contiennent du marquage :

```csharp
@{
    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}

@functions {
    private void RenderName(string name)
    {
        <p>Nom : <strong>@name</strong></p>
    }
}
```

Le code génère l'HTML suivant :

```html
<p>Nom : <strong>Mahatma Gandhi</strong></p>
<p>Nom : <strong>Martin Luther King, Jr.</strong></p>
```

### ```@implements```
La directive ```@implements``` implémente une interface pour la classe générée.

L'exemple suivant implémente System.```IDisposable``` pour que la méthode Dispose puisse être appelée :

```csharp
@implements IDisposable

<h1>Exemple</h1>

@functions {
    private bool _isDisposed;

    ...

    public void Dispose() => _isDisposed = true;
}
```

### ```@inherits```

La directive ```@inherits``` offre un contrôle total sur la classe que la vue hérite :

```csharp
@inherits TypeNameOfClassToInheritFrom
```

L'exemple suivant est un type de page personnalisée Razor :

```csharp
using Microsoft.AspNetCore.Mvc.Razor;

public abstract class CustomRazorPage<TModel> : RazorPage<TModel>
{
    public string CustomText { get; } = 
        "Gardyloo! - Un avertissement écossais crié depuis une fenêtre avant de déverser un seau d'ordures dans la rue ci-dessous.";
}
```

Le CustomText est affiché dans une vue :

```chsarp
@inherits CustomRazorPage<TModel>

<div>Texte personnalisé : @CustomText</div>
```

Le code rend le HTML suivant :

```html
<div>
    Texte personnalisé : Bumbershoot - Un autre mot pour parapluie.
</div>
```

```@model``` et ```@inherits``` peuvent être utilisés dans la même vue. ```@inherits``` peut être situé dans un fichier _ViewImports.cshtml que la vue importe :

```csharp
@inherits CustomRazorPage<TModel>
```

L'exemple suivant montre une vue fortement typée :

```csharp
@inherits CustomRazorPage<TModel>

<div>L'e-mail de connexion : @Model.Email</div>
<div>Texte personnalisé : @CustomText</div>
```

Si "jade@nuevofoundation.org" est passé dans le modèle, la vue génère le marquage HTML suivant :

```html
<div>L'e-mail de connexion : jade@nuevofoundation.org</div>
<div>
    Texte personnalisé : Bumbershoot - Un autre mot pour parapluie.
</div>
```

### ```@inject```

La directive ```@inject``` permet à la page Razor d'injecter un service depuis le conteneur de services dans une vue.

### ```@layout```

Ce scénario ne s'applique qu'aux composants Razor (.razor).

La directive ```@layout``` spécifie une mise en page pour les composants Razor accessibles via la directive ```@page```. Les composants de mise en page sont utilisés pour éviter les doublons de code et les incohérences.

### ```@model```

Ce scénario ne s'applique qu'aux vues MVC et aux pages Razor (.cs