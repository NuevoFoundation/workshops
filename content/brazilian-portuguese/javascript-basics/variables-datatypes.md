---
title: "Variáveis e Tipos de Dados"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 4
---

Para criar uma variável em JavaScript, você tem 3 opções.

1. Usando `var` (que é a abreviação de "variable" ou variável) assim:
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

3. Usando `const` (que é a abreviação de "constant" ou constante) assim:
```javascript
const x = 5;
const y = 6;
```
É importante entender aqui que uma constante não pode ser alterada. Isso significa que esses valores permanecem fixos ao que foram definidos inicialmente.

Você pode usar `var`, `let` e `const` para armazenar qualquer um dos diferentes tipos de dados em JavaScript. Isso é chamado de ter _tipos dinâmicos_.

JavaScript possui 8 tipos de dados diferentes:
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
let nome = "João";
```

## Number
Números podem ser usados para todos os tipos de valores numéricos (pequenos e grandes!). Isso, até você precisar de números MUUUUITO grandes; nesse caso, você precisará de uma variável especial chamada bigint (mas isso é assunto para outro momento).
  
```javascript
// Exemplos de Number
let idade = 16;
let peso = 7.5;
```

## Boolean
Booleans representam valores de verdadeiro ou falso, como dizer a verdade ou contar uma mentira.
  
```javascript
// Exemplos de Boolean
let verdade = true;
let mentira = false;
let x = true;
let y = false;
```

## Undefined
Undefined significa que a variável não tem valor (porque 0, tecnicamente, é um valor!).

```javascript
// Exemplo de Undefined
let x = undefined;
```

## Object
Um objeto em JavaScript é um pouco mais complicado. Ele pode ser um objeto embutido, como arrays, datas, mapas, conjuntos e outros, ou pode ser um objeto definido pelo usuário, o que significa que pode ser qualquer grupo de dados.

```javascript
const pessoa = {primeiroNome:"João", sobrenome:"Silva"};

// Objeto do tipo Array:
const carros = ["Saab", "Volvo", "BMW"];

// Objeto do tipo Date:
const data = new Date("2022-03-25");

// Objeto definido pelo usuário (neste caso, primeiro e último nome)
const pessoa = {primeiroNome:"João", sobrenome:"Silva"};
```

## Quando você não sabe qual tipo de variável é...
Use o operador `typeof`! Se você executar o operador `typeof` com uma variável, ele dirá qual é o tipo dela:

```javascript
typeof "Ana" // retorna "string"
typeof 0 // retorna "number"
typeof (3) // retorna "number" (os parênteses não fazem diferença)
typeof (3 + 4) // retorna "number"
```