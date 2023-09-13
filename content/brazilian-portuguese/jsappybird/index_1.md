---
title: "Javascript: JSappy Bird"
description: "Aprenda sobre variáveis, funções e condicionais enquanto construímos um jogo parecido com o Flappy Bird."
date: 2023-09-11T13:24:17-07:00
difficulty: "Iniciante/Intermediário"
draft: true
hidden: true
---

![alt text](resources/_gen/images/flappy.png "JSappyBird")

1. **Baixe os arquivos necessários.** <link_here>

O modelo contém os seguintes arquivos:

- phaser.min.js, a estrutura framework v2.4.3.
- index.html, onde o jogo será exibido.
- main.js, o arquivo onde vamos escrever nosso código.
- assets/, uma pasta com 2 imagens.
- Atividate 1.js
- Atividate 2.js
- Atividate 3.js

O arquivo `index.html` é a página principal do nosso jogo do passarinho e também usa nossos dois arquivos Javascript (.js). O arquivo `phaser.min.js` é a estrutura de jogo que usaremos para fazer jogos no navegador. O outro arquivo é `main.js`, que conterá toda a nossa lógica em Javascript. Os arquivos de atividades vão te ajudar a fazer seu jogo funcionar. As partes que você precisará adicionar estão marcadas com 🐤🐤🐤.

Divirta-se!

### Variáveis

Variáveis são como etiquetas que damos a valores como textos, números e valores verdadeiros/falsos. Usamos variáveis para guardar informações para que o computador lembre-se delas. Criamos variáveis usando a palavra `var` seguida do nome da variável. Depois, você pode dar um valor a essa variável usando o simbolo `=` e o valor desejado.

Por exemplo:

```js
var mundo = "Olá Mundo";
var x = 88;
var feliz = true;
```

Você também pode mudar o valor de uma variável assim:

```js
var x = 4;
x = 10;
```

Nesse exemplo, a variável `x` primeiro recebeu o valor 4, depois mudou para 10.

O código abaixo cria um novo objeto de jogo `Phaser` e o guarda em uma variável para usá-lo no nosso jogo.

```js
var jogo = new Phaser.Game(800, 600);
```

## Atividade 1: Vamos usar os valores verdadeiro/falso e suas expressões

### Condicionais

Podemos usar o `if` (se) para executar um código apenas se certas condições forem atendidas.

Por exemplo:

```js
if (estaChovendo == true) {
  pegarGuardaChuva = true;
}
```

Dentro dos parêntesis - `()` ao lado do `if`, você deve colocar uma _expressão de verdadeiro/falso_. Os valores verdadeiros/falsos são declarações representadas pelo Ingles `true` (verdadeiro) ou `false` (falso). Podemos usar isso no nosso commando `if` ou se. Se a expressão for verdadeira - **true**, o código dentro das chaves `{ }` é executado.

Também podemos usar expressões de verdadeiro/falso para verificar se um número está em um intervalo específico:

![Operadores de Comparação](https://imgur.com/F9gGHiI.png)

Você também pode juntar **expressões de verdadeiro/falso** usando `&&` para `E` e `||` para `OU`.

![alt text](resources/_gen/images/statements.png "declarações")

`&&` exige que ambas as _expressões de verdadeiro/falso_ sejam verdadeiras, enquanto `||` exige que apenas uma das duas sejam verdadeiras.

Por exemplo:

```js
// retorna verdadeiro pois 5 é menor que 8 e 9 não é igual a 10.

(1 < 100 &&
  (5 != 10)(
    // retorna verdadeiro pois pelo menos uma das expressões resulta em verdadeiro
    5 == 5
  )) ||
  10 > 20;
```

#### Abra `Atividade 1.js`. Lá você vai adicionar uma condição para checar se o passarinho está entre o topo (y = 0) e o fundo da tela (y = 490)!

## Atividade 2: Agora, vamos adicionar uma função para fazer o passarinho pular

### Funções

**Uma função é como uma tarefa.** Algumas tarefas são curtas e simples como somar `1 + 1` ou dizer `‘Olá Mundo!’`. Funções podem ser usadas para executar as mesmas tarefas várias vezes. Neste caso, vamos escrever uma função para fazer o passarinho pular!

“Pular” neste jogo é apenas mudar a posição _y do passarinho_.

#### Abra a `Activity 2.js` onde vamos adicionar uma função chamada `pular`.\*\*

Podemos fazer isso com este comando dentro da função pular ou `jump`:

```js
bird.body.velocity.y = -300;
```

Você pode ajustar esse número dependendo de quão alto você quer que o passarinho pule! Experimente mudar o número e veja como o passarinho pula quando você pressiona a barra de espaço.

Agora o seu passarinho pode voar pelo ar!

## Atividade 3: Vamos adicionar obstáculos

Atualmente, seu passarinho não tem nada para desviar na tela, o que parece fácil demais! Podemos usar código para tornar o jogo mais difícil adicionando objetos para desviar! Para fazer isso, você precisará usar condicionais e loops (laços). Já falamos sobre condicionais, então agora vamos falar sobre loops.

### Loops

Loops são usados para executar um bloco de código várias vezes. Há muitos tipos de loops, mas o que você usará neste projeto é o loop `for`.

Os loops `for` têm este formato:

```js
for (afirmação 1; afirmação 2; afirmação 3) {
  // bloco de código a ser executado
}
```

- A afirmação 1 é executada uma vez antes de executar o código dentro das chaves `{ }`.
- A afirmação 2 define a condição em que o loop vai parar de rodar.
- A afirmação 3 é executada a cada iteração do loop.

Por exemplo:

```js
var soma = 0;
for (var i = 0; i < 7; i += 1) {
  soma = soma + 1;
}
```

Você notará que criamos uma variável chamada `i` na primeira instrução do loop for. Essa variável é usada para acompanhar
por quanto tempo o loop deve ser executado. A cada passagem pelo loop, verificamos se `i` ainda é menor que 7 e, se for, executamos o código
dentro das chaves e depois adicionamos 1 ao `i`.

Esse processo se repete até que `i < 7` seja falso.

Também podemos usar `i` no código dentro das chaves:

```js
var soma = 0;
for (var i = 0; i < 7; i += 1) {
  soma = i + 1;
}
```

Este código realiza a mesma operação, mas usa `i` dentro das chaves.

Você pode ver um loop `for` em ação aqui: <https://codepen.io/nayomitchell/pen/JgNoQe>! Tente alterar os números nas diferentes declarações.
Você consegue descobrir como fazer o loop **contar regressivamente**?

---

Agora, de volta ao nosso jogo. A tela pode comportar 8 blocos, então precisamos de um loop `for` que execute 8 vezes. Em `Activity 3.js`, você precisará adicionar um loop "for" ao redor do código que adiciona um obstáculo na tela.

Temos outro problema agora! O jogo está muito difícil, pois não há maneira do seu pássaro passar!
Vamos adicionar uma brecha na parede de obstáculos para o seu pássaro voar por ela!

---

Acima do código que você acabou de editar, existe uma variável chamada `hole`. Esta variável é um número entre 1 e 6, que representa onde a abertura deve estar na parede.
O que queremos fazer é pular a criação do obstáculo **`se`** o valor de `i` no loop for **o mesmo** que `hole`. Podemos usar uma condicional para não criar um bloco na parede, deixando assim uma abertura por onde o passarinho possa passar!

Atualmente, a parede é formada adicionando um cano na tela a cada execução do loop. Experimente usar uma condicional em torno de `addOnePipe` no loop, de forma que `addOnePipe` seja executado apenas quando `i` não for igual ao valor de `hole`.

Depois de completar estas atividades, seu jogo deve estar funcionando! Veja qual é a sua melhor pontuação!
