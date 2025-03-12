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

<img src="../media/add-new-file.png" width="300" alt="Screen shot of Add new file button" />

This will bring up a list of file type.

3. Select **Razor component** from the list.

<img src="../media/select-razor-component.png" width="300" alt="Screen shot of command pallette for create new file" />

4. Name it ```todo``` and hit **Enter**.

    This will create the file and open it in the editor.

5. Next, you will update the page to add a ```@page``` directive so that the page responds to /todo and add a page title using the ```<PageTitle>``` tag.

### Add link to page from navigation

1. Locate the navigation menu page (**NavMenu.razor**) under **Shared** and open it.

2. Add a navigation item for your todo list above ***Fetch Data*** by copying the Fetch Data ```<div>``` and changing where it says FetchData or Fetch Data to Todo

3. In the **Solution Explorer**, right click on your project name, select **Debug** and select **Start new instance** to see the changes view your To Do List.

<img src="../media/empty-todo.png" alt="Screenshot of To Do List added to the page" />

### Create the To Do List

1. Create a new Class file called TodoItem.cs to hold a class that represents the todo object.

At the top level of your project, click the **Add new file...** button and select **Class** from the list. Give it the name ```TodoItem```.

2. Add the following code to give a TodoItem a ```Title``` that is a ```string``` and has a property called ```IsDone``` that is a ```boolean```.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. Go back to the ```todo.razor``` file and:
* In the @code block, add a List object of ```TodoItem``` called todos. The Todo component uses this field to maintain the state of the todo list.
* Add a heading (```<h3>```) called "Todo" 
* Under the heading, add an unordered list markup (```<ul>```) and a foreach loop to render each todo item as a list item (```<li>```).
* Add a text input (```<input>```) that contains a placeholder that says "Something todo" and a button (```<button>```) that says "Add todo" below the unordered list

4. When you click the **Add todo** button, nothing happens at this point. Now you'll need to add an event handler.

* Change the button to include an **onclick** action.
* In the ```@code``` block:
    * add a new string to hold the name of the new todo.
    * add a new ```AddTodo``` method that checks to see if the new string has text. You can do this by using the ```IsNullOrWhiteSpace``` method of the string. If it has text, create a new ```TodoItem``` instance with the text as the ```Title``` and add that instance to the ```List``` object you created earlier.
    * Clear the value of the text input by setting ```newTodo``` to an empty string
* Modify the text ```<input>``` element to bind ```newTodo``` with the ```@bind``` attribute.

5. Update the list so that the titles are editable (```<input>```) and add a checkbox to keep track of completed items. Make sure you ```@bind``` the checkbox to the ```IsDone``` property of the ```todo```.

6. Update the ```<h3>``` to show the count of the number of todos that aren't complete.

7. Save and Run a new instance of your app so test it out.

<img src="../media/new-todo-list.png" alt="Screenshot of completed app" />