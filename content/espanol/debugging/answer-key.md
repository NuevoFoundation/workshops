---
title: "Depuración - Clave de Respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta clave de respuestas cubre todos los errores de las secciones de tutorial y proporciona implementaciones correctas para los tres ejercicios. Los errores del tutorial se muestran con bloques desplegables en las páginas de actividad, pero esto consolida todo en una referencia para el maestro.

**Nota:** Las implementaciones de los ejercicios a continuación están basadas en los algoritmos descritos en el taller. El código inicial de Replit puede usar nombres de variables o firmas de funciones ligeramente diferentes. La lógica y el enfoque son los mismos.
{{% /notice %}}

## Errores de las Secciones del Tutorial

### Error de Búsqueda Binaria (Parte 2)

**El error:** La llamada recursiva para buscar en la mitad inferior del arreglo busca incorrectamente en la mitad superior.

**La solución:** Cambiar los argumentos de la llamada recursiva para que la búsqueda en la mitad inferior use `lo` y `middle - 1`:

```c
// ERRÓNEO: busca en la mitad superior en lugar de la mitad inferior
return rbin_search(arr, middle + 1, hi, element);

// CORREGIDO: busca en la mitad inferior correctamente
return rbin_search(arr, lo, middle - 1, element);
```

### Error de Quicksort (Parte 3)

**El error:** El puntero `p1` (que rastrea el "elemento mayor") no se incrementa después de intercambiar un elemento menor.

**La solución:** Agregar `p1++;` después de la instrucción de intercambio dentro del bucle for:

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // ESTA LÍNEA FALTABA
}
```

### Error de Memoria en el Vector (Parte 4)

**El error:** Al realocar el arreglo en `pushBack`, el código olvida actualizar `list->__arr` para que apunte a la nueva memoria. Esto provoca:
- Lecturas/escrituras inválidas (acceso a memoria liberada)
- Liberaciones dobles (liberar el mismo puntero dos veces)
- Fugas de memoria (la memoria recién asignada nunca se referencia)

**La solución:** Después de la realocación, actualizar el puntero:

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // ESTA LÍNEA FALTABA
```

También agregar la llamada a `deleteVectorInt` al final de main para evitar fugas de memoria.

## Ejercicio 1: Árbol Binario

Una implementación correcta de árbol binario en C. El árbol utiliza un nodo centinela donde la raíz real es el hijo izquierdo del centinela.

### Operaciones clave

**Agregar al Árbol** - recorrer para encontrar la posición correcta, luego insertar:

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Árbol vacío: insertar como raíz (hijo izquierdo del centinela)
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Recorrer para encontrar el punto de inserción
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

**Buscar el Mínimo** - ir lo más a la izquierda posible:

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Eliminar en el Árbol** - manejar 3 casos (0, 1 o 2 hijos):

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Caso 1: Sin hijos (hoja)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Caso 2: Un hijo
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Caso 3: Dos hijos
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // Eliminar el nodo minRight (tiene como máximo 1 hijo derecho)
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
**Errores comunes a tener en cuenta:**
- Olvidar actualizar los punteros de los padres al mover nodos
- No manejar el caso en el que el nodo a eliminar ES la raíz
- Fugas de memoria por no liberar nodos eliminados
- El nombre del nodo centinela `__root` es confuso — la raíz real es `tree->__root->left`
{{% /notice %}}

## Ejercicio 2: Montículo Binario (Max Heap)

Un montículo binario máximo correcto usando un arreglo indexado desde 1.

### Fórmulas clave de índices (indexado desde 1)

| Relación | Fórmula |
|----------|---------|
| Hijo izquierdo del nodo `i` | `2 * i` |
| Hijo derecho del nodo `i` | `