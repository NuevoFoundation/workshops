```markdown
---
title: "Directivas de Razor"
date: 2023-09-13T11:45:38-07:00
draft: false
weight: 6
---

## Directivas
Las directivas de Razor están representadas por expresiones implícitas con palabras clave reservadas que siguen al símbolo @. Una directiva generalmente cambia la forma en que se analiza una vista o habilita funcionalidades diferentes.

Entender cómo Razor genera código para una vista facilita la comprensión de cómo funcionan las directivas.

```csharp
@{
    string quote = "¡Envejecer no es para débiles! - Anónimo";
}

<div>Cita del día: @quote</div>
```

El código genera una clase similar a la siguiente:

```csharp
public class _Views_Something_cshtml : RazorPage<dynamic>
{
    public override async Task ExecuteAsync()
    {
        string output = "¡Envejecer no es para débiles! - Anónimo";

        WriteLiteral("/r/n<div>Cita del día: ");
        Write(output);
        WriteLiteral("</div>");
    }
}
```

### ```@attribute```
La directiva ```@attribute``` agrega el atributo dado a la clase de la página o vista generada. El siguiente ejemplo agrega el atributo [Authorize]:

```csharp
@attribute [Authorize]
```

La directiva ```@attribute``` también se puede utilizar para proporcionar una plantilla de ruta basada en constantes en un componente Razor. En el siguiente ejemplo, la directiva ```@page``` en un componente se reemplaza con la directiva ```@attribute``` y la plantilla de ruta basada en constantes en Constants.CounterRoute, que se define en otro lugar de la aplicación como "/counter":

```csharp
@page "/counter"
@attribute [Route(Constants.CounterRoute)]
```

### ```@code```
Este escenario solo aplica a componentes Razor (.razor).

El bloque ```@code``` permite a un componente Razor agregar miembros de C# (campos, propiedades y métodos) a un componente:

```csharp
@code {
    // Miembros de C# (campos, propiedades y métodos)
}
```

Para los componentes Razor, ```@code``` es un alias de ```@functions``` y se recomienda sobre ```@functions```. Se permite más de un bloque ```@code```.

### ```@functions```
La directiva ```@functions``` permite agregar miembros de C# (campos, propiedades y métodos) a la clase generada:

```csharp
@functions {
    // Miembros de C# (campos, propiedades y métodos)
}
```

En los componentes Razor, usa ```@code``` en lugar de ```@functions``` para agregar miembros de C#.

Por ejemplo:

```csharp
@functions {
    public string GetHello()
    {
        return "Hola";
    }
}

<div>Desde método: @GetHello()</div> 
```

El código genera el siguiente marcado HTML:

```html
<div>Desde método: Hola</div>
```

El siguiente código es la clase C# generada por Razor:

```csharp
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor;

public class _Views_Home_Test_cshtml : RazorPage<dynamic>
{
    // Funciones colocadas entre aquí 
    public string GetHello()
    {
        return "Hola";
    }
    // Y aquí.
#pragma warning disable 1998
    public override async Task ExecuteAsync()
    {
        WriteLiteral("\r\n<div>Desde método: ");
        Write(GetHello());
        WriteLiteral("</div>\r\n");
    }
#pragma warning restore 1998
```

Los métodos ```@functions``` funcionan como métodos de plantilla cuando contienen marcado:

```csharp
@{
    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}

@functions {
    private void RenderName(string name)
    {
        <p>Nombre: <strong>@name</strong></p>
    }
}
```

El código genera el siguiente HTML:

```html
<p>Nombre: <strong>Mahatma Gandhi</strong></p>
<p>Nombre: <strong>Martin Luther King, Jr.</strong></p>
```

### ```@implements```
La directiva ```@implements``` implementa una interfaz para la clase generada.

El siguiente ejemplo implementa System.```IDisposable``` para que se pueda llamar al método Dispose:

```csharp
@implements IDisposable

<h1>Ejemplo</h1>

@functions {
    private bool _isDisposed;

    ...

    public void Dispose() => _isDisposed = true;
}
```

### ```@inherits```

La directiva ```@inherits``` proporciona control total sobre la clase de la que hereda la vista:

```csharp
@inherits TypeNameOfClassToInheritFrom
```

El siguiente código es un tipo de página Razor personalizada:

```csharp
using Microsoft.AspNetCore.Mvc.Razor;

public abstract class CustomRazorPage<TModel> : RazorPage<TModel>
{
    public string CustomText { get; } = 
        "¡Gardyloo! - Una advertencia escocesa que se grita desde una ventana antes de vaciar" +
        "un cubo de agua sucia en la calle abajo.";
}
```

El texto personalizado se muestra en una vista:

```chsarp
@inherits CustomRazorPage<TModel>

<div>Texto personalizado: @CustomText</div>
```

El código genera el siguiente HTML:

```html
<div>
    Texto personalizado: Bumbershoot - Otra palabra para paraguas.
</div>
```

```@model``` y ```@inherits``` se pueden usar en la misma vista. ```@inherits``` puede estar en un archivo _ViewImports.cshtml que la vista importe:

```csharp
@inherits CustomRazorPage<TModel>
```

El siguiente código es un ejemplo de una vista fuertemente tipada:

```csharp
@inherits CustomRazorPage<TModel>

<div>El correo de inicio de sesión: @Model.Email</div>
<div>Texto personalizado: @CustomText</div>
```

Si se pasa "jade@nuevofoundation.org" en el modelo, la vista genera el siguiente marcado HTML:

```html
<div>El correo de inicio de sesión: jade@nuevofoundation.org</div>
<div>
    Texto personalizado: Bumbershoot - Otra palabra para paraguas.
</div>
```

### ```@inject```

La directiva ```@inject``` permite que la Página Razor inyecte un servicio desde el contenedor de servicios en una vista. 

### ```@layout```

Este escenario solo aplica a componentes Razor (.razor).

La directiva ```@layout``` especifica un diseño para componentes Razor enroutables que tienen una directiva ```@page```. Los componentes de diseño se usan para evitar duplicación de código e inconsistencia.

### ```@model```

Este escenario solo aplica a vistas MVC y Páginas Razor (.cshtml).

La directiva ```@model``` especifica el tipo de modelo pasado a una vista o página:

```csharp
@model TypeNameOfModel
```

En una aplicación ASP.NET Core MVC o Razor Pages creada con