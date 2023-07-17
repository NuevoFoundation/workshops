---
title: "Exercício 1 - Implementação de Árvore Binária"
difficulty: "Intermediário"
weight: 9
draft: false
---

A árvore binária é uma das estruturas de dados mais simples em ciência da computação e as ideias que ela usa são muito úteis. Armazena dados classificáveis e possui um tempo de execução ótimo de O(log n) para pesquisar, adicionar e remover elementos. No entanto, esse desempenho depende da ordem em que os elementos são adicionados ou removidos, o que limita seu uso à discussão acadêmica.

## A Teoria

Uma árvore binária consiste em muitos nós que estão ligados entre si. Cada nó tem um nó pai, ou seu predecessor, e até dois nós filhos. Um nó que não tem filhos é chamado de folha. 

Em uma árvore binária **enraizada**, um nó é especificado como raiz, o que significa que não tem pai. No diagrama abaixo, o nó A é o pai dos nós B e C. Da mesma forma, B é o pai de D e E. A é a raiz e D, E, F e G são folhas.


![Noções básicas da árvore binária](../resources/e1-01.png) 

The binary tree is a recursive data structure. Each node can contain 0-2 children, and 1 parent. We can limit ourselves to looking at a specific subtree of the original binary tree without worrying too much about the entire tree as a whole, and that subtree is a valid binary tree on its own.

### Usando a Árvore Binária

Podemos usar uma árvore binária para armazenar informações sobre a ordenação de uma lista. Cada nó pode armazenar um valor e seus filhos devem ser ordenados da seguinte maneira:
- O filho esquerdo deve ter valor menor que seu pai.
- O filho direito deve ter um valor maior que seu pai.
- Valores duplicados podem ser armazenados à esquerda ou à direita; no entanto, é importante garantir que os duplicados sejam armazenados de maneira consistente. Então, se os duplicados são armazenados à esquerda, eles são armazenados apenas à esquerda e o mesmo vale para a direita.

O diagrama a seguir mostra um exemplo de árvore binária. Observe que os filhos da esquerda são todos menores do que seu pai, enquanto os filhos da direita são maiores. Além dessa propriedade de ordenação da árvore, podemos ver que não há requisito estrito quanto à forma da árvore.

![Exemplo de Árvore Binária 1](../resources/e1-02.png) 

### Adicionando a uma Árvore Binária

Para adicionar um elemento, precisamos encontrar onde ele se encaixa na árvore. Para fazer isso, realizaremos uma **travessia de árvore**. A ideia é mover-se de nó em nó até encontrar um "lugar" para o elemento que queremos adicionar. Primeiro, começamos na raiz. Em seguida, comparamos o valor na raiz com o elemento a ser adicionado. Se o elemento for maior, mova-se para o filho da direita. Caso contrário, mova-se para a esquerda.

Podemos repetir esse processo novamente até encontrarmos um nó que possa ser o novo pai do elemento. O diagrama abaixo ilustra como adicionar 7 a uma árvore binária.

![Adicionar Árvore Binária](../resources/e1-03.png)

1. No passo 1 (azul), comparamos `10` e `7`. Como `7 < 10`, prosseguimos pelo filho da esquerda.
2. No passo 2 (verde), comparamos `5` e `7`. `7 > 5`, então prosseguimos pelo filho da direita, apenas para descobrir que `5` não tem filho da direita! Assim, podemos inserir `7` naquele lugar.

### Removendo de uma Árvore Binária

Para remover um elemento, é um pouco mais complicado. Primeiro precisamos encontrar o elemento que estamos removendo. No entanto, depois de removê-lo, precisaremos preencher o "buraco" que fizemos na árvore. Não podemos simplesmente preencher o buraco com qualquer elemento simples; precisamos manter a propriedade de ordenação da árvore binária. Um elemento conveniente para pegar é o elemento mais profundo e mais à esquerda da subárvore direita do buraco.

O diagrama abaixo mostra como remover elementos em vários casos. Linhas pontilhadas indicam que a conexão pode ou não existir. Então, no caso 2, por exemplo, o pai azul pode não existir se o nó a ser removido for a raiz da árvore.
- No primeiro caso, o nó não tem filhos - podemos removê-lo com segurança sem problemas.
- No segundo caso, o nó tem 1 filho à esquerda ou à direita. Podemos deslizar o filho para o antigo lugar deste nó. Isso funciona para ambos os lados esquerdo e direito.
- O terceiro caso, o nó tem 2 filhos. Existem algumas maneiras de fazer isso, mas a maneira que usaremos é pegar o menor elemento da subárvore direita e inseri-lo no "buraco" que faremos. Se esse elemento tiver um filho certo (o nó verde), precisamos deslizar esse nó para cima, de modo que seu antigo pai (laranja) se torne o pai desse filho.

![Remoção de Árvore Binária](../resources/e1-04.png)

O terceiro caso é complicado de corrigir devido ao número de casos extremos existentes. Por exemplo, o menor valor da subárvore certa pode ser o próprio filho certo. Ou, o filho mínimo não pode conter nenhum filho certo.

## A implementação

Na equipe Nuevo, criamos uma implementação para a árvore binária. No entanto, o programador foi desleixado e não verificou o trabalho deles, então há erros e bugs! Para este exercício, você corrigirá esses bugs e erros. **Seu objetivo é passar em todos os testes.**

* Para depurar o código, você pode usar o comando `make debug`. Isso regenerará os arquivos de depuração necessários no diretório `debug/` e executará o `gdb` para você.
* Para usar `valgrind`, você pode executar o comando `make valgrind`. Isso recompilará seu código e executará `valgrind` com os argumentos apropriados.
* Para testar o código, você pode clicar no botão verde "executar" ou usar o comando `make test`.

Vamos dar uma olhada no que o código existente está fazendo. Primeiro, a estrutura de dados da árvore binária é definida no arquivo `binary_tree.h`. Ele pode ser referenciado como um tipo chamado `BinaryTree`. Os dados são armazenados em um tipo chamado `BTNode`, que representa um nó de árvore binária.

A própria árvore contém um *nó sentinela*, que facilita o manuseio de outras operações da árvore. Para obter a raiz real da árvore, precisamos referenciar o filho esquerdo da sentinela. Assim, o pai da raiz é o nó sentinela, em vez de `NULL`.

![Estruturas de dados de implementação](../resources/e1-05.png)

{{% notice note %}}
O uso de um sentinela permite que não nos preocupemos com as operações que envolvem a atualização do pai. Por exemplo, se removermos um nó, precisaremos atualizar o nó filho do ponteiro pai e o ponteiro pai do nó filho. Com um sentinela, não nos preocuparíamos com o ponteiro pai ser `NULL`. Isso leva a um ponto de confusão - o nome do sentinela é `__root` em `BinaryTree`! Parece que o programador não estava prestando atenção quando o escreveu...
{{% /notice %}}

Cada nó é alocado no heap usando `malloc`, portanto, você precisará garantir que não haja vazamentos de memória!

As operações de árvore também são definidas em `binary_tree.h`. Se você não tiver certeza do que uma operação de árvore faz, certifique-se de ler sua descrição lá. Também incluiremos algumas imagens de referência abaixo.

{{% notice tip %}}
Existem várias maneiras corretas de implementar `treeRemove`. Nossos testes não discriminarão entre diferentes formas (corretas) de implementar o comportamento. Contanto que a propriedade da árvore binária seja satisfeita, ela deve funcionar. A implementação que temos usa uma operação `findMin`, que essencialmente procura o menor elemento na árvore binária. Em outras palavras, o nó mais à esquerda da árvore.
{{% /notice %}}

Mais uma vez, a implementação não precisa lidar com duplicatas dentro da árvore. Além disso, ele não precisa implementar nenhuma das funções `print` da árvore.

Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-1" target="_blank">Executar Replit</a>

