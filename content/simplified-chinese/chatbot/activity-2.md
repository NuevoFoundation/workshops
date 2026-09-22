```markdown
---
title: "活动 2：设置 PandoraBots"
draft: false
weight: 5
---

## AIML
我们将使用 AIML 来创建我们的聊天机器人。AIML 代表 **人工智能标记语言**（Artificial Intelligence Markup Language）。如果你曾经使用 HTML 创建过网站，你会发现 AIML 与 HTML 非常相似。在开始编写 AIML 之前，我们需要在 PandoraBots 上注册一个账户。
<img src="../img/chat_Alice.png" alt="ALICE 聊天机器人角色的插图" width="20%" />

## Pandorabots
访问 [https://www.pandorabots.com/](https://www.pandorabots.com/) 并点击 **Sign Up**。输入电子邮箱和密码以创建账户。或者，你可以使用 Google、Facebook、Twitter 或 GitHub 的账户注册。如果出现提示，请选择免费试用选项。

## 创建一个新机器人
注册后，你应该会看到如下页面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Pandorabots 新账户的主页" width="40%"/></p>

要创建一个新机器人，请单击导航面板中 My Bots 旁边的 “+” 按钮。为你的机器人命名，然后点击 “Create Bot”。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 Pandorabots 上创建新机器人" width="40%"/></p>

## 机器人编辑
创建新机器人后，机器人的名称将出现在导航面板中。点击你的机器人名称下面的 **Edit**，然后选择 **Code Editor** 进入编辑器。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 Pandorabots 上编辑机器人" width="40%"/></p>

编辑器是你编写 AIML 文件和分类的地方，通过这些文件和分类，你和其他人可以与机器人对话。

使用文件菜单创建一个名为 greetings 的新 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

## Hello World

将下列类别代码复制到文本编辑器中，放在开头的 ```<aiml>``` 和结尾的 ```</aiml>``` 标签之间：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成后，通过 “File” 下拉菜单保存你的文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

## 测试你的机器人
聊天小部件允许你与机器人对话。点击右下角的 "聊天气泡" 图标以开始与你的机器人对话。输入 `Hello`，你应该能收到你刚刚编码的响应：`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在 Pandorabots 上测试机器人" width="40%"/></p>
```