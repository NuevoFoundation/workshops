---
title: "Placeholder"
date: 2020-07-23T00:00:00Z
weight: 15
draft: true
hidden: true
---

## Ler e Processar Entrada

Em Java, uma forma eficiente de obter a entrada do usuário é usar a classe `Scanner` do pacote `java.util`. Para usar essa classe e todos os seus métodos, precisamos `importar` a classe com a seguinte linha de código no topo do arquivo.

```java
import java.util.Scanner;
```

## Tratamento de Erros

Em Java, podemos lidar com possíveis erros colocando o código que pode causar erro em um bloco `try-catch`. 

No bloco `try`, colocamos o trecho de código que pode causar erro.

No bloco `catch`, colocamos instruções sobre o que fazer se houver um erro ao executar o bloco `try`. Assim, evitamos que o programa pare de funcionar.
Por exemplo:

```java
try{
   //  Bloco de código para tentar
} catch(Exception e){
   //  Bloco de código para tratar erros
}
```

Execute seu programa e digite entradas que não sejam números. Seu programa não deve falhar agora!

## O Bloco Try

No bloco `try`, pegamos entradas numéricas dos usuários. Porém, nem todas as entradas são válidas, pois só devemos aceitar posições disponíveis no tabuleiro.

Use instruções `if` para verificar se o número digitado é válido. (Dica: acesse o array `board` para checar se a entrada é válida).

Se não for, imprima a mensagem `Posição inválida; digite novamente sua jogada (1-9):`.

{{% notice hint %}}
#### Como verifico se duas Strings são iguais?

Para verificar se duas Strings têm o mesmo conteúdo, usamos o método `equals()`. Por exemplo:

```java
String s1 = "oi";
boolean b1 = s1.equals("oi"); // isso é verdadeiro
boolean b2 = s1.equals("OI"); // isso é falso
```

{{% /notice %}}

## O Bloco Catch

No bloco `catch`, sabemos que o jogador digitou uma entrada que não é número. Primeiro, precisamos ignorar essa entrada inválida apagando ela do `Scanner`. Fazemos isso chamando o método `next()` no objeto `Scanner` que criamos. Depois, também devemos imprimir a mensagem para informar o jogador para digitar novamente: `Posição inválida; digite novamente sua jogada (1-9):`.

## (opcional) Teste seu Programa

Teste seu programa clicando em `Run`. Você deve ver a mensagem `Posição inválida; digite novamente sua jogada (1-9):` se digitar uma entrada que não seja número, ou um número que não está entre 1 e 9.

## Múltiplas Entradas

Agora temos um programa que recebe uma entrada e avalia se é válida, queremos pedir ao jogador para fazer isso de novo até o jogo acabar.

Para continuar pedindo ao usuário para digitar sua próxima jogada, colocamos todo o bloco `try-catch` dentro de um `while loop`. Esse `while loop` recebe o argumento `true`, o que significa que o programa vai continuar repetindo até ser instruído a parar. 

Note que chamamos `printBoard(board)` e mostramos a mensagem ao final de cada repetição, como abaixo:

```java
while(true){
    // insira o bloco try-catch aqui

    printBoard(board);
    System.out.print("Digite sua jogada (1-9): "); 
}
```

## Lidando com Entrada Inválida

Quando o usuário digita uma entrada inválida, não queremos que o programa chame `printBoard(board)` e imprima `Digite sua jogada (1-9):`. 

Ou seja, queremos que o programa `continue` para a próxima repetição do `while`.

Colocamos `continue;` no código para indicar ao computador que deve pular para o topo do `while` novamente.

Ao final deste exercício, você deve ter um programa que pede para digitar novamente em qualquer entrada inválida, e imprime um tabuleiro vazio com a mensagem `Digite sua jogada (1-9):` para entradas válidas!

```
<<<~  Jogo da Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Digite sua jogada (1-9): 1
   |   |   
---+---+---
   |   |                                    <--------------- O tabuleiro não tem as jogadas do jogador/computador
---+---+---
   |   |   
Digite sua jogada (1-9): d
Entrada inválida; digite novamente sua jogada (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- O tabuleiro não tem as jogadas do jogador/computador
---+---+---
   |   |   
Digite sua jogada (1-9): 
```

Vamos continuar o workshop para ver como devemos atualizar nosso tabuleiro do jogo!
