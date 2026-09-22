```markdown
---
title: "Razor: Crear un Sitio Web"
description: "Una guía introductoria sobre cómo hacer un sitio web simple usando C#/Razor"
date: 2023-09-11T11:45:38-07:00
prereq: "Conceptos básicos de la web, Conceptos básicos de C#"
draft: false
icon: "fas fa-code"
language: "csharp"
topics: ["web"]
difficulties: ["intermedio"]
---

## Bienvenidos

El objetivo de la actividad de hoy es aprender habilidades de desarrollo web y C#, e incorporar este nuevo conocimiento para crear un sitio web.

## Comenzando

El objetivo de la actividad de hoy es aprender habilidades de desarrollo web y C#, e incorporar este nuevo conocimiento para crear un sitio web. Vamos a configurar tu entorno.

Antes de comenzar con el desarrollo de aplicaciones en C#, el primer paso es seleccionar un entorno de programación. Para este taller, hemos elegido Visual Studio Code, uno de los IDEs más populares entre los desarrolladores de C#.

### Descargar Visual Studio Code
1. Abre una nueva ventana del navegador y navega a: <a href="https://code.visualstudio.com" target="_blank">https://code.visualstudio.com</a>.

2. En la ventana del navegador, selecciona el botón de Descargar.

{{% panel theme="info" header="Nota"%}}
La página de descarga de Visual Studio Code detecta automáticamente tu sistema operativo. Muestra la versión correspondiente para descargar según tu sistema operativo, como Linux, macOS o Windows.
{{% /panel %}}

3. Espera a que termine de descargarse el archivo de instalación.

El nombre del archivo de instalación será similar al siguiente (en un PC con Windows): VSCodeUserSetup-x64-1.81.0.exe.

{{% panel theme="info" header="Nota"%}}
El nombre del archivo depende de la versión actual de Visual Studio Code y del sistema operativo de tu computadora.
{{% /panel %}}

4. Cierra la ventana del navegador.

### Instalar Visual Studio Code
1. En tu PC, abre un explorador de archivos y navega hasta la carpeta de descargas de tu computadora.

2. En el explorador de archivos, selecciona y ejecuta el archivo de instalación de Visual Studio Code.

    En un PC con Windows, puedes hacer doble clic en el archivo de instalación para comenzar el proceso de instalación. Por ejemplo, haz doble clic en VSCodeUserSetup-x64-1.81.0.

{{% panel theme="info" header="Nota"%}}
Puedes instalar Visual Studio Code utilizando el instalador de usuario o el instalador de sistema. El instalador de usuario instala Visual Studio Code solo para el usuario actual, mientras que el instalador de sistema lo instala para todos los usuarios. La opción recomendada para la mayoría de los usuarios es el instalador de usuario.
{{% /panel %}}

Después de un momento, aparecerá la ventana de diálogo **Setup - Microsoft Visual Studio Code**.

<img src="media/vscodeInstaller.png" alt="Captura de pantalla que muestra el instalador de Visual Studio Code" />

3. Selecciona Acepto el acuerdo de licencia y continúa siguiendo las instrucciones en línea para completar la instalación.

    Acepta las opciones predeterminadas durante el resto del proceso de instalación.

    Para obtener instrucciones detalladas de instalación, consulta la página de documentación de Visual Studio Code: <a href="https://code.visualstudio.com/docs/setup/windows" target="_blank">https://code.visualstudio.com/docs/setup/windows</a>.

### Instalar .NET SDK

{{% panel theme="info" header="Cómo verificar si tienes .NET instalado"%}}
Puedes verificar si ya tienes .NET instalado abriendo una ventana de terminal y escribiendo <code>dotnet --version</code>, luego presiona la tecla Enter.
{{% /panel %}}

1. Abre una nueva ventana del navegador de Internet.

2. Para abrir la página de descarga del .NET SDK, navega a la siguiente URL:

    <a href="https://dotnet.microsoft.com/download" target="_blank">https://dotnet.microsoft.com/download</a>

3. En la página Descargar .NET, selecciona la versión recomendada del .NET SDK.

4. Espera a que termine de descargarse el archivo de instalación.

5. Ejecuta el archivo de instalación del .NET SDK.

    En un PC con Windows, puedes encontrar tu carpeta de Descargas utilizando el Explorador de Archivos. Haz doble clic en el archivo de instalación para comenzar el proceso de instalación.

6. En la ventana del instalador del .NET SDK, selecciona Instalar.

7. Espera a que la instalación se complete.

    La instalación debería durar aproximadamente un minuto. Una vez que finalice, aparecerá un mensaje confirmando que la instalación fue exitosa.

8. Para cerrar la ventana del instalador, selecciona Cerrar.


## Tabla de Contenidos

<details close>
<summary>Tabla de Contenidos</summary>
{{% children /%}}
</details>
```