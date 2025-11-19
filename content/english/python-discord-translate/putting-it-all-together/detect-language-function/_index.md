---
title: "Detect Language Function"
draft: false
weight: 1
---

This function figures out if a message is written in English or Spanish. It's like having someone who can instantly tell you what language they're hearing!

## The `detect_language()` Function

Here's the code that asks LibreTranslate "what language is this?":

```python
def detect_language(text):
    """Ask LibreTranslate which language this text is (en/es)."""
    try:
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        if result and len(result) > 0:
            language = result[0]["language"]
            if language in ["en", "es"]:
                return language
        return None
    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.ConnectionError:
        return None
    except Exception:
        return None
```

## How It Works

1. **Send the text**: We send the message to LibreTranslate.
2. **Get an answer**: LibreTranslate tells us what language it thinks it is.
3. **Check if we can use it**: We only work with English (`en`) or Spanish (`es`).
4. **Handle problems**: If something goes wrong, we return `None` (which means "I don't know").

## What the Bot Does With This

When someone sends a message, the bot:
- Uses this function to figure out the language.
- Skips messages that aren't English or Spanish.
- Decides who needs a translation.

## Example

When someone types "Hello world", LibreTranslate sends back something like:
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

The function grabs `"en"` from this and returns it.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi tip:</strong> Start LibreTranslate with `--load-only en,es` so it loads just English and Spanish for faster startup.
{{< /alert >}}

## Common Problems

| What's Wrong | How to Fix It |
|--------------|---------------|
| Always returns `None` | Check that LibreTranslate is running |
| Gets the language wrong | Try typing longer messages |
| Takes too long | The 5-second timeout might be too short |
