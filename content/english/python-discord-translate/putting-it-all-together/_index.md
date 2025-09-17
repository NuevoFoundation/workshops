---
title: "Putting It All Together"
draft: false
weight: 4
---

Your bot is online and LibreTranslate is working. Now let's combine them so Nuvi's friends can chat in different languages!

## What You'll Build

Your bot will become a **translation helper** that:
- Figures out what language people are typing in
- Automatically translates messages for people who need it
- Sends translations privately (so the chat doesn't get messy)
- Has a backup `/translate` command just in case

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi says:</strong> Don't worry if this seems like a lot! We've broken it into smaller pieces that are easy to follow.
{{< /alert >}}

## Before You Start

Check that you have:
- LibreTranslate running (with English & Spanish)
- Your bot online (the `/hello` command works)
- The `requests` package installed
- Message Content turned on in Discord (so your bot can read messages)


## What You'll Have When Done

Your bot will have these commands:
- `/register_language` - Sign up for translations
- `/my_language` - Check your settings
- `/stop_translation` - Stop getting translations
- `/translate` - Manually translate something

## Test Your Bot

After building everything:

1. **Sign people up**: Have friends pick different languages
2. **Send messages**: Watch translations appear in DMs
3. **Try manual mode**: Test `/translate` with any phrase
4. **Opt out**: Make sure `/stop_translation` works

## Need Help?

| Problem | Where to Look |
|---------|---------------|
| Can't detect languages | [Detect Language Function](detect-language-function/) |
| Translation not working | [Translate Text Function](translate-text-function/) |
| Can't sign up | [Registration Commands](registration-commands/) |
| No auto-translations | [Message Handling](message-handling-and-translate/) |
| Want the complete code | [Full Bot Code](full-code/) |

{{< alert theme="success" >}}
<img src="../media/NF_mascot.jpg" alt="Nuvi mascot" width="80" style="float:right;margin:0 0 8px 12px;" />
Let's get started! Click on [Detect Language Function](detect-language-function/) to begin building your translation bot!
{{< /alert >}}
