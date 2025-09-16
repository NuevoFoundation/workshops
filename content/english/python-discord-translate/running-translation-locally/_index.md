---
title: "Running Translation on Your Computer"
draft: false
weight: 3
---

Nuvi’s bot can respond, but it can’t help friends understand each other yet. In this section, you’ll install a program that can run translation locally on your computer—no outside accounts needed—so the bot can become the multilingual bridge Nuvi imagined.

Let's get started!

---

## 1. What is LibreTranslate?
LibreTranslate is a free, open‑source translation program (made by the community) that you run locally. No account. No cloud subscription. You give it text in one language and it returns another.

Why it’s helpful for this workshop:
- Privacy: your text stays on your machine.
- Control: you choose languages and when to update.
- Offline use: after the first download of language data, it can work without internet.
- Open source: you can look at how it works or even contribute.

Think of it as a tiny local website with an **API** that your bot will call for translation—Nuvi’s own in‑house translator.

### What is an API?
An API is like a menu for a program. It lists the “endpoints” (URLs) you can call and what you get back. When you visit `http://127.0.0.1:5000/translate` with the right data, LibreTranslate’s API answers with translated text. Your bot will **send a request** (your text + language choices) and **receive a response** (the translated text) — just like ordering food and getting a meal.

---



<details open>
<summary>Topics</summary>
{{% children /%}}
</details>
