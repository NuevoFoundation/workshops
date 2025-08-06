---
title: "3. Atualize o Tabuleiro"
description: "Aprenda a gerar uma jogada para o computador e atualizar o tabuleiro"
date: 2021-10-14T00:00:00Z
prereq: "Prepare o Tabuleiro!, Leia e Processe a Jogada"
difficulty: "Intermediário"
weight: 4
---

No último exercício, temos um programa que imprime o tabuleiro e pede para o usuário: `Digite sua jogada (1-9):` a cada jogada válida. Porém, o tabuleiro ficava vazio (veja abaixo). Neste exercício, vamos aprender como atualizar o tabuleiro e gerar uma jogada aleatória para o computador.

```
<<<~  Jogo  da  Velha  ~>>>
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
   |   |                                    <--------------- O tabuleiro não mostra as jogadas do jogador/computador
---+---+---
   |   |   
Digite sua jogada (1-9): d
Entrada inválida; digite novamente sua jogada (1-9): 3
   |   |   
---+---+---
   |   |                                    <--------------- O tabuleiro não mostra as jogadas do jogador/computador
---+---+---
   |   |   
Digite sua jogada (1-9): 
```

## Mostrando as Jogadas do Usuário

Dentro do if `hasNextInt()`, antes de chamar o método `printBoard(board)`, atualize o array `board` com a jogada do usuário no índice correspondente.

Lembre-se que o jogador é representado por `"X"` no tabuleiro.

{{% notice tip %}}
### Lembretes

- Java usa índices começando do zero (0-indexing) e o jogador foi instruído a digitar números de 1 a 9.
- Para acessar um elemento de um array, use a notação de índice: `minhaVariavel[numeroDoIndice]`.
{{% /notice %}}

## Preparando as Jogadas do Computador

Crie um novo método `getComputerMove(String[] curBoard)` que gera uma jogada válida para o computador (entre 1 e 9) usando o tabuleiro atual como entrada.

Siga o próximo passo para implementar o método.

## Implementando o Movimento do Computador

No `getComputerMove()`, vamos gerar aleatoriamente um número entre 1 e 9 para o computador.

Vamos usar a classe `Random`, que é muito usada em Java para gerar números aleatórios.

Para usar essa classe e seus métodos, precisamos importar com a seguinte linha no topo do arquivo:

```java
import java.util.Random;
```

Crie um objeto `Random` chamando o construtor `Random()`.

```java
Random rand = new Random();
```

## Gerando Números Aleatórios

Chame o método `int nextInt(int num)` no objeto `Random` que você criou para gerar um número aleatório de 1 a 9.

Uma chamada ao método `int nextInt(int num)` retorna um número aleatório de 0 até `num-1`.

```java
int position = rand.nextInt(9);
```

## Verificando se a Jogada é Válida

Depois de ter um número aleatório de 1 a 9, precisamos verificar se o espaço está disponível.

Use um laço `while` para gerar uma jogada válida para o computador, caso o número gerado não seja um espaço livre!

Retorne o número assim que encontrar uma jogada válida para o computador.

```java
while (!curBoard[position].equals(" ")){
   position = rand.nextInt(9);
}
return position;
```

## Atualize o Array do Tabuleiro

Assim como no primeiro passo, devemos atualizar o array `board` para o computador antes de chamar o método `printBoard(board)`.

Gere uma jogada aleatória chamando `getComputerMove()`!

Lembre-se que o computador é representado por `"O"` no tabuleiro.

```java
board[getComputerMove(board)] = "O"; //getComputerMove retorna o inteiro 0-8 que é a posição correta no array
printBoard(board);
```
## Execute o Programa

Clique em `Executar` agora! O tabuleiro deve atualizar tanto a jogada do jogador quanto do computador corretamente a cada entrada, como mostrado abaixo:

```
<<<~  Jogo  da  Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Digite sua jogada (1-9): 1
 X |   |   
---+---+---
   |   |   
---+---+---
   | O |   
Digite sua jogada (1-9): 1
Posição inválida; digite novamente sua jogada (1-9): 2
 X | X |   
---+---+---
   |   | O 
---+---+---
   | O |   
Digite sua jogada (1-9): 
```

Tudo parece estar funcionando bem! Só falta determinar quem é o vencedor/perdedor do jogo, que vamos implementar no próximo exercício!
