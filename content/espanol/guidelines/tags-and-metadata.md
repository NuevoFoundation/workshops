---
title: "Etiquetas y metadatos"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---

Cada página de taller utiliza frontmatter en formato YAML para controlar cómo aparece en el sitio. Esta guía explica cada campo y cuándo usarlo.

## Frontmatter requerido

Cada archivo markdown necesita, como mínimo:

```yaml
---
title: "Título de la Página"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| Campo | Propósito | Ejemplo |
|-------|-----------|---------|
| `title` | Título mostrado en la navegación y en el encabezado de la página | `"Python: Conceptos Básicos"` |
| `date` | Fecha de la última actualización (aparece en el sitio) | `2026-09-16T00:00:00-07:00` |
| `draft` | `false` para publicado, `true` para en progreso | `false` |

## Campos de la página principal del taller

El archivo `_index.md` de un taller admite campos adicionales:

```yaml
---
title: "Python: Conceptos Básicos"
description: "Aprende los fundamentos de Python incluyendo variables, bucles y funciones"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programacion-basica"]
difficulties: ["principiante"]
prereq: "Ninguno"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| Campo | Propósito | Valores |
|-------|-----------|---------|
| `description` | Resumen breve mostrado en listados | Texto libre |
| `language` | Filtro por lenguaje de programación | Un token de `data/taxonomy.yaml` |
| `topics` | Filtros por temas | Uno o más tokens de `data/taxonomy.yaml` |
| `difficulties` | Filtros por nivel de dificultad | Uno o más tokens de `data/taxonomy.yaml` |
| `prereq` | Prerrequisitos | `"Ninguno"` o nombre del taller |
| `hidden` | Ocultar de la navegación | `true` / `false` |
| `alwaysopen` | Comportamiento de expansión de TOC | `false` (preferido) |
| `icon` | Ícono de Font Awesome para la página principal | Ver iconos abajo |
| `weight` | Orden de clasificación en la navegación | Número (menor = primero) |

Los campos `language`, `topics` y `difficulties` determinan cómo un taller aparece en los filtros de la pestaña Talleres. Usa solo los valores controlados en `data/taxonomy.yaml`. Los valores desconocidos no crean nuevas opciones de filtro.

Ejemplo:

```yaml
language: "javascript"
topics: ["juegos", "web"]
difficulties: ["principiante"]
```

## Iconos comunes

La página principal muestra un ícono para cada taller. Utiliza clases de [Font Awesome](https://fontawesome.com/icons) en el campo `icon` del frontmatter:

| Clase | Uso recomendado |
|-------|-----------------|
| `fab fa-python` | Talleres de Python |
| `fab fa-html5` | Talleres de HTML/web |
| `fab fa-js` | Talleres de JavaScript |
| `fas fa-laptop-code` | Programación general |
| `fas fa-microchip` | Hardware / Arduino |
| `fas fa-shield-alt` | Talleres de seguridad |
| `fas fa-database` | Talleres de SQL / datos |
| `fas fa-code` | General (predeterminado) |
| `fas fa-gamepad` | Talleres de videojuegos |
| `fas fa-music` | Música / audio |

## Campos de páginas de actividades

Las páginas de actividades son más simples:

```yaml
---
title: "Actividad 1: Hola Mundo"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## Campos de las claves de respuesta

Las claves de respuesta deben estar ocultas de la navegación:

```yaml
---
title: "Python: Conceptos Básicos - Clave de Respuesta"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## El campo de fecha

El campo `date` se muestra en el pie de página de cada página del sitio. Actualízalo siempre que realices cambios significativos en una página para que los visitantes sepan que el contenido está actualizado.

Formato: `YYYY-MM-DDTHH:MM:SS-07:00` (ISO 8601 con zona horaria) o `YYYY-MM-DD` (solo fecha).

## Consejos de YAML

- Siempre envuelve valores de cadenas en comillas dobles si contienen dos puntos: `title: "Python: Conceptos Básicos"`
- Los valores booleanos no necesitan comillas: `draft: false`
- No utilices tabulaciones: YAML requiere espacios para la indentación
- El frontmatter debe estar entre delimitadores `---` al comienzo del archivo