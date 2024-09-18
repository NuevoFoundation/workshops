---
title: "Variáveis e Tipos de Dados"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Para criar uma variável em JavaScript, você tem 3 opções.

1. Usando `var` (que é abreviação de variável) assim:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```

2. Usando `let` assim:
```javascript
let x = 5;
let y = 6;
let z = x + y;
```

3. Usando `const` (que é abreviação de constante) assim:
```javascript
const x = 5;
const y = 6;
```
É importante perceber que uma constante não muda. Isso significa que esses valores ficam fixos ao que foram definidos no início.

Você pode usar `var`, `let` e `const` para armazenar qualquer um dos diferentes tipos de dados em JavaScript. Isso é chamado de _tipos dinâmicos_.

JavaScript tem 8 tipos de dados diferentes:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- Object
- BigInt

Vamos abordar os mais importantes: String, Number, Boolean, Undefined e Object!

## String
Strings podem ser compostas por palavras ou um grupo de letras.

```javascript
// Exemplos de String
let animal = "Elefante";
let alfabeto = "abc";
let nome = "John";
```

## Number
Números podem ser usados para todos os diferentes tipos de números (pequenos e grandes!). Isto é, até você precisar de números REALMENTE grandes, então você precisa de uma variável especial chamada bigint (mas esse é um tópico para outro momento).
  
```javascript
// Exemplos de Número
let idade = 16;
let peso = 7.5;
```

## Boolean
Booleanos representam valores verdadeiros e falsos, como dizer a verdade ou mentir.
  
```javascript
// Exemplos de Boolean
let verdade = true;
let mentira = false;
let x = true;
let y = false;
```

## Undefined
Undefined significa que a variável não tem valor (porque 0 é tecnicamente um valor)!

```javascript
// Exemplo de Undefined
let x = undefined;
```

## Object
Um objeto em JavaScript é um pouco mais complicado. Pode ser um objeto embutido, como um array, datas, mapas, sets, e mais, ou pode ser um array definido pelo usuário, o que significa que pode ser qualquer grupo de dados.

```javascript
const person = {firstName: "John", lastName: "Doe"};

// Objeto Array:
const cars = ["Saab", "Volvo", "BMW"];

// Objeto Date:
const date = new Date("2022-03-25");

// Objeto definido pelo usuário (neste caso primeiros e últimos nomes)
const person = {firstName: "John", lastName: "Doe"};
```

## Quando você não tem certeza de que tipo de variável é...
Use o operador `typeof`! Se você executar o operador `typeof` com uma variável, ele dirá o que é:

```javascript
typeof "Amy" // retorna "string"
typeof 0 // retorna "number"
typeof (3) // retorna "number" (os parênteses não fazem nada)
typeof (3 + 4) // retorna "number"
```