---
title: "Gabarito - Crie um site com Razor"
date: 2023-09-12T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### Atividade 1:

Conheça o VS Code, sem código.

### Atividade 2:

Instale as Extensões, pronto para começar, sem código.

### Atividade 3:

#### Pages/index.razor

```c#
@page "/"

@code {
    TimeSpan tempoDeAtividade = DateTime.Now - new DateTime(2010, 01, 17);
}

<PageTitle>Bem-vindo ao meu primeiro aplicativo web</PageTitle>

<h1>Bem-vindo ao meu primeiro aplicativo web Razor</h1>

<p class="lead">O melhor site da cidade há @Convert.ToInt32(tempoDeAtividade.TotalDays) dias!</p>

```

### Atividade 4:

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
        <button title="Menu de navegação" class="navbar-toggler" @onclick="ToggleNavMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</div>

<div class="@NavMenuCssClass nav-scrollable" @onclick="ToggleNavMenu">
    <nav class="flex-column">
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="" Match="NavLinkMatch.All">
                <span class="oi oi-home" aria-hidden="true"></span> Início
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="counter">
                <span class="oi oi-plus" aria-hidden="true"></span> Contador
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="todo">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Lista de tarefas
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="fetchdata">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Buscar dados
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

<PageTitle>Tarefas</PageTitle>

<h3>Tarefas</h3>

<ul>
    @foreach (var todo in todos)
    {
        <li>@todo.Title</li>
    }
</ul>

<input placeholder="Nova tarefa" />
<button>Adicionar tarefa</button>

@code {
    private List<TodoItem> todos = new();
}
```
#4
```CSharp

<input placeholder="Nova tarefa" @bind="newTodo" />
<button @onclick="AddTodo">Adicionar tarefa</button>

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
<h3>Tarefas (@todos.Count(todo => !todo.IsDone))</h3>
```

Pages/Todo.razor completo
```c#
@page "/todo"

<PageTitle>Tarefas</PageTitle>

<h3>Tarefas (@todos.Count(todo => !todo.IsDone))</h3>

<ul>
      @foreach (var todo in todos)
      {
         <li>
            <input type="checkbox" @bind="todo.IsDone" />
            <input @bind="todo.Title" />
         </li>
      }
</ul>

<input placeholder="Nova tarefa" @bind="newTodo" />
<button @onclick="AddTodo">Adicionar tarefa</button>

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

