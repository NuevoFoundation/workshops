---
title: "Activity 2: Setup PandoraBots"
draft: false
weight: 5
---

## AIML
We will be using AIML to create our chatbot. AIML stands for **Artificial Intelligence Markup Language**. If you have ever used HTML to make a website, you will find that AIML looks very similar. Before we can start writing AIML, we need to sign up for an account on PandoraBots.

## Pandorabots
Go to [https://www.pandorabots.com/](https://www.pandorabots.com/) and click on **Sign Up**. Enter an email and password to create an account. Alternatevely, you can sign up using an account from Google, Facebook, Twitter, or Github.

## Create a new bot
Once you have signed up, you should see a page that looks like this:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="new account landing page on pandorabots" width="1000"/></p>

To create a new bot, use the “+” button next to My Bots on the navigation pane. Give it a name and click “Create Bot”.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="creating a new bot on pandorabots" width="1000"/></p>

## Bot Editing
Once you have created a new bot, the name of the bot will appear in the navigation pane. Click **Edit** beneath your Bot’s Name to navigate to the Editor.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="editing a bot on pandorabots" width="1000"/></p>

The Editor is where you will write AIML files and categories that will allow you and others to talk to you bot. 

Use the File Menu to create a new AIML file called greetings.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="adding a new file on pandorabots" width="1000"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="adding a new file on pandorabots" width="1000"/></p>

## Hello World

Copy the code for the following category into the text editor in between the start ```<aiml>``` and end ```</aiml>``` tags:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Once completed, save your file via the “File” drop-down menu.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="adding a new file on pandorabots" width="1000"/></p>

## Testing your bot
The Chat Widget allows you to talk to your bot. Click on the "chat bubbles" icon in the bottom right corner to start talking to your bot. Type Hello and you should receive the response you just coded, “Hello, world!”

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="adding a new file on pandorabots" width="1000"/></p>