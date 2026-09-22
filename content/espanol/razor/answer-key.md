```markdown
---
title: "Clave de respuestas - Crear un sitio web con Razor"
date: 2023-09-12T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Actividad 1:

Conoce VS Code, sin código.

### Actividad 2:

Instala extensiones, listo para empezar, sin código.

### Actividad 3:

#### Pages/index.razor

```c#
@page "/"

@code {
    TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}

<PageTitle>Bienvenido a mi primera aplicación web</PageTitle>

<h1>Bienvenido a mi primera aplicación web Razor</h1>

<p class="lead">¡El mejor sitio web en la ciudad durante @Convert.ToInt32(timeInBusiness.TotalDays) días!</p>
```

### Actividad 4:

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
        <button title="Navigation menu" class="navbar-toggler" @onclick="ToggleNavMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>

<div class="@NavMenuCssClass nav-scrollable" @onclick="ToggleNavMenu">
    <nav class="flex-column">
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="" Match="NavLinkMatch.All">
                <span class="oi oi-home" aria-hidden="true"></span> Inicio
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="counter">
                <span class="oi oi-plus" aria-hidden="true"></span> Contador
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="todo">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Lista de tareas
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="fetchdata">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Obtener datos
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

<PageTitle>Tareas</PageTitle>

<h3>Tareas</h3>

<ul>
    @foreach (var todo in todos)
    {
        <li>@todo.Title</li>
    }
</ul>

<input placeholder="Algo por hacer" />
<button>Añadir tarea</button>

@code {
    private List<TodoItem> todos = new();
}
```

#4
```CSharp
<input placeholder="Algo por hacer" @bind="newTodo" />
<button @onclick="AddTodo">Añadir tarea</button>

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
<h3>Tareas (@todos.Count(todo => !todo.IsDone))</h3>
```

Pages/Todo.razor completo
```c#
@page "/todo"

<PageTitle>Tareas</PageTitle>

<h3>Tareas (@todos.Count(todo => !todo.IsDone))</h3>

<ul>
      @foreach (var todo in todos)
      {
         <li>
            <input type="checkbox" @bind="todo.IsDone" />
            <input @bind="todo.Title" />
         </li>
      }
</ul>

<input placeholder="Algo por hacer" @bind="newTodo" />
<button @onclick="AddTodo">Añadir tarea</button>

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
```