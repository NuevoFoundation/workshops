---
title: "Conceptos Básicos de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 4
---

## Entender cuándo y por qué usar Razor

### Los beneficios de las páginas Razor
Razor es una sintaxis de marcado que te permite incrustar código basado en servidor (C#) en páginas web.

El código basado en servidor puede crear contenido web dinámico en tiempo real mientras se escribe una página web para el navegador. Cuando se solicita una página web, el servidor ejecuta el código basado en el servidor dentro de la página antes de devolverla al navegador. Al ejecutarse en el servidor, el código puede realizar tareas complejas, como acceder a bases de datos.

Razor está basado en ASP.NET y diseñado para crear aplicaciones web. Tiene la potencia del marcado tradicional de ASP.NET, pero es más fácil de usar y de aprender.

Los beneficios incluyen:

* Configuración sencilla para aplicaciones web dinámicas utilizando HTML, CSS y C#.
* Archivos organizados por funcionalidad para facilitar el mantenimiento.
* Combina marcado con código C# del lado del servidor utilizando la sintaxis de Razor.

Las páginas Razor aprovechan Razor para incrustar código basado en servidor en páginas web. La sintaxis Razor combina HTML y C# para definir la lógica de renderizado dinámico. Esto significa que puedes usar variables y métodos de C# dentro de tu marcado HTML para generar contenido web dinámico en el servidor durante el tiempo de ejecución. Es importante entender que las páginas Razor no reemplazan HTML, CSS o JavaScript. Son una forma de combinar estas tecnologías para crear contenido web dinámico.

### Cuándo usar las páginas Razor
Utiliza las páginas Razor en tu aplicación ASP.NET Core cuando:

* Quieras generar una interfaz de usuario dinámica para la web.
* Prefieras un enfoque centrado en páginas.
* Quieras reducir la duplicación utilizando vistas parciales.

Las páginas Razor simplifican la organización de páginas en ASP.NET Core al mantener las páginas relacionadas y su lógica juntas en su propio espacio de nombres y directorio.