---
title: "1. Prepare o Tabuleiro!"
description: "Usando comandos de impressão para mostrar as regras e o tabuleiro do jogo"
date: 2021-10-14T00:00:00Z
weight: 2
---

Nesta atividade, vamos criar um programa que imprime o tabuleiro do jogo e mostra as instruções, como no exemplo abaixo:

```
<<<~  Jogo da Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Digite sua jogada (1-9): 2
 O | X |   
---+---+---
   |   |   
---+---+---
   |   |   
Digite sua jogada (1-9): 
```

## A Classe Principal e o Método Main

Veja que no código inicial temos a classe `Main` e o método `main()`. O método `main()` é onde o programa começa sempre que clicamos no botão `Run`.

```java
public class Main {
  public static void main(String[] args) {
  }
}
```

## Comandos de Impressão

No `main()`, escreva comandos de impressão para mostrar a mensagem de boas-vindas e as regras do jogo!

```
<<<~  Jogo da Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'
```

## Variáveis e Arrays

Neste jogo, precisamos acompanhar o símbolo que está em cada uma das 9 posições do tabuleiro.

Por isso, vamos guardar 9 informações no programa. Podemos usar um `array` (estrutura de dados) de tamanho 9 para guardar esses dados.

Como diz nas regras, no tabuleiro do jogo, `"X"` é a jogada do jogador, `"O"` é a jogada do computador, e `" "` é um espaço disponível.

Para isso, declare uma variável do tipo array chamada `board` com o valor `" "` (espaço) em todas as 9 posições (ou seja, `{" ", " ", " ", " ", " ", " ", " ", " ", " "}`).

## Mostrando o Tabuleiro

Agora que temos a variável `board` guardando os símbolos atuais do tabuleiro, vamos imprimir um tabuleiro vazio usando comandos de impressão (veja abaixo).

Note que cada tabuleiro tem 5 linhas, então é legal usar 5 comandos de impressão para mostrar cada linha do tabuleiro.

Cada um dos 9 blocos é uma `String` de tamanho 3, onde o caractere do meio é o símbolo atual guardado em `board` na posição correspondente.

Seu programa deve mostrar o resultado abaixo depois de completar este passo.

```
<<<~  Jogo da Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

   |   |  
---+---+---
   |   |  
---+---+---
   |   | 
```

## Métodos

Como vamos precisar mostrar o tabuleiro várias vezes durante o jogo, é uma boa ideia colocar o bloco de código que imprime o tabuleiro em um método.

Esse método deve receber um `String[]` como entrada e imprimir o tabuleiro atual. Lembre-se que esse método deve ser escrito fora do `main()`.

Vamos criar um método com o seguinte cabeçalho:

```java
public static void printBoard(String[] curBoard);
```

## Chamando Métodos

No `main()`, chame o método `printBoard()` para mostrar o tabuleiro inicial com os números das posições. Você pode fazer isso criando outro array de `String` com o conteúdo `"1", "2", ..., "9"`.

Coloque uma linha de código que imprime `Digite sua jogada (1-9): `

```
<<<~  Jogo da Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Digite sua jogada (1-9): 
```

## Execute o Programa

Execute seu programa. Se ele mostrar o texto acima, você está pronto para continuar 👍!
