---
title: "Comenzando"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---

## Requisitos previos

| Herramienta | Propósito | Enlace de instalación |
|-------------|-----------|-----------------------|
| **Git** | Control de versiones | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | Construye el sitio del taller | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (recomendado) | Editor de texto | [code.visualstudio.com](https://code.visualstudio.com/download) |

¿Nuevo en Git? Revisa la [Guía rápida de GitHub](https://docs.github.com/en/get-started/quickstart).

### Instalación rápida de Hugo

**Windows (winget):**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew):**
```
brew install hugo
```

**Linux (snap):**
```
snap install hugo
```

Verifica con `hugo version`. Deberías ver un resultado que incluya **extended**.

## Enlaces de referencia

- [Repositorio de GitHub](https://github.com/NuevoFoundation/workshops)
- [Sitio web de talleres](https://workshops.nuevofoundation.org/)

## Videos explicativos

- [Ciclo de desarrollo del repositorio de talleres en GitHub](https://youtu.be/LpjucoAVviI)
- [Estructura del repositorio de talleres en GitHub](https://youtu.be/cygmE6LGcOw)

## Hacer un fork y clonar el repositorio

Las contribuciones utilizan el [modelo de fork](https://help.github.com/articles/fork-a-repo/). Tú haces cambios en tu propio fork y luego abres un pull request para fusionarlos en el repositorio principal.

### 1. Hacer fork del repositorio

Haz clic en **Fork** en la esquina superior derecha del <a target="_blank" href="https://github.com/nuevoFoundation/workshops">repositorio workshops</a>:

![Captura de pantalla que muestra el botón Fork en GitHub](/guidelines/media/fork.png)

### 2. Clonar tu fork

Reemplaza `[your-username]` con tu nombre de usuario de GitHub:

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. Configurar el repositorio remoto upstream

Esto te permitirá incorporar actualizaciones del repositorio principal mientras evitas empujar accidentalmente cambios:

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

Verifica con `git remote -v`:

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## Construir y probar localmente

Desde el directorio `workshops`, ejecuta:

```bash
hugo server -D
```

- `-D` incluye contenido en borrador para que puedas previsualizar el trabajo en progreso.
- El sitio se construye en unos segundos y está disponible en **http://localhost:1313/**.
- Hugo observa los cambios en los archivos y recarga automáticamente tu navegador.

Para detener el servidor, presiona `Ctrl+C`.

## Mantén tu fork actualizado

Antes de comenzar un nuevo trabajo, sincroniza con upstream:

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## Ejemplo paso a paso

**Escenario**: Haz un cambio simple y envía un pull request.

### Crear una rama temática

Primero asegúrate de que tu fork esté actualizado:

```bash
git checkout master
git checkout -b mi-cambio
git push --set-upstream origin mi-cambio
```

### Realiza tu edición

Abre la carpeta del repositorio en VS Code. Navega al archivo que deseas cambiar. Para este ejemplo, edita `content/english/guidelines/getting-started.md`. Para una comprensión más profunda de la estructura de archivos, consulta [cómo se construye el sitio](../site-architecture/).

### Realizar commit y empujar

```bash
git add content/english/guidelines/getting-started.md
git commit -m "Descripción de lo que cambió"
git push
```

**Consejo**: Usa `git commit -am "mensaje"` para preparar todos los archivos modificados y hacer el commit en un solo paso.

### Abrir un pull request

Navega a tu fork en GitHub. Deberías ver un aviso para crear un pull request desde tu último push:

![Captura de pantalla que muestra el botón Compare and Pull Request en GitHub](/guidelines/media/compare-and-pull.png)

Si no ves el aviso, ve a **Pull Requests > New pull request**:

![Captura de pantalla que muestra el botón New Pull Request en GitHub](/guidelines/media/create-new-pr.png)

Asegúrate de que tu rama base (objetivo) y tu rama principal (origen) sean correctas, agrega un título y descripción, luego envíalo.

## ¿Creando un nuevo taller?

Siempre usa el script scaffold para generar la estructura de directorios y plantillas adecuadas. No debes crear archivos de taller manualmente.

```bash
python tools/new-workshop.py --name "mi-taller" --title "Mi Taller" \
  --coding-language python --topics programming-basics
```

Consulta las [Pautas para nuevos talleres](../new-workshops/) para un recorrido completo, opciones y lista de verificación previa al pull request.