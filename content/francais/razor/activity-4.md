---
title: "Activité 4 - Ajouter une nouvelle page Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 8
---

## Instructions

### Créer une nouvelle page

1. Assurez-vous que Visual Studio Code est ouvert et que dans la **barre d'activité**, l'onglet **Explorateur** est sélectionné.

2. Dans l'**Explorateur de solution**, à côté du répertoire **Pages**, sélectionnez le bouton **Ajouter un nouveau fichier...**.

<img src="../media/add-new-file.png" width="300" alt="Capture d'écran du bouton Ajouter un nouveau fichier" />

Cela affichera une liste de types de fichiers.

3. Sélectionnez **Razor component** dans la liste.

<img src="../media/select-razor-component.png" width="300" alt="Capture d'écran de la palette de commandes pour créer un nouveau fichier" />

4. Nommez-le ```todo``` et appuyez sur **Entrée**.

   Cela créera le fichier et l'ouvrira dans l'éditeur.

5. Ensuite, vous mettrez à jour la page pour ajouter une directive ```@page``` afin que la page réponde à /todo et ajoutiez un titre de page à l'aide de la balise ```<PageTitle>```.

### Ajouter un lien vers la page à partir de la navigation

1. Trouvez la page du menu de navigation (**NavMenu.razor**) sous **Shared** et ouvrez-la.

2. Ajoutez un élément de navigation pour votre liste de tâches ("To Do List") au-dessus de ***Fetch Data*** en copiant le ```<div>``` de Fetch Data et en changeant le texte où il est écrit FetchData ou Fetch Data en Todo.

3. Dans l'**Explorateur de solution**, faites un clic droit sur le nom de votre projet, sélectionnez **Déboguer** et cliquez sur **Démarrer une nouvelle instance** pour voir les modifications et visualiser votre liste de tâches.

<img src="../media/empty-todo.png" alt="Capture d'écran de la liste de tâches ajoutée à la page" />

### Créer la liste "To Do"

1. Créez un nouveau fichier de classe appelé TodoItem.cs pour contenir une classe qui représente l'objet todo.

Au niveau supérieur de votre projet, cliquez sur le bouton **Ajouter un nouveau fichier...** et sélectionnez **Class** dans la liste. Donnez-lui le nom ```TodoItem```.

2. Ajoutez le code suivant pour donner un ```Title``` de type ```string``` et une propriété appelée ```IsDone``` de type ```boolean``` à votre TodoItem.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. Revenez au fichier ```todo.razor``` et :
* Dans le bloc @code, ajoutez un objet List de type ```TodoItem``` nommé todos. Le composant Todo utilise ce champ pour maintenir l'état de la liste de tâches.
* Ajoutez un titre (```<h3>```) appelé "Todo".
* Sous le titre, ajoutez une balise de liste non ordonnée (```<ul>```) et une boucle foreach pour afficher chaque élément de la liste de tâches en tant qu'élément de liste (```<li>```).
* Ajoutez un champ de texte (```<input>```) avec un espace réservé indiquant "Something todo" et un bouton (```<button>```) portant la mention "Add todo" sous la liste non ordonnée.

4. Lorsque vous cliquez sur le bouton **Add todo**, il ne se passe rien pour l'instant. Vous devrez maintenant ajouter un gestionnaire d'événements.

* Modifiez le bouton pour inclure une action **onclick**.
* Dans le bloc ```@code``` :
    * Ajoutez une nouvelle chaîne pour contenir le nom de la nouvelle tâche.
    * Ajoutez une nouvelle méthode ```AddTodo``` qui vérifie si la nouvelle chaîne contient du texte. Vous pouvez le faire en utilisant la méthode ```IsNullOrWhiteSpace``` de la classe string. Si elle contient du texte, créez une nouvelle instance de ```TodoItem``` avec le texte comme ```Title``` et ajoutez cette instance à l'objet ```List``` que vous avez créé précédemment.
    * Effacez la valeur du champ texte en définissant ```newTodo``` comme une chaîne vide.
* Modifiez l'élément texte ```<input>``` pour lier ```newTodo``` à l'attribut ```@bind```.

5. Mettez à jour la liste afin que les titres soient modifiables (```<input>```) et ajoutez une case à cocher pour suivre les éléments terminés. Assurez-vous que vous liez la case à cocher à la propriété ```IsDone``` du ```todo```.

6. Mettez à jour le ```<h3>``` pour afficher le nombre de tâches qui ne sont pas terminées.

7. Enregistrez et lancez une nouvelle instance de votre application pour la tester.

<img src="../media/new-todo-list.png" alt="Capture d'écran de l'application terminée" />