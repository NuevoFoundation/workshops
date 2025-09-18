---
title: "Python: Building a Discord Translator Bot"
description: "Learn intermediate Python concepts like libraries and APIs with Discord integration"
date: 2025-09-15T10:11:00-07:00
prereq: "Python Basics"
difficulty: "Intermediate"
icon: "fab fa-python"
draft: false
---

## Overview
Welcome to the course **Python: Building a Discord Translator Bot**!

{{< alert theme="info" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi says:</strong> Ready to code something awesome? We’re going to build a bot that breaks down language barriers—like a super‑smart friend who instantly translates messages. Let’s make the internet friendlier, one translation at a time.
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
Nuvi just created a new Discord server so all of his friends around the world can hang out, share ideas, and plan creative projects. There's only one problem: not everyone speaks the same language. Some friends type in English, some in Spanish, some in Portuguese, and others in Korean or Chinese. Conversations get broken up, people feel left out, and Nuvi wants everyone to feel included.

So Nuvi has an idea: build a **translation bot** that lives right inside the Discord server. You'll start with simple slash commands, then upgrade the bot so users can register their preferred language (English or Spanish) and automatically get private (DM) translations every time someone else chats in the other language. To make that happen, Nuvi (and you!) will learn how to:

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Heads up:</strong> Don’t worry if some of these terms sound new. We’ll break everything down step by step. By the end you’ll see how the pieces fit together like a puzzle.
{{< /alert >}}

- Connect Python code to Discord using a bot user
- Listen for messages safely (with the right intents)
- Run a local translation service (LibreTranslate)
- Detect whether a message is English or Spanish
- Translate messages automatically for registered users
- Send translations privately so the channel stays clean
- Still offer a manual `/translate` command as a fallback

By the end, you'll have a working bot that helps people who speak different languages chat together. You're not just writing code—you're building a bridge between friends.

### Roadmap
1. Setup: prerequisites & Discord basics
2. Creating the Bot: register + minimal slash command
3. Running Translation Locally: start LibreTranslate + test script
4. Putting It All Together: detect, translate, register language preferences
5. Stretch Goals: persistence (saving user language choices), more commands

### Glossary
- **Endpoint:** A specific URL on a server that performs a task (e.g., `/translate`).
- **Intent:** A permission flag telling Discord what events your bot can receive.
- **Slash Command:** A structured command starting with `/` that Discord validates and auto-completes.
- **Translation Server:** The local LibreTranslate process that detects and translates text.
- **Persistence (Stretch):** Saving user language choices so they remain after a restart.

Ready to help Nuvi? Let's build it step by step.
