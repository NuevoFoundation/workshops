---
title: "Passo 1 - Encontrando o problema (Parte 2)"
difficulty: "Intermediário"
weight: 4
draft: false
---

## Instruções Print

Erros de compilador são uma coisa, mas erros de tempo de execução e bugs são outra. Enquanto o compilador pode facilmente dizer-lhe onde procurar, bugs de tempo de execução são causados pela forma como seu programa é executado. Precisamos entender o que o programa está fazendo quando o bug acontece:
- Quais variáveis estão sendo utilizadas?
- Qual instrução está sendo chamada? 
- Falta alguma declaração que precisávamos?

Em aplicativos menores, podemos usar instruções de impressão no código para descobrir rapidamente o estado de execução do programa. As instruções de impressão são uma maneira rápida e suja de examinar um programa enquanto ele está sendo executado e, com sorte, você será capaz de encontrar o que está causando o bug sem muita dificuldade.

## Pesquisa binária

Um dos algoritmos mais simples que você vai aprender ou aprendeu é a pesquisa binária, que permite pesquisar um item em uma lista ordenada em tempo logarítmico. A ideia é verificar o meio da lista ordenada e ver se corresponde ao elemento que queremos; Se encontrarmos o elemento, o algoritmo está terminado. Se o elemento for superior, pesquisaremos a metade superior da lista. Caso contrário, pesquisaremos a metade inferior da lista. Repetimos o processo até encontrarmos o item que estamos procurando.

|![Procurando o número 7 em uma lista ordenada de 10 números usando a Pesquisa Binária](../resources/binary_search.svg)|
|:--:|
|Procurando o número **7** em uma lista ordenada de números **10** usando a Pesquisa Binária|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Executar Replit</a>

Nosso programa pedirá que você procure um nome com base na posição em que estão localizados. 

Abra o **Shell** no programa Replit e compile o programa:
``` bash
make BinarySearch
```

Execute o programa assim:
``` bash
./examples/BinarySearch
```

Você deve ver uma lista de nomes e seus números em uma lista. Pesquise Emily digitando 6 no prompt e clique em `Enter`.

|![Procurando por Amy](../resources/debugging_process_searching_for_amy.svg)|
|:--:|
|Procurando por Amy.|

Agora execute o programa novamente e procure o número para `Ramona`. O programa quebra com uma mensagem `Falha de segmentação (núcleo despejado)`! 😮

Ao se deparar com tal problema, você deve se perguntar, qual é o comportamento do bug?
Erros de falha de segmentação geralmente são um sinal de um dos seguintes problemas:
- Acessando uma matriz fora dos limites.
- Desreferenciar um ponteiro NULL.
- Estouro de memória/pilha.

Para obter mais informações, consulte uma [Lista de razões comuns para falhas de segmentação em C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Vamos dar uma olhada no código que implementa a pesquisa binária nosso código:

1. A função `binary_search()` usa três argumentos: a matriz de elementos, o comprimento da matriz e o número que estamos procurando. Em seguida, chama a função recursiva de `rbin_search()`.

2. `rbin_search()` executa a pesquisa binária recursivamente e retorna o índice do elemento se encontrado. Caso contrário, retorna `-1`.

Uma `"função recursiva"` quebra um problema em um monte de problemas menores chamando-se a si mesma e torna o problema mais fácil de lidar com um conjunto de **casos base**. Uma função recursiva que não termina geralmente tem problemas em um dos seguintes:

1. Os casos-base estão incompletos. 
2. As chamadas recursivas são definidas de maneira errada.

Vamos fazer algumas depurações!

## Usando instruções de impressão

Colocar instruções de `impressão` em seu código é uma maneira suja, mas às vezes eficaz, de saber se seu código está funcionando conforme o esperado. Vá em frente e verifique se o `rbin_search()` está funcionando corretamente, colocando instruções de impressão para ver os valores mudarem.

{{% expand "***Dica 1: O que torna o problema que estamos tentando resolver menor?***" %}} 
-  Tente colocar a instrução de impressão após a variável `middle` na função `rbinary_search` para ver como os valores de `lo`, `hi` e `middle` estão mudando. Vá em frente e pesquise algo.
|![Colocando instrução de impressão para verificar valores "lo", "hi" e "middle".](../resources/debugging_process_print_statement.svg)|
|:--:|
|Colocando instrução de impressão para verificar valores `lo`, `hi` e `middle`.|

- Fique de olho nos valores à medida que são impressos.
{{% /expand %}}

{{% expandir "**Clique para mostrar a resposta**" %}} 
A chamada recursiva para pesquisa na metade inferior da matriz está pesquisando na metade superior. 

Para corrigi-lo, os argumentos `lo` e `hi` do `rbin_search()` precisam ser `lo` e `middle-1`.

|![Corrigindo chamada recursiva da metade inferior.](../resources/debugging_process_fixing_lowerhalf_search.svg)|
|:--:|
|Corrigindo chamada recursiva da metade inferior.|

|![Observando como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.](../resources/debugging_process_searching_for_becky.svg)|
|:--:|
|Observando como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.|

Execute seu programa novamente e procure um número abaixo de `5` e veja como o `lo`, `oi` e `índice` mudam.
{{% /expand %}}
<br/>

As instruções de impressão não são a melhor ferramenta a ser usada quando a complexidade do programa aumenta. Eles são extremamente ineficientes e se um programador se esquecer de removê-los, outra pessoa (por exemplo, um usuário executando seu programa) pode ver as instruções de impressão.  Use apenas instruções de impressão em seções isoladas do seu código e **SEMPRE** lembre-se de removê-las 🙂.
