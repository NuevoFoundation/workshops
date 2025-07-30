---
title: "Exercício 2 - Implementação de Heap Binário"
difficulty: "Intermediate"
weight: 10
draft: false
---

Um heap binário é uma estrutura de dados importante, usada com mais frequência para implementar um tipo de dado chamado fila de prioridade (priority queue). Ele também é usado conceitualmente em um algoritmo de ordenação chamado heapsort. Sua característica distinta é a consulta em `O(1)` para o maior ou menor valor dentro de seus elementos, dependendo de qual tipo de heap estamos falando.

## A Teoria

O heap binário é conceitualmente uma árvore binária completa. Isso significa que os nós são adicionados à árvore em ordem de nível (level order), e a profundidade da árvore só aumenta quando não há mais espaço no nível mais profundo.

Além dessa restrição estrutural, ele segue a propriedade de ordenação do heap: os filhos de um nó devem ter valor maior ou menor que o nó em si. Em um **min-heap**, os filhos devem ser maiores. Em um **max-heap**, os filhos devem ser menores. Isso significa, na prática, que a raiz deve conter o maior elemento do heap.

A seguir está um exemplo de um heap binário máximo (max-heap), que será o tipo de heap no qual focaremos neste exercício.

![Binary Heap Example](../resources/e2-01.png "Exemplo de max-heap binário")

Você pode notar que cada nó tem 2 ou nenhum filho, exceto o nó mais à direita. Os nós são preenchidos da esquerda para a direita antes de iniciar uma nova linha. Todos os filhos são menores que seus respectivos pais.

{{% notice note %}}
Duplicatas são facilmente tratadas neste esquema. Precisamos apenas manter que todos os filhos sejam **menores ou iguais** ao seu pai.
{{% /notice %}}

Podemos usar um array para representar essa estrutura de dados. Um nó `i` pode ser acessado por seu índice `i`. Para acessar seu filho à esquerda, multiplica-se por 2. Para acessar o filho à direita, multiplica-se por 2 e soma-se 1. O diagrama a seguir ilustra isso:

![Binary Heap Array](../resources/e2-02.png "Imagem de um heap binário e seu array correspondente")

### Adicionando a um Heap Binário

Para adicionar um elemento, primeiro o colocamos no próximo espaço disponível. Em seguida, corrigimos retroativamente quaisquer problemas causados por isso, "subindo" o elemento e trocando nós até que ele atinja uma posição estável, ou seja, seu pai seja maior ou igual a ele.

O diagrama abaixo ilustra esse processo para adicionar `34` ao heap binário de exemplo.
1. Inserimos `34` provisoriamente no último espaço (círculo verde, passo 1).
2. Em seguida, comparamos com seu pai (seta azul) e verificamos que `34 > 19`. Portanto, trocamos os dois nós.
3. No passo 2, comparamos com `85` e verificamos que `34 < 85`, o que indica que terminamos.

![Binary Heap Add](../resources/e2-03.png "Ilustração do processo de adicionar a um heap binário")

### Removendo o Máximo do Heap

Um heap binário máximo também precisa oferecer suporte ao `removeMax`, que remove o maior elemento do heap. Felizmente, o maior elemento é simplesmente a raiz; no entanto, precisamos corrigir os problemas causados por esse novo "buraco" que criamos.

Para preencher esse buraco, pegamos o último elemento e o colocamos no topo. Assim como antes, corrigimos retroativamente quaisquer problemas causados por isso. Repetimos trocas para baixo com o maior filho até que o elemento atinja uma posição estável no heap.

O diagrama abaixo mostra como a remoção do máximo ocorre.
1. A raiz é removida e substituída pelo elemento mais à direita da última linha.
2. No passo 1, comparamos `19` e `42`. Como `42` é o maior dos dois, comparamos `12` e `42` (seta azul) e verificamos que `12 < 42`. Assim, trocamos `12` com `42`.
3. Repetimos o processo no passo 2. Verificamos que `28` é o maior dos dois filhos e, como `12 < 28`, trocamos novamente.
4. Finalmente, chegamos a uma posição estável no passo 3.

![Binary Heap Removal](../resources/e2-04.png "Ilustração do processo de remover o máximo de um heap binário")

## A Implementação

Na nossa implementação, começamos os índices a partir de `1` para economizar um pouco de cálculo. Assim, a raiz do heap binário está localizada em `heap.__arr[1]` em vez de `heap.__arr[0]`. Todas as funções possuem comentários explicativos no arquivo `binary_heap.h`.

A implementação **será** testada com duplicatas, então certifique-se de tratá-las corretamente. Além disso, mesmo que o heap tenha tamanho fixo, os dados são armazenados na heap. Certifique-se de que a memória seja liberada com `free`!

{{% notice tip %}}
As funções `createHeap` e `heapPrint` já foram testadas e estão funcionando corretamente.
{{% /notice %}}

Seu objetivo é executar `make test` e não ter erros. Use qualquer ferramenta, como `gdb`, `valgrind` etc., a seu favor. Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-2" target="_blank">Abrir Replit</a>
