---
title: "Guías para Desarrolladores Web"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

Este documento es solo para **desarrolladores web** que quieran modificar las plantillas y estilos del proyecto [Nuevo Foundation workshop](https://github.com/nuevoFoundation/workshops).

## Antes de comenzar

Antes de agregar o actualizar el sitio web, asegúrate de sincronizarte con el equipo del proyecto y revisar el trabajo existente en el [Project Backlog](https://github.com/NuevoFoundation/workshops/projects/1).

## Configuración

Sigue las instrucciones en la página [Getting Started](../getting-started/) para instalar Git y Hugo y poder probar el proyecto de manera local.

## Estilos y estructura de diseño web

- **Imágenes:** Las imágenes del sitio web deben estar en `themes/images`
- **CSS**: Ignora los archivos SCSS y utiliza únicamente los archivos CSS en `/themes/docdock/static/css/`. Asegúrate de agregar una referencia al CSS que quieras incluir en el archivo `head.html` en `/themes/docdock/layouts/partials/flex/head.html`.

## Desglosando una página del taller

- **Plantilla de página completa**: Para ver todos los componentes de una página, incluyendo el encabezado, menú, cuerpo y pie de página, revisa `/themes/docdock/layouts/_default/baseof.html`.
- **Head**: Meta, archivos CSS y JS en `/themes/docdock/layouts/partials/flex/head.html`.
- **Navegación superior/menú**: No utilices los valores de `config.toml` de docDock, en su lugar, agrega/edita HTML en `/themes/docdock/layouts/partials/flex/body-before-content.html`.
- **Menú izquierdo**: `/themes/docdock/layouts/partials/flex/menu.html`.
- **Navegación del pie de página**: `/themes/docdock/layouts/partials/flex/body-after-content.html`.
- **Cuadro de metadatos**: `/themes/docdock/layouts/partials/flex/body-after-content.html`.

## Ayuda, el CSS no se carga

Un desafío con Hugo es que un parámetro clave en la compilación es la variable `baseURL`. Si el contenido se está cargando pero el CSS no, probablemente se trate de un problema con la configuración de `baseURL`.

Puedes cambiar el `baseURL` al construir el contenido, en lugar de cambiar el archivo config.toml. El ejemplo a continuación minificará el CSS y JS, configurará el `baseURL` con la URL de producción .org y copiará los resultados al directorio `public`.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## Consejos y trucos

- **Ignorar Public**: Por defecto, al ejecutar `hugo` sin parámetros, el sitio se construirá en el directorio public. Asegúrate de no agregar el directorio public al control de versiones (está en gitignore ahora).
- **Navegación izquierda**: Puedes ocultar contenido de la navegación izquierda configurando la metadata del archivo como hidden: true (como el archivo index.md de este taller).
- **Partials**: Para componentes reutilizables de una página, crea un nuevo parcial en `/themes/docdock/layouts/partials/flex/`.