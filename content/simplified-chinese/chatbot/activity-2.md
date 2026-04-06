```yaml
---
title: "活动 2：设置 PandoraBots"
draft: false
weight: 5
---

## AIML
我们将使用 AIML 来创建我们的聊天机器人。AIML 代表 **人工智能标记语言**。如果你曾经使用 HTML 创建过网站，你会发现 AIML 的结构非常相似。在开始编写 AIML 代码之前，我们需要注册一个 PandoraBots 账户。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
访问 [https://www.pandorabots.com/](https://www.pandorabots.com/) 并点击 **注册**。输入电子邮件和密码以创建账户。另外，你还可以通过 Google、Facebook、Twitter 或 Github 账户注册。如果页面提示，请选择免费试用选项。

## 创建一个新机器人
完成注册后，你会看到页面如下所示：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="新账户登陆页面" width="40%"/></p>

要创建一个新机器人，点击导航栏中“我的机器人”旁边的“+”按钮。给它起个名字，然后点击“创建机器人”。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在 PandoraBots 创建新机器人" width="40%"/></p>

## 编辑机器人
创建新机器人后，机器人的名称会出现在导航栏中。在机器人名称下面点击 **编辑**，然后选择 **代码编辑器**，进入编辑器页面。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在 PandoraBots 编辑机器人" width="40%"/></p>

编辑器是你编写 AIML 文件以及定义类别的地方，让你和其他人可以与机器人互动。

使用文件菜单创建一个名为 greetings 的新 AIML 文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在 PandoraBots 添加新文件" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在 PandoraBots 添加新文件" width="40%"/></p>

## Hello World

将以下类别代码复制到文本编辑器，在 ```<aiml>``` 开始标签和 ```</aiml>``` 结束标签之间：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成后，通过“文件”下拉菜单保存文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在 PandoraBots 保存文件" width="40%"/></p>

## 测试你的机器人
聊天窗口允许你与机器人进行交流。点击右下角的“聊天气泡”图标，与机器人开始对话。输入 `Hello`，你应该收到刚刚编写的回复，`“Hello, World!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在 PandoraBots 测试机器人" width="40%"/></p>
```