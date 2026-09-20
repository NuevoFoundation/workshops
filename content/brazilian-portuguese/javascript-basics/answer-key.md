---
title: "JavaScript: Básico - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um guia de referência para professores no workshop de conceitos básicos de JavaScript. Ele consolida todos os exemplos de código com suas saídas esperadas no console para que você tenha uma única página para consulta durante as aulas. Os alunos utilizam [playcode.io](https://playcode.io) como ambiente de codificação.
{{% /notice %}}

## Lista de Verificação para Configuração do Ambiente

Antes de começar, os alunos devem:
1. Abrir [playcode.io](https://playcode.io).
2. Fechar todos os arquivos, exceto **script.js**.
3. Excluir tudo no arquivo script.js.
4. Desativar o modo **live** (clique no botão "live" uma vez).

## Laços While

### Contador Básico (executa 8 vezes)

```javascript
let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}
```

Saída:
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
**Pergunta comum dos alunos:** "Por que imprime de 0 a 7 ao invés de 1 a 8?"

Isso acontece porque `i` começa em 0 e o `i++` é executado após o `console.log`. Se quiser de 1 a 8, inicie com `let i = 1` e utilize `i <= 8`.
{{% /notice %}}

### Conceito chave: `i++`

`i++` é uma abreviação para `i = i + 1`. Ele incrementa o contador em 1 a cada loop. Sem este comando, o loop será infinito.

## Variáveis e Tipos de Dados

### Três formas de declarar variáveis

```javascript
var x = 5;    // forma antiga (escopo de função)
let y = 6;    // forma moderna (escopo de bloco, pode mudar)
const z = 11; // constante (não pode mudar após ser definida)
```

Saída (se você registrá-los no console):
```javascript
console.log(x); // 5
console.log(y); // 6
console.log(z); // 11
```

### Exemplos de strings

```javascript
let animal = "Elefante";
let alfabeto = "abc";
let nome = "João";
console.log(animal);
console.log(typeof animal);
```

Saída:
```
Elefante
string
```

### Exemplos de números

```javascript
let idade = 16;
let peso = 7.5;
console.log(idade);
console.log(peso);
console.log(typeof idade);
```

Saída:
```
16
7.5
number
```

### Exemplos de booleanos

```javascript
let verdade = true;
let mentira = false;
console.log(verdade);
console.log(mentira);
console.log(typeof verdade);
```

Saída:
```
true
false
boolean
```

### Exemplo de indefinido

```javascript
let x = undefined;
console.log(x);
console.log(typeof x);
```

Saída:
```
undefined
undefined
```

### Exemplos de objetos

```javascript
const pessoa = {primeiroNome: "João", sobrenome: "Silva"};
const carros = ["Saab", "Volvo", "BMW"];
const data = new Date("2022-03-25");

console.log(pessoa);
console.log(carros);
console.log(typeof pessoa);
```

Saída:
```
{primeiroNome: "João", sobrenome: "Silva"}
["Saab", "Volvo", "BMW"]
object
```

### Operador `typeof`

```javascript
console.log(typeof "Ana");    // "string"
console.log(typeof 0);        // "number"
console.log(typeof (3));      // "number"
console.log(typeof (3 + 4));  // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof [1, 2]);   // "object"
```

{{% notice tip %}}
**Pergunta comum dos alunos:** "Por que `typeof` de um array é `object` e não `array`?"

No JavaScript, arrays são um tipo especial de objeto. Para verificar se algo é um array, use `Array.isArray([1, 2])`, que retorna `true`.
{{% /notice %}}

## Arrays

### Criando arrays

```javascript
// As três formas criam o mesmo array:
let frutas1 = new Array("Maçã", "Laranja", "Manga");
let frutas2 = Array("Maçã", "Laranja", "Manga");
let frutas3 = ["Maçã", "Laranja", "Manga"];

console.log(frutas3);
console.log(frutas3.length);
```

Saída:
```
["Maçã", "Laranja", "Manga"]
3
```

### Propriedades do Array

#### Acessando por índice

```javascript
let frutas = ["Maçã", "Laranja", "Manga"];
console.log(frutas[0]); // primeiro elemento
console.log(frutas[1]); // segundo elemento
console.log(frutas[2]); // terceiro elemento
```

Saída:
```
Maçã
Laranja
Manga
```

{{% notice tip %}}
**Pergunta comum dos alunos:** "Por que o primeiro item começa em 0?"

Os índices dos arrays começam em 0 na maioria das linguagens de programação. Então `frutas[0]` é o primeiro item, `frutas[1]` é o segundo, e assim por diante.
{{% /notice %}}

#### Modificando por índice

```javascript
let frutas = ["Maçã", "Laranja", "Manga"];
frutas[1] = "Banana";
console.log(frutas);
```

Saída:
```
["Maçã", "Banana", "Manga"]
```

#### Propriedade length

```javascript
let frutas = ["Maçã", "Laranja", "Manga"];
console.log(frutas.length);
```

Saída:
```
3
```

#### Propriedade constructor

```javascript
let frutas = ["Maçã", "Laranja", "Manga"];
console.log(frutas.constructor);
```

Saída:
```
function Array() { [native code] }
```

### Iteração com Array (forEach)

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(item) {
  console.log(item);
});
```

Saída:
```
1
2
3
4
5
```

### Métodos de Arrays

#### concat() -