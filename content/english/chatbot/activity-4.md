---
title: "Activity 4: Wildcards"
draft: false
weight: 9
---

## Using wildcards
Let's use the wildcard to allow our bot to answer more questions, without having to write a new category for each possible question. Let's expand on our current categories so that the chatbot can respond to any question that ends with "food", "color" or "name".

{{% notice tip %}}

Use the wildcard at the beginning of the pattern.

{{% /notice %}}

1. If the user enters a question that **ENDS WITH** "food" (e.g. "What is your favorite food?", "Do you like food?", "Do chatbots eat food?"), the bot should respond with "My favorite food is pizza".

2. If the user enters a question that **ENDS WITH** "color" (e.g. "What is your favorite color?", "What's your favorite color?"), the bot should respond with "My favorite color is blue".

3. If the user enters a question that **ENDS WITH** "name" (e.g. "What is your name?", "What's your name?", "Do you have a name?"), the bot should respond with "My name is Chatbot".