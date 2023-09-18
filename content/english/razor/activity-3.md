---
title: "Activity 3 - Create a Web App"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 7
---

## Instructions

### Creating a Project

1. Ensure that you have Visual Studio Code open.

2. On the **Activity bar**, select **Explorer**.

3. Select the **Create .NET Project** button.

    The command pallette will drop down a list of project types to select from.

4. From the list, select **Blazor Server App**

5. Select the folder you would like your new app to be stored in.

6. Give it a name.

    The app will be created and a **Solution** menu will appear in the Explorer.

    <img src="../media/solution-explorer.png" alt="Screenshot of Solution Explorer in VS Code" />

You now have a website!
### Review the Razor Pages project structure

The following table describes the project structure that was generated.

|Name   | Description |
|-------|------------|
|Pages/	|Contains Razor Pages and supporting files. Each Razor page has a .cshtml file and a .cshtml.cs PageModel class file.|
|wwwroot/	|Contains static asset files like HTML, JavaScript, and CSS. |
|ContosoPizza.csproj	|Contains project configuration metadata, such as dependencies.|
|Program.cs|	Serves as the app's entry point and configures app behavior, like routing.|

Other noteworthy observations:

* Razor page files and their paired PageModel class file

    Razor pages are stored in the Pages directory. As noted above, each Razor page has a .cshtml file and a .cshtml.cs PageModel class file. The PageModel class allows separation of a Razor page's logic and presentation, defines page handlers for requests, and encapsulates data properties and logic scoped to its Razor page.

* The Pages directory structure and routing requests

    Razor Pages uses the Pages directory structure as the convention for routing requests. The following table shows how URLs map to filenames:

|URL|	Maps to Razor page|
|---|---------|
|www.domain.com	|Pages/Index.cshtml|
|www.domain.com/Index	|Pages/Index.cshtml|
|www.domain.com/Privacy	|Pages/Privacy.cshtml|
|www.domain.com/Error	|Pages/Error.cshtml|

Subfolders in the Pages directory are used to organize Razor pages. For example, if there were a Pages/Products directory, the URLs would reflect that structure:

|URL	|Maps to Razor page|
|-----|--------|
|www.domain.com/Products	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Index	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Create	|Pages/Products/Create.cshtml|

* Layout and other shared files

There are several files that are shared across multiple pages. These files determine common layout elements and page imports. The following table describes the purpose of each file.

|File	|Description|
|-------|----------|
|_ViewImports.cshtml	|Imports namespaces and classes that are used across multiple pages.|
|_ViewStart.cshtml	|Specifies the default layout for all Razor pages.|
|Pages/Shared/_Layout.cshtml	|This is the layout specified by the _ViewStart.cshtml file. Implements common layout elements across multiple pages.|
|Pages/Shared/_ValidationScriptsPartial.cshtml	|Provides validation functionality to all pages.|

### Run your project

1. Ensure that you have Visual Studio Code open and in the **Activity bar**, **Explorer** is selected.

2. In the **Solution Explorer**, right click on your project name, select **Debug** and select **Start new instance**.

    This will build and launch your new website.

    <img src="../media/website1.png" alt="Screenshot of the website you just created" />

3. Click on ***Counter*** and ***Fetch Data*** links to navigate around your website.

### Customize the landing page

Let's make a few changes to the landing page to make it more relevant to the your app.

1. In *Pages/Index.razor*, add a block of C# code with the following code:


```C#
@code {
TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}
```

The preceding code:

* Calculates the amount of time that has passed since the business opened.

2. Change the ```PageTitle``` element to say "Welcome to my first web page"

3. Change the ```h1``` to say "Welcome to my first Razor web app"

4. Replace the remaining text with the following code:

```CSHTML
<p class="lead">The best website in town for @Convert.ToInt32(timeInBusiness.TotalDays) days!</p>
```
The preceding code:

* Displays the number of days that have passed since January 17, 2010.
    * The @ character is used to switch from HTML to Razor Syntax.
    * The Convert.ToInt32 method is used to convert the TotalDays property of the timeInBusiness variable to an integer.
    * The Convert class is part of the System namespace, which is imported automatically by the ```<ImplicitUsings>``` element in the .csproj file.

3. Save the file. Refresh the browser tab with the app to display the changes. 

<img src="../media/end-of-activity-3.png" alt="Screenshot of site after changes from Activity 3" />