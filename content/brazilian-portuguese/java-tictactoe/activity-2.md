---
title: "2. Leia e Processe a Entrada"
description: "Leia a entrada com a classe Scanner e verifique casos de erro"
date: 2021-10-14T00:00:00Z
prereq: "Prepare o Tabuleiro!"
difficulty: "Intermediário"
weight: 3
draft: false
---

## Importando Pacotes

Em Java, uma forma eficiente de obter a entrada do usuário é usar a classe `Scanner` do pacote `java.util`. Para usar essa classe e todos os seus métodos, precisamos `importar` a classe com a seguinte linha de código no topo do arquivo.

```java
import java.util.Scanner;
```

## Usando a Classe Scanner

No `main()`, precisamos primeiro criar um objeto `Scanner` chamado `sc` chamando seu construtor (veja abaixo).

Queremos que o `Scanner` leia nossa entrada do teclado. Para isso, precisamos passar `System.in` (o objeto de entrada padrão).

```java
// Crie um objeto Scanner
Scanner sc = new Scanner(System.in);
```

## Obtendo a Entrada do Usuário

Na atividade anterior, pedimos para o usuário digitar números de 1 a 9. Por isso, vamos esperar um `int` da entrada.

Para obter o `int` que o objeto Scanner guarda, chamamos o método `nextInt()` em `sc`, o objeto Scanner.

```java
int input = sc.nextInt();
```

## Teste Seu Programa (opcional)

Para testar seu programa, adicione um comando de impressão para mostrar o valor que você guardou do `nextInt()`.

Tente rodar seu programa, digite alguns números e clique em `enter`. Você deve ver seu número sendo impresso corretamente. Por exemplo:

```
<<<~  Jogo  da  Velha  ~>>>
* Escolha um número de 1 a 9 para fazer sua jogada
* Jogador: 'X' Computador: 'O'

 1 | 2 | 3 
---+---+---
 4 | 5 | 6 
---+---+---
 7 | 8 | 9 
Digite sua jogada (1-9): 2                 <------- o número que você digitou
Número digitado: 2                         <------- O comando de impressão mostrou o número corretamente
```

{{% notice warning %}}
#### O que acontece se o usuário digitar algo que não é número?

Ao escrever programas, nunca podemos esperar que os usuários digitem os valores corretos, mesmo quando está escrito no aviso.

Como nosso programa só espera um número inteiro (`int`), ele vai travar se você digitar algo que não seja inteiro, como: `oi`, `$`, `20.1`. Você verá uma mensagem de erro como esta:

```
Exception in thread "main" java.util.InputMismatchException      <------ mostra qual é o erro
    at java.base/java.util.Scanner.throwFor(Scanner.java:939)
    at java.base/java.util.Scanner.next(Scanner.java:1594)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2258)
    at java.base/java.util.Scanner.nextInt(Scanner.java:2212)
    at Main.main(Main.java:15)                                   <------ mostra em qual linha do código deu erro (linha 15 em Main.java)
```

Além disso, números que não estão entre 1 e 9 não travam o programa, mas também são entradas que não queremos.
{{% /notice %}}

## Lidando com Entradas Inválidas com Scanner

A classe Scanner tem métodos que verificam se a entrada é válida ou não. Por exemplo, o método `hasNextInt` verifica se o valor digitado pelo usuário é um inteiro e retorna `true` ou `false`. Esse método pode ser usado para garantir que a entrada do usuário é válida.

Use estruturas de controle para validar a entrada do usuário. Se a entrada não for válida, peça novamente para digitar.

```java
if(sc.hasNextInt()) { //foi digitado um inteiro
	move = sc.nextInt(); // pega o número inteiro
   if (!(move > 0 && move <= 9)) { //o número está entre 1 e 9?
		System.out.print("Posição inválida; digite novamente sua jogada (1-9): ");
   }
} else { // se não foi digitado um inteiro
   sc.next(); // limpa o Scanner
	System.out.print("Entrada inválida; digite novamente sua jogada (1-9): ");
}
```

## Teste Seu Programa (opcional)

Teste seu programa clicando em `Executar`, você deve ver a mensagem `Posição inválida; digite novamente sua jogada (1-9):` se digitar algo que não seja número, ou um número que não está entre 1 e 9.

## Recebendo Múltiplas Entradas

Agora temos um programa que recebe uma entrada e verifica se é válida, queremos pedir para o jogador digitar novamente até o jogo acabar.

Para continuar pedindo para o usuário digitar a próxima jogada, colocamos todo o if do `hasNextInt` dentro de um `while loop`. Esse `while loop` recebe o argumento `true`, ou seja, o programa vai continuar rodando até ser instruído a parar.

Note que chamamos `printBoard(board)` e mostramos o aviso ao final de cada rodada, como abaixo:

```java
while(true){
    // insira o if do hasNextInt() aqui

   // mova estes comandos para dentro do if do hasNextInt()
    printBoard(board);
    System.out.print("Digite sua jogada (1-9): "); 
}
```

## Lidando com Entrada Inválida

Quando o usuário digita uma entrada inválida, não queremos que o programa chame `printBoard(board)` e imprima `Digite sua jogada (1-9):`.

Ou seja, queremos que o programa `continue` para a próxima rodada do `while loop`.

Colocamos `continue;` no código para indicar ao computador que deve pular e executar novamente do topo do `while loop`.

Ao final deste exercício, você deve ter um programa que pede para digitar novamente em qualquer entrada inválida, e imprime um tabuleiro vazio com o aviso `Digite sua jogada (1-9):` para qualquer entrada válida!

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

Vamos continuar o workshop para ver como devemos atualizar nosso tabuleiro!
