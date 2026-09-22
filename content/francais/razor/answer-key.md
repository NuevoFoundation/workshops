---
title: "Corrigé - Créer un site web avec Razor"
date: 2023-09-12T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Activité 1 :

Découvrez VS Code, pas de code.

### Activité 2 :

Installez les extensions, prêt à démarrer, pas de code.

### Activité 3 :

#### Pages/index.razor

```c#
@page "/"

@code {
    TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}

<PageTitle>Bienvenue sur ma première application web</PageTitle>

<h1>Bienvenue sur ma première application web Razor</h1>

<p class="lead">Le meilleur site web en ville depuis @Convert.ToInt32(timeInBusiness.TotalDays) jours !</p>

```

### Activité 4 :

ToDoItems.cs
```c#
namespace MyNewTodoListApp;

public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```
Shared/NavMenu.razor

```html
<div class="top-row ps-3 navbar navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="">MyNewTodoListApp</a>
        <button title="Menu de navigation" class="navbar-toggler" @onclick="ToggleNavMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>

<div class="@NavMenuCssClass nav-scrollable" @onclick="ToggleNavMenu">
    <nav class="flex-column">
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="" Match="NavLinkMatch.All">
                <span class="oi oi-home" aria-hidden="true"></span> Accueil
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="counter">
                <span class="oi oi-plus" aria-hidden="true"></span> Compteur
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="todo">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Liste de tâches
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="fetchdata">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Récupérer des données
            </NavLink>
        </div>
    </nav>
</div>

@code {
    private bool collapseNavMenu = true;

    private string? NavMenuCssClass => collapseNavMenu ? "collapse" : null;

    private void ToggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }
}
```

#3
```csharp
@page "/todo"

<PageTitle>Liste de tâches</PageTitle>

<h3>Liste de tâches</h3>

<ul>
    @foreach (var todo in todos)
    {
        <li>@todo.Title</li>
    }
</ul>

<input placeholder="Une tâche à effectuer" />
<button>Ajouter une tâche</button>

@code {
    private List<TodoItem> todos = new();
}
```
#4
```CSharp
<input placeholder="Une tâche à effectuer" @bind="newTodo" />
<button @onclick="AddTodo">Ajouter une tâche</button>

@code {
    private List<TodoItem> todos = new();
    private string? newTodo;

    private void AddTodo()
    {
        if (!string.IsNullOrWhiteSpace(newTodo))
        {
            todos.Add(new TodoItem { Title = newTodo });
            newTodo = string.Empty;
        }
    }
}
```

#5
```csharp
<ul>
      @foreach (var todo in todos)
      {
         <li>
            <input type="checkbox" @bind="todo.IsDone" />
            <input @bind="todo.Title" />
         </li>
      }
</ul>
```

#6
```csharp
<h3>Liste de tâches (@todos.Count(todo => !todo.IsDone))</h3>
```

Pages/Todo.razor complété
```c#
@page "/todo"

<PageTitle>Liste de tâches</PageTitle>

<h3>Liste de tâches (@todos.Count(todo => !todo.IsDone))</h3>

<ul>
      @foreach (var todo in todos)
      {
         <li>
            <input type="checkbox" @bind="todo.IsDone" />
            <input @bind="todo.Title" />
         </li>
      }
</ul>

<input placeholder="Une tâche à effectuer" @bind="newTodo" />
<button @onclick="AddTodo">Ajouter une tâche</button>

@code {
    private List<TodoItem> todos = new();
    private string? newTodo;

    private void AddTodo()
    {
        if (!string.IsNullOrWhiteSpace(newTodo))
        {
            todos.Add(new TodoItem { Title = newTodo });
            newTodo = string.Empty;
        }
    }
}
```