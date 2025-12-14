```markdown
---
title: "活动2：设置PandoraBots"
draft: false
weight: 5
---

## AIML
我们将使用AIML来创建我们的聊天机器人。AIML代表**人工智能标记语言** (Artificial Intelligence Markup Language)。如果你曾经使用HTML制作过网站，你会发现AIML看起来非常相似。在我们开始编写AIML之前，我们需要在PandoraBots上注册一个账号。
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
访问[https://www.pandorabots.com/](https://www.pandorabots.com/)并点击**Sign Up（注册）**按钮。输入电子邮件和密码来创建账号。或者，你可以使用Google、Facebook、Twitter或Github的账号注册。如果系统提示，请选择免费试用选项。

## 创建一个新机器人
注册后，你应该会看到如下页面：

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="pandorabots新账户登陆页面" width="40%"/></p>

要创建一个新机器人，点击导航面板中“My Bots”旁边的“+”按钮。为你的机器人命名并点击“Create Bot”。

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="在pandorabots中创建新机器人" width="40%"/></p>

## 机器人编辑
创建新机器人后，机器人的名称会出现在导航面板中。点击你的机器人名称下的**Edit**（编辑），然后选择**Code Editor**（代码编辑器）进入编辑器。

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="在pandorabots中编辑机器人" width="40%"/></p>

编辑器是你编写AIML文件和类别的地方，这些文件和类别将允许你和其他人与机器人进行对话。

使用文件菜单创建一个名为greetings的AIML新文件。

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="在pandorabots中添加新文件" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="在pandorabots中添加新文件" width="40%"/></p>

## Hello World

将以下类别的代码复制到文本编辑器中，放在起始的```<aiml>```和结束的```</aiml>```标签之间：

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

完成后，通过“File”（文件）下拉菜单保存你的文件。

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="在pandorabots中添加新文件" width="40%"/></p>

## 测试你的机器人
Chat Widget（聊天小工具）可以让你与机器人对话。点击右下角的“聊天气泡”图标，与你的机器人开始对话。输入`Hello`，你应该会收到刚刚写的回复，`“Hello, world!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="在pandorabots中添加新文件" width="40%"/></p>
```