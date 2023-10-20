---
title: "Estruturas de Controle"
description: "Apresentando os laços (loops) if-else, for e while em Java."
date: 2021-10-13T00:00:00Z
weight: 5
---

## Tome uma decisão: declaração If

Patrick 🐥 é um pato muito educado que gosta de cumprimentar a todos que encontra com "Bom Dia", "Boa Tarde" ou "Boa Noite" dependendo do horário.

![Sol nascendo rapidamente atrás de um morro](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagem de National Geographic: giphy.com/natgeochannel)</p>

Como aprendemos antes, podemos imprimir essas declarações conforme abaixo:

```java
System.out.println("Bom Dia");   // diga isso entre 0:00 - 11:59
System.out.println("Boa Tarde"); // diga isso entre 12:00 - 19:59
System.out.println("Boa Noite"); // diga isso entre 20:00 - 23:59
```

No entanto, também sabemos que Patrick 🐥 só deveria decidir dizer uma dessas afirmações com base no horário atual.

Em outras palavras, precisamos escrever um código que tome uma decisão sobre o que imprimir com base nas condições da situação (condicionalmente).

Em Java, tomamos uma decisão usando uma **declaração if** ou uma **declaração if...else**. Leia as notas abaixo:

{{% notice note %}}
### Declaração If

```
if(boolean expression){
    Ações a serem tomadas
}
```

Uma **declaração if** segue a estrutura mostrada acima. As ações a serem executadas (instruções) no bloco só serão executadas se a expressão booleana for `true`. Caso contrário, o programa irá pular para a instrução após o bloco se a expressão booleana for `false`.
### Declaração If-Else

```
if(boolean expression){
    Ações a serem tomadas A
}else{
    Ações a serem tomadas B
}
```

Uma **declaração if-else** segue a estrutura mostrada acima. Se a expressão booleana for `true`, o programa executará a(s) `Ação(ões) a serem tomadas A` dentro do bloco `if`. Caso contrário, o programa executa apenas `Ações a serem tomadas B` dentro do bloco `else`.

### Exemplo

```java
boolean likeMusic = true;
if(likeMusic == true) {
    System.out.println("I like Music");
} else {
    System.out.println("I don't like Music");
}
```

O código acima imprimirá a declaração `I like Music` porque a expressão booleana, `likeMusic == true`, é verdadeira.
{{% /notice %}}

Vamos revisitar o exemplo acima e tomar a decisão de Patrick sobre dizer “Bom dia”, “Boa tarde”, “Boa noite”.

Patrick deve dizer "Bom dia" entre 0h e 11h59, "Boa tarde" entre 12h e 19h59 e "Boa noite" entre 20h e 23h59.

1. Temos uma variável `currentHour` (hora atual) que armazena a hora atual.
2. Preencha a `boolean expression A` (expressão booleana A) e a `boolean expression B` (expressão booleana B) corretas para completar o programa.
3. Teste seu resultado atribuindo a variável `currentHour` a números de 0 a 23:

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsIfStatement" target="_blank">Iniciar Replit</a>

## Repetição: For-Loop, While-Loop

Na aula de matemática, a professora de Patrick 🐥 pede à turma que resolva um desafio de matemática, e ele pode precisar de ajuda.

A professora pede que eles encontrem a **soma de 1, 2, 3, ...., 100**. Isso é **1 + 2 + 3 + 4 ... + 99 + 100**?

Embora possamos conectar isso a uma calculadora, isso vai demorar um pouco. Felizmente, em Java, você pode calcular isso facilmente em 3 linhas com a ajuda de um **for loop** ou **while loop**.

{{% notice note %}}
**For loops** e **While loops** são estruturas de controle em Java que permitem executar blocos de código várias vezes.

### While Loop

```
while(boolean expression){
    Ações a serem tomadas
}
```

`Ações a serem tomadas` no bloco while serão executadas enquanto a `expressão booleana` for `true`.

A seguir está um exemplo que imprime de 1 a 10:

```java
int number = 1;
while(number <= 10){
    System.out.println(number);
    number = number + 1;        // número é incrementado em 1
}
```

No while loop acima, o programa imprimirá o valor de `number` (número) e incrementará `number`. Esta etapa será executada enquanto `number <= 10` e, neste caso, o loop termina quando `number` for 11.

**Nota:** Para `while` loops, você deve se lembrar de incrementar a variável condicional, caso contrário você introduzirá um loop infinito em seu programa.

### For Loop

```
for(inicialização; condição de encerramento; instrução de atualização){
    Ações a serem tomadas
}
```

Em um `for` loop, existem três partes no bloco de condição: `inicialização`, `condição de término` e `instrução de atualização`.

1. Ao executar um for loop, o programa executará a parte de `inicialização`. Um exemplo é `int número = 1`.
2. Em seguida, o programa verifica a `condição de término`. Um exemplo é `número <= 10`.
3. Se for `true` (verdadeiro):
    1. execute as `Ações a serem tomadas`
    2. execute a `instrução de atualização` (um exemplo é `number = number + 1`)
4. Repita as etapas 2 e 3.
5. Se a `condição de finalização` for `false` (falso), saia do `for` loop.

A seguir está um exemplo que imprime de 1 a 10:

```java
for(int number = 1; number <= 10; number = number + 1){
    System.out.println(number);
}
```

{{% /notice %}}

Depois de aprender sobre o for loop e o while loop, vamos ver como podemos ajudar Patrick 🐥 a calcular **1 + 2 + 3 + 4 ... + 99 + 100** facilmente?

Vamos tentar fazer isso em um while loop:

1. Temos uma variável chamada `total` que rastreia a soma total da adição que obtivemos até agora.
2. Temos uma variável chamada `num` que rastreia o próximo número a ser adicionado ao `total`.
3. Escreva a `boolean expression` (expressão booleana) apropriada e escreva o `while` loop.

Seguindo essas etapas, obteremos um loop while como este:

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Resposta calculada em um while loop: " + total);
```

Faça isso abaixo clicando em `Run` e escreva uma versão do for loop que calcule a mesma coisa! Você deve obter a mesma resposta!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsForWhile" target="_blank">Iniciar Replit</a>
