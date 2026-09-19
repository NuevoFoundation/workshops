---
title: "Depuração - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este gabarito cobre todos os erros das seções do tutorial e fornece implementações corretas para os três exercícios. Os erros do tutorial são mostrados com blocos expansíveis nas páginas de atividades, mas aqui tudo é consolidado como referência para o professor.

**Nota:** As implementações dos exercícios abaixo são baseadas nos algoritmos descritos no workshop. O código inicial em Replit pode usar nomes de variáveis ou assinaturas de funções ligeiramente diferentes. A lógica e a abordagem são as mesmas.
{{% /notice %}}

## Erros na Seção do Tutorial

### Erro de Pesquisa Binária (Parte 2)

**O erro:** A chamada recursiva para pesquisar a metade inferior da matriz busca incorretamente a metade superior.

**A correção:** Altere os argumentos da chamada recursiva para que a pesquisa na metade inferior use `lo` e `middle - 1`:

```c
// COM ERRO: busca a metade superior em vez da inferior
return rbin_search(arr, middle + 1, hi, element);

// CORRIGIDO: busca a metade inferior corretamente
return rbin_search(arr, lo, middle - 1, element);
```

### Erro em Quicksort (Parte 3)

**O erro:** O ponteiro `p1` (que rastreia o elemento "maior") não é incrementado após trocar um elemento menor na posição correta.

**A correção:** Adicione `p1++;` após a instrução de troca dentro do laço:

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // ESTA LINHA ESTAVA FALTANDO
}
```

### Erro de Memória no Vetor (Parte 4)

**O erro:** Ao realocar o array em `pushBack`, o código esquece de atualizar `list->__arr` para apontar para a nova memória. Isso causa:
- Leituras/gravações inválidas (acessando memória liberada)
- Liberações duplas (liberar o mesmo ponteiro duas vezes)
- Vazamentos de memória (a memória recém-alocada nunca é referenciada)

**A correção:** Após a realocação, atualize o ponteiro:

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // ESTA LINHA ESTAVA FALTANDO
```

Também adicione a chamada de `deleteVectorInt` ao final do main para evitar vazamentos de memória.

## Exercício 1: Árvore Binária

Uma implementação correta de árvore binária em C. A árvore usa um nó sentinela onde a raiz real é o filho esquerdo do sentinela.

### Operações principais

**Adicionar na Árvore** - percorrer para encontrar a posição correta e, então, inserir:

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Árvore vazia: insira como raiz (filho esquerdo do sentinela)
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Percorrer para encontrar o ponto de inserção
    BTNode *current = tree->__root->left;
    while (current != NULL) {
        if (value < current->data) {
            if (current->left == NULL) {
                current->left = newNode;
                newNode->parent = current;
                return;
            }
            current = current->left;
        } else {
            if (current->right == NULL) {
                current->right = newNode;
                newNode->parent = current;
                return;
            }
            current = current->right;
        }
    }
}
```

**Encontrar Mínimo** - ir o mais à esquerda possível:

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Remover da Árvore** - lidar com 3 casos (0, 1 ou 2 filhos):

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Caso 1: Sem filhos (folha)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Caso 2: Um filho
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Caso 3: Dois filhos
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // Remover o nó minRight (tem no máximo 1 filho à direita)
        if (minRight->right != NULL) {
            minRight->right->parent = minRight->parent;
        }
        if (minRight->parent->left == minRight)
            minRight->parent->left = minRight->right;
        else
            minRight->parent->right = minRight->right;
        free(minRight);
    }
}
```

{{% notice tip %}}
**Erros comuns a serem observados:**
- Esquecer de atualizar os ponteiros parent ao mover nós
- Não tratar o caso onde o nó a ser removido É a raiz
- Vazamentos de memória por não liberar nós removidos
- O nome do nó sentinela `__root` é confuso — a raiz real é `tree->__root->left`
{{% /notice %}}

## Exercício 2: Heap Binário (Máx Heap)

Um heap binário máximo correto usando um array indexado a partir de 1.

### Fórmulas-chave de índice (indexado a partir de 1)

| Relação       | Fórmula     |
|---------------|-------------|
| Filho esquerdo do nó `i` | `2 * i`       |
| Filho direito do nó `i