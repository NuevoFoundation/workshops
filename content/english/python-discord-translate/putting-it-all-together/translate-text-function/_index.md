---
title: "Translate Text Function"
draft: false
weight: 2
---

This function does the actual translation - it takes text in one language and changes it to another language!

## The `translate_text()` Function

Here's the code that makes the magic happen:

```python
def translate_text(text, from_language, to_language):
    """Translate text from one language to another using LibreTranslate."""
    try:
        data = {
            "q": text,
            "source": from_language,
            "target": to_language,
            "format": "text"
        }
        response = requests.post("http://127.0.0.1:5000/translate", json=data, timeout=10)
        result = response.json()
        return result.get("translatedText")
    except:
        return None
```

## What Each Part Means

| Part | What It Does | Example |
|------|--------------|---------|
| `text` | The words you want to translate | `"Hello world"` |
| `from_language` | What language it's in now | `"en"` (English) |
| `to_language` | What language you want | `"es"` (Spanish) |

## How It Works

1. **Pack the info**: We put the text and language codes in a package
2. **Send to LibreTranslate**: Ask it to translate
3. **Get the translation**: LibreTranslate sends back the translated text
4. **If something breaks**: Return `None` (meaning "couldn't translate")

## Examples of Using It

### In Auto-Translation
```python
# Translate a message to what the user wants
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # Send it to them!
```

### In the Manual Command
```python
# English to Spanish
result = translate_text("Hello", "en", "es")  
# Result: "Hola"

# Spanish to English  
result = translate_text("Gracias", "es", "en")
# Result: "Thank you"
```

## What LibreTranslate Sends Back

When it works, you get something like:
```json
{
    "translatedText": "Hola mundo"
}
```

## When Things Go Wrong

The function returns `None` when:
- LibreTranslate isn't running
- Internet connection problems
- Wrong language codes
- The text is too long (timeout after 10 seconds)

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70" style="float:right;margin:0 0 6px 10px;" />
<strong>Heads up:</strong> Really long messages might take more than 10 seconds. If that happens a lot, you can change the timeout number!
{{< /alert >}}

## Tips for Success

1. **Always check if it worked**: Make sure the function didn't return `None`
2. **Use the right codes**: "en" for English, "es" for Spanish
3. **Keep messages reasonable**: Super long texts take longer
4. **Be patient**: Translation takes a moment

## Where the Bot Uses This

The bot calls this function in two places:
- **Auto-translation**: When someone types a message in a different language
- **Manual command**: When someone uses `/translate`
