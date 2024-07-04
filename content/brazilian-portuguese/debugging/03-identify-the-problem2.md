---
title: "Passo 1 - Encontrando o problema (Parte 2)"
difficulty: "Intermediário"
weight: 4
draft: false
---

## Imprimir extratos

Erros de compilador são uma coisa, mas erros e bugs de tempo de execução são outra. Embora o compilador possa facilmente dizer onde procurar, os bugs de tempo de execução são causados pela forma como o seu programa é executado. Precisamos entender o que o programa está fazendo quando o bug acontece:
- Quais variáveis estão sendo usadas?
- Qual declaração está sendo chamada?
- Há alguma declaração faltando que precisávamos?

Em aplicações menores, podemos usar declarações print no código para descobrir rapidamente o estado de execução do programa. As declarações impressas são uma maneira rápida e suja de examinar um programa enquanto ele está em execução e, com sorte, você será capaz de descobrir o que está causando o bug sem muita dificuldade.

## Pesquisa binária

Um dos algoritmos mais simples que você aprenderá ou aprendeu é a pesquisa binária, que permite pesquisar um item em uma lista ordenada em tempo logarítmico. A ideia é verificar o meio da lista ordenada e ver se corresponde ao elemento que desejamos; se encontrarmos o elemento, o algoritmo estará concluído. Se o elemento for superior, pesquisamos na metade superior da lista. Caso contrário, pesquisaremos na metade inferior da lista. Repetimos o processo até encontrarmos o item que procuramos.

|![Procurando o número 7 em uma lista ordenada de 10 números usando a pesquisa binária](../resources/binary_search.svg)|
|:--:|
|Pesquisando o número **7** em uma lista ordenada de **10** números usando Pesquisa Binária |

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Iniciar Replit</a>

Nosso programa solicitará que você pesquise um nome com base na posição em que ele está localizado.

Abra o **Shell** no programa Replit e compile o programa:
``` bash
make BinarySearch
```

Execute o programa assim:
``` bash
./examples/BinarySearch
```

Você deverá ver uma lista de nomes e seus números em uma lista. Pesquise Emily digitando 6 no prompt e clique em `Enter`.

|![Procurando por Amy](../resources/debugging_process_searching_for_amy.svg)|
|:--:|
|Procurando por Amy.|

Agora execute o programa novamente e procure o número de `Ramona`. O programa é interrompido com uma mensagem `Falha de segmentação (core dumped)`! 😮

Ao se deparar com tal problema, você deve se perguntar: qual é o comportamento do bug?
Erros de falha de segmentação geralmente são um sinal de um dos seguintes problemas:
- Acessando um array fora dos limites.
- Desreferenciando um ponteiro NULL.
- Sobrecarga de memória/pilha.

Para obter mais informações, consulte [Lista de motivos comuns para falhas de segmentação em C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Vamos dar uma olhada no código que implementa a busca binária em nosso código:

1. A função `binary_search()` leva três argumentos: o array de elementos, o comprimento do array e o número que estamos procurando. Em seguida, ele chama a função recursiva `rbin_search()`.

2. `rbin_search()` executa a pesquisa binária recursivamente e retorna o índice do elemento se encontrado. Caso contrário, ele retorna `-1`.

Uma `função recursiva` divide um problema em vários problemas menores chamando a si mesma e torna o problema mais fácil de lidar com um conjunto de **casos base**. Uma função recursiva que não termina geralmente apresenta problemas em um dos seguintes:

1. Os casos básicos estão incompletos.
2. As chamadas recursivas estão configuradas de maneira errada.

Vamos fazer alguma depuração!

## Usando declarações de impressão

Colocar declarações `print` em seu código é uma maneira suja, mas às vezes eficaz, de saber se seu código está funcionando conforme o esperado. Vá em frente e verifique se `rbin_search()` está funcionando corretamente, colocando declarações de impressão para ver a mudança dos valores.

{{% expand "***Dica 1: O que torna o problema que estamos tentando resolver menor?***" %}}
- Tente colocar a declaração print após a variável `middle` na função `rbinary_search` para ver como os valores `lo`, `hi` e `middle` estão mudando. Vá em frente e pesquise algo.
|![Colocando a declaração print para verificar os valores "lo", "hi" e "middle".](../resources/debugging_process_print_statement.svg)|
|:--:|
|Colocando declaração print para verificar valores `lo`, `hi` e `middle`.|

- Fique de olho nos valores conforme eles são impressos.
{{% /expand %}}

{{% expand "**Clique para mostrar a resposta**" %}}
A chamada recursiva para pesquisar na metade inferior do array está pesquisando na metade superior.

Para consertar isso, os argumentos `lo` e `hi` de `rbin_search()` precisam ser `lo` e `middle-1`.

|![Corrigindo chamada recursiva da metade inferior.](../resources/debugging_process_fixing_lowerhalf_search.svg)|
|:--:|
|Corrigindo chamada recursiva da metade inferior.|

|![Olhando como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.](../resources/debugging_process_searching_for_becky.svg)|
|:--:|
|Observando como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.|

Execute seu programa novamente e procure por um número abaixo de `5` e veja como `lo`, `hi` e `index` mudam.
{{% /expand %}}
<br/>

As declarações impressas não são a melhor ferramenta para usar quando a complexidade do programa aumenta. Eles são extremamente ineficientes e se um programador esquecer de removê-los, outra pessoa (por exemplo, um usuário executando o seu programa) poderá ver as declarações de impressão. Use declarações de impressão apenas em seções isoladas do seu código e **SEMPRE** lembre-se de removê-las 🙂.
