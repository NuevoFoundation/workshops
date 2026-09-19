```markdown
---
title: "聊天機器人 - 解答集"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
以下是聊天機器人工作坊活動的範例解答。AIML 的模式必須用大寫字母書寫。模板回應可以使用任何大小寫組合。只要模式匹配正確，您的聊天機器人的回應可以與這些範例有所不同！
{{% /notice %}}

## 活動 2：Hello World

以下是步驟講解提供的初始分類：

```xml
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

當使用者輸入「Hello」時，機器人會回應：「Hello, World!」

## 活動 3：新增您自己的分類

### 1. 你叫什麼名字？

```xml
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

### 2. 你最喜歡的顏色是什麼？

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. 你最喜歡的食物是什麼？

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

{{% notice tip %}}
**模式撰寫的關鍵規則：**
- 始終使用大寫字母撰寫模式
- 不要在模式中包含標點符號（Pandorabots 在匹配模式前會移除輸入中的標點符號）
- 模板回應可以使用任何大小寫組合
{{% /notice %}}

到此為止，您的機器人應該能夠回應：

| 使用者說 | 機器人回應 |
|-----------|-------------|
| Hello | Hello, World! |
| What is your name? | My name is Chatbot. |
| What is your favorite color? | My favorite color is blue. |
| What is your favorite food? | My favorite food is pizza. |

## 活動 4：通配符

`*` 通配符可以匹配一個或多個單詞。通過在模式的開頭放置 `*`，機器人可以回應任何**以**特定關鍵字結尾的問題。

### 1. 任何以「food」結尾的問題

```xml
<category>
    <pattern>* FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

### 2. 任何以「color」結尾的問題

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. 任何以「name」結尾的問題

```xml
<category>
    <pattern>* NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**常見學生疑問：**「我還需要保留活動 3 的分類嗎？」

可以同時保留！Pandorabots 會優先匹配最具體的模式。因此「WHAT IS YOUR FAVORITE FOOD」（精確匹配）優先於「* FOOD」（通配符）。而通配符分類處理您沒有明確編寫分類的問題，例如「Do you like food?」或「Tell me about food」。
{{% /notice %}}

現在，您的機器人可以回應更多輸入：

| 使用者說 | 匹配的模式 | 機器人回應 |
|-----------|----------------|-------------|
| What is your favorite food? | WHAT IS YOUR FAVORITE FOOD | My favorite food is pizza. |
| Do you like food? | * FOOD | My favorite food is pizza. |
| Tell me about food | * FOOD | My favorite food is pizza. |
| What is your name? | WHAT IS YOUR NAME | My name is Chatbot. |
| Do you have a name? | * NAME | My name is Chatbot. |

## 活動 5：輸出通配符

`<star />` 標籤捕捉 `*` 通配符所匹配的內容，並將其包含在機器人的回應中。

### 1. 「My name is [name]」回應為「Nice to meet you, [name]!」

```xml
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Nice to meet you, <star />!
    </template>
</category>
```

### 2. 「My favorite color is [color]」回應為「I also like [color]!」

```xml
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        I also like <star />!
    </template>
```

### 3. 「My favorite food is [food]」回應為「[food]! Yum!」

```xml
<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Yum!
    </template>
</category>
```

`<star />` 的運作方式如下：

| 使用者說 | `*` 捕捉的內容 | 機器人回應 |
|-----------|-------------|-------------|
| My name is John | John | Nice to meet you, John! |
| My name is Jane | Jane | Nice to meet you, Jane! |
| My favorite color is blue | blue | I also like blue! |
| My favorite color is red | red | I also like red! |
| My favorite food is pizza | pizza | pizza! Yum! |
| My favorite food is sushi | sushi | sushi! Yum! |

## 完整 AIML 檔案

以下是完成所有活動後的完整 `greetings.aiml` 檔案內容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- 活動 2：Hello World -->
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>

<!-- 活動 3：基本分類 -->
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE