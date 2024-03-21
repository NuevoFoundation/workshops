---
title: "Razor Basics"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 4
---

## Understand when and why to use Razor

### The benefits of Razor Pages
Razor is a markup syntax that lets you embed server-based code (C#) into web pages.

Server-based code can create dynamic web content on the fly, while a web page is written to the browser. When a web page is called, the server executes the server-based code inside the page before it returns the page to the browser. By running on the server, the code can perform complex tasks, like accessing databases.

Razor is based on ASP.NET, and designed for creating web applications. It has the power of traditional ASP.NET markup, but it is easier to use, and easier to learn.

Benefits include:

* Easy setup for dynamic web apps using HTML, CSS, and C#.
* Organized files by feature for easier maintenance.
* Combines markup with server-side C# code using Razor syntax.

Razor Pages utilize Razor for embedding server-based code into webpages. Razor syntax combines HTML and C# to define the dynamic rendering logic. This means you can use C# variables and methods within your HTML markup to generate dynamic web content on the server at runtime. It's important to understand that Razor Pages are not a replacement for HTML, CSS, or JavaScript. They are a way to combine these technologies to create dynamic web content.

### When to use Razor Pages
Use Razor Pages in your ASP.NET Core app when you:

* Want to generate dynamic web UI.
* Prefer a page-focused approach.
* Want to reduce duplication with partial views.

Razor Pages simplifies ASP.NET Core page organization by keeping related pages and their logic together in their own namespace and directory.