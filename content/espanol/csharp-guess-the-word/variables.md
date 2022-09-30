---
title: "Variables"
draft: false
weight: 10
---

## Variables

Variables simplemente son los nombres que le damos a ciertas cosas, como strings, números, y booleans. Usamos los variables para archivar información que la computadora puede encontrar.

Esto es cómo declarar un variable que se llama `str`. Digamos que `str` contiene `"Hello World"`. ¿Puedes describir qué significan las siguientes variables? 

```csharp
var str = "Hello World";
var x = 88;
var happy = true;
```

Presiona **run**. Nota que los variables no se impriman a la consola. Si no, el variable simplemente representa la información archivada a la memoria de la computadora usando el variable, como un string, número, o boolean.

![alt text height="600px" width="70%"](../media/variables-intro.png "Variables introduction")

Podemos usar estos variables en otras expresiones. Por ejemplo, el siguiente código imprimiría  `Hello Nuevo Foundation` a la consola:

```csharp
var str1 = "Hello";
var str2 = "Nuevo Foundation";
Console.WriteLine(str1 + " " + str2);
```

![alt text height="600px" width="70%"](../media/variables-strings.png "Variables with strings")

Puedes cambiar el contenido de un variable en cualquier momento usando el = operador otra vez. Si estás cambiando el contenido de un variable, no necesitas usar var otra vez. En el siguiente ejemplo, vamos a imprimir `Hola` en vez de `Hello`.

```csharp
var str = "Hello";
str = "Hola";
Console.WriteLine(str);
```

![alt text height="600px" width="70%"](../media/variables-replace.png "Variables replacing values")

Aquí tenemos otro ejemplo: `10` se va a imprimir en vez de `9`.

```csharp
var num = 9;
num = num + 1;
Console.WriteLine(num);
```

![alt text height="600px" width="70%"](../media/variables-numbers.png "Variables with numbers")

Nota que NO PUEDES reemplazar un variable de string con un número o un boolean, o cualquier otra combinación. El siguiente código no funcionará:

```csharp
var happy = "Hello";
happy = 9;
```

![alt text height="600px" width="70%"](../media/variables-invalid.png "Variables invalid")

Otra manera de declarar variables es reemplazando `var` con el tipo  (`string`, `int`, `bool`) de variable que quieres crear. Declarando el tipo de variable explícitamente, evitas el problema que vimos arriba. Por ejemplo:

```csharp
string str = "Hello World";
int x = 88;
bool happy = true;
```

Nota que  `var`, `string`, `int`, or `bool` son palabras claves in C#, entonces no puedes crear variables con esos nombres.

{{% notice tip %}}

## Trabajando junt@s

Creemos dos variables nuevas:

- Un variable llamado comp que contiene el string `"Computer"`.
- Un variable llamado five que contiene el número `5`.

Ahora, usamos estos variables para imprimir lo siguiente a la consola. 

**_Consejo:_** vamos a usar el `+` operador para combinar strings, y también para sumir números.  

```
Computer
5
ComputerComputer
10
ComputerComputerComputer
15
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-blank" target="_blank">Lanza Replit</a>

{{% /notice %}}
