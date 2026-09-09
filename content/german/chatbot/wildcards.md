---
title: "Platzhalter"
draft: false
weight: 8
---

## Platzhalter
Du merkst vielleicht, dass es viel Arbeit erfordert, eine Kategorie für jede mögliche Art, wie ein Benutzer eine Frage stellen könnte, zu schreiben. Zum Beispiel antwortet der Bot derzeit auf „Hallo“ mit „Hallo, Welt“. Aber was ist, wenn der Benutzer „Hallo dort“ oder „Hallo Chatbot“ sagt? Wir müssten für jeden dieser Fälle eine neue Kategorie erstellen. Zum Glück gibt es zusätzliche Tools, die wir verwenden können, um unseren Bot flexibler zu gestalten.  
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />  
Eines dieser Tools ist der **Platzhalter**. Ein Platzhalter ist ein spezielles Zeichen, das jedes beliebige Wort oder jede Phrase ersetzt. Schauen wir uns an, wie es funktioniert.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

Das ```*```-Symbol kann ein oder mehrere Wörter im Benutzereingabetext erfassen. Mit dieser neuen Kategorie antwortet der Chatbot nun mit „Hi!“, wenn jede Eingabe mit „Hello“ beginnt, gefolgt von beliebigen Wörtern. Das Muster „HELLO *“ passt zu „HELLO THERE“, „HELLO CHATBOT“, „HELLO WORLD“, „HELLO EVERYONE“ und so weiter.