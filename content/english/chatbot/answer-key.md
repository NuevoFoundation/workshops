---
title: "Chatbot - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions for the chatbot workshop activities. AIML patterns must be written in UPPERCASE. The template responses can use any capitalization you like. Your chatbot's responses can differ from these examples as long as the pattern matching works correctly!
{{% /notice %}}

## Activity 2: Hello World

This is the starter category provided in the walkthrough:

```xml
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

When the user types "Hello", the bot responds with "Hello, World!"

## Activity 3: Add Your Own Categories

### 1. What is your name?

```xml
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

### 2. What is your favorite color?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. What is your favorite food?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

{{% notice tip %}}
**Key rules for patterns:**
- Always write patterns in UPPERCASE
- Do not include punctuation in patterns (Pandorabots strips punctuation from user input before matching)
- The template response can use any capitalization
{{% /notice %}}

At this point, your bot should respond to:

| User says | Bot responds |
|-----------|-------------|
| Hello | Hello, World! |
| What is your name? | My name is Chatbot. |
| What is your favorite color? | My favorite color is blue. |
| What is your favorite food? | My favorite food is pizza. |

## Activity 4: Wildcards

The `*` wildcard matches one or more words. By placing `*` at the beginning of a pattern, the bot responds to any question that **ends with** the keyword.

### 1. Any question ending with "food"

```xml
<category>
    <pattern>* FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

### 2. Any question ending with "color"

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. Any question ending with "name"

```xml
<category>
    <pattern>* NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**Common student question:** "Do I still need the categories from Activity 3?"

You can keep both! Pandorabots matches the most specific pattern first. So "WHAT IS YOUR FAVORITE FOOD" (exact match) takes priority over "* FOOD" (wildcard). The wildcard categories handle questions you did not explicitly write a category for, like "Do you like food?" or "Tell me about food".
{{% /notice %}}

Now the bot responds to many more inputs:

| User says | Matches pattern | Bot responds |
|-----------|----------------|-------------|
| What is your favorite food? | WHAT IS YOUR FAVORITE FOOD | My favorite food is pizza. |
| Do you like food? | * FOOD | My favorite food is pizza. |
| Tell me about food | * FOOD | My favorite food is pizza. |
| What is your name? | WHAT IS YOUR NAME | My name is Chatbot. |
| Do you have a name? | * NAME | My name is Chatbot. |

## Activity 5: Echoing Wildcards

The `<star />` tag captures whatever the `*` wildcard matched and includes it in the bot's response.

### 1. "My name is [name]" responds with "Nice to meet you, [name]!"

```xml
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Nice to meet you, <star />!
    </template>
</category>
```

### 2. "My favorite color is [color]" responds with "I also like [color]!"

```xml
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        I also like <star />!
    </template>
</category>
```

### 3. "My favorite food is [food]" responds with "[food]! Yum!"

```xml
<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Yum!
    </template>
</category>
```

How `<star />` works:

| User says | `*` captures | Bot responds |
|-----------|-------------|-------------|
| My name is John | John | Nice to meet you, John! |
| My name is Jane | Jane | Nice to meet you, Jane! |
| My favorite color is blue | blue | I also like blue! |
| My favorite color is red | red | I also like red! |
| My favorite food is pizza | pizza | pizza! Yum! |
| My favorite food is sushi | sushi | sushi! Yum! |

## Complete AIML File

Here is what your complete `greetings.aiml` file should look like after all activities:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- Activity 2: Hello World -->
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>

<!-- Activity 3: Basic categories -->
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
    <template>
        My favorite food is pizza.
    </template>
</category>

<!-- Activity 4: Wildcard categories -->
<category>
    <pattern>* NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>

<category>
    <pattern>* COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>

<category>
    <pattern>* FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>

<!-- Activity 5: Echoing wildcards -->
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Nice to meet you, <star />!
    </template>
</category>

<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        I also like <star />!
    </template>
</category>

<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Yum!
    </template>
</category>

</aiml>
```

{{% notice tip %}}
**Pattern priority in AIML:** When multiple patterns could match the same input, Pandorabots uses the most specific match. For example, "MY FAVORITE FOOD IS *" is more specific than "* FOOD", so "My favorite food is pizza" will match the echoing wildcard pattern and respond with "pizza! Yum!" instead of "My favorite food is pizza."
{{% /notice %}}
