---
title: "Código e interactividad"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

Los talleres son interactivos. Los estudiantes deberían poder ejecutar código, ver resultados y experimentar. Esta guía cubre cómo incrustar editores de código y elementos interactivos.

## Bloques de código en línea

Para ejemplos de código que los estudiantes leen pero no ejecutan directamente, utiliza bloques de código estándar de Markdown con indicación del lenguaje:

````markdown
```python
print("¡Hola, Mundo!")
```
````

Los lenguajes compatibles incluyen `python`, `html`, `css`, `javascript`, `csharp`, `java`, `sql`, `bash`, y muchos más.

## Editores de código incrustados

Para actividades donde los estudiantes escriben y ejecutan código, incrusta un editor interactivo. Aquí están las plataformas que usamos:

### Replit

Ideal para Python, JavaScript y programación de propósito general. Usa el dominio `replit.com` para nuevas incrustaciones (los talleres más antiguos pueden utilizar `repl.it`, que aún redirige).

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">Abrir Replit</a>
```

O incrusta directamente:

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="Código e interactividad - Editor Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

Nota: los talleres más antiguos incluyen `?lite=true` en las URLs de Replit. Este parámetro ya no está activo y puede omitirse en nuevas incrustaciones.

### Codebunga

No agregues nuevos enlaces o incrustaciones de Codebunga. Las integraciones existentes de Codebunga permanecen en el repositorio temporalmente y están etiquetadas como `TODO-IDE-Replace` hasta que se complete la migración a un IDE compatible para navegadores.

Ejemplo legado:

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="Código e interactividad - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

Ideal para programas en C#.

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="Código e interactividad - Editor .NET Fiddle" frameborder="0"></iframe>
```

### CodePen

Ideal para proyectos web en HTML/CSS/JavaScript. En este repositorio, CodePen generalmente se utiliza como un botón de enlace en lugar de una incrustación en línea:

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">¡Pruébalo tú mismo!</a>
```

## Elementos interactivos en HTML

Para interactividad personalizada (cuestionarios, arrastrar y soltar, botones), puedes usar HTML directamente en Markdown (la representación `unsafe` de Hugo está habilitada para este sitio). Alternativamente, utiliza el shortcode `rawhtml`:

```
{{</* rawhtml */>}}
<button onclick="alert('¡Correcto!')">Haz clic aquí</button>
{{</* /rawhtml */>}}
```

Esto permite usar HTML, CSS y JavaScript dentro de una página del taller.

## Estructura de los desafíos

Una buena actividad sigue este patrón:

1. **Explica** el concepto con una breve descripción
2. **Muestra** un ejemplo con un bloque de código
3. **Desafía** al estudiante a escribir su propio código
4. **Da pistas** usando un shortcode de aviso:

```
{{% notice tip %}}
¡Recuerda usar paréntesis al llamar a una función!
{{% /notice %}}
```

## Consejos

- Siempre proporciona un **punto de partida funcional** para que los estudiantes no se enfrenten a un editor en blanco
- Prueba todos los enlaces incrustados antes de enviarlos.
- Establece `height="600"` como punto de partida para los editores incrustados y ajusta si es necesario
- Agrega un enlace funcional como respaldo debajo de los iframes en caso de que la incrustación esté bloqueada, como: "¿No puedes ver el editor? Ábrelo en una nueva pestaña."
- Mantén los ejemplos de código cortos y enfocados. Si un ejemplo supera las 20 líneas, considera dividirlo en pasos.

## Ver también

- [Formato](../formatting) — Shortcodes visuales (avisos, botones, alertas, expandir)
- [Etiquetas y metadatos](../tags-and-metadata) — Campos de frontmatter para todos los tipos de páginas