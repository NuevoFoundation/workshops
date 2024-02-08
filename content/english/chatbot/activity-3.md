---
title: "Activity 3: Add your own categories"
draft: false
weight: 7
---

## Add more categories

Right now, our bot can only respond to "Hello". Let's add some more categories so that our bot can respond to more things.

1. If the user says "What is your name?" the bot should respond with "My name is Chatbot".
2. If the user says "What is your favorite color?" the bot should respond with "My favorite color is blue".
3. If the user says "What is your favorite food?" the bot should respond with "My favorite food is pizza".

As a reminder, here is the basic structure of a category:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Remember: When writing the pattern, use all caps and avoid using punctuation. So if you want to match "What is your name?", you should write the pattern as "WHAT IS YOUR NAME".

{{% /notice %}}

{{% notice tip %}}

Remember to save the file whenever you modify the categories and want to interact with the chatbot.

{{% /notice %}}

Try adding these categories to your bot and test them out using the chat widget. At this point, the bot should respond to "Hello", "What is your name?", "What is your favorite color?", and "What is your favorite food?".