---
title: "Navegación"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---

Hugo utiliza metadatos en el frontmatter de cada archivo markdown para controlar cómo aparecen las páginas en la navegación del sitio. Esta guía cubre las configuraciones clave.

## Ordenación de páginas con weight

El campo `weight` controla el orden de las páginas en la barra lateral izquierda y en la tabla de contenidos. Los números más bajos aparecen primero.

```yaml
---
title: "Actividad 1: Introducción"
weight: 3
---
```

**Esquema de peso recomendado:**

| Tipo de página          | Peso  | Ejemplo               |
|-------------------------|-------|-----------------------|
| `_index.md` (página de inicio) | 1     | Introducción al taller |
| Configuración / requisitos | 2     | Herramientas necesarias |
| Actividades             | 3, 4, 5... | Actividad 1, 2, 3     |
| Clave de respuestas     | 15+   | Oculta de la navegación |

Deja espacios entre los pesos de las actividades si esperas insertar páginas más adelante (por ejemplo, usa 3, 5, 7 en lugar de 3, 4, 5).

## Controlando la tabla de contenidos

### TOC Colapsado (recomendado)

Los talleres deberían comenzar con una introducción visible y la lista de actividades colapsada:

```yaml
---
title: "Python: Fundamentos"
alwaysopen: false
---
```

Con `alwaysopen: false`, las páginas secundarias aparecen como un árbol colapsable en la barra lateral. Los estudiantes pueden expandir las secciones a medida que avanzan.

### TOC Expandido

Para talleres muy breves (3 actividades o menos), puedes querer que todas las secciones estén visibles:

```yaml
---
title: "Taller Corto"
alwaysopen: true
---
```

## Ocultando páginas

### Páginas ocultas (construidas pero no en la navegación)

Usa `hidden: true` para páginas que deberían existir pero no aparecer en la navegación de la barra lateral. Los estudiantes aún pueden acceder a ellas mediante un enlace directo.

```yaml
---
title: "Clave de Respuestas"
hidden: true
---
```

Usos comunes: claves de respuestas, notas para instructores, contenido adicional.

### Páginas en borrador (no construidas en producción)

Usa `draft: true` para trabajos en progreso que no deberían aparecer en el sitio en vivo:

```yaml
---
title: "Taller Incompleto"
draft: true
---
```

Las páginas en borrador solo aparecen al ejecutar `hugo server -D` (la bandera `-D` incluye los borradores).

## El shortcode children

Para mostrar una lista de páginas secundarias en una página de inicio, usa el shortcode `children` dentro de un elemento de detalles colapsable:

```html
<details>
<summary>Tabla de Contenidos</summary>
{{% children /%}}
</details>
```

Esto genera una tabla de contenidos limpia y colapsable que los estudiantes pueden expandir cuando lo deseen. Algunos talleres existentes usan `<details open>` para un formato predeterminado expandido.

## Plantilla de página de inicio del taller

Aquí tienes un ejemplo completo de frontmatter para `_index.md`:

```yaml
---
title: "Python: Fundamentos"
description: "Aprende los fundamentos de Python"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["fundamentos-de-programación"]
difficulties: ["principiante"]
prereq: "Ninguno"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## Tips

- Prueba los cambios de navegación localmente con `hugo server -D` antes de enviarlos.
- Verifica que las claves de respuestas sean `hidden: true` para que los estudiantes no las vean.
- Mantén los números de peso consistentes dentro de un taller.
- Si reordenas páginas, actualiza todos los pesos para evitar huecos o colisiones.