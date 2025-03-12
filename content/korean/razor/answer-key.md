---
title: "답안 - C#: Razor를 사용한 웹 사이트 만들기"
date: 2023-09-12T10:24:17-07:00
draft: false
hidden: true
weight: 18
---

### 활동 1:

코딩 없이 VS Code 알아보기

### 활동 2:

코딩 없이, 시작할 준비하기 - 확장자 설치하기

### 활동 3:

#### Pages/index.razor

```c#
@page "/"

@code {
    TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}

<PageTitle>Welcome to my first web app</PageTitle>

<h1>Welcome to my first Razor web app</h1>

<p class="lead">The best website in town for @Convert.ToInt32(timeInBusiness.TotalDays) days!</p>

```

### 활동 4:

ToDoItems.cs
```c#
namespace MyNewTodoListApp;

public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```
공유하기/NavMenu.razor

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
                <span class="oi oi-home" aria-hidden="true"></span> Home
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="counter">
                <span class="oi oi-plus" aria-hidden="true"></span> Counter
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="todo">
                <span class="oi oi-list-rich" aria-hidden="true"></span> To do List
            </NavLink>
        </div>
        <div class="nav-item px-3">
            <NavLink class="nav-link" href="fetchdata">
                <span class="oi oi-list-rich" aria-hidden="true"></span> Fetch data
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

<PageTitle>Todo</PageTitle>

<h3>Todo</h3>

<ul>
    @foreach (var todo in todos)
    {
        <li>@todo.Title</li>
    }
</ul>

<input placeholder="Something todo" />
<button>Add todo</button>

@code {
    private List<TodoItem> todos = new();
}
```
#4
```CSharp
<input placeholder="Something todo" @bind="newTodo" />
<button @onclick="AddTodo">Add todo</button>

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
<h3>Todo (@todos.Count(todo => !todo.IsDone))</h3>
```


완성된 페이지/Todo.razor
```c#
@page "/todo"

<PageTitle>Todo</PageTitle>

<h3>Todo (@todos.Count(todo => !todo.IsDone))</h3>

<ul>
      @foreach (var todo in todos)
      {
         <li>
            <input type="checkbox" @bind="todo.IsDone" />
            <input @bind="todo.Title" />
         </li>
      }
</ul>

<input placeholder="Something todo" @bind="newTodo" />
<button @onclick="AddTodo">Add todo</button>

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

