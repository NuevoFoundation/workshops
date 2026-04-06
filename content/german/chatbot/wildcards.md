---
title: "Wildcards"
draft: false
weight: 8
---

## Wildcards
Vielleicht fällt Ihnen jetzt auf, dass es viel Arbeit bedeutet, für jede mögliche Art und Weise, wie ein Benutzer eine Frage stellen könnte, eine Kategorie zu schreiben. Zum Beispiel antwortet der Bot momentan auf "Hello" mit "Hello, world". Aber was ist, wenn der Benutzer "Hello there" oder "Hello chatbot" sagt? Wir müssten eine neue Kategorie für jede dieser Varianten erstellen. Glücklicherweise gibt es zusätzliche Werkzeuge, die wir nutzen können, um unseren Bot flexibler zu machen. 
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
Eines dieser Werkzeuge ist das **Wildcard**. Ein Wildcard ist ein spezielles Zeichen, das jedes beliebige Wort oder jede Phrase ersetzt. Schauen wir uns an, wie es funktioniert.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

Das ```*```-Symbol ist in der Lage, ein oder mehrere Wörter im Benutzereingang zu erfassen. Mit dieser neuen Kategorie antwortet der Chatbot nun mit "Hi!" auf jeden Eingabetext, der mit "Hello" beginnt, gefolgt von einem beliebigen Wort. Das Muster "HELLO *" passt zu "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE" und so weiter.