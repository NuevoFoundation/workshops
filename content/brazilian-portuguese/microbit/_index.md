---
title: "micro:bit: Programando com Mini Computadores"
description: "Usando MicroBits para aprender JavaScript e hardware"
date: 2019-07-23T14:54:53-07:00
download: "https://github.com/NuevoFoundation/workshops/tree/master/content/microbit"
draft: true
hidden: true
icon: "fas fa-microchip"
language: "blocks"
topics: ["hardware"]
prereq: "Nenhum"
difficulties: ["iniciante", "intermediário"]
---

### Uma introdução ao JavaScript e hardware usando [MicroBits](https://microbit.org/guide/)

![alt text width="5%"](https://media.giphy.com/media/1nOL7s74KmSk0zDlDD/giphy.gif "Logo de Nuevo - Nuvi")

## O Básico

## O que é JavaScript?

JavaScript é uma das muitas linguagens de programação e é conhecida como a linguagem de programação para a web. É usada para controlar o comportamento de sites, como cliques em botões, janelas pop-up, fluxos de dados e muitas outras funções.

## Variáveis

Variáveis são contêineres no seu código que podem armazenar um número, palavra ou outras informações. Essas informações podem ser usadas e alteradas chamando a variável mais tarde ao longo do seu programa. Isso significa que você está pedindo ao seu programa para acessar as informações armazenadas.

Com algumas exceções, as variáveis podem ter qualquer nome que contenha letras, dígitos, sublinhados e sinais de dólar. MAS, de qualquer forma, elas não podem conter espaços e devem sempre começar com uma letra.

As variáveis podem armazenar diferentes tipos de dados, vamos explorar os mais básicos.

## Os Tipos de Dados

### Números Inteiros

Números inteiros são quaisquer números que não contêm decimais. Por exemplo, números inteiros são números inteiros como `3`, `100`, `6000`, `-3` e assim por diante!

```javascript
// Isto é um comentário, usado para descrever o que seu código faz
// Abaixo estão diferentes exemplos de variáveis

// Exemplos de variáveis inteiras (números sem casas decimais):

var a = 5;
var b = 10;
var c = 15;
```

### Decimais

Decimais são números que suportam casas decimais. Exemplos incluem números como `0.5`, `1.5` e assim por diante.

```javascript
// Exemplos de variáveis decimais (números com decimais):

var x = 0.5;
var y = 1.5;
var z = 2.0;
```

### Strings

Strings são o que os programadores decidiram chamar de palavras. Se ajuda a lembrar que strings são palavras, pense nelas como uma "corda" de caracteres. Strings podem ser qualquer coisa como seu nome ou o nome do seu animal de estimação favorito.

Strings são cercadas por "aspas".

```javascript
// Exemplos de variáveis string (uma ou mais palavras, ou uma "corda" de caracteres):
// os valores das strings são cercados por "aspas"

var empresa = "Minha empresa";
var curso = "Programando com Micro:Bits!";
var mensagem = "Programar é muito divertido!";
```

### Caracteres

Caracteres são letras únicas. Eles são cercados por 'aspas simples'.

```javascript
// Exemplo de variável caractere (uma única letra):
// os valores dos caracteres são cercados por 'aspas simples'

var letra = 'A';
```

### Valor Booleano

Às vezes, os programadores querem verificar se certas condições são verdadeiras ou falsas. Essas informações são armazenadas em um tipo de dado booleano.

Se você está curioso sobre o motivo de serem chamados Booleanos, foi um cara chamado George Boole que os criou.

```javascript
// Exemplos de variáveis Booleanas (verdadeiro ou falso)

var porcosVoam = false;
var programarÉLegal = true;
```

## Operações Matemáticas

Ah sim, nossa parte favorita: computadores são essencialmente calculadoras, então é praticamente dado que você pode fazer matemática com eles. Aqui estão exemplos das operações matemáticas que você pode usar em seus programas JavaScript.

### Adição

```javascript
var a = 13;
var b = 10;
var c = a + b;     // c = 25
c += a;            // c = 40
c++;               // c = 41
```

### Subtração

```javascript
var a = 15;
var b = 10;
var c = a - b;     // c = 5
c -= a;            // c = -10
c--;               // c = -11
```

### Multiplicação

```javascript
var a = 2;
var b = 5;
var c = a * b;     // c = 10
c *= a;            // c = 20
```

### Divisão

```javascript
var a = 20;
var b = 2;
var c = a / b;     // c = 10
c /= a;            // c = 5
```

### Módulo

Ah sim, a operação que parece assustadora, mas na verdade não é. A operação módulo apenas dá o resto da divisão. Por exemplo, `10 % 2 = 0` porque quando você divide 10 por 2, não sobra nenhum resto.

```javascript
var d = 10 % 2;   // d = 0
var e = 5 % 2;    // e = 1
```

### Comandos para Exibir Informações

Às vezes você quer que seu computador exiba algum texto ou os dados armazenados nas suas variáveis. Para isso usamos declarações de `print`.

```javascript
console.log("Isso aparecerá no console, mas não na página web");
alert("Isso será exibido como uma janela pop-up");

var respostaUsuario = prompt("Isso aparecerá como uma janela pop-up, com uma caixa de texto para o usuário digitar");
```

### Condicionais e Operadores Lógicos

Condicionais, mais comumente conhecidos como declarações `if`, são usados para escolher qual código você deseja executar dependendo do valor das suas variáveis ou outras condições.

```javascript
// Condicionais
if (true) {
  // Esta seção de código será executada
}
if (false) {
  // Esta seção de código não será executada
}

var idade = 10;
if (idade < 18) {
  // Caso a idade seja menor do que 18
  print("Você ainda não é adulto! :( ");
}
```

### Loops

E por último, mas não menos importante, temos algo chamado loops. Eles permitem que você repita partes do seu código até que uma certa condição seja atendida.

A função `alert()` usada nos exemplos de código abaixo simplesmente exibe um pop-up mostrando o valor do parâ