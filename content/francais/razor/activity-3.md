```markdown
---
title: "Activité 3 - Créer une application Web"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 7
---

## Instructions

### Création d'un projet

1. Assurez-vous que Visual Studio Code est ouvert.

2. Sur la **barre d'activités**, sélectionnez **Explorateur**.

3. Sélectionnez le bouton **Créer un projet .NET**.

    La palette de commandes affichera une liste de types de projets parmi lesquels choisir.

4. Dans la liste, sélectionnez **Blazor Server App**.

5. Sélectionnez le dossier dans lequel vous souhaitez enregistrer votre nouvelle application.

6. Donnez-lui un nom.

    L'application sera créée et un menu **Solution** apparaîtra dans l'Explorateur.

    <img src="../media/solution-explorer.png" alt="Capture d'écran de l'explorateur de solutions dans VS Code" />

Vous avez maintenant un site web !
### Examiner la structure du projet Razor Pages

Le tableau suivant décrit la structure du projet générée.

|Nom   | Description |
|-------|------------|
|Pages/	|Contient les Razor Pages et les fichiers associés. Chaque page Razor possède un fichier .cshtml et un fichier de classe PageModel .cshtml.cs.|
|wwwroot/	|Contient des fichiers d'actifs statiques tels que HTML, JavaScript et CSS. |
|ContosoPizza.csproj	|Contient les métadonnées de configuration du projet, telles que les dépendances.|
|Program.cs| Sert de point d'entrée de l'application et configure le comportement de l'application, comme le routage.|

Autres observations remarquables :

* Les fichiers des pages Razor et leurs fichiers de classe associés PageModel

    Les pages Razor sont stockées dans le répertoire Pages. Comme mentionné ci-dessus, chaque page Razor possède un fichier .cshtml et un fichier de classe PageModel .cshtml.cs. La classe PageModel permet de séparer la logique et la présentation d'une page Razor, de définir des gestionnaires de page pour les demandes et d'encapsuler des propriétés de données et une logique limitées à sa page Razor.

* La structure des répertoires Pages et les demandes de routage

    Razor Pages utilise la structure des répertoires Pages comme convention pour le routage des demandes. Le tableau suivant montre comment les URL s'associent aux noms de fichiers :

|URL| Correspond à la page Razor|
|---|---------|
|www.domain.com	|Pages/Index.cshtml|
|www.domain.com/Index	|Pages/Index.cshtml|
|www.domain.com/Privacy	|Pages/Privacy.cshtml|
|www.domain.com/Error	|Pages/Error.cshtml|

Les sous-dossiers du répertoire Pages sont utilisés pour organiser les pages Razor. Par exemple, s'il existait un répertoire Pages/Products, les URL refléteraient cette structure :

|URL	|Correspond à la page Razor|
|-----|--------|
|www.domain.com/Products	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Index	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Create	|Pages/Products/Create.cshtml|

* Mise en page et autres fichiers partagés

Il existe plusieurs fichiers partagés entre plusieurs pages. Ces fichiers déterminent des éléments de mise en page communs et des imports de pages. Le tableau suivant décrit l'objectif de chaque fichier.

|Fichier	|Description|
|-------|----------|
|_ViewImports.cshtml	|Importe des espaces de noms et des classes utilisées sur plusieurs pages.|
|_ViewStart.cshtml	|Spécifie la mise en page par défaut pour toutes les pages Razor.|
|Pages/Shared/_Layout.cshtml	|C'est la mise en page spécifiée par le fichier _ViewStart.cshtml. Implémente des éléments de mise en page communs entre plusieurs pages.|
|Pages/Shared/_ValidationScriptsPartial.cshtml	|Fournit des fonctionnalités de validation à toutes les pages.|

### Exécuter votre projet

1. Assurez-vous que Visual Studio Code est ouvert et que dans la **barre d'activités**, l'**Explorateur** est sélectionné.

2. Dans l'**Explorateur de solutions**, faites un clic droit sur le nom de votre projet, sélectionnez **Debug**, puis **Start new instance**.

    Cela construira et lancera votre nouveau site web.

    <img src="../media/website1.png" alt="Capture d'écran du site web que vous venez de créer" />

3. Cliquez sur les liens ***Counter*** et ***Fetch Data*** pour naviguer dans votre site web.

### Personnaliser la page d'accueil

Faisons quelques modifications à la page d'accueil pour la rendre plus pertinente pour votre application.

1. Dans *Pages/Index.razor*, ajoutez un bloc de code C# avec le code suivant :

```C#
@code {
TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}
```

Le code précédent :

* Calcule la durée écoulée depuis l'ouverture de l'entreprise.

2. Modifiez l'élément ```PageTitle``` pour afficher "Bienvenue sur ma première page Web".

3. Modifiez l'élément ```h1``` pour afficher "Bienvenue sur ma première application Web Razor".

4. Remplacez le texte restant par le code suivant :

```CSHTML
<p class="lead">Le meilleur site de la ville depuis @Convert.ToInt32(timeInBusiness.TotalDays) jours !</p>
```
Le code précédent :

* Affiche le nombre de jours écoulés depuis le 17 janvier 2010.
    * Le caractère @ est utilisé pour basculer du HTML à la syntaxe Razor.
    * La méthode Convert.ToInt32 est utilisée pour convertir la propriété TotalDays de la variable timeInBusiness en entier.
    * La classe Convert fait partie de l'espace de noms System, qui est importé automatiquement par l'élément ```<ImplicitUsings>``` dans le fichier .csproj.

3. Enregistrez le fichier. Actualisez l'onglet du navigateur avec l'application pour afficher les modifications. 

<img src="../media/end-of-activity-3.png" alt="Capture d'écran du site après les modifications apportées à l'Activité 3" />
```