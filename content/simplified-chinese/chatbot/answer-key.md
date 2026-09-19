---
title: "聊天机器人 - 答案示例"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
以下是聊天机器人工作坊活动的示例解答。AIML 模式必须使用大写字母书写。模板响应可以使用任何大小写风格。只要模式匹配正确，你的机器人响应可以与这些例子不同。
{{% /notice %}}

## 活动 2: Hello World

这是在教学演示中提供的起始类别：

```xml
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

当用户输入 "Hello" 时，机器人会响应 "Hello, World!"

## 活动 3: 添加你自己的类别

### 1. 你叫什么名字？

```xml
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

### 2. 你最喜欢的颜色是什么？

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. 你最喜欢的食物是什么？

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

{{% notice tip %}}
**模式关键规则：**
- 始终用大写字母书写模式
- 模式中不包含标点符号（Pandorabots 会在匹配之前自动去除用户输入中的标点符号）
- 模板的响应可以使用任何大小写
{{% /notice %}}

完成以上操作后，你的机器人应该可以根据以下输入作出响应：

| 用户输入             | 机器人响应              |
|---------------------|-------------------------|
| Hello              | Hello, World!          |
| What is your name? | My name is Chatbot.    |
| What is your favorite color? | My favorite color is blue. |
| What is your favorite food?  | My favorite food is pizza. |

## 活动 4: 通配符

`*` 通配符可匹配一个或多个词语。通过将 `*` 放置在模式开头，机器人将会对所有以关键词 **结尾** 的问题作出响应。

### 1. 任何以 "food" 结尾的问题

```xml
<category>
    <pattern>* FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

### 2. 任何以 "color" 结尾的问题

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. 任何以 "name" 结尾的问题

```xml
<category>
    <pattern>* NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**学生常见问题：**“我是否仍然需要保留活动3中的那些类别？”

两者都可以保留！Pandorabots 总是优先匹配最具体的模式。因此 "WHAT IS YOUR FAVORITE FOOD"（精确匹配）优先于 "* FOOD"（通配符）。通配符类别可以处理你未明确编写类别的问题，例如 "Do you like food?" 或 "Tell me about food"。
{{% /notice %}}

现在机器人能够对更多输入作出响应：

| 用户输入             | 匹配的模式             | 机器人响应              |
|---------------------|----------------------|-------------------------|
| What is your favorite food? | WHAT IS YOUR FAVORITE FOOD | My favorite food is pizza. |
| Do you like food?           | * FOOD                  | My favorite food is pizza. |
| Tell me about food           | * FOOD                  | My favorite food is pizza. |
| What is your name?           | WHAT IS YOUR NAME       | My name is Chatbot.        |
| Do you have a name?          | * NAME                  | My name is Chatbot.        |

## 活动 5: 回显通配符

`<star />` 标签捕获 `*` 通配符匹配的内容，并将其包含在机器人的响应中。

### 1. "My name is [name]" 的响应为 "Nice to meet you, [name]!"

```xml
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Nice to meet you, <star />!
    </template>
</category>
```

### 2. "My favorite color is [color]" 的响应为 "I also like [color]!"

```xml
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        I also like <star />!
    </template>
</category>
```

### 3. "My favorite food is [food]" 的响应为 "[food]! Yum!"

```xml
<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Yum!
    </template>
</category>
```

`<star />` 工作方式示例：

| 用户输入                     | `*` 捕获的内容       | 机器人响应              |
|-----------------------------|--------------------|-------------------------|
| My name is John            | John              | Nice to meet you, John! |
| My name is Jane            | Jane              | Nice to meet you, Jane! |
| My favorite color is blue  | blue              | I also like blue!       |
| My favorite color is red   | red               | I also like red!        |
| My favorite food is pizza  | pizza             | pizza! Yum!             |
| My favorite food is sushi  | sushi             | sushi! Yum!             |

## 完整的 AIML 文件

以下是完成所有活动后，你的 `greetings.aiml` 文件的完整内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- 活动 2: Hello World -->
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>

<!-- 活动 3: 基础类别 -->
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <