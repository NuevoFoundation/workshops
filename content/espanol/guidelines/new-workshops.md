```yaml
---
title: "Creando un nuevo taller"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 2
---
```

Esta guía te lleva desde la idea hasta el pull request para crear un nuevo taller. Antes de comenzar, completa la configuración [Primeros pasos](../getting-started/) (Git, Hugo, fork) y lee la descripción general de [Arquitectura del sitio](../site-architecture/).

## Nuestra filosofía

Los talleres de la Fundación Nuevo deberían sentirse como **aventuras guiadas**, no como libros de texto. Cada taller cuenta una historia que los estudiantes siguen a su propio ritmo. Los mejores talleres son:

- **Basados en historias**: los estudiantes siguen a un personaje en una misión (Por ejemplo: Benji el Perro necesita un sitio web, Alex la Abeja necesita un panal, DJ Nuvi necesita un mixtape exitoso)
- **Personalizables**: los estudiantes pueden cambiar fácilmente el tema para adaptarlo a sus intereses (su mascota en lugar de Benji, su país en lugar de Costa Rica)
- **Autónomos**: lo suficientemente claros para que los estudiantes trabajen por su cuenta, incluso si el maestro se aleja
- **Progresivos**: las actividades se construyen una sobre otra, introduciendo un concepto a la vez
- **Divertidos**: tono alentador, personajes mascotas, recompensas visuales y celebración al final

## Aprende de nuestros mejores talleres

Estudia estos talleres ejemplares antes de crear el tuyo:

### Fundamentos de la web (HTML/CSS) — [content/english/web-basics/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/web-basics)

- **Tema**: Ayuda a Benji el Perro (desplazado por el Huracán Harvey) a encontrar su hogar definitivo construyéndole un sitio web
- **Razón por la que funciona**: conexión emocional, video de YouTube en cada página, incrustaciones de CodePen para codificación instantánea, la Actividad 5 permite a los estudiantes crear su propio sitio, se publica en páginas reales de GitHub
- **Patrón clave**: narrativa → concepto → video → tabla de referencia → ejercicio práctico

### Python turtle — [content/english/python-turtle/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-turtle)

- **Tema**: Ayuda a Alex la Abeja a construir un panal usando dibujos en Python
- **Razón por la que funciona**: 11 videos en YouTube, IDE Codebunga incrustado, resultados visuales (los estudiantes VEN cómo su código dibuja formas), complejidad progresiva (línea → cuadrado → hexágono → panal → mandala floral)
- **Patrón clave**: contexto de la historia → video → ejemplo de código → Codebunga interactivo → desafío

### EarSketch (bloques de Python y JS) — [content/english/python-earsketch/](https://github.com/NuevoFoundation/workshops/tree/master/content/english/python-earsketch)

- **Tema**: Ayuda a DJ Nuvi a producir un mixtape exitoso utilizando código
- **Razón por la que funciona**: los estudiantes ESCUCHAN su código (¡música!), retroalimentación audible inmediata, herramienta profesional (Georgia Tech), libertad creativa en la elección de sonidos
- **Patrón clave**: concepto musical → concepto de código → construir → escuchar → iterar

## Crear un taller con Copilot

Este repositorio incluye la habilidad `workshop-builder` para el CLI de GitHub Copilot. 
La habilidad lee estas directrices, estudia un taller existente relevante, utiliza el script de estructura, escribe el contenido y ejecuta los chequeos de publicación.

Inicia el CLI de Copilot desde la raíz del repositorio:

```bash
copilot
```

Si se añade la habilidad mientras Copilot ya estaba funcionando, recarga las habilidades del proyecto:

```text
/skills reload
```

Confirma que Copilot la haya detectado:

```text
/skills info workshop-builder
```

Luego incluye el nombre de la habilidad y el resumen del taller en el mensaje:

```text
Usa la habilidad /workshop-builder para crear un taller de Python para principiantes de 45 minutos para edades de 10–13 años. Debe realizarse en el navegador y enseñar variables, entradas y declaraciones if a través de una historia de rescate de robots.
```

La habilidad utiliza un cuestionario estándar para recopilar el título, rango de edad, duración, experiencia previa en programación, resultados de aprendizaje, lenguaje de programación, formato de entrega (presencial o virtual), número de actividades, historia y requisitos especiales. Pregunta toda la información faltante antes de crear los archivos. Si la cantidad solicitada de actividades probablemente excede el tiempo disponible, la habilidad alerta sobre la estimación pero conserva la cantidad solicitada por el usuario.

Copilot también puede seleccionar automáticamente la habilidad cuando la solicitud claramente solicite crear, revisar o revisar un taller de la Fundación Nuevo.

## Paso 1: estructura tu taller

Utiliza el script de estructura para generar el diseño correcto de directorios y archivos de plantilla. No crees archivos del taller manualmente: la estructura asegura la frontmatter correcta de Hugo, nombres de archivos y diseño de directorios.

**Requisito:** Python 3.7 o posterior. Verifica con `python --version` (o `python3 --version` en macOS/Linux).

Ejecuta esto desde la raíz del repositorio `workshops`:

```bash
python tools/new-workshop.py --name "mi-taller" --title "Mi Taller" \
  --coding-language python --topics programación-básica
```

Usa `--dry-run` primero para previsualizar lo que se crearía sin escribir ningún archivo:

```bash
python tools/new-workshop.py --name "mi-taller" --title "Mi Taller" \
  --coding-language python --topics programación-básica --dry-run
```

Esto genera la estructura inicial estándar:

```
content/english/my-workshop/
├── _index.md          ← Página principal (introducción, prerequisitos, TOC)
├── activity-1.md      ← Primera actividad
├── activity-2.md      ← Segunda actividad
├── activity-3.md      ← Tercera actividad
├── answer-key.md      ← Clave de respuestas (oculta en la navegación)
└── media/
    └── .gitkeep       ← Carpeta para capturas de pantalla e imágenes
```

### Opciones de estructura

| Opción      | Predeterminado    | Descripción|
|-------------|-------------------|-------------|
| `--name`    | (requerida)       | Nombre del directorio en kebab-case (ej. `python-web-scraping`) |
| `--title`   | (requerida)       | Título para mostrar (ej. `"Python: Raspado Web"`) |
| `--activities` o `-n