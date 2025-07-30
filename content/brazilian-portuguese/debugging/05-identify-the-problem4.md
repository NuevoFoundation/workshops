---
title: "Passo 1 - Encontrando o problema (Parte 4)"
difficulty: "Intermediate"
weight: 6
draft: false
---

## Outro Tipo de Bug: Erros de Memória

Um verdadeiro pesadelo em C/C++, erros de memória são um dos tipos de bugs mais frustrantes que existem. Se não forem corrigidos, podem resultar em comportamento indefinido (bugs que não se repetem!) e vazamentos de memória. Por isso, corrigi-los é uma prioridade enorme.

{{% notice note %}}

Um vazamento de memória acontece quando seu programa aloca memória usando `malloc` ou `calloc` (ou outras chamadas de alocação de memória) e não a libera. A memória fica “perdida” – não há um jeito (fácil) de recuperá-la até que o programa termine.

{{% /notice %}}

Felizmente, também existem programas feitos para te ajudar a encontrar erros de memória, e um desses programas é o `valgrind`. O Valgrind não apenas procura por erros de memória, mas também mostra exatamente onde os erros acontecem no seu código.
Vamos usar o valgrind para encontrar onde os erros de memória ocorrem. Como exemplo, temos uma implementação bem simples de um vetor em C, que é a versão da biblioteca padrão C++ de um array de tamanho dinâmico.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Primeiro, compile o programa usando:

`make Vector`

Agora rode com:

`examples/Vector`

Repare que existe um erro chamado **"double free"**! Esse é um tipo de erro de memória causado quando chamamos `free` para um ponteiro duas vezes.

Agora, em vez de usar o gdb, use o valgrind para verificar como a memória é alocada e usada. Rode o comando:

`valgrind --tool=memcheck --leak-check=full examples/Vector`

Você verá que o valgrind detectou alguns erros, talvez relacionados ao "double free" (note que o `ERROR SUMMARY` no final mostra alguns erros detectados!).

Vamos dar uma olhada em alguns desses erros.

![Erro Valgrind 1](../resources/w4-02.png "Captura de tela do erro no console com o texto 'Invalid read of size 8 at 0x484522D...'")

O erro mostrado acima é chamado de **"invalid read"**, que geralmente acontece porque você está tentando ler uma memória que já foi liberada em outro bloco. O Valgrind mostra onde essa memória foi liberada e onde foi alocada:

![Erro Valgrind 2](../resources/w4-03.png "Captura de tela do erro no console com o texto 'Address 0x4b74040 is 0 bytes inside a block of size 16 free'd...'")

O bloco de memória foi alocado pela função `malloc` na função `createVectorInt`, que foi chamada dentro da função `main`. Esse bloco foi liberado (`free`) pela função `free` chamada na função `pushBack`.

Por fim, no resumo do heap, você pode ver que 96 bytes foram "perdidos" – em outras palavras, houve um vazamento de memória. Isso aconteceu porque esquecemos de chamar `deleteVectorInt` no vetor no final da função main.

![Erro Valgrind 3](../resources/w4-04.png "Captura de tela do erro no console com o texto 'HEAP SUMMARY: in use at exit: 96 bytes in 2 blocks... 96 bytes in 2 blocks are definitely lost in loss record...'")

O Valgrind oferece um monte de informações que você pode usar para caçar erros de memória nos seus programas C e C++. Ele não só informa onde os erros estão acontecendo, mas também onde os blocos de memória foram alocados e depois liberados (ou não liberados, no caso de vazamentos de memória). Você consegue encontrar o bug que causa todas as leituras inválidas no exemplo do vetor?

{{% expand "**Clique para ver a resposta**"%}}
Perceba que, quando estamos realocando o array, esquecemos de atualizar `list->__arr`! Isso significa que estamos escrevendo em um ponteiro que já foi liberado, o que explica as leituras e escritas inválidas que vemos no Valgrind, os "double frees" (já que chamamos `free` nesse ponteiro já liberado) e os vazamentos de memória (já que nunca usamos os arrays recém-alocados de novo)! Tudo o que você precisa fazer é atualizar esse ponteiro para o novo array, e isso deve corrigir o erro.
{{% /expand %}}
<br/>

Nos exercícios, você vai precisar corrigir todos os erros de memória que aparecerem.
