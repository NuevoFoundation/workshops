---
title: "Debugging - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This answer key covers all bugs from the tutorial sections and provides correct implementations for the three exercises. The tutorial bugs are shown with expand blocks in the activity pages, but this consolidates everything into one teacher reference.

**Note:** The exercise implementations below are based on the algorithms described in the workshop. The actual Replit starter code may use slightly different variable names or function signatures. The logic and approach are the same.
{{% /notice %}}

## Tutorial Section Bugs

### Binary Search Bug (Part 2)

**The bug:** The recursive call for searching the lower half of the array incorrectly searches the upper half.

**The fix:** Change the recursive call arguments so the lower half search uses `lo` and `middle - 1`:

```c
// BUGGY: searches upper half instead of lower half
return rbin_search(arr, middle + 1, hi, element);

// FIXED: searches lower half correctly
return rbin_search(arr, lo, middle - 1, element);
```

### Quicksort Bug (Part 3)

**The bug:** The `p1` pointer (tracking the "greater" element) is not incremented after swapping a smaller element into place.

**The fix:** Add `p1++;` after the swap statement inside the for loop:

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // THIS LINE WAS MISSING
}
```

### Vector Memory Bug (Part 4)

**The bug:** When reallocating the array in `pushBack`, the code forgets to update `list->__arr` to point to the new memory. This causes:
- Invalid reads/writes (accessing freed memory)
- Double frees (freeing the same pointer twice)
- Memory leaks (newly allocated memory is never referenced)

**The fix:** After reallocating, update the pointer:

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // THIS LINE WAS MISSING
```

Also add `deleteVectorInt` call at the end of main to prevent memory leaks.

## Exercise 1: Binary Tree

A correct binary tree implementation in C. The tree uses a sentinel node where the actual root is the sentinel's left child.

### Key operations

**Tree Add** - traverse to find correct position, then insert:

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Empty tree: insert as root (left child of sentinel)
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Traverse to find insertion point
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

**Find Min** - go as far left as possible:

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Tree Remove** - handle 3 cases (0, 1, or 2 children):

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Case 1: No children (leaf)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Case 2: One child
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Case 3: Two children
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // Remove the minRight node (it has at most 1 right child)
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
**Common bugs to watch for:**
- Forgetting to update parent pointers when moving nodes
- Not handling the case where the node to remove IS the root
- Memory leaks from not freeing removed nodes
- The sentinel node's name `__root` is confusing — the actual root is `tree->__root->left`
{{% /notice %}}

## Exercise 2: Binary Heap (Max Heap)

A correct max binary heap using a 1-indexed array.

### Key index formulas (1-indexed)

| Relationship | Formula |
|-------------|---------|
| Left child of node `i` | `2 * i` |
| Right child of node `i` | `2 * i + 1` |
| Parent of node `i` | `i / 2` |

### Heap Add (sift up)

```c
void heapAdd(BinaryHeap *heap, int value) {
    heap->size++;
    heap->__arr[heap->size] = value;

    // Sift up: swap with parent while larger than parent
    int i = heap->size;
    while (i > 1 && heap->__arr[i] > heap->__arr[i / 2]) {
        swap(&heap->__arr[i], &heap->__arr[i / 2]);
        i = i / 2;
    }
}
```

### Heap Remove Max (sift down)

```c
int heapRemoveMax(BinaryHeap *heap) {
    int max = heap->__arr[1];

    // Move last element to root
    heap->__arr[1] = heap->__arr[heap->size];
    heap->size--;

    // Sift down: swap with larger child while smaller than children
    int i = 1;
    while (2 * i <= heap->size) {
        int child = 2 * i; // left child
        // Pick the larger child
        if (child + 1 <= heap->size && heap->__arr[child + 1] > heap->__arr[child]) {
            child = child + 1;
        }
        // Stop if heap property is satisfied
        if (heap->__arr[i] >= heap->__arr[child]) {
            break;
        }
        swap(&heap->__arr[i], &heap->__arr[child]);
        i = child;
    }

    return max;
}
```

{{% notice tip %}}
**Common bugs to watch for:**
- Off-by-one errors with 1-indexed array (root is at index 1, not 0)
- Comparing with wrong child during sift down (must pick the LARGER child)
- Not handling duplicates (use `>=` not just `>` when checking heap property)
- Forgetting to decrement size after removal
{{% /notice %}}

## Exercise 3: Burrows-Wheeler Transform

The BWT uses a suffix array to efficiently compute the transform.

### Key insight from the workshop

The last character of each rotation is found by: `original_string[(suffix_array[i] - 1 + length) % length]`

{{% notice warning %}}
**Critical C pitfall:** The `%` operator in C is the **remainder** operator, not modulo. For negative numbers, `(-1) % 6` gives `-1` in C, not `5`. Use this safe modulo pattern:

```c
// Safe modulo that works for negative numbers
int safeMod(int a, int n) {
    return ((a % n) + n) % n;
}
```
{{% /notice %}}

### Suffix Array Construction

```c
// Compare two suffixes for sorting
int compareSuffixes(const void *a, const void *b, void *arg) {
    char *str = (char *)arg;
    int i = *(int *)a;
    int j = *(int *)b;
    return strcmp(str + i, str + j);
}

// Build suffix array: sorted indices of all suffixes
void buildSuffixArray(char *str, int *suffixArray, int len) {
    for (int i = 0; i < len; i++) {
        suffixArray[i] = i;
    }
    // Sort suffix indices by the suffix they represent
    // (uses qsort_r or equivalent to pass string as context)
    qsort_r(suffixArray, len, sizeof(int), compareSuffixes, str);
}
```

### BWT using suffix array

```c
void bwt(char *dest, char *src) {
    int len = strlen(src) + 1; // include null terminator

    int *suffixArray = malloc(len * sizeof(int));
    buildSuffixArray(src, suffixArray, len);

    // Get last character of each rotation
    for (int i = 0; i < len; i++) {
        int idx = ((suffixArray[i] - 1) % len + len) % len; // safe modulo
        dest[i] = src[idx];
    }

    free(suffixArray);
}
```

{{% notice tip %}}
**Common bugs to watch for:**
- Using `%` instead of safe modulo for negative numbers
- Forgetting the null terminator adds 1 to the string length
- Off-by-one errors in suffix array indices
- Using `printf("%s", dest)` to print the result — this stops at the null terminator character inside the transformed string. Print character by character instead:

```c
for (int i = 0; i < STR_LEN; i++) {
    printf("%c", dest[i]);
}
```
{{% /notice %}}

## Debugging Tools Quick Reference

| Tool | Command | Purpose |
|------|---------|---------|
| Compile | `make <program>` | Build the program |
| Run | `./<program>` | Execute the program |
| GDB | `gdb <program>` | Start the debugger |
| GDB: run | `run` or `r` | Run the program in GDB |
| GDB: breakpoint | `break file.c:42` | Pause at line 42 |
| GDB: next | `next` or `n` | Step over (skip into functions) |
| GDB: step | `step` or `s` | Step into functions |
| GDB: print | `print varName` | Show a variable's value |
| GDB: continue | `continue` or `c` | Resume until next breakpoint |
| GDB: quit | `quit` or `q` | Exit GDB |
| Valgrind | `valgrind --tool=memcheck --leak-check=full ./<program>` | Find memory errors |
