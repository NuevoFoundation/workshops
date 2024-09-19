---
title: "Estruturas de Controle"
description: "Introduzir if-else, for, e while loops em C#."
date: 2024-09-16T00:00:00Z
weight: 6
---

## Tomar Decisão: If-Statement

Patrick 🐥 é um pato muito educado que gosta de cumprimentar todos com "Bom Dia", "Boa Tarde" ou "Boa Noite" dependendo do horário atual.

![Sol nascendo rapidamente sobre uma montanha](https://media.giphy.com/media/hpWrLS1RDBd5pwkgjy/giphy.gif)
<p style="text-align: center;">(imagem por National Geographic: giphy.com/natgeochannel)</p>

Como aprendemos antes, podemos imprimir essas declarações da seguinte forma:

```C#
Console.WriteLine("Bom Dia");   // dizer isso entre 0:00 - 11:59
Console.WriteLine("Boa Tarde"); // dizer isso entre 12:00 - 19:59
Console.WriteLine("Boa Noite"); // dizer isso entre 20:00 - 23:59
```

No entanto, também sabemos que Patrick 🐥 deve decidir dizer uma dessas declarações com base no horário atual.

Em outras palavras, precisamos escrever um código que tome uma decisão sobre o que imprimir com base nas condições da situação (condicionalmente).

Em C#, tomamos uma decisão usando uma **if statement** ou uma **if...else statement**. Leia as notas abaixo:

{{% notice note %}}
### If Statement

```
if(expressão booleana){
    Ação(ões) a Tomar
}
```

Uma **if statement** segue a estrutura mostrada acima. As ações a serem tomadas (instruções) no bloco só serão executadas se a expressão booleana for `true`. Caso contrário, o programa pulará para a instrução após o bloco se a expressão booleana for `false`.

### If-Else Statement

```
if(expressão booleana){
    Ação(ões) a Tomar A
}else{
    Ação(ões) a Tomar B
}
```

Uma **if-else statement** segue a estrutura mostrada acima. Se a expressão booleana for `true`, o programa executará a `Ação(ões) a Tomar A` dentro do bloco `if`. Caso contrário, o programa executa apenas a `Ação(ões) a Tomar B` dentro do bloco `else`.

### Exemplo

```C#
    bool likeMusic = true;
    if(likeMusic == true) 
    {
        Console.WriteLine("Eu gosto de Música");
    } 
    else 
    {
        Console.WriteLine("Eu não gosto de Música");
    }   
```

O código acima imprimirá a declaração `Eu gosto de Música` porque a expressão booleana, `likeMusic == true`, é verdadeira.
{{% /notice %}}

Vamos revisitar o exemplo de saudação acima e tomar uma decisão para Patrick sobre se deve dizer "Bom Dia", "Boa Tarde", "Boa Noite". 

Patrick deve dizer "Bom Dia" entre 0:00 - 11:59, "Boa Tarde" entre 12:00 - 19:59, e "Boa Noite" entre 20:00 - 23:59.

1. Temos uma variável `currentHour` que armazena a hora atual. 
2. Preencha a `expressão booleana A` e a `expressão booleana B` corretas para completar o programa.
3. Teste seu resultado atribuindo à variável `currentHour` números de 0 a 23:

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/T6AUdh" frameborder="0"></iframe>

## Repetir Novamente: For-Loop, While-Loop

Na aula de matemática, o professor de Patrick 🐥 pede à turma para resolver um desafio matemático, e ele pode precisar de ajuda. 

O professor pede para encontrar a **soma de 1, 2, 3, ...., 100**. Isto é, o que é **1 + 2 + 3 + 4 ... + 99 + 100**?

Enquanto podemos colocar isso em uma calculadora, isso vai demorar um pouco. Felizmente, em C#, você pode facilmente calcular isso em 3 linhas com a ajuda de um **for loop** ou **while loop**.

{{% notice note %}}
**For loops** e **While loops** são estruturas de controle em C# que permitem executar blocos de código várias vezes.

### While Loop

```
while(expressão booleana){
    Ação(