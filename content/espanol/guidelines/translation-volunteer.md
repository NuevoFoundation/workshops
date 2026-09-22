---
title: "Guía para voluntarios de traducción"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

¡Gracias por ayudar a que los talleres sean accesibles para más niños en todo el mundo! Esta guía explica cómo traducir un taller existente a un nuevo idioma.

## Antes de comenzar

1. Verifica si el taller ya existe en el idioma al que deseas traducirlo. Examina el directorio `content/` para localizar las carpetas de idiomas:

| Carpeta | Idioma |
|--------|----------|
| `content/english/` | Inglés |
| `content/espanol/` | Español |
| `content/brazilian-portuguese/` | Portugués brasileño |
| `content/korean/` | Coreano |
| `content/francais/` | Francés |
| `content/german/` | Alemán |
| `content/simplified-chinese/` | Chino simplificado |
| `content/traditional-chinese/` | Chino tradicional |
| `content/kyrgyz/` | Kirguís |

2. Abre un [issue de solicitud de traducción](https://github.com/NuevoFoundation/workshops/issues/new) en GitHub para que otros sepan que estás trabajando en ello.

## Cómo funcionan las traducciones

Cada idioma tiene su propio directorio bajo `content/`. La estructura de carpetas dentro de cada idioma refleja la versión en inglés:

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## Paso a paso

### 1. Copia el taller en inglés

Copia todo el contenido de la carpeta del taller en inglés al directorio del idioma de destino:

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. Traduce el contenido

Para cada archivo `.md`:

- **Traduce** todo el texto visible (títulos, párrafos, instrucciones, pistas)
- **Mantén** todas las claves de front matter de Hugo en inglés (`title`, `date`, `draft`, `weight`, etc.)
- **Traduce** los valores de front matter (`title: "Python: Conceptos básicos"`)
- **Mantén** todos los ejemplos de código en inglés (el código es universal)
- **Traduce** los comentarios en el código si existen
- **Mantén** todas las rutas de archivo, referencias a imágenes y shortcodes de Hugo sin cambios
- **Traduce** el texto alternativo de las imágenes al idioma de destino

### 3. Maneja las imágenes

- **Imágenes compartidas** (capturas de pantalla de código, diagramas): Copia la carpeta `img/` o `media/` en inglés a tu traducción. Los archivos de imagen son los mismos en todos los idiomas.
- **Imágenes con mucho texto** (imágenes que contienen texto en inglés): Si es posible, crea versiones localizadas. Si no, mantén la versión en inglés y menciónalo en tu PR.
- **Texto alternativo**: Siempre traduce el texto alternativo al idioma de destino. Los lectores de pantalla usan la configuración de idioma de la página.

### 4. Prueba localmente

```bash
hugo server -D
```

Navega por el taller traducido y verifica:
- Todas las páginas se cargan sin errores
- Las imágenes se muestran correctamente
- La navegación funciona (TOC, anterior/siguiente)
- Los ejemplos de código están intactos

### 5. Envía tu PR

- Título: `Traducción: [nombre-del-taller] al [idioma]`
- Descripción: Enumera todos los archivos traducidos y menciona cualquier imagen que aún contenga texto en inglés
- Asegúrate de traducir el **taller completo**, no solo la página principal

## Consejos

- Trabaja el taller como lo haría un estudiante. Si algo no tiene sentido en la traducción, refrasea.
- Mantén las frases cortas y claras. Estos talleres están diseñados para niños de 8 a 18 años.
- Si tienes dudas sobre un término técnico, deja el término en inglés y agrega una breve explicación en el idioma de destino.
- No traduzcas los nombres de los talleres en las URLs o nombres de carpetas, deben permanecer en inglés para el enrutamiento de Hugo.

## Notas específicas del idioma

### Español

- Utiliza la conjugación verbal de **tú** para una accesibilidad amplia en América Latina (no voseo).
- Traduce los comentarios del código pero mantén los nombres de variables y funciones en inglés.
- Los términos técnicos como "string", "loop" o "function" pueden permanecer en inglés con una breve explicación en español la primera vez que aparezcan.