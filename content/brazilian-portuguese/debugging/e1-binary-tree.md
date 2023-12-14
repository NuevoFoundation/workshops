---
title: "Exercício 1 - Implementação de Árvore Binária"
difficulty: "Intermediário"
weight: 9
draft: false
---

A árvore binária é uma das estruturas de dados mais simples da ciência da computação e as ideias que ela utiliza são muito úteis. Ele armazena dados classificáveis e possui um tempo de execução ideal de O(log n) para pesquisar, adicionar e remover elementos. Porém, esse desempenho depende muito da ordem em que os elementos são adicionados ou retirados, o que limita seu uso à discussão acadêmica.

## A teoria

Uma árvore binária consiste em muitos nós interligados. Cada nó possui um nó pai, ou seu antecessor, e até dois nós filhos. Um nó que não tem filhos é chamado de folha.

Em uma árvore binária **enraizada**, um nó é especificado como raiz, o que significa que não tem pai. No diagrama abaixo, o nó A é o pai dos nós B e C. Da mesma forma, B é o pai de D e E. A é a raiz e D, E, F e G são folhas.

![Fundamentos sobre árvore binária](../resources/e1-01.png)

A árvore binária é uma estrutura de dados recursiva. Cada nó pode conter de 0 a 2 filhos e 1 pai. Podemos nos limitar a observar uma subárvore específica da árvore binária original sem nos preocupar muito com a árvore inteira como um todo, e essa subárvore é uma árvore binária válida por si só.

### Usando a árvore binária

Podemos usar uma árvore binária para armazenar informações sobre a ordem de uma lista. Cada nó pode armazenar um valor e seus filhos devem ser ordenados da seguinte forma:
- O filho esquerdo deve ter valor menor que seu pai.
- O filho certo deve ter um valor maior que seu pai.
- Valores duplicados podem ser armazenados à esquerda ou à direita; entretanto, é importante garantir que as duplicatas sejam armazenadas de maneira consistente. Portanto, se os ingênuos forem armazenados à esquerda, eles serão armazenados apenas à esquerda e da mesma forma à direita.

O diagrama a seguir mostra um exemplo de árvore binária. Observe que os filhos da esquerda são todos menores que o pai, enquanto os filhos da direita são maiores. Além desta propriedade de ordenação da árvore, pode-se observar que não há nenhuma exigência estrita quanto ao formato da árvore.

![Exemplo de árvore binária 1](../resources/e1-02.png) 

### Adicionando a uma árvore binária

Para adicionar um elemento, precisamos descobrir onde ele se encaixa na árvore. Para fazer isso, realizaremos uma **travessia de árvore**. A ideia é passar de nó em nó até encontrarmos um “ponto” para o elemento que queremos adicionar. Primeiro, começamos pela raiz. Em seguida, comparamos o valor na raiz com o elemento a ser adicionado. Se o elemento for maior, vá para o filho direito. Caso contrário, vá para a esquerda.

Podemos repetir esse processo novamente, até encontrarmos um nó que possa ser o pai do novo elemento. O diagrama abaixo ilustra a adição de 7 a uma árvore binária.

![Adição de árvore binária](../resources/e1-03.png)

1. Na etapa 1 (azul), comparamos `10` e `7`. Como `7 <10`, descemos pelo filho esquerdo.
2. Na etapa 2 (verde), comparamos `5` e `7`. `7 > 5`, então prosseguimos para seu filho direito, apenas para descobrir que `5` não tem filho certo! Assim, podemos inserir `7` nesse local.

### Removendo de uma árvore binária

Para remover um elemento, é um pouco mais complicado. Primeiro precisamos encontrar o elemento que estamos removendo. Porém, uma vez removido, precisaremos preencher o “buraco” que fizemos na árvore. Não podemos simplesmente preencher o buraco com qualquer elemento simples; precisamos manter a propriedade de ordenação da árvore binária. Um elemento conveniente a ser obtido é o elemento mais profundo, mais à esquerda, da subárvore direita do buraco.

O diagrama abaixo mostra como remover elementos em vários casos. As linhas pontilhadas indicam que a conexão pode ou não existir. Portanto, no caso 2, por exemplo, o pai azul pode não existir se o nó a ser removido for a raiz da árvore.
- No primeiro caso, o nó não tem filhos - podemos removê-lo com segurança e sem problemas.
- No segundo caso, o nó possui 1 filho à esquerda ou à direita. Podemos deslizar o filho até o local anterior deste nó. Isso funciona tanto para o lado esquerdo quanto para o direito.
- No terceiro caso, o nó tem 2 filhos. Existem algumas maneiras de fazer isso, mas a forma que usaremos é pegar o menor elemento da subárvore direita e inseri-lo no “buraco” que faremos. Se esse elemento tiver um filho certo (o nó verde), precisamos deslizar esse nó para cima, para que seu pai anterior (laranja) se torne o pai desse filho.

![Remoção da árvore binária](../resources/e1-04.png)

O terceiro caso é difícil de corrigir devido ao número de casos extremos que existem. Por exemplo, o menor valor da subárvore certa poderia ser o próprio filho certo. Ou o filho mínimo não pode conter nenhum filho certo.

## A implementação

Na equipe Nuevo, criamos uma implementação para a árvore binária. Porém, o programador foi desleixado e não verificou seu trabalho, então há erros e bugs! Para este exercício, você corrigirá esses bugs e erros. **Seu objetivo é que todos os testes sejam aprovados.**

* Para depurar o código, você pode usar o comando `make debug`. Isto irá regenerar os arquivos de depuração necessários no diretório `debug/` e executar `gdb` para você.
* Para usar `valgrind`, você pode executar o comando `make valgrind`. Isto irá recompilar seu código e executar `valgrind` com os argumentos apropriados.
* Para testar o código, você pode clicar no botão verde "executar" ou usar o comando `make test`.

Vamos dar uma olhada no que o código existente está fazendo. Primeiro, a estrutura de dados da árvore binária é definida no arquivo `binary_tree.h`. Ele pode ser referenciado como um tipo chamado `BinaryTree`. Os dados são armazenados em um tipo chamado `BTNode`, que representa um nó de árvore binária.

A própria árvore contém um *nó sentinela*, o que facilita o manuseio de outras operações da árvore. Para obter a raiz real da árvore, precisamos fazer referência ao filho esquerdo do sentinela. Assim, o pai da raiz é o nó sentinela, em vez de `NULL`.

![Estruturas de dados de implementação](../resources/e1-05.png)

{{% notice note %}}
Usar um sentinela nos permite não nos preocupar com operações que envolvem a atualização do pai. Por exemplo, se removermos um nó, precisaremos atualizar tanto o nó filho do ponteiro pai quanto o ponteiro pai do nó filho. Com um sentinela, não nos preocuparíamos com o fato de o ponteiro pai ser `NULL`. Isto leva a um ponto de confusão - o nome da sentinela é `__root` em `BinaryTree`! Parece que o programador não estava prestando atenção quando escreveu isso...
{{% /notice %}}

Cada nó é alocado no heap usando `malloc`, então você precisa ter certeza de que não há vazamentos de memória!

As operações de árvore também são definidas em `binary_tree.h`. Se você não tiver certeza do que uma operação de árvore faz, leia sua descrição lá. Também incluiremos algumas fotos de referência abaixo.

{{% notice tip %}}
Existem várias maneiras corretas de implementar `treeRemove`. Nossos testes não discriminarão entre diferentes formas (corretas) de implementar o comportamento. Contanto que a propriedade da árvore binária seja satisfeita, ela deverá funcionar. A implementação que temos usa uma operação `findMin`, que essencialmente procura o menor elemento na árvore binária. Em outras palavras, o nó inferior esquerdo da árvore.
{{% /notice %}}

Mais uma vez, a implementação não precisa lidar com duplicatas na árvore. Além disso, não é necessário implementar nenhuma das funções `print` da árvore.

Boa sorte!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Exercise-1" target="_blank">Iniciar Replit</a>

