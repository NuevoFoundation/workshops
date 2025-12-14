---
title: "活動 3：新增自己的類別"
draft: false
weight: 7
---

## 新增更多類別

目前，我們的機器人只能回應「Hello」。讓我們新增更多類別，使機器人能夠回應更多內容。

1. 如果使用者說「What is your name?」，機器人應回應「My name is Chatbot」。
2. 如果使用者說「What is your favorite color?」，機器人應回應「My favorite color is blue」。
3. 如果使用者說「What is your favorite food?」，機器人應回應「My favorite food is pizza」。

<img src="../img/ideas.png" alt="" width="30%" style="" />

以下是類別的基本結構：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

提示：撰寫模式時，請使用全部大寫字母並避免使用標點符號。因此，如果您想匹配「What is your name?」，應將模式寫為「WHAT IS YOUR NAME」。

{{% /notice %}}

{{% notice tip %}}

提示：每次修改類別後，請記得保存文件，這樣您才能與聊天機器人互動。

{{% /notice %}}

嘗試將這些類別新增到您的機器人中，並使用聊天小工具測試。完成後，機器人應該可以回應「Hello」、「What is your name?」、「What is your favorite color?」和「What is your favorite food?」。