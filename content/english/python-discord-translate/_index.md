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
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="80" style="float:right;margin:0 0 8px 12px;" />
<strong>Nuvi here!</strong> Ready to code something awesome? We're going to build a bot that breaks down language barriers. Think of it like having a super-smart friend who instantly translates messages for everyone. Let's make the internet a friendlier place, one translation at a time!
{{< /alert >}}

![Nuvi](media/NF_mascot.jpg)
 Nuvi just created a new Discord server so all of his friends around the world can hang out, share ideas, and plan creative projects. There's only one problem: not everyone speaks the same language. Some friends type in English, some in Spanish, some in Portuguese, and others in Korean or Chinese. Conversations get broken up, people feel left out, and Nuvi wants everyone to feel included.

So Nuvi has an idea: build a **translation bot** that lives right inside the Discord server. You'll start with simple slash commands, then upgrade the bot so users can register their preferred language (English or Spanish) and automatically get private (DM) translations every time someone else chats in the other language. To make that happen, Nuvi (and you!) will learn how to:

{{< alert theme="warning" >}}
<img src="media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>Heads up from Nuvi:</strong> Don't worry if some of these terms sound new! We'll break everything down step-by-step. By the end, you'll understand how all these pieces fit together like a puzzle.
{{< /alert >}}

- Connect Python code to Discord using a bot user
- Listen for messages safely (with the right intents)
- Run a local translation service (LibreTranslate)
- Detect whether a message is English or Spanish
- Translate messages automatically for registered users
- Send translations privately so the channel stays clean
- Still offer a manual `/translate` command as a fallback

By the end, you'll have a working bot that helps people who speak different languages chat together. You're not just writing code—you're building a bridge between friends.

Ready to help Nuvi? Let's build it step by step.
