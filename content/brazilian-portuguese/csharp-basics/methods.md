---
title: "Métodos"
description: "Introdução a métodos em C#."
date: 2024-09-16T00:00:00Z
weight: 7
---

## O que é um Método?

Até agora, aprendemos como armazenar dados em variáveis, imprimir dados e frases, e tomar decisões com `if`-statements, `for`-loops e `while`-loops.

No último exercício, sabemos que o seguinte bloco de código calcula a soma de 1 a 100:

`int total = 0; int num = 1; while(num <= 100){ total = total + num; num = num + 1; } Console.WriteLine("Sum: " + total);`

Mas e se quisermos calcular a soma de 1 a 77? Como podemos fazer isso sem escrever todo o bloco de código de novo?

Queremos criar uma ✨ caixa mágica ✨ no código que faz o cálculo para nós, independentemente de quais números queremos somar!
<img src="../images/method.png" height="250" alt="Num 1 e Num 2 com uma seta apontando para um círculo com as palavras Magic Box e outra seta apontando do círculo para Sum of Num 1 to Num 2"/> 

Em C#, um **método** é como essa caixa mágica que executa uma tarefa específica rodando um bloco de código que pode usar entradas do usuário.

Existem 2 partes em um método: assinatura e corpo:

{{% notice note %}}
### Assinatura do Método

Para definir um método, precisamos primeiro escrever a sua **assinatura**. Uma assinatura possui quatro partes principais:

`access_specifier return_type method_name(list_of_parameters)`

**Nome da Parte** | **Descrição** | **Exemplos ou opções possíveis**  
----|----|----  
**access specifier** | define o nível de acesso do método | `public` diz que qualquer um pode usar o método. `private` indica que ele só pode ser chamado dentro de uma classe. (Aprenderemos sobre classes na próxima página!) `protected` indica que pode ser chamado por objetos da mesma classe.  
**return type** | tipo de dado retornado para quem chamou o método (tecnicamente não faz parte da assinatura em C#) | `string` ou `int`, use `void` se o método não retornar nada.  
**method name** | nome do método, usado para chamá-lo | um nome descritivo que você escolhe.  
**list of parameters** | lista de entradas fornecidas quando o método é usado | pode ter zero ou mais parâmetros no formato (`tipo` `nome`, `tipo` `nome`, ...). Use () para nenhum parâmetro.

`// exemplo que recebe uma string como parâmetro e retorna outra string public string artist (string songName)`

**Nota:** Os nomes das variáveis dos parâmetros não precisam ser os mesmos dos dados que serão passados para o método.

### Corpo do Método

Em seguida, colocamos o bloco de código associado ao método dentro do **corpo do método**, entre `{` e `}` após a assinatura.

Para retornar algum dado, usamos a palavra `return` seguida de uma variável ou valor a ser retornado.

**Nota:** Depois que `return` é executado, nada mais no método será rodado.

Este é um exemplo de definição de um método que calcula a soma dos números de `numA` até `numB`:

`/* Nome do Método: sumNum * Parâmetros: 2 números do tipo int * Funcionalidade: retorna a soma de numA até numB */ public int sumNum(int numA, int numB){ int total = 0; int num = numA; while(num <= numB){ total = total + num; num = num + 1; } return total; }`

### Chamando um Método

Por fim, para executar um método no código, fazemos uma **chamada de método**. Escrevemos o nome do método com as entradas apropriadas.  
Por exemplo:

`sumNum(1, 3); // chama o método sumNum() com retorno 6`

Sabendo que `sumNum(1, 3)` retorna um `int` com a soma de 1 a 3, podemos armazenar e imprimir o valor:

`int sum = 0; sum = sumNum(1, 3); Console.WrlineLine(sum); // imprime 6`

Uma das razões para métodos serem poderosos é que podemos chamá-los várias vezes:  
`int sum = 0; sum = sumNum(1, 3); Console.WrlineLine(sum); // imprime 6 sum = sumNum(1, 4); Console.WrlineLine(sum); // imprime 10`

Também poderíamos apenas imprimir o resultado diretamente sem armazenar:  
`Console.WriteLine(sumNum(1,3)); // imprime 6 Console.WriteLine(sumNum(1,4)); // imprime 10`
{{% /notice %}}

## Conte a Pirâmide! 🔺

Aqui está a imagem de uma pirâmide de números quadrados onde cada nível é o quadrado perfeito do número do nível, contando de cima para baixo.

<img src="../images/pyramid.png" height="250" alt="pirâmide com camadas de contas coloridas. Camada inferior é amarela, depois azul, depois marrom, branco, rosa, azul claro, laranja, coral, verde e a última vermelha" /> 

O topo tem `1 * 1` conta, o 2º nível tem `2 * 2` contas, e assim por diante.

Vamos escrever um método que receba o número total de níveis e retorne o número total de contas na pirâmide!

Depois de resolver o desafio, você verá a seguinte mensagem:

`Congratulations! Challenge Solved!`

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/ireaAA" title="Métodos - .NET Fiddle editor" frameborder="0"></iframe>
