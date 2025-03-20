---
title: "Wildcards"
draft: false
weight: 8
---

## Wildcards
You may be noticing now that it takes a lot of work to write a category for every possible way a user might ask a question. For example, currently the bot will respond to "Hello" with "Hello, world". But what if the user says "Hello there" or "Hello chatbot"? We would have to write a new category for each of these cases. Thankfully, there are additional tools we can use to make our bot more flexible. 

One of these tools is the **wildcard**. A wildcard is a special character that matches any word or phrase. Let's see how it works.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

The ```*``` symbol is able to capture 1 or more words in the user input. With this new category, the chatbot will now respond with "Hi!" to any input that starts with "Hello" followed by any word. So the pattern "HELLO *" will match "HELLO THERE" and "HELLO CHATBOT" and "HELLO WORLD" and "HELLO EVERYONE" and so on.