---
title: "Conceptos Básicos de Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 5
---

## Sintaxis de Razor

### Reglas Principales de Sintaxis de Razor
Razor admite C# y utiliza el símbolo @ para hacer la transición del HTML a C#. Razor evalúa expresiones de C# y las representa en la salida HTML.

Cuando el símbolo @ es seguido por una palabra clave reservada de Razor, se transita a un marcado específico de Razor. De lo contrario, se transita al HTML simple.

Para escapar el símbolo @ en el marcado de Razor, usa un segundo símbolo @:

```csharp
<p>@@Username</p>
```

El código anterior se representa en HTML con un solo símbolo @.

Hay algunas reglas básicas que recordar al escribir código Razor.

* Los bloques de código Razor están encerrados en ```@{ ... }```
* Las expresiones en línea (variables y funciones) comienzan con ```@```
* Las sentencias de código terminan con punto y coma (```;```)
* Las cadenas están encerradas con comillas
* El código C# es sensible a mayúsculas y minúsculas
* Los archivos de C# tienen la extensión .cshtml o .razor

#### Expresiones Implícitas de Razor
Las expresiones implícitas de Razor comienzan con ```@``` seguido de código C#.

```csharp
<p>@DateTime.Now</p>
<p>@DateTime.IsLeapYear(2016)</p>
```

Con la excepción de la palabra clave ```await``` de C#, las expresiones implícitas no deben contener espacios.

Las expresiones implícitas ***no pueden*** contener genéricos de C#, ya que los caracteres dentro de (```<>```) son interpretados como una etiqueta HTML.

#### Expresiones Explícitas de Razor
Las expresiones explícitas de Razor consisten en un símbolo @ con paréntesis equilibrados. Para representar la hora de hace una semana, se utiliza el siguiente marcado Razor:

```csharp
<p>Hora de la semana pasada: @(DateTime.Now - TimeSpan.FromDays(7))</p>
```
Cualquier contenido dentro de los paréntesis @() es evaluado y representado en la salida.

Las expresiones explícitas pueden usarse para concatenar texto con el resultado de una expresión:

```csharp
@{
    var joe = new Person("Joe", 33);
}

<p>Edad@(joe.Age)</p>
```

Sin la expresión explícita, ```<p>Edad@joe.Age</p>``` se trata como una dirección de correo electrónico, y se representa como ```<p>Edad@joe.Age</p>```. Cuando se escribe como una expresión explícita, se representa como ```<p>Edad33</p>```.

#### Bloques de Código Razor
Los bloques de código Razor comienzan con @ y están encerrados entre {}. A diferencia de las expresiones, el código C# dentro de los bloques de código no se representa. Los bloques de código y las expresiones en una vista comparten el mismo ámbito y se definen en orden:

En los bloques de código, declara funciones locales con marcado para que sirvan como métodos de plantillas:

```csharp
@{
    void RenderName(string name)
    {
        <p>Nombre: <strong>@name</strong></p>
    }

    RenderName("Mahatma Gandhi");
    RenderName("Martin Luther King, Jr.");
}
```
El código genera el siguiente HTML:

```html
<p>Nombre: <strong>Mahatma Gandhi</strong></p>
<p>Nombre: <strong>Martin Luther King, Jr.</strong></p>
```

#### Representación Condicional de Atributos
Razor omite automáticamente los atributos que no son necesarios. Si el valor pasado es null o false, el atributo no se representa.

Por ejemplo, considera el siguiente código Razor:

```csharp
<div class="@false">False</div>
<div class="@null">Null</div>
<div class="@("")">Empty</div>
<div class="@("false")">False String</div>
<div class="@("active")">String</div>
<input type="checkbox" checked="@true" name="true" />
<input type="checkbox" checked="@false" name="false" />
<input type="checkbox" checked="@null" name="null" />
```

El marcado Razor anterior genera el siguiente HTML:

```html
<div>False</div>
<div>Null</div>
<div class="">Empty</div>
<div class="false">False String</div>
<div class="active">String</div>
<input type="checkbox" checked="checked" name="true">
<input type="checkbox" name="false">
<input type="checkbox" name="null">
```

### Trabajo con Objetos
La codificación del lado del servidor a menudo involucra objetos.

El objeto "DateTime" es un objeto típico incorporado de ASP.NET, pero los objetos también pueden ser definidos por el usuario para describir una página web, un cuadro de texto, un archivo, un registro de base de datos, etc.

Los objetos pueden tener métodos que pueden realizar. Un registro de base de datos puede tener un método "Guardar", un objeto de imagen puede tener un método "Rotar", un objeto de correo electrónico puede tener un método "Enviar", entre otros.

Los objetos también tienen propiedades que describen sus características. Un registro de base de datos puede tener una propiedad FirstName y una propiedad LastName (entre otras).

El objeto DateTime de ASP.NET tiene una propiedad Now (escrita como DateTime.Now), y la propiedad Now tiene una propiedad Day (escrita como DateTime.Now.Day). El ejemplo a continuación muestra cómo acceder a algunas propiedades del objeto DateTime:

```html
<table border="1">
<tr>
<th width="100px">Nombre</th>
<td width="100px">Valor</td>
</tr>
<tr>
<td>Day</td><td>@DateTime.Now.Day</td>
</tr>
<tr>
<td>Hour</td><td>@DateTime.Now.Hour</td>
</tr>
<tr>
<td>Minute</td><td>@DateTime.Now.Minute</td>
</tr>
<tr>
<td>Second</td><td>@DateTime.Now.Second</td>
</tr>
</td>
</table>
```

### Estructuras de Control
Las estructuras de control son una extensión de los bloques de código. Todos los aspectos de los bloques de código (transición al marcado, C# en línea) también se aplican a las siguientes estructuras:

#### Condicionales ```@if, else if, else, y @switch```
```@if``` controla cuándo se ejecuta el código:

```csharp
@if (value % 2 == 0)
{
    <p>El valor era par.</p>
}
```

```else``` y ```else if``` no requieren el símbolo @:

```csharp
@if (value % 2 == 0)
{
    <p>El valor era par.</p>
}
else if (value