---
title: "Activity 4 - Adding a new Razor page"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 8
---

## Instructions

### Create new page

1. Ensure that you have Visual Studio Code open and in the **Activity bar**, **Explorer** is selected.

2. In the **Solution Explorer**, next to the **Pages** directory, select the **Add new file...** button.

    This will bring up a list of file type.

3. Select **Razor component** from the list.

4. Name it ```todo``` and hit **Enter**.

    This will create the file and open it in the editor.

5. Next, you will update the page so that it responds to /todo and add a page title.

```razor
@page "/todo"

<PageTitle>Todo</PageTitle>

<h3>Todo</h3>

@code {

}
```
### Add link to page from navigation

1. Locate the navigation menu page (**NavMenu.razor**) under **Shared** and open it.

2. Add a navigation item item the Privacy link.

```HTML
    <div class="nav-item px-3">
        <NavLink class="nav-link" href="todo">
            <span class="oi oi-list-rich" aria-hidden="true"></span> To do List
        </NavLink>
    </div>

```
3. In the **Solution Explorer**, right click on your project name, select **Debug** and select **Start new instance** to see the changes view your To Do List.

### Create the To Do List

1. Create a new .cs file called TodoItem.cs to hold a class that represents the todo object.

    At the top level of your project, click the **Add new file...** button and select **Class** from the list. Give it the name ```TodoItem.cs```.

2. Add the following code.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. Go back to the ```todo.razor``` file and:
* Add a field for the todo items in the @code block. The Todo component uses this field to maintain the state of the todo list.
* Add unordered list markup and a foreach loop to render each todo item as a list item (```<li>```).
* Add a text input (```<input>```) and a button (```<button>```) below the unordered list

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

4. When you click the **Add todo** button, nothing happens at this point. Now you'll need to add an event handler.

* Change the button to include an **onclick** action.
* Add a new ```AddTodo``` method.
* Add a new string to hold the name of the new todo.
* Modify the text ```<input>``` element to bind ```newTodo``` with the ```@bind``` attribute.
* Update the ```AddTodo``` method to add the ```TodoItem``` with the specified title to the list. 
* Clear the value of the text input by setting ```newTodo``` to an empty string

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

5. Update the list so that the titles are editable and add a checkbox to keep track of completed items.

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

6. Update the ```<h3>``` to show the count of the number of todos that aren't complete.

```csharp
<h3>Todo (@todos.Count(todo => !todo.IsDone))</h3>
```

7. Save and Run a new instance of your app so test it out.

<img src="../media/new-todo-list.png" alt="Screenshot of completed app" />