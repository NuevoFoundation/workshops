```markdown
---
title: "除錯 - 答案解答"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
本答案解答涵蓋了教學單元中的所有錯誤以及三個練習題的正確實現。教學單元中的錯誤已在活動頁面以展開區塊形式顯示，而本參考資料將這些內容整合為一個完整的教師參考文件。

**注意:** 下列練習題的實現基於工作坊中描述的演算法。實際 Replit 起始程式碼可能使用不同的變數名稱或函式簽名，但邏輯和方法是一致的。
{{% /notice %}}

## 教學單元中的錯誤

### 二分搜尋錯誤 (第 2 部分)

**錯誤:** 搜尋陣列下半部時的遞迴呼叫錯誤地改為搜尋上半部。

**修正:** 更改遞迴呼叫的參數，使搜尋陣列下半部時使用 `lo` 和 `middle - 1`：

```c
// 錯誤：搜尋上半部取代了下半部
return rbin_search(arr, middle + 1, hi, element);

// 修正：正確搜尋下半部
return rbin_search(arr, lo, middle - 1, element);
```

### 快速排序錯誤 (第 3 部分)

**錯誤:** 在將較小的元素交換到位後，`p1` 指針（追蹤「較大」的元素）未進行遞增。

**修正:** 在迴圈內的交換語句之後新增 `p1++;`：

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // 此行缺失
}
```

### 向量記憶體錯誤 (第 4 部分)

**錯誤:** 在 `pushBack` 中重新分配陣列時，程式忘記更新 `list->__arr` 指向新的記憶體，導致以下問題：
- 非法讀取/寫入（存取已被釋放的記憶體）
- 雙重釋放（重複釋放同一指標）
- 記憶體洩漏（新配置的記憶體未被參考）

**修正:** 在重新分配後更新指標：

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // 此行缺失
```

另外，在 `main` 的結尾新增 `deleteVectorInt` 呼叫以防止記憶體洩漏。

## 練習 1: 二元樹

在 C 中的正確二元樹實現。樹使用一個哨兵節點，其中實際根節點是哨兵的左子節點。

### 關鍵操作

**新增節點** - 遍歷以找到正確位置，然後插入：

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // 空樹：作為根（哨兵的左子節點）插入
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // 遍歷以找到插入點
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

**尋找最小值** - 一直往左走直到無法再左移：

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**移除節點** - 處理三種情形（0 個、1 個或 2 個子節點）：

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // 情形 1：無子節點（葉子）
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // 情形 2：只有一個子節點
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // 情形 3：有兩個子節點
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // 移除最小右節點（它最多只有一個右子節點）
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
**常見錯誤須注意：**
- 移動節點時未更新父節點指標
- 未處理要移除的節點是根節點的情況
- 未釋放被移除的節點，導致記憶體洩