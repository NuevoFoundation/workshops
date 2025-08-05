---
title: "Exercício 1 - Implementação de Árvore Binária"
difficulty: "Intermediate"
weight: 9
draft: false
---

A árvore binária é uma das estruturas de dados mais simples da ciência da computação, e as ideias que ela usa são muito úteis. Ela armazena dados ordenáveis e possui um tempo de execução ótimo de O(log n) para busca, adição e remoção de elementos. No entanto, esse desempenho depende muito da ordem em que os elementos são adicionados ou removidos, o que limita seu uso a discussões acadêmicas.

## A Teoria

Uma árvore binária consiste em vários nós que estão ligados entre si. Cada nó tem um nó pai, ou seu predecessor, e até dois nós filhos. Um nó que não possui filhos é chamado de folha.

Em uma árvore binária **enraizada**, um nó é especificado como raiz, ou seja, ele não possui pai. No diagrama abaixo, o nó A é pai dos nós B e C. Da mesma forma, B é pai de D e E. A é a raiz, e D, E, F e G são folhas.

![Binary Tree Basics](../resources/e1-01.png "Árvore binária com labels indicando raiz, folhas, pai e filhos à esquerda e direita.")

A árvore binária é uma estrutura de dados recursiva. Cada nó pode conter de 0 a 2 filhos e 1 pai. Podemos nos limitar a olhar para uma subárvore específica da árvore binária original sem nos preocupar muito com a árvore inteira, e essa subárvore é uma árvore binária válida por si só.

### Usando a Árvore Binária

Podemos usar uma árvore binária para armazenar informações sobre a ordem de uma lista. Cada nó pode armazenar um valor, e seus filhos devem estar ordenados da seguinte forma:
- O filho da esquerda deve ter um valor menor que o seu pai.
- O filho da direita deve ter um valor maior que o seu pai.
- Valores duplicados podem ser armazenados à esquerda ou à direita; no entanto, é importante garantir que as duplicatas sejam armazenadas de forma consistente. Então, se os duplicados estiverem à esquerda, eles sempre ficarão à esquerda, e o mesmo vale para a direita.

O diagrama a seguir mostra um exemplo de árvore binária. Observe que os filhos à esquerda são todos menores que seus pais, enquanto os filhos à direita são maiores. Fora essa propriedade de ordenação da árvore, você pode ver que não há uma exigência rígida quanto ao formato da árvore.

![Binary Tree Example 1](../resources/e1-02.png "Exemplo de árvore binária em que os filhos à esquerda são menores que o pai e os filhos à direita são maiores.")

### Adicionando a uma Árvore Binária

Para adicionar um elemento, precisamos descobrir onde ele se encaixa na árvore. Para isso, realizaremos uma **travessia da árvore**. A ideia é ir de nó em nó até encontrarmos um “espaço” para o elemento que queremos adicionar. Primeiro, começamos na raiz. Em seguida, comparamos o valor da raiz com o elemento a ser adicionado. Se o elemento for maior, mova-se para o filho da direita. Caso contrário, mova-se para a esquerda.

Podemos repetir esse processo até encontrarmos um nó que possa ser o pai do novo elemento. O diagrama abaixo ilustra a adição do número 7 em uma árvore binária.

![Binary Tree Add](../resources/e1-03.png "Diagrama ilustrando o processo de adição do número 7 em uma árvore binária.")

1. No passo 1 (azul), comparamos `10` e `7`. Como `7 < 10`, seguimos para o filho da esquerda.
2. No passo 2 (verde), comparamos `5` e `7`. `7 > 5`, então seguimos para o filho da direita, mas percebemos que `5` não tem filho à direita! Assim, podemos inserir `7` nesse espaço.

### Removendo de uma Árvore Binária

Para remover um elemento, é um pouco mais complicado. Primeiro, precisamos encontrar o elemento a ser removido. Porém, ao removê-lo, precisaremos preencher o “buraco” que criamos na árvore. Não podemos simplesmente preencher esse buraco com qualquer elemento; precisamos manter a propriedade de ordenação da árvore binária. Um elemento conveniente para usar é o mais profundo e à esquerda da subárvore à direita do buraco.

O diagrama abaixo mostra como remover elementos em vários casos. As linhas pontilhadas indicam que a conexão pode ou não existir. Por exemplo, no caso 2, o nó pai azul pode não existir se o nó a ser removido for a raiz da árvore.
- No primeiro caso, o nó não tem filhos – podemos removê-lo sem problemas.
- No segundo caso, o nó tem 1 filho, seja à esquerda ou à direita. Podemos “subir” o filho para ocupar o espaço do nó removido. Isso funciona para ambos os lados.
- No terceiro caso, o nó tem 2 filhos. Há algumas formas de lidar com isso, mas usaremos a menor chave da subárvore da direita e a colocaremos no “buraco” que vamos criar. Se esse elemento tiver um filho à direita (o nó verde), precisamos mover esse nó para cima, de modo que seu antigo pai (laranja) se torne o pai desse filho.

![Binary Tree Removal](../resources/e1-04.png "Diagrama ilustrando os 3 casos de remoção de um elemento de uma árvore binária.")

O terceiro caso é complicado de acertar por causa do número de casos especiais. Por exemplo, o menor valor da subárvore direita pode ser o próprio filho direito. Ou, o filho mínimo pode não ter nenhum filho à direita.

## A Implementação

Na equipe Nuevo, criamos uma implementação para a árvore binária. No entanto, o programador foi descuidado e não revisou o código, então há erros e bugs! **Seu objetivo é corrigir esses bugs e erros para que todos os testes passem.**

* Para depurar o código, você pode usar o comando `make debug`. Isso irá regenerar os arquivos de debug necessários no diretório `debug/` e executar o `gdb` para você.
* Para usar o `valgrind`, você pode executar o comando `make valgrind`. Isso recompilará o código e executará o `valgrind` com os argumentos apropriados.
* Para testar o código, você pode clicar no botão verde "run", ou usar o comando `make test`.

Vamos dar uma olhada no que o código existente está fazendo. Primeiro, a estrutura de dados da árvore binária é definida no arquivo `binary_tree.h`. Ela pode ser referenciada como um tipo chamado `BinaryTree`. Os dados são armazenados dentro de um tipo chamado `BTNode`, que representa um nó da árvore binária.

A própria árvore contém um *nó sentinela*, que facilita outras operações da árvore. Para obter a raiz real da árvore, precisamos referenciar o filho esquerdo do sentinela. Assim, o pai da raiz é o nó sentinela, e não `NULL`.

![Implementation Data Structures](../resources/e1-05.png "Imagem de uma estrutura BinaryTree destacando o nó sentinela.")

{{% notice note %}}
Usar um sentinela nos permite não nos preocupar com operações que envolvem atualização do pai. Por exemplo, se removermos um nó, precisaríamos atualizar tanto o ponteiro do pai para o filho quanto o ponteiro do filho para o pai. Com um sentinela, não precisamos nos preocupar com o pai sendo `NULL`. Isso pode gerar confusão – o nome do sentinela é `__root` em `BinaryTree`! Parece que o programador não prestou atenção quando escreveu isso...
{{% /notice %}}

Cada nó é alocado na heap usando `malloc`, então você precisará garantir que não haja vazamentos de memória!

As operações da árvore são definidas também em `binary_tree.h`. Se você não tiver certeza sobre o que uma operação faz, leia a sua descrição lá. Também incluiremos algumas imagens de referência abaixo.

{{% notice tip %}}
Existem várias formas corretas de implementar `treeRemove`. Nossos testes não vão discriminar entre diferentes (corretas) formas de implementar o comportamento. Desde que a propriedade da árvore binária seja mantida, deve funcionar. A implementação que temos usa uma operação `findMin`, que basicamente busca o menor elemento na árvore binária. Em outras palavras, o nó mais à esquerda da árvore.
{{% /notice %}}

Mais uma vez, a implementação não precisa lidar com duplicatas na árvore. Além disso, não precisa implementar nenhuma das funções de `print` da árvore.

Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-1" target="_blank">Abrir Replit</a>
