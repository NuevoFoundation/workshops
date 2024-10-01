---
title: "Passo 1 - Encontrando o problema (Parte 3)"
difficulty: "Intermediário"
weight: 5
draft: false
---

## Depuradores

A depuração de código é um problema tão difundido e comum que as pessoas criaram programas inteiros projetados para ajudar outros programadores a depurar com mais eficiência. Eles são apropriadamente chamados de **depuradores**, e há muitos depuradores que funcionam para a linguagem de programação C. Vamos dar uma olhada em `gdb`, um depurador comum usado com linha de comando.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Iniciar Replit</a>

Para nossos exemplos, usaremos o algoritmo <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Quicksort</a>.

**Quicksort** é um algoritmo que classifica um array selecionando primeiro um elemento do array como um `pivô`.

A seguir, os elementos são organizados com base em uma das seguintes condições:
- Elementos menores que o pivô.
- Elementos maiores que o pivô.

Quando a ordenação é feita, o mesmo processo é chamado recursivamente nas partições superior e inferior do array, tomando o pivô como ponto médio.

{{% notice note %}}
Nossa versão do quicksort assume que o elemento mais à esquerda é o elemento "maior" e o elemento mais à direita é o pivô dentro da partição.
{{% /notice %}}

|![Quicksort usando pivô como o elemento mais à direita.](../resources/debugging_process_quicksort.svg)|
|:--:|
|Figura 1: Quicksort usando o elemento mais à direita como pivô e assumindo que o elemento mais à esquerda é o elemento "maior".|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) é um depurador poderoso que permite depurar programas a partir da linha de comando, o que é útil nos casos em que você não tem acesso a uma GUI (Interface gráfica do usuário).

É importante entender como o programa funciona para fazer uma depuração eficaz. Nossa implementação 'quicksort' executa uma implementação recursiva de quicksort e realiza a classificação se o elemento for menor que o pivô e assumindo que o primeiro elemento é o elemento "maior". A classificação em si ocorre na função `partition`.

Abra a aba **Shell** e compile o programa:

```bash
make Quicksort
```

{{% notice note %}}
Quando o programa é compilado, os sinalizadores: `-g` e `-Og` são usados. O primeiro diz ao compilador para adicionar **informações de depuração**, o que significa que sem esse sinalizador, o gdb não seria capaz de depurar o programa. A segunda diz ao compilador para otimizar o programa de uma forma que não afete a estrutura de execução do programa. Sem `-Og`, o compilador poderia potencialmente otimizar parte do seu código, então um depurador não seria tão eficaz.

É importante observar a segunda bandeira. Para depuração, você deve **SEMPRE** certificar-se de que o compilador faça otimizações mínimas em seu código, pois as otimizações podem mudar drasticamente a forma como o código é executado!
{{% /notice %}}

Execute `gdb examples/Quicksort`. Isso abrirá a interface de linha de comando do GDB. Para depurar um programa com `gdb` você pode usar `gdb <name of program>`.

Você deverá ver algo assim:

|![Executando GDB no arquivo 'Quicksort'.](../resources/w4-01.png)|
|:--:|
|Figura 2: Executando o GDB no arquivo 'Quicksort'.|

Certifique-se de que o GDB diga que está `Lendo símbolos de ./examples/Quicksort...`, caso contrário você não anexou o programa ao GDB. Você pode sair do GDB digitando o comando `quit` (ou qualquer um de seus prefixos: `q` funciona) como se fosse a linha de comando normal do shell.

Para depurar o programa, precisamos executá-lo no GDB. Digite o comando `run` (ou `r`). Isso executará o programa como se você o executasse na linha de comando normal.

O programa primeiro imprime o conteúdo do array a ser classificado: um array de números não ordenados. Em seguida, ele executa o algoritmo de classificação e, finalmente, imprime o array classificado. Você pode ver como o array é alterado durante a classificação!

No entanto, parece que a classificação não está acontecendo conforme o esperado.

Vamos usar uma das ferramentas mais importantes que os depuradores oferecem: **pontos de interrupção**. Um ponto de interrupção informa ao depurador para pausar o programa sempre que ele atingir aquela linha de código durante a execução. Isso permite que você veja o que está acontecendo no programa em tempo real. Observe que o depurador não executa a linha de código em que o ponto de interrupção está até que você continue executando o programa.

Para criar um ponto de interrupção no GDB, use a seguinte sintaxe de comando:
`break <filename:line>`. Por exemplo, para criar um ponto de interrupção na linha 15 do arquivo **quicksort.c**, use o seguinte comando:
```bash
break quicksort.c:27
```

Se você tentar executar o programa agora usando `run`, o programa irá parar quando atingir o ponto de interrupção na linha 20 e mostrará algumas informações sobre o programa, como a linha de código em que está parando.

Enquanto o programa está pausado, você pode ver os valores das variáveis. Podemos usar o comando `print` para avaliar uma expressão e imprimi-la.

Por exemplo, `print high` imprimirá a variável `high`. Você pode ser mais elaborado do que isso usando expressões inteiras - `print hi + 2` irá avaliar `hi + 2` e imprimi-lo.

Você pode percorrer manualmente seu código chamando `next` (ou `n`), o que dirá ao depurador para avançar para a próxima linha de código **sem pular para uma chamada de função**. O comando `step` moverá o depurador para a primeira linha de código em uma chamada de função.

Você pode experimentar criando um ponto de interrupção dentro da função `partition` e tentar usar `next` ou `step` para ver em qual linha de código você chegará a seguir.

Se quiser que seu código continue em execução até o próximo ponto de interrupção, você pode usar o comando `continue` (ou `c`). Finalmente, para excluir um ponto de interrupção, você pode usar o comando `delete` (ou `d`) seguido do número do ponto de interrupção, que você vê quando define o ponto de interrupção.

Outro comando útil para saber é `bt` ou `backtrace`. Isso mostra a pilha de chamadas ou quais funções foram chamadas para chegar à linha de código em que o programa foi interrompido.

Isso pode ajudar a rastrear a ordem de execução. Também funciona bem para descobrir como um programa travou, vendo as funções que levaram à falha.

Existem muitos comandos que o GDB oferece. Recomendamos o uso de uma página de dicas que você pode encontrar online.

* [Referência 1](https://gist.github.com/rkubik/b96c23bd8ed58333de37f2b8cd052c30)
* [Referência 2](https://cs.brown.edu/courses/cs033/docs/guides/gdb.pdf)

### Colocando pontos de interrupção de maneira eficaz

Primeiro, vamos identificar onde ocorre toda a classificação dos elementos. Você sabe onde a classificação está acontecendo?
{{% expand "***Resposta***" %}}
A classificação ocorre dentro do loop `for` e no final do processo quando o pivô é alterado pelo elemento "maior".
{{% /expand %}}
<br/>

Coloque um ponto de interrupção dentro do loop `for` e execute o programa:
```bash
(gdb) break quicksort.c:27
(gdb) run 
```

    Você precisa encontrar as variáveis defeituosas que fazem com que seu programa não funcione conforme o esperado. Experimente e veja se você consegue identificar o problema!

    {{% expand "***Dica: fique de olho em como as variáveis no loop mudam.***" %}}
    Como colocamos o ponto de interrupção dentro do loop, a cada iteração devemos ver os valores `p1` e `p2` mudarem.

    Tente imprimir essas variáveis sempre que o depurador interromper seu código.

```bash
(gdb) disp p1
(gdb) disp p2
```
{{% /expand %}}
{{% expand "***Resposta***" %}}
A variável `p1` não está sendo aumentada quando um número menor que o pivô é encontrado. Lembre-se de que nossa versão assumirá que cada vez que um elemento menor for encontrado, o ponteiro para o elemento maior deverá ser atualizado

Adicione `p1++;` após a instrução `swap` na linha 27.

|![Corrigindo nosso algoritmo quicksort.](../resources/debugging_process_fixing_quicksort.svg)|
|:--:|
|Figura 3: Corrigindo nosso algoritmo quicksort.|

{{% /expand %}}
<br/>

Observe que todos os depuradores devem ter os mesmos conceitos básicos: eles permitem que você percorra seu código enquanto ele é executado, em tempo real. Você quase sempre deve usar depuradores em vez de instruções de impressão. Você não vai se arrepender!

## Outro tipo de bug: erros de memória

Pesadelo do C/C++, os erros de memória são um dos tipos de bugs mais frustrantes que existem. Deixar de resolvê-los pode resultar em comportamento indefinido (bugs não replicáveis!) e vazamentos de memória. Portanto, corrigi-los é uma grande prioridade.

{{% notice note %}}

Um vazamento de memória acontece quando seu programa aloca memória usando malloc ou calloc (ou outras chamadas de alocação de memória) e não a libera. A memória está “perdida” - não há maneira (fácil) de recuperá-la até que o programa termine.

{{% /notice %}}

Felizmente, as pessoas também escreveram programas para ajudá-lo a encontrar erros de memória, e um desses programas é o `valgrind`. Valgrind é uma ferramenta que não apenas procura erros de memória, mas mostra exatamente onde os erros ocorrem no seu código.
Vamos usar valgrind para descobrir onde ocorrem erros de memória. Como exemplo, temos uma implementação rudimentar de um vetor em C, que é a versão da biblioteca padrão C++ de um array de tamanho dinâmico.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Iniciar Replit</a>

Primeiro faça o programa usando

```bash 
make Vector
``` 

Agora execute-o usando

```bash
examples/Vector
```

Observe que há um erro chamado 'double free'! Este é um tipo de memória causado pela chamada de `free` a um ponteiro duas vezes.

Agora, em vez de usar gdb, use valgrind para verificar como a memória é alocada e usada. Execute o comando:

```bash
valgrind --tool=memcheck leak-check=full examples/Vector
```

Deve ser aparente que o valgrind detectou alguns erros, talvez relacionados ao double free (observe que o `ERROR SUMMARY` na parte inferior tem alguns erros detectados!).

Vamos dar uma olhada em alguns dos erros.

![Erro Valgrind 1](../resources/w4-02.png)

O erro mostrado acima é chamado de leitura inválida, geralmente porque você está lendo a memória que foi liberada em outro bloco. Valgrind permite ver onde a memória é liberada e alocada:

![Erro Valgrind 2](../resources/w4-03.png)

O bloco de memória foi alocado pela função `malloc` em `createVectorInt`, que foi chamada na função `main`. O bloco foi `free` pela função `free` chamada na função `pushBack`.

Finalmente, no resumo do heap, você pode ver que houve 96 bytes que foram ‘perdidos’ – em outras palavras, houve um vazamento de memória. Isso aconteceu porque esquecemos de chamar `deleteVectorInt` no vetor no final da função principal.

![Erro Valgrind 3](../resources/w4-04.png)

Valgrind fornece uma infinidade de informações que você pode usar para localizar erros de memória em seus programas C e C++. Ele não apenas informa onde os erros estão acontecendo, mas também onde os blocos de memória são alocados e posteriormente liberados (ou não liberados, no caso de vazamento de memória). Você consegue encontrar o bug que causa todas as leituras inválidas no exemplo do vetor?

{{% expand "*Click to show answer*"%}}
Observe que quando estamos realocando o array, esquecemos de atualizar `list->__arr`! Isso significa que estamos escrevendo para um ponteiro que foi liberado, o que explica as leituras e gravações inválidas que vemos no Valgrind, as liberações duplas (já que chamamos free naquele ponteiro já liberado) e os vazamentos de memória (já que nós nunca mais consulte os arrays recém-alocados)! Tudo o que você precisa fazer é definir o ponteiro para o novo array atualizado, o que deve corrigir o erro.
{{% /expand %}}
<br/>

Nos exercícios, você deverá corrigir quaisquer erros de memória que apareçam.
