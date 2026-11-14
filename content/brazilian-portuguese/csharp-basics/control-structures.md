---
title: "Estruturas de Controle"
description: "Introdução a if-else, for e while loops em C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Tomando uma Decisão: If-Statement

Patrick 🐥 é um patinho muito educado que gosta de cumprimentar todo mundo que encontra com "Good Morning", "Good Afternoon" ou "Good Night", dependendo da hora atual.

![Sol nascendo rapidamente sobre uma montanha](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagem por National Geographic: giphy.com/natgeochannel)</p>

Como aprendemos antes, podemos imprimir essas mensagens assim:

`Console.WriteLine("Good Morning");   // diga isso entre 0:00 - 11:59`  
`Console.WriteLine("Good Afternoon"); // diga isso entre 12:00 - 19:59`  
`Console.WriteLine("Good Night");     // diga isso entre 20:00 - 23:59`

No entanto, também sabemos que Patrick 🐥 deve decidir dizer apenas uma dessas mensagens com base na hora atual.

Ou seja, precisamos escrever um código que tome uma decisão sobre o que imprimir com base na situação (condicionalmente).

Em C#, tomamos decisões usando um **if statement** ou um **if...else statement**. Leia as notas abaixo:

{{% notice note %}}
### If Statement

`if(boolean expression){ Action(s) to Take }`

Um **if statement** segue a estrutura mostrada acima. As ações dentro do bloco serão executadas apenas se a expressão booleana for `true`. Caso contrário, o programa pula para a próxima instrução após o bloco se a expressão booleana for `false`.

### If-Else Statement

`if(boolean expression){ Action(s) to Take A }else{ Action(s) to Take B }`

Um **if-else statement** segue a estrutura mostrada acima. Se a expressão booleana for `true`, o programa executa `Action(s) to Take A` dentro do bloco `if`. Caso contrário, o programa executa `Action(s) to Take B` dentro do bloco `else`.

### Exemplo

`bool likeMusic = true; if(likeMusic == true) { Console.WriteLine("I like Music"); } else { Console.WriteLine("I don't like Music"); }`

O código acima imprime `I like Music` porque a expressão booleana `likeMusic == true` é verdadeira.
{{% /notice %}}

Vamos revisar o exemplo de cumprimento acima e decidir se Patrick deve dizer "Good Morning", "Good Afternoon" ou "Good Night".

Patrick deve dizer "Good Morning" entre 0:00 - 11:59, "Good Afternoon" entre 12:00 - 19:59 e "Good Night" entre 20:00 - 23:59.

1. Temos uma variável `currentHour` que armazena a hora atual.  
2. Complete as expressões booleanas `A` e `B` para finalizar o programa.  
3. Teste seu resultado atribuindo valores de 0 a 23 para `currentHour`:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" title="Estruturas de Controle - .NET Fiddle editor 1" frameborder="0"></iframe>

## Repetindo: For-Loop, While-Loop

Na aula de matemática, a professora do Patrick 🐥 pediu à turma para resolver um desafio de matemática, e ele pode precisar de ajuda.

A professora pediu para encontrar a **soma de 1, 2, 3, ..., 100**. Ou seja, quanto é **1 + 2 + 3 + 4 ... + 99 + 100**?

Embora possamos usar uma calculadora, isso demoraria. Felizmente, em C#, você pode calcular isso em apenas 3 linhas com um **for loop** ou **while loop**.

{{% notice note %}}
**For loops** e **While loops** são estruturas de controle em C# que permitem executar blocos de código várias vezes.

### While Loop

`while(boolean expression){ Action(s) to Take }`

As ações dentro do bloco while serão executadas enquanto a `boolean expression` for `true`.

Exemplo que imprime de 1 a 10:

`int number = 1; while(number <= 10){ Console.WriteLine(number); number = number + 1; }`

No loop acima, o programa imprime o valor de `number` e incrementa `number`. Esse passo é repetido enquanto `number <= 10`, e o loop termina quando `number` é 11.

**Nota:** Em loops `while`, é necessário lembrar de incrementar a variável condicional, ou você criará um loop infinito.

### For Loop

`for(initialization; termination condition; update statement){ Action(s) to Take }`

Em um `for` loop, existem três partes no bloco condicional: `initialization`, `termination condition` e `update statement`.

1. Ao executar o for loop, o programa executa a `initialization`. Exemplo: `int number = 1`.  
2. Em seguida, verifica a `termination condition`. Exemplo: `number <= 10`.  
3. Se for `true`:  
   1. executa `Action(s) to Take`  
   2. executa o `update statement` (exemplo: `number = number + 1`)  
4. Repete os passos 2 e 3.  
5. Se a `termination condition` for `false`, sai do loop.

Exemplo que imprime de 1 a 10:

`for(int number = 1; number <= 10; number = number + 1){ Console.WriteLine(number); }`
{{% /notice %}}

Depois de aprender sobre `for` e `while`, vamos ajudar Patrick 🐥 a calcular **1 + 2 + 3 + 4 ... + 99 + 100** facilmente?

Vamos fazer isso com um `while loop`:

1. Temos uma variável `total` que armazena a soma acumulada.  
2. Temos uma variável `num` que guarda o próximo número a ser somado a `total`.  
3. Escreva a expressão booleana apropriada e complete o while loop.

O código ficará assim:

`int total = 0; int num = 1; while(num <= 100){ total = total + num; num = num + 1; } Console.WriteLine("Answer calculated in a while loop: " + total);`

Teste esse código clicando em `Run` e crie uma versão com `for loop` que calcule a mesma coisa! O resultado deve ser o mesmo!

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ySFwK0" title="Estruturas de Controle - .NET Fiddle editor 2" frameborder="0"></iframe>
