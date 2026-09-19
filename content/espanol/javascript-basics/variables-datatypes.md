---
title: "Variables y Tipos de Datos"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Para crear una variable en JavaScript, tienes 3 opciones.

1. Usando `var` (que es la abreviatura de variable) así:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. Usando `let`, de esta manera:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. Usando `const` (que es la abreviatura de constante) de esta forma:
```javascript
const x = 5;
const y = 6;
```
Es importante entender aquí que una constante no cambia. Esto significa que estos valores quedan fijos a lo que se asignan al principio.

Puedes usar `var`, `let` y `const` para almacenar cualquiera de los diferentes tipos de datos en JavaScript. Esto se llama tener _tipos dinámicos_.

JavaScript tiene 8 tipos de datos diferentes:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

¡Vamos a repasar los más importantes: String, Number, Boolean, Undefined y Object!

## String
Las cadenas pueden estar formadas por palabras o un grupo de letras.

```javascript
// Ejemplos de cadenas
let animal = "Elefante";
let alfabeto = "abc";
let nombre = "Juan";
```

## Number
Los números pueden utilizarse para todos los tipos de cantidades (pequeñas y grandes). Es decir, hasta que necesites números MUY grandes, entonces necesitas una variable especial llamada bigint (pero ese es un tema para otro momento).

```javascript
// Ejemplos de números
let edad = 16;
let peso = 7.5;
```

## Boolean
Los valores booleanos representan verdadero y falso, es decir, decir la verdad o mentir.

```javascript
// Ejemplos de booleanos
let verdad = true;
let mentira = false;
let x = true;
let y = false;
```

## Undefined
Undefined significa que la variable no tiene valor (¡porque 0 técnicamente es un valor!).

```javascript
// Ejemplo de undefined
let x = undefined;
```

## Object
Un objeto en JavaScript es un poco más complicado. Puede ser un objeto incorporado como un array, fechas, mapas, conjuntos y más, o puede ser un objeto definido por el usuario, lo cual significa que puede ser cualquier grupo de datos.

```javascript
const persona = {firstName: "Juan", lastName: "Pérez"};

// Objeto Array:
const autos = ["Saab", "Volvo", "BMW"];

// Objeto de Fecha:
const fecha = new Date("2022-03-25");

// Objeto definido por el usuario (en este caso nombres y apellidos)
const persona = {firstName: "Juan", lastName: "Pérez"};
```

## Cuando no estés seguro sobre qué tipo de variable es...
¡Usa el operador `typeof`! Si ejecutas el operador `typeof` con una variable, te dirá qué tipo es:

```javascript
typeof "Amy" // devuelve "string"
typeof 0 // devuelve "number"
typeof (3) // devuelve "number" (los paréntesis no hacen nada)
typeof (3 + 4) // devuelve "number"
```