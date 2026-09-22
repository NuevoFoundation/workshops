```markdown
---
title: "Actividad 3 - Crear una Aplicación Web"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 7
---

## Instrucciones

### Creando un Proyecto

1. Asegúrate de tener Visual Studio Code abierto.

2. En la **Barra de Actividades**, selecciona **Explorador**.

3. Selecciona el botón **Crear Proyecto .NET**.

    La paleta de comandos mostrará una lista de tipos de proyectos para seleccionar.

4. De la lista, selecciona **Aplicación de Servidor Blazor**.

5. Selecciona la carpeta en la que te gustaría almacenar tu nueva aplicación.

6. Dale un nombre.

    La aplicación será creada y aparecerá un menú de **Solución** en el Explorador.

    <img src="../media/solution-explorer.png" alt="Captura de pantalla del Explorador de Soluciones en VS Code" />

¡Ahora tienes un sitio web!
### Revisar la estructura del proyecto Razor Pages

La siguiente tabla describe la estructura del proyecto que se generó.

|Nombre   | Descripción |
|-------|------------|
|Pages/	|Contiene Razor Pages y archivos de soporte. Cada Razor Page tiene un archivo .cshtml y un archivo de clase PageModel .cshtml.cs.|
|wwwroot/	|Contiene archivos de recursos estáticos como HTML, JavaScript y CSS. |
|ContosoPizza.csproj	|Contiene los metadatos de configuración del proyecto, como dependencias.|
|Program.cs|	Actúa como punto de entrada para la aplicación y configura el comportamiento de la aplicación, como el enrutamiento.|

Otras observaciones destacadas:

* Archivos de Razor Pages y sus archivos de clase PageModel asociados

    Las Razor Pages se almacenan en el directorio Pages. Como se señaló anteriormente, cada Razor Page tiene un archivo .cshtml y un archivo de clase PageModel .cshtml.cs. La clase PageModel permite separar la lógica y presentación de una Razor Page, define manejadores de página para solicitudes y encapsula propiedades de datos y lógica dentro del alcance de su Razor Page.

* La estructura del directorio Pages y las solicitudes de enrutamiento

    Razor Pages utiliza la estructura del directorio Pages como convención para enrutamiento de solicitudes. La siguiente tabla muestra cómo las URLs se asignan a nombres de archivo:

|URL|	Se asigna a Razor Page|
|---|---------|
|www.domain.com	|Pages/Index.cshtml|
|www.domain.com/Index	|Pages/Index.cshtml|
|www.domain.com/Privacy	|Pages/Privacy.cshtml|
|www.domain.com/Error	|Pages/Error.cshtml|

Las subcarpetas en el directorio Pages se usan para organizar las Razor Pages. Por ejemplo, si hubiera un directorio Pages/Products, las URLs reflejarían esa estructura:

|URL	|Se asigna a Razor Page|
|-----|--------|
|www.domain.com/Products	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Index	|Pages/Products/Index.cshtml|
|www.domain.com/Products/Create	|Pages/Products/Create.cshtml|

* Diseño y otros archivos compartidos

Hay varios archivos compartidos entre múltiples páginas. Estos archivos determinan los elementos comunes del diseño y las importaciones de página. La siguiente tabla describe el propósito de cada archivo.

|Archivo	|Descripción|
|-------|----------|
|_ViewImports.cshtml	|Importa espacios de nombres y clases que se usan en múltiples páginas.|
|_ViewStart.cshtml	|Especifica el diseño predeterminado para todas las Razor Pages.|
|Pages/Shared/_Layout.cshtml	|Este es el diseño especificado por el archivo _ViewStart.cshtml. Implementa elementos comunes de diseño entre múltiples páginas.|
|Pages/Shared/_ValidationScriptsPartial.cshtml	|Proporciona funcionalidad de validación a todas las páginas.|

### Ejecute tu proyecto

1. Asegúrate de tener Visual Studio Code abierto y en la **Barra de Actividades**, selecciona **Explorador**.

2. En el **Explorador de Soluciones**, haz clic derecho sobre el nombre de tu proyecto, selecciona **Depurar** y luego selecciona **Iniciar nueva instancia**.

    Esto construirá y lanzará tu nuevo sitio web.

    <img src="../media/website1.png" alt="Captura de pantalla del sitio web que acabas de crear" />

3. Haz clic en los enlaces ***Counter*** y ***Fetch Data*** para navegar por tu sitio web.

### Personaliza la página de inicio

Hagamos algunos cambios en la página de inicio para que sea más relevante para tu aplicación.

1. En *Pages/Index.razor*, agrega un bloque de código C# con el siguiente código:


```C#
@code {
TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}
```

El código anterior:

* Calcula el tiempo que ha pasado desde que el negocio abrió.

2. Cambia el elemento ```PageTitle``` para que diga "Bienvenido a mi primera página web".

3. Cambia el ```h1``` para que diga "Bienvenido a mi primera aplicación web Razor".

4. Reemplaza el texto restante con el siguiente código:

```CSHTML
<p class="lead">¡El mejor sitio web de la ciudad por @Convert.ToInt32(timeInBusiness.TotalDays) días!</p>
```
El código anterior:

* Muestra el número de días que han pasado desde el 17 de enero de 2010.
    * El carácter @ se utiliza para cambiar de HTML a sintaxis Razor.
    * El método Convert.ToInt32 se utiliza para convertir la propiedad TotalDays de la variable timeInBusiness a un entero.
    * La clase Convert es parte de la biblioteca System, que se importa automáticamente por el elemento ```<ImplicitUsings>``` en el archivo .csproj.

3. Guarda el archivo. Actualiza la pestaña del navegador con la aplicación para mostrar los cambios. 

<img src="../media/end-of-activity-3.png" alt="Captura de pantalla del sitio después de los cambios de la Actividad 3" />
```