```markdown
---
title: "问题 1: 树的基础知识"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
---

## 任务 1: 在二叉树中查找一个值

现在我们已经了解了遍历树的基础知识，请根据我们在上一页讨论过的过程（或算法）来实现二分搜索。以下是快速回顾：
* 如果当前值小于我们要查找的值，进入右节点。
* 如果当前值大于我们要查找的值，进入左节点。
* 如果当前值就是我们要查找的值，完成！

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="问题 1: 树的基础知识 - Replit 编辑器" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "提示：如果需要解决方案帮助，请点击这里！" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // 我们从树的根节点开始
    Node current = root;

    // 我们按照上述逻辑进行操作
    while (current.value != value) {
        System.out.println("当前值为: " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // 到达此处说明我们已经找到了具有正确值的节点！
    return current;
}
```
{{% /showanswer %}}

### 恭喜！如果你完成到了这一步，就已经正式编程实现了二分搜索！
```