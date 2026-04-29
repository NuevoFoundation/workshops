```markdown
---
title: "活动 2：设置 PandoraBots"
draft: false
weight: 5
---

## AIML
我们将使用 AIML 来创建我们的聊天机器人。AIML 代表的是 **人工智能标记语言（Artificial Intelligence Markup Language）**。如果你曾经使用 HTML 制作过网站，你会发现 AIML 看起来非常相似。在我们开始编写 AIML 之前，我们需要先注册一个 PandoraBots 的账户。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
访问 [https://www.pandorabots.com/](https://www.pandorabots.com/) 并点击 **Sign Up** 注册。输入一个电子邮件地址和密码来创建帐户。或者，你可以使用 Google、Facebook、Twitter 或 Github 的帐户进行注册。如果系统提示，请选择免费试用选项。

## 创建新机器人
注册后，你应该会看到一个类似下面这样的页面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="Pandorabots 的新帐户登录页" width="40%"/></p>

要创建一个新机器人，在导航面板中点击 “My Bots” 旁边的 “+” 按钮。给它一个名字并点击 “Create Bot”。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 Pandorabots 上创建新机器人" width="40%"/></p>

## 编辑机器人
创建新机器人后，机器人的名字会显示在导航面板中。点击机器人名字下方的 **Edit**，然后选择 **Code Editor** 进入编辑器界面。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 Pandorabots 上编辑机器人" width="40%"/></p>

编辑器是你编写 AIML 文件和分类的地方，这些文件和分类将允许你和其他人与机器人对话。

使用“文件”菜单创建一个名为 `greetings` 的新的 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

## Hello World

将以下分类代码复制到文本编辑器中的开始标记 ```<aiml>``` 和结束标记 ```</aiml>``` 之间：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成后，通过“文件”下拉菜单保存你的文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 Pandorabots 上添加新文件" width="40%"/></p>

## 测试你的机器人
聊天窗口部件允许你与机器人对话。点击右下角的“聊天气泡”图标开始和机器人聊天。输入 `Hello`，你应该会收到刚才编写的响应：`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在 Pandorabots 上测试机器人" width="40%"/></p>
```