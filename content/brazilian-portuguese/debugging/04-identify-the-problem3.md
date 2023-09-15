---
title: "Passo 1 - Encontrando o problema (Parte 3)"
difficulty: "Intermediário"
weight: 5
draft: false
---

## Debuggers

A depuração de código é um problema tão comum e generalizado que as pessoas criaram programas inteiros projetados para ajudar outros programadores a depurar com mais eficiência. Estes são adequadamente nomeados **depuradores**, e há muitos depuradores que funcionam para a linguagem de programação C. Vamos dar uma olhada em 'gdb', um depurador comum usado com a linha de comando.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Executar Replit</a>

Para os nossos exemplos, utilizaremos o <a href="https://www.youtube.com/watch?v=SLauY6PpjW4" target="_blank">Algoritmo Classificação rápida</a> .

**Quicksort** é um algoritmo que classifica uma matriz selecionando primeiro um elemento na matriz como um `pivô`.

Em seguida, os elementos são organizados com base em uma das seguintes condições:
- Elementos inferiores ao pivô.
- Elementos maiores que o pivô.

Quando a classificação é feita, o mesmo processo é chamado recursivamente nas partições superior e inferior da matriz, tomando o pivô como o ponto do meio.

{{% notice note %}}
Nossa versão do quicksort assume que o elemento mais à esquerda é o elemento "maior" e o elemento mais à direita é o pivô dentro da partição.
{{% /notice %}}

|![Classificação rápida usando o pivô como o elemento mais à direita.](../resources/debugging_process_quicksort.svg)|
|:--:|
|Figura 1: Quicksort usando o elemento mais à direita como pivô e assumindo que o elemento mais à esquerda é o elemento "maior".|

[GDB (GNU Project Debugger)](https://sourceware.org/gdb/) é um poderoso depurador que permite depurar programas a partir da linha de comando, o que é útil nos casos em que você não tem acesso a uma GUI (Graphical User Interface).

É importante entender como o programa funciona para fazer uma depuração eficaz. Nossa implementação 'quicksort' executa uma implementação recursiva de quicksort e executa a classificação se o elemento for menor que o pivô e assumindo que o primeiro elemento é o elemento "maior". A classificação em si ocorre na função `partição`.

Abra a guia **Shell** e compile o programa:

```bash
make Quicksort
```

{{% notice note %}}
Quando o programa é compilado, os sinalizadores: `-g` e `-Og` são usados. O primeiro diz ao compilador para adicionar **informações de depuração**, o que significa que, sem esse sinalizador, o gdb não seria capaz de depurar o programa. O segundo diz ao compilador para otimizar o programa de uma forma que não afetaria a estrutura de execução do programa. Sem `-Og`, o compilador poderia potencialmente otimizar parte do seu código, de modo que um depurador não seria tão eficaz.

É importante ficar atento à segunda bandeira. Para depuração, você deve **SEMPRE** certificar-se de que o compilador faça otimizações mínimas para o seu código, porque as otimizações podem mudar drasticamente como o código é executado!
{{% /notice %}}

Execute `gdb examples/Quicksort`. Isso abrirá a interface de linha de comando GDB. Para depurar um programa com `gdb` você pode usar `gdb <nome do programa>`.

Você deve ver algo assim:

|![Executando GDB no arquivo 'Quicksort'.](../resources/w4-01.png)|
|:--:|
|Figura 2: Executando o GDB no arquivo 'Quicksort'.|

Certifique-se de que o GDB diz que é `Lendo símbolos de ./examples/Quicksort...`, caso contrário, você não anexou o programa ao GDB. Você pode sair do GDB digitando o comando `quit` (ou qualquer um de seus prefixos: `q` funciona) como se fosse a linha de comando normal do shell.

Para depurar o programa, precisamos executá-lo a partir do GDB. Digite o comando `run` (ou `r`). Isso executará o programa como se você o executasse a partir da linha de comando normal.

O programa primeiro imprime o conteúdo da matriz a ser classificada: uma matriz de números não ordenados. Em seguida, ele executa o algoritmo de classificação e, finalmente, imprime a matriz classificada. Você pode ver como a matriz é deslocada durante a classificação!

No entanto, parece que a triagem não está acontecendo como esperado.

Vamos usar uma das ferramentas mais importantes que os depuradores oferecem: **breakpoints**. Um ponto de interrupção diz ao depurador para pausar o programa sempre que ele atingir essa linha de código enquanto ele está sendo executado. Isso permite que você dê uma olhada no que está acontecendo dentro do programa em tempo real. Observe que o depurador não executa a linha de código em que o ponto de interrupção está até que você continue executando o programa.

Para criar um ponto de interrupção no GDB, use a seguinte sintaxe de comando:
`break <filename:line>`. Por exemplo, para criar um ponto de interrupção na linha 15 no arquivo **quicksort.c**, use o seguinte comando:
```bash
break quicksort.c:27
```

Se você tentar executar o programa agora usando `run`, o programa será interrompido quando atingir o ponto de interrupção na linha 20 e mostrará algumas informações sobre o programa, como a linha de código em que está parando.

Enquanto o programa estiver pausado, você pode ver os valores das variáveis. Podemos usar o comando `print` para avaliar uma expressão e imprimi-la.

Por exemplo, `print high` imprimirá a variável `high`. Você pode ser mais elaborado do que isso usando expressões inteiras - `print hi + 2` avaliará `hi + 2` e imprimirá. 

Você pode avançar manualmente pelo seu código chamando `next` (ou `n`), que dirá ao depurador para avançar para a próxima linha de código **sem pular para uma chamada de função**. O comando `step` moverá o depurador para a primeira linha de código em uma chamada de função.

Você pode experimentar criando um ponto de interrupção dentro da função `partition` e tentando usar `next` ou `step` para ver em qual linha de código você pousará em seguida.

Se você quiser que seu código continue sendo executado até o próximo ponto de interrupção, pode usar o comando `continue` (ou `c`) . Finalmente, para excluir um ponto de interrupção, você pode usar o comando `delete` (ou `d`) seguido pelo número do ponto de interrupção, que você vê quando define o ponto de interrupção.

Outro comando útil para saber é `bt` ou `backtrace`. Isso mostra a pilha de chamadas, ou quais funções foram chamadas para chegar à linha de código em que o programa está parado. 

Isso pode ajudar a rastrear a ordem de execução. Também funciona bem para descobrir como um programa travou ao ver as funções que levaram ao travamento. 

Existem muitos comandos que o GDB oferece. Recomendamos usar uma folha de dicas que você pode encontrar online.

* [Referência 1](https://gist.github.com/rkubik/b96c23bd8ed58333de37f2b8cd052c30)
* [Referência 2](https://cs.brown.edu/courses/cs033/docs/guides/gdb.pdf)

### Colocando pontos de interrupção de forma eficaz

Primeiro, vamos identificar onde ocorre toda a classificação de elementos. Você sabe onde a triagem está acontecendo?
{{% expand "***Resposta***" %}}
A classificação ocorre dentro do loop `for` e no final do processo, quando o pivô é alterado com o elemento "maior".
{{% /expand %}}
<br/>

Coloque um breakpoint (ponto de interrupção) dentro do loop `for` e execute o programa:
```bash
(gdb) break quicksort.c:27
(gdb) run 
```

Você precisa encontrar as variáveis defeituosas que fazem com que seu programa não funcione conforme o esperado. Tente e veja se você consegue identificar o problema!

{{% expand "***Dica: Fique de olho em como as variáveis no loop mudam.***" %}}
Como colocamos o ponto de interrupção dentro do loop, em cada iteração devemos ver os valores `p1` e `p2` mudarem.

Tente imprimir essas variáveis sempre que o depurador parar seu código.

```bash
(gdb) disp p1
(gdb) disp p2
```
{{% /expand %}}
{{% expand "***Resposta***" %}}
A variável `p1` não está sendo incrementada quando um número menor que o pivô é encontrado. Lembre-se que nossa versão assumirá que cada vez que um elemento menor for encontrado, o ponteiro para o elemento maior deverá ser atualizado

Adicione `p1++;` após a instrução `swap` na linha 27.

|![Corrigindo nosso algoritmo de ordenação rápida.](../resources/debugging_process_fixing_quicksort.svg)|
|:--:|
|Figura 3: corrigindo nosso algoritmo de ordenação rápida.|

{{% /expand %}}
<br/>

Observe que todos os depuradores devem ter os mesmos conceitos básicos: eles permitem que você percorra seu código enquanto ele é executado, em tempo real. Você quase sempre deve usar depuradores sobre instruções de impressão. Você não vai se arrepender!

## Outro tipo de bug: erros de memória

Pesadelo de um C/C++, os erros de memória são um dos tipos mais frustrantes de bugs que existem. Deixar de resolvê-los pode resultar em comportamento indefinido (bugs não replicáveis!) e vazamentos de memória. Assim, consertá-los é uma grande prioridade.

{{% notice note %}}

Um vazamento de memória acontece quando o programa aloca memória usando malloc ou calloc (ou outras chamadas de alocação de memória) e não a libera. A memória é "perdida" - não há nenhuma maneira (fácil) de recuperá-la até que o programa termine.

{{% /notice %}}

Felizmente, as pessoas também escreveram programas para ajudá-lo a encontrar erros de memória, e um desses programas é o `valgrind`. Valgrind é uma ferramenta que não apenas procura por erros de memória, mas mostra exatamente onde os erros ocorrem em seu código.
Vamos usar o valgrind para descobrir onde ocorrem os erros de memória. Como exemplo, temos uma implementação rudimentar de um vetor em C, que é a versão da biblioteca padrão C++ de um array de tamanho dinâmico.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Executar Replit</a>

Primeiro faça o programa usando

```bash 
make Vector
``` 

Agora execute-o usando

```bash
examples/Vector
```

Observe que há um erro chamado 'double free'! Este é um tipo de memória causado pela chamada `free` para um ponteiro duas vezes.

Agora, em vez de usar gdb, use valgrind para verificar como a memória é alocada e usada. Execute o comando:

```bash
valgrind --tool=memcheck leak-check=full examples/Vector
```

Deve ser aparente que valgrind detectou alguns erros, talvez relacionados ao double free (observe que o `ERROR SUMMARY` na parte inferior tem alguns erros detectados!).

Vamos dar uma olhada em alguns dos erros.

![Erro Valgrind 1](../resources/w4-02.png)

O erro mostrado acima é chamado de leitura inválida, que geralmente ocorre porque você está lendo a memória que foi liberada em outro bloco. Valgrind permite que você veja onde a memória é liberada e alocada:

![Erro Valgrind 2](../resources/w4-03.png)

O bloco de memória foi alocado pela função `malloc` em `createVectorInt`, que foi chamada na função `main`. O bloco foi `livre`' pela função `livre` chamada na função `pushBack`.

Por fim, no resumo do heap, você pode ver que 96 bytes foram 'perdidos' - em outras palavras, houve um vazamento de memória. Isso aconteceu porque esquecemos de chamar `deleteVectorInt` no vetor no final da função principal.

![Erro Valgrind 3](../resources/w4-04.png)

Valgrind fornece uma infinidade de informações que você pode usar para caçar erros de memória em seus programas C e C++. Ele não apenas informa onde os erros estão acontecendo, mas também onde os blocos de memória são alocados e posteriormente liberados (ou não liberados, no caso de um vazamento de memória). Você consegue encontrar o bug que causa todas as leituras inválidas no exemplo de vetor?

{{% expand "*Clique para mostrar a resposta*"%}}
Observe que quando estamos realocando o array, esquecemos de atualizar `list->__arr`! Isso significa que escrevemos para um ponteiro que foi liberado, o que explica as leituras e gravações inválidas que vemos em Valgrind, os duplos frees (já que chamamos free naquele ponteiro já liberado) e os vazamentos de memória (já que nunca mais consulte os arrays recém-alocados)! Tudo o que você precisa fazer é definir esse ponteiro para o novo array atualizado, o que deve corrigir o erro.
{{% /expand %}}
<br/>

Nos exercícios, você será solicitado a corrigir quaisquer erros de memória que aparecerem.
