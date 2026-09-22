---
title: "JavaScript: Conceptos básicos - Soluciones"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una guía de referencia para los profesores del taller de Conceptos Básicos de JavaScript. Consolida todos los ejemplos de código con sus respectivas salidas esperadas para que tengas una sola página de referencia durante la clase. Los estudiantes utilizan [playcode.io](https://playcode.io) como su entorno de programación.
{{% /notice %}}

## Lista de verificación para la configuración del entorno

Antes de comenzar, los estudiantes deben:
1. Abrir [playcode.io](https://playcode.io)
2. Cerrar todos los archivos excepto **script.js**
3. Eliminar todo en script.js
4. Apagar el modo **live** (haz clic una vez en el botón live)

## Bucles While

### Contador básico (se ejecuta 8 veces)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Salida:
```
0
1
2
3
4
5
6
7
```

{{% notice tip %}}
**Pregunta común de los estudiantes:** "¿Por qué imprime 0-7 en lugar de 1-8?"

Porque `i` comienza en 0 y `i++` se ejecuta después del `console.log`. Si deseas imprimir del 1 al 8, empieza con `let i = 1` y usa `i <= 8`.
{{% /notice %}}

### Concepto clave: `i++`

`i++` es una abreviatura de `i = i + 1`. Incrementa el contador en 1 en cada iteración. Sin él, el bucle se ejecutaría para siempre (bucle infinito).

## Variables y Tipos de Datos

### Tres formas de declarar variables

```javascript
var x = 5;    // forma antigua (alcance de función)
let y = 6;    // forma moderna (alcance de bloque, puede cambiar)
const z = 11; // constante (no puede cambiar después de ser asignada)
```

Salida (si las registras en la consola):
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### Ejemplos con cadenas (strings)

```javascript
let animal = "Elefante";
let alfabeto = "abc";
let nombre = "Juan";
console.log(animal);
console.log(typeof animal);
```

Salida:
```
Elefante
string
```

### Ejemplos con números

```javascript
let edad = 16;
let peso = 7.5;
console.log(edad);
console.log(peso);
console.log(typeof edad);
```

Salida:
```
16
7.5
number
```

### Ejemplos con booleanos

```javascript
let verdad = true;
let mentira = false;
console.log(verdad);
console.log(mentira);
console.log(typeof verdad);
```

Salida:
```
true
false
boolean
```

### Ejemplo con undefined

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Salida:
```
undefined
undefined
```

### Ejemplos con objetos

```javascript
const persona = {firstName: "Juan", lastName: "Pérez"};
const autos = ["Saab", "Volvo", "BMW"];
const fecha = new Date("2022-03-25");

console.log(persona);
console.log(autos);
console.log(typeof persona);
```

Salida:
```
{firstName: "Juan", lastName: "Pérez"}
["Saab", "Volvo", "BMW"]
object
```

### El operador `typeof`

```javascript
console.log(typeof "Amy");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**Pregunta común de los estudiantes:** "¿Por qué el typeof de un array es `object` y no `array`?"

En JavaScript, los arrays son un tipo especial de objeto. Para comprobar si algo es un array, usa `Array.isArray([1, 2])`, que devuelve `true`.
{{% /notice %}}

## Arrays

### Creando arrays

```javascript
// Las tres formas crean el mismo array:
let frutas1 = new Array("Manzana", "Naranja", "Mango");
let frutas2 = Array("Manzana", "Naranja", "Mango");
let frutas3 = ["Manzana", "Naranja", "Mango"];

console.log(frutas3);
console.log(frutas3.length);
```

Salida:
```
["Manzana", "Naranja", "Mango"]
3
```

### Propiedades de los arrays

#### Accediendo por índice

```javascript
let frutas = ["Manzana", "Naranja", "Mango"];
console.log(frutas[0]); // primer elemento
console.log(frutas[1]); // segundo elemento
console.log(frutas[2]); // tercer elemento
```

Salida:
```
Manzana
Naranja
Mango
```

{{% notice tip %}}
**Pregunta común de los estudiantes:** "¿Por qué el primer elemento comienza en 0?"

Los índices de los arrays comienzan en 0 en la mayoría de los lenguajes de programación. Por lo tanto, `frutas[0]` es el primer elemento, `frutas[1]` es el segundo, y así sucesivamente.
{{% /notice %}}

#### Modificando un elemento por índice

```javascript
let frutas = ["Manzana", "Naranja", "Mango"];
frutas[1] = "Plátano";
console.log(frutas);
```

Salida:
```
["Manzana", "Plátano", "Mango"]
```

#### Propiedad length

```javascript
let frutas = ["Manzana", "Naranja", "Mango"];
console.log(frutas.length);
```

Salida:
```
3
```

#### Propiedad constructor

```javascript
let frutas = ["Manzana", "Naranja", "Mango"];
console.log(frutas.constructor);
```

Salida:
```
function Array() { [native code] }
```

### Iteración con Arrays (forEach)

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(item) {
  console.log(item);
});
```

Salida:
```
1
2
3
4
5
```

### Métodos de Arrays

#### concat() - unir arrays

```javascript
let arr1 = ["A", "B"];
let arr2