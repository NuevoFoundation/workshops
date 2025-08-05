---
title: "Passo 1 - Encontrando o problema (Parte 2)"
difficulty: "Intermediário"
weight: 4
draft: false
---

## Erros em Tempo de Execução

Erros de compilador são uma coisa, mas **erros e bugs em tempo de execução** são outra. Enquanto o compilador pode te mostrar onde procurar, bugs de execução acontecem enquanto o programa está rodando. Precisamos entender o que o programa está fazendo quando o bug aparece:
- Quais variáveis estão sendo usadas?
- Qual instrução está sendo chamada?
- Será que faltou alguma linha importante?

Em programas menores, podemos usar **comandos de impressão** (print) no código para descobrir rapidamente o que está acontecendo enquanto o programa roda. Usar prints é um jeito rápido e simples de olhar dentro do programa enquanto ele está funcionando, e com sorte, você vai achar o bug sem muito esforço.

## Busca Binária

Um dos algoritmos mais simples que você vai aprender é a **busca binária**, que permite procurar um item em uma lista ordenada de forma muito rápida. A ideia é olhar para o meio da lista e ver se é o elemento que queremos; se for, acabou! Se o elemento que queremos é maior, procuramos na metade de cima da lista. Se for menor, procuramos na metade de baixo. Repetimos isso até achar o item.

|![Procurando o número 7 em uma lista ordenada de 10 números usando Busca Binária](../resources/binary_search.svg "Uma árvore mostrando o processo de busca do número 7 em uma lista ordenada de 1 a 10 usando Busca Binária")|
|:--:|
|Procurando o número **7** em uma lista ordenada de **10** números usando Busca Binária|

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Nosso programa vai pedir para você procurar um nome baseado na posição dele na lista.

Abra o **Shell** no Replit e compile o programa:
```bash
make BinarySearch
```

Rode o programa assim:
```bash
./examples/BinarySearch
```

Você vai ver uma lista de nomes e seus números. Procure por Emily digitando 6 no prompt e apertando `Enter`.

|![Procurando por Amy](../resources/debugging_process_searching_for_amy.svg "Uma captura de tela mostrando uma lista de nomes e seus números. 'Número: 5, Nome: Amy' está destacado.")|
|:--:|
|Procurando por Amy.|

Agora rode o programa de novo e procure o número de `Ramona`. O programa trava e aparece a mensagem `Segmentation fault (core dumped)`! 😮

Quando isso acontece, pergunte a si mesmo: qual é o comportamento do bug?
Erros de "segmentation fault" geralmente indicam um destes problemas:
- Acessando um array fora dos limites.
- Usando um ponteiro NULL.
- Estouro de memória ou pilha.

Para saber mais, veja [Lista de Motivos Comuns para Segmentation Faults em C](https://www.tutorialspoint.com/List-of-Common-Reasons-for-Segmentation-Faults-in-C-Cplusplus#:~:text=List%20of%20Common%20Reasons%20for%20Segmentation%20Faults%20in,7%20Stack%20overflow%208%20Writing%20to%20read-only%20memory).

Vamos olhar o código que faz a busca binária:

1. A função `binary_search()` recebe três argumentos: o array de elementos, o tamanho do array e o número que estamos procurando. Ela chama a função recursiva `rbin_search()`.

2. `rbin_search()` faz a busca binária de forma recursiva e retorna o índice do elemento se encontrar. Se não achar, retorna `-1`.

Uma `função recursiva` divide o problema em vários probleminhas menores chamando ela mesma, e fica mais fácil de resolver com alguns **casos base**. Uma função recursiva que não termina normalmente tem problemas em um destes pontos:

1. Os casos base estão incompletos.
2. As chamadas recursivas estão erradas.

Vamos depurar!

## Usando Comandos de Print

Colocar comandos de `print` no seu código é um jeito simples (mas meio bagunçado) de saber se ele está funcionando como deveria. Veja se a função `rbin_search()` está funcionando direito colocando prints para ver como os valores mudam.

{{% expand "***Dica 1: O que faz o problema ficar menor?***" %}} 
- Tente colocar um print depois da variável `middle` na função `rbinary_search` para ver como os valores de `lo`, `hi` e `middle` mudam. Procure por algum nome.
|![Colocando print para ver os valores "lo", "hi" e "middle".](../resources/debugging_process_print_statement.svg "Captura de tela mostrando um print na linha 17, mostrando os valores de 'lo', 'hi' e 'middle'.")|
|:--:|
|Colocando print para ver os valores `lo`, `hi` e `middle`.|

- Fique de olho nos valores que aparecem.
{{% /expand %}}

{{% expand "**Clique para ver a resposta**" %}} 
A chamada recursiva para procurar na metade de baixo do array está procurando na metade de cima por engano.

Para corrigir, os argumentos `lo` e `hi` da função `rbin_search()` precisam ser `lo` e `middle-1`.

|![Corrigindo chamada recursiva para metade de baixo.](../resources/debugging_process_fixing_lowerhalf_search.svg "Captura de tela destacando a linha 24: 'return rbin_search(arr, lo, middle-1, element);'")|
|:--:|
|Corrigindo chamada recursiva para metade de baixo.|

|![Vendo como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.](../resources/debugging_process_searching_for_becky.svg "Captura de tela mostrando o console com a lista de pessoas e os prints mostrando como 'lo', 'hi' e 'middle' mudam.")|
|:--:|
|Vendo como as variáveis "lo", "hi" e "middle" mudam ao procurar por Becky.|

Rode o programa de novo e procure um número menor que `5` para ver como `lo`, `hi` e `index` mudam.
{{% /expand %}}
<br/>

Prints não são a melhor ferramenta quando o programa fica mais complicado. Eles são bem ineficientes e, se o programador esquecer de tirar, alguém pode acabar vendo os prints sem querer. Use prints só em partes isoladas do seu código e **SEMPRE** lembre de tirar depois 🙂.
