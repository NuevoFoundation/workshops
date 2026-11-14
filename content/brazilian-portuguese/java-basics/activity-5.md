---
title: "Métodos"
description: "Apresente métodos em Java."
date: 2021-10-13T00:00:00Z
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mO6S9Yq_K4I" title="Métodos - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## O que é um Método?

Até agora, aprendemos como armazenar dados em variáveis, imprimir dados e sentenças e tomar decisões com declaração if, for loop e while loop.

Do último exercício, sabemos que o seguinte bloco de código calcula a soma de 1 a 100:

```java
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
System.out.println("Sum: " + total);
```

Mas e se quisermos calcular a soma de 1 a 77? Como fazemos isso sem escrever todos os blocos de código novamente?

Queremos criar uma ✨ caixa mágica ✨ em código que faça o cálculo para nós, independentemente dos 2 números para os quais queremos criar uma soma!
<img src="../images/method.png" height="250" alt="Num 1 and Num 2 with arrow pointing into a circle with the words Magic Box and an arrow pointing out of the circle pointing to Sum of Num 1 to Num 2"/> 

Em Java, um **método** é como uma caixa mágica que executa uma tarefa específica executando um bloco de código que pode usar entradas do usuário.

Existem 2 partes em um método: cabeçalho e corpo:

{{% notice note %}}
### Cabeçalho do método

Para definir um método, precisamos primeiro escrever o <b>cabeçalho do método</b>. Um cabeçalho de método tem quatro partes principais:

**Nome da parte** | **Descrição** | **Exemplos ou opções possíveis**
----|----|----
**especificador de acesso** | fornece o nível de acesso ao método | `public` informa ao computador que qualquer pessoa pode usar este método. `private` diz ao computador que ele só pode ser chamado dentro de uma classe. (Aprenderemos sobre classes na próxima página!) `protected` informa ao computador que ele pode ser chamado por objetos da mesma classe.
**tipo de retorno** | tipo de dados retornado para a função de chamada | use `void` se o método não retornar nada.
**nome do método** | nome do método usado para chamá-lo | definido pelo usuário com base no que o método faz
**lista de parâmetros** | lista de entradas que devem ser fornecidas quando o método é usado | formato de (`type` `nome de entrada`, `type` `nome de entrada`, ...).

```
// an example
public void sing (String songName)
   1.    2.   3.        4.
```
**Nota:** Os nomes das variáveis ​​dos parâmetros não precisam corresponder ao nome da variável dos dados que estão sendo passados ​​para o método.

<br />

### Corpo do Método

A seguir, colocamos o bloco de código associado ao método no **corpo do método**, que está entre `{` e `}` após o cabeçalho do método.

Para retornar alguns dados, colocamos a palavra-chave `return` seguida do nome de uma variável ou de um valor a ser retornado.

**Nota:** Depois de `return`, nada mais será executado no método.

Este é um exemplo de como definir um método que soma números de `numA` até `numB`:

```java
/* Nome do método: somaNum
 * Entrada/Parâmetro: 2 números do tipo int
 * Funcionalidade: retorne a soma de numA a numB
 */
public int sumNum(int numA, int numB){
    int total = 0;
    int num = numA;      // acessamos a primeira entrada com o nome numA
    while(num <= numB){  // acessamos a primeira entrada com o nome numB
        total = total + num;
        num = num + 1;
    }
    return total; // declaração de retorno
}
```

<br />

### Chamada do Método

Por último, para executar um método no seu código, precisamos fazer uma <b>chamada de método</b>. Escrevemos o nome do método com a entrada apropriada.
Por exemplo:

```java
sumNum(1, 3); // uma linha de código que chama o método sumNum() com o valor de retorno 6
```

Sabendo que `sumNum(1, 3)` retorna um `int` com a soma de 1 a 3, podemos fazer o seguinte para armazenar o valor:

```java
int sum1to3 = sumNum(1, 3); 
```
{{% /notice %}}

## Conte a pirâmide!🔺

<img src="../images/pyramid.png" height="250" alt="pyramid with layers of colorful beads. Bottom layer is yellow, next blue, next brown, next white, next pink, next light blue, next orange, next coral, next green, last red" /> 
<p style="text-align: center;">(photo credit: aliexpress.com/item/32306945847.html)</p>

A imagem acima é uma imagem de uma pirâmide de números quadrados onde cada nível é um quadrado perfeito do número do nível atual contado de cima para baixo.

Ou seja, o nível superior tem contas `1 * 1`, o segundo nível tem contas `2 * 2`.

<br />
Vamos escrever um método que receba o número total de níveis e produza o número total de contas na pirâmide!

Depois de resolver o desafio, você verá a seguinte mensagem:

```
Parabéns! Desafio resolvido!
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsPyramid" target="_blank">Launch Replit</a>
