---
title: "Echoing Wildcards"
draft: false
weight: 9
---

## Introducing the ```<star />``` tag
Let's learn one more tool to allow our chatbot to have more interesting responses. We learned in the last lesson how we can use the wildcard ```*``` to match any word or phrase. But what if we want to use the word or phrase that the user entered in our response? For example, if the user tells us what their favorite color is, we want the bot's response to include the user's favorite color. We can do this using the ```<star />``` tag.

The ```<star />``` tag is a special tag that allows us to use the word or phrase that the user entered in our response. Let's see how it works.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

Let's walk through how this category works. The pattern "MY FAVORITE COLOR IS *" will match any input that starts with "MY FAVORITE COLOR IS" followed by any word or phrase. So the pattern will match "MY FAVORITE COLOR IS BLUE" and "MY FAVORITE COLOR IS RED" and "MY FAVORITE COLOR IS GREEN" and so on. The ```<star />``` tag will capture the word or phrase that the user entered and use it in the response. So if the user enters "MY FAVORITE COLOR IS BLUE", "blue" is the word represented by the wildcard so when the chatbot responds, ```<star />``` will be replaced with "blue". The bot will respond with "Your favorite color is blue".

Here are some more examples of inputs and outputs from this category:

Input | Output 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.