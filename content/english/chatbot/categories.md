---
title: "Categories"
draft: false
weight: 6
---

## AIML Fundamentals
The basic unit of AIML is the category. A category consists of a pattern and a template. The pattern is what the user says to the bot. The template is the response the bot gives to the user. 

Looking at the following example, we can see that the pattern is "HELLO" and the template is "Hello, World!". When the user says "HELLO", the bot will respond with "Hello, World!". Note that pattern matching is case-insensitive, so the bot will respond to "hello", "HELLO", "Hello", and "HeLlo" in the same way.

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

When writing the pattern, we recommend writing in all UPPERCASE and to avoid using punctuation. So if you want to match "What is your name?", you should write the pattern as "WHAT IS YOUR NAME". Pandora will remove any punctuation in the user input before matching the pattern.

{{% /notice %}}