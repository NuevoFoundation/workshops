---
title: "Razor Basics"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 5
---

## Razor Syntax

### Main Razor Syntax Rules
Razor supports C# and uses the @ symbol to transition from HTML to C#. Razor evaluates C# expressions and renders them in the HTML output.

When an @ symbol is followed by a Razor reserved keyword, it transitions into Razor-specific markup. Otherwise, it transitions into plain HTML.

To escape an @ symbol in Razor markup, use a second @ symbol:

```csharp
<p>@@Username</p>
```

The above code is rendered in HTML with a single @ symbol.

There are a few basic rules to remember when writing Razor code.

* Razor code blocks are enclosed in ```@{ ... }```
* Inline expressions (variables and functions) start with ```@```
* Code statements end with semicolon (```;```)
* Strings are enclosed with quotation marks
* C# code is case sensitive
* C# files have the extension .cshtml or .razor

#### Implicit Razor Expressions
Implicit Razor expressions start with ```@``` followed by C# code.

```csharp
<p>@DateTime.Now</p>
<p>@DateTime.IsLeapYear(2016)</p>
```

With the exception of the C# ```await``` keyword, implicit expressions must not contain spaces.

Implicit expressions ***cannot*** contain C# generics, as the characters inside the (```<>```) are intrepeted as an HTML tag. 

#### Explicit Razor Expressions
Explicit Razor expressions consist of an @ symbol with balanced parenthesis. To render last week's time, the following Razor markup is used:

```csharp
<p>Last week this time: @(DateTime.Now - TimeSpan.FromDays(7))</p>
```
Any content within the @() parenthesis is evaluated and rendered to the output.

Explicit Expressions can be used to concatenate text with an expression result:

```csharp
@{
    var joe = new Person("Joe", 33);
}

<p>Age@(joe.Age)</p>
```

Without the explicit expression, ```<p>Age@joe.Age</p>``` is treated as an email address, and ```<p>Age@joe.Age</p>``` is rendered. When written as an explicit expression, ```<p>Age33</p>``` is rendered.

#### Razor Code Blocks
Razor code blocks start with @ and are enclosed by {}. Unlike expressions, C# code inside code blocks isn't rendered. Code blocks and expressions in a view share the same scope and are defined in order:

In code blocks, declare local functions with markup to serve as templating methods:

```csharp
@{
    void RenderName(string name)
    {
        <p>Name: <strong>@name</strong></p>
    }

    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}
```
The code renders the following HTML:

```html
<p>Name: <strong>Mahatma Gandhi</strong></p>
<p>Name: <strong>Martin Luther King, Jr.</strong></p>
```

#### Conditional attribute rendering
Razor automatically omits attributes that aren't needed. If the value passed in is null or false, the attribute isn't rendered.

For example, consider the following razor:

```csharp
<div class="@false">False</div>
<div class="@null">Null</div>
<div class="@("")">Empty</div>
<div class="@("false")">False String</div>
<div class="@("active")">String</div>
<input type="checkbox" checked="@true" name="true" />
<input type="checkbox" checked="@false" name="false" />
<input type="checkbox" checked="@null" name="null" />
```

The preceding Razor markup generates the following HTML:

```html
<div>False</div>
<div>Null</div>
<div class="">Empty</div>
<div class="false">False String</div>
<div class="active">String</div>
<input type="checkbox" checked="checked" name="true">
<input type="checkbox" name="false">
<input type="checkbox" name="null">
```

### Working With Objects
Server coding often involves objects.

The "DateTime" object is a typical built-in ASP.NET object, but objects can also be self-defined to describe a web page, a text box, a file, a database record, etc.

Objects may have methods they can perform. A database record might have a "Save" method, an image object might have a "Rotate" method, an email object might have a "Send" method, and so on.

Objects also have properties that describe their characteristics. A database record might have a FirstName and a LastName property (among others).

The ASP.NET DateTime object has a Now property (written as DateTime.Now), and the Now property has a Day property (written as DateTime.Now.Day). The example below shows how to access some properties of the DateTime object:

```html
<table border="1">
<tr>
<th width="100px">Name</th>
<td width="100px">Value</td>
</tr>
<tr>
<td>Day</td><td>@DateTime.Now.Day</td>
</tr>
<tr>
<td>Hour</td><td>@DateTime.Now.Hour</td>
</tr>
<tr>
<td>Minute</td><td>@DateTime.Now.Minute</td>
</tr>
<tr>
<td>Second</td><td>@DateTime.Now.Second</td>
</tr>
</td>
</table>
```

### Control structures
Control structures are an extension of code blocks. All aspects of code blocks (transitioning to markup, inline C#) also apply to the following structures:

#### Conditionals ```@if, else if, else, and @switch```
```@if``` controls when code runs:

```csharp
@if (value % 2 == 0)
{
    <p>The value was even.</p>
}
```

```else``` and ```else if``` don't require the @ symbol:

```csharp
@if (value % 2 == 0)
{
    <p>The value was even.</p>
}
else if (value >= 9876)
{
    <p>The value is large.</p>
}
else
{
    <p>The value is odd and small.</p>
}
```

The following markup shows how to use a switch statement:

```csharp
@switch (value)
{
    case 1:
        <p>The value is 1!</p>
        break;
    case 9876:
        <p>Your number is 9876!</p>
        break;
    default:
        <p>Your number wasn't 1 or 9876.</p>
        break;
}
```

#### Looping ```@for, @foreach, @while, and @do while```

Templated HTML can be rendered with looping control statements. To render a list of people:

```csharp
@{
    var people = new Person[]
    {
          new Person("Jade", 31),
          new Person("Maxwell", 29),
          ...
    };
}
```

The following looping statements are supported:

```@for```

```csharp
@for (var i = 0; i < people.Length; i++)
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>
}
```

```@foreach```

```csharp
@foreach (var person in people)
{
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>
}
```

```@while```

```csharp
@{ var i = 0; }
@while (i < people.Length)
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>

    i++;
}
```

```@do while```

```csharp
@{ var i = 0; }
@do
{
    var person = people[i];
    <p>Name: @person.Name</p>
    <p>Age: @person.Age</p>

    i++;
} while (i < people.Length);
```