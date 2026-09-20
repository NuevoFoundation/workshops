```markdown
---
title: "問題 1: 樹的基本知識"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
---

## 任務 1: 在二元樹中找到一個數值

既然我們已經了解了如何遍歷樹的基本知識，接下來依據我們在上一頁討論的過程（或演算法）來實作二元樹的搜尋。以下是快速回顧：
* 如果當前值小於我們要找的值，則前往右節點。
* 如果當前值大於我們要找的值，則前往左節點。
* 如果當前值就是我們要找的值，那麼任務完成！

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="問題 1: 樹的基本知識 - Replit 編輯器" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "提示：點擊這裡查看解答！" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // 我們從樹的根節點開始
    Node current = root;

    // 按照我們上面描述的邏輯
    while (current.value != value) {
        System.out.println("當前值為: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // 當到這裡時，我們已經找到具有正確值的節點！
    return current;
}
```
{{% /showanswer %}}

### 恭喜！如果你做到這一步了，那麼你已經成功實作了二元搜尋演算法！
```