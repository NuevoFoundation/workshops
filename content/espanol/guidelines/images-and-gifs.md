---
title: "Imágenes y GIFs"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

Las imágenes hacen que los talleres sean más atractivos para los jóvenes estudiantes. Sigue estas pautas para garantizar que las imágenes sean accesibles, tengan el tamaño adecuado y funcionen en todas las plataformas.

## Tamaño de imágenes

Nunca dejes imágenes sin restricciones de ancho. Sin un atributo `width`, las imágenes se mostrarán en su tamaño original, que a menudo es demasiado grande para el área de contenido.

| Tipo de imagen | Ancho objetivo | Ejemplo |
|----------------|----------------|---------|
| Capturas de pantalla completas (Replit, IDE) | 60% | Diálogo de carga de Replit |
| Salida de código / terminal | 70% | Resultados de dotnetfiddle |
| Diagramas conceptuales | 50% | Teoría del color, estructuras de datos |
| Fotos de ejemplo | 40-50% | Imágenes de gatos en python-pixel |
| Pequeños íconos / emblemas | 15-25% | Tablas, diagramas pequeños |
| Arte decorativo | 20-30% | Ilustraciones de personajes |
| Imágenes heroicas | 100% | Solo en la página de inicio `_index.md` |

**Usa porcentajes, no píxeles.** Los anchos en porcentaje son responsivos y se ajustan en móviles y tabletas. Los anchos en píxeles pueden desbordarse en pantallas más pequeñas.

```markdown
<!-- Bueno: responsive -->
<img src="../media/screenshot.png" alt="Editor de código de Replit" width="60%">

<!-- Evitar: ancho fijo en píxeles -->
<img src="../media/screenshot.png" alt="Editor de código de Replit" width="900px">
```

## Agregar imágenes

### Método 1: Sintaxis de Markdown

```markdown
![Descripción de la imagen](../media/filename.png)
```

### Método 2: Etiqueta HTML img (cuando necesitas controlar el ancho)

```html
<img src="../media/filename.png" alt="Descripción de la imagen" width="50%">
```

### Método 3: Hugo figure shortcode

```
{{</* figure src="../media/filename.png" alt="Descripción" width="50%" */>}}
```

El shortcode `figure` envuelve las imágenes en un elemento `<figure>`. Nota: la mayoría de los talleres existentes usan los enfoques de markdown o HTML mencionados anteriormente. Los talleres más antiguos pueden usar `img/` en lugar de `media/`: ambos funcionan de manera idéntica.

## Accesibilidad (texto alternativo)

Cada imagen **debe** tener un texto alternativo descriptivo. Esto no es negociable.

| Hacer | No hacer |
|-------|----------|
| `alt="Editor de código de Replit mostrando un programa 'hello world' en Python"` | `alt="captura de pantalla"` |
| `alt="Diagrama de colores RGB con círculos rojo, verde y azul superpuestos"` | `alt="imagen"` |
| `alt=""` (para imágenes puramente decorativas como separadores) | `alt="No se puede cargar la imagen"` |

Para talleres traducidos, el texto alternativo debe estar en el idioma de la página:
- Inglés: `alt="A friendly chatbot welcoming users"`
- Portugués: `alt="Um chatbot amigável dando boas-vindas aos usuários"`
- Coreano: `alt="사용자를 환영하는 친근한 챗봇"`

## Nomenclatura de archivos

- Usa **extensiones de archivo en minúscula**: `.png`, `.jpg`, `.gif` (no `.PNG`, `.JPG`)
- Usa **nombres descriptivos**: `replit-upload-dialog.png` (no `img1.png`)
- Usa **guiones** para separar palabras: `color-theory-diagram.png` (no `color_theory_diagram.png`)
- Mantén los nombres cortos pero significativos

## Ubicación de imágenes

Los talleres nuevos deben usar un directorio `media/` (el script de andamiaje lo genera automáticamente). Algunos talleres más antiguos usan `img/` en su lugar; ambos funcionan de la misma manera en Hugo.

```
content/english/my-workshop/
  _index.md
  activity-1.md
  media/             <-- imágenes aquí
    screenshot.png
    diagram.png
```

Las imágenes se referencian con rutas relativas desde la página. En `_index.md`, usa `media/image.png`. En páginas de actividades y claves de respuestas, usa `../media/image.png` (se renderizan un nivel más abajo en Hugo).

{{% notice warning %}}
Hugo resuelve las rutas relativas desde la **URL de la página**, no desde la ubicación del sistema de archivos. Para las páginas hijas en `/workshop/section/activity/`, la ruta `../media/file.png` se resuelve como `/workshop/media/file.png`. Este es el patrón correcto. No "corrijas" estas rutas `../`: son intencionales.
{{% /notice %}}

## GIFs

Los GIFs son excelentes para mostrar interacciones breves (hacer clic en botones, arrastrar elementos). Mantenlos:

- **Cortos**: Máximo 5-15 segundos
- **Pequeños**: Menos de 2MB si es posible (los GIFs grandes ralentizan la carga de la página)
- **Claros**: Usa una tasa de fotogramas razonable. Las grabaciones de pantalla a 10-15 fps funcionan bien.
- **Accesibles**: Agrega un texto alternativo que describa lo que muestra el GIF

Considera usar una imagen estática con un pie de foto en lugar de un GIF si la animación no es esencial para la comprensión.

## Capturas de pantalla

Al tomar capturas de pantalla para talleres:

1. **Recorta ajustadamente** el área relevante
2. **Usa un entorno limpio** (sin marcadores personales, notificaciones, etc.)
3. **Tamaño consistente** dentro de un taller (no mezcles capturas 1080p y 4K)
4. **Destaca el área relevante** si la captura incluye mucha interfaz de usuario