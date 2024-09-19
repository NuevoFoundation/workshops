---
title: "Métodos"
description: "Introdução a métodos em C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## O que é um Método?

Até agora, aprendemos como armazenar dados em variáveis, imprimir dados e frases, e tomar decisões com `if`, `for`-loops e `while`-loops.

Do último exercício, sabemos que o seguinte bloco de código calcula a soma de 1 a 100:

```C#
int total = 0;
int num = 1;
while(num <= 100){
    total = total + num;
    num = num + 1;
}
Console.WriteLine("Sum: " + total);
```

Mas e se quisermos calcular a soma de 1 a 77? Como fazemos isso sem escrever todo o bloco de código novamente?

Queremos criar uma ✨ caixa mágica ✨ no código que faz o cálculo para nós, não importa quais 2 números queremos somar!
<img src="../images/method.png" height="250" alt="Num 1 e Num 2 com uma seta apontando para um círculo com as palavras Caixa Mágica e uma seta saindo do círculo apontando para Soma de Num 1 a Num 2"/> 

Em C#, um **método** é como a caixa mágica que executa uma tarefa específica ao rodar um bloco de código que pode usar entradas do usuário.

Existem 2 partes em um método: assinatura e corpo:

{{% notice note %}}
### Assinatura do Método

Para definir um método, primeiro precisamos escrever sua <b>assinatura do método</b>. Um cabeçalho de assinatura tem quatro partes principais:

```
access_specifier return_type method_name(list_of_parameters)
```

**Nome da Parte** | **Descrição** | **Exemplos ou possíveis opções**
----|----|----
**especificador de acesso** | fornece o nível de acesso ao método | `public` diz ao computador que qualquer um pode usar esse método. `private` diz ao computador que só pode ser chamado dentro de uma classe. (Vamos aprender sobre classes na próxima página!) `protected` diz ao computador que pode ser chamado por objetos da mesma classe.
**tipo de retorno** | tipo de dado que é retornado para a função chamadora, tecnicamente o tipo de retorno não faz parte da assinatura em C# | `string` ou `int`, use `void` se o método não retornar nada.
**nome do método** | nome do método, usado para chamá-lo | um nome descritivo que você escolhe com base no que o método faz.
**lista de parâmetros** | lista de entradas que devem ser fornecidas quando o método é usado | pode ter zero ou mais parâmetros na forma de (`type` `name`, `type` `name`, ... ). Use () para nenhum parâmetro.

```
// um exemplo que recebe uma string como parâmetro e retorna outra string como resposta
public string artist (string songName)
```
**Nota:** Os nomes das variáveis para os parâmetros não precisam corresponder ao nome da variável dos dados sendo passados para o método.

### Corpo do Método

Em seguida, colocamos o bloco de código associado ao método no **corpo do método**, que está entre `{` e `}` após a assinatura do método.

Para retornar alguns dados, usamos a palavra-chave `return` seguida por um nome de variável ou um valor a ser retornado.

**Nota:** Uma vez que você usa `return`, nada mais a partir disso no método é executado.

Este é um exemplo de como definir um método que soma números de `numA` a `numB`:

```c#
/* Nome do Método: sumNum
 * Entrada/Parâmetro: 2 números do tipo int
 * Funcionalidade: retorna a soma de numA a numB
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

### Chamada de Método

Por fim, para executar um método em seu código, precisamos fazer uma **chamada de método**. Escrevemos o nome do método com a entrada apropriada.
Por exemplo:

```C#
sumNum(1, 3); // uma linha de código que chama o método sumNum() com o valor de retorno 6
```

Sabendo que `sumNum(1, 3)` retorna um `int` com a soma de 1 a 