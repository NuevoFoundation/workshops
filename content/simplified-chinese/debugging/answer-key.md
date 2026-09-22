---
title: "调试 - 答案解答"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
此答案解答涵盖了教程部分中的所有错误，并提供了三个练习的正确实现。教程中的错误已在活动页面的展开块中显示，但这里将所有内容汇总为教师的参考。

**注意：** 以下的练习实现基于工作坊中描述的算法。实际上，Replit 启动代码可能使用略有不同的变量名或函数签名，但逻辑和方法是相同的。
{{% /notice %}}

## 教程部分错误

### 二分查找错误（第2部分）

**错误：** 用于搜索数组下半部分的递归调用错误地搜索了上半部分。

**修复：** 更改递归调用参数，以便下半部分搜索使用 `lo` 和 `middle - 1`：

```c
// 错误：搜索上半部分而不是下半部分
return rbin_search(arr, middle + 1, hi, element);

// 修复：正确地搜索下半部分
return rbin_search(arr, lo, middle - 1, element);
```

### 快速排序错误（第3部分）

**错误：** `p1`指针（用于跟踪“大于”元素）在把较小元素交换到位后没有递增。

**修复：** 在for循环中的交换语句后添加 `p1++;`：

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // 此行缺失
}
```

### 向量内存错误（第4部分）

**错误：** 在 `pushBack` 中重新分配数组时，代码忘记更新 `list->__arr` 以指向新内存。这导致：
- 无效的读/写（访问已释放的内存）
- 双重释放（多次释放同一个指针）
- 内存泄漏（新分配的内存从未被引用）

**修复：** 在重新分配内存后更新指针：

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // 此行缺失
```

此外，在main函数末尾添加 `deleteVectorInt` 调用以防止内存泄漏。

## 练习 1：二叉树

一个正确的 C 语言二叉树实现。该树使用一个哨兵节点，其中实际根节点是哨兵的左子节点。

### 关键操作

**树添加** - 遍历找到正确位置，然后插入：

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // 空树：插入为根（哨兵的左子节点）
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // 遍历找到插入点
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

**查找最小值** - 尽可能向左：

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**树删除** - 处理3种情况（0、1或2个子节点）：

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // 情况1：没有子节点（叶子节点）
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // 情况2：一个子节点
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // 情况3：两个子节点
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // 删除minRight节点（最多有一个右子节点）
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
**常见错误需要注意：**
- 忘记在移动节点时更新父指针
- 未处理要删除的节点本身是根节点的情况
- 未释放已删除节点导致内存泄漏
- 哨兵节点名称 `__root` 令人困惑 — 实际根节点是 `tree->__root->left`
{{% /notice %}}

## 练习 2：二叉堆（最大堆）

一个基于1索引数组的正确最大二叉堆实现。

### 关键索引公式（1索引）

| 关系 | 公式 |
|------|------|
| 节点 `i` 的左子节点 | `2 * i` |
| 节点 `i` 的右子节点 | `2 * i + 1` |
| 节点 `i` 的父节点 | `i / 2` |

### 堆添加（向上调整）

```c
void heapAdd(BinaryHeap *heap, int value) {
    heap->size++;
   