---
title: "Code and interactivity"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 9
---

Workshops are interactive. Students should be able to run code, see results, and experiment. This guide covers how to embed code editors and interactive elements.

## Inline code blocks

For code examples that students read but don't run directly, use standard markdown fenced code blocks with language hints:

````markdown
```python
print("Hello, World!")
```
````

Supported languages include `python`, `html`, `css`, `javascript`, `csharp`, `java`, `sql`, `bash`, and many more.

## Embedded code editors

For activities where students write and run code, embed an interactive editor. Here are the platforms we use:

### Replit

Best for Python, JavaScript, and general-purpose programming. Use the `replit.com` domain for new embeds (older workshops may use `repl.it`, which still redirects).

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">Launch Replit</a>
```

Or embed directly:

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

Note: older workshops include `?lite=true` in Replit URLs. This parameter is no longer active and can be omitted from new embeds.

### Trinket

Best for Python turtle graphics and simple Python programs.

```html
<iframe src="https://trinket.io/embed/python/abc123" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

Best for C# programs.

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" frameborder="0"></iframe>
```

### CodePen

Best for HTML/CSS/JavaScript web projects. In this repo, CodePen is typically used as a link button rather than an inline embed:

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Try it yourself!</a>
```

## Interactive HTML elements

For custom interactivity (quizzes, drag-and-drop, buttons), you can use raw HTML directly in markdown (Hugo's `unsafe` rendering is enabled for this site). Alternatively, use the `rawhtml` shortcode:

```
{{</* rawhtml */>}}
<button onclick="alert('Correct!')">Click me</button>
{{</* /rawhtml */>}}
```

This allows arbitrary HTML, CSS, and JavaScript inside a workshop page.

## Challenge structure

A good activity follows this pattern:

1. **Explain** the concept with a brief description
2. **Show** an example with a code block
3. **Challenge** the student to write their own code
4. **Hint** using a notice shortcode:

```
{{% notice tip %}}
Remember to use parentheses when calling a function!
{{% /notice %}}
```

## Tips

- Always provide a **working starting point** so students aren't staring at a blank editor
- Test all embedded links before submitting. Replit and Trinket links can expire.
- Set `height="600"` as a starting point for embedded editors and adjust as needed
- Add a fallback link below iframes in case embedding is blocked: "Can't see the editor? [Open it in a new tab](link)"
- Keep code examples short and focused. If an example exceeds 20 lines, consider splitting it into steps.

## See also

- [Formatting](../formatting) — Visual shortcodes (alerts, buttons, notices, expand)
- [Tags and Metadata](../tags-and-metadata) — Frontmatter fields for all page types
