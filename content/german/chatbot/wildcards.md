---
title: "Wildcards"
draft: false
weight: 8
---

## Wildcards
Vielleicht fällt Ihnen jetzt auf, dass es viel Arbeit ist, für jede mögliche Art, wie ein Benutzer eine Frage stellen könnte, eine eigene Kategorie zu schreiben. Zum Beispiel wird der Bot derzeit auf "Hello" mit "Hello, world" antworten. Aber was, wenn der Benutzer "Hello there" oder "Hello chatbot" sagt? Wir müssten für jeden dieser Fälle eine neue Kategorie erstellen. Zum Glück gibt es zusätzliche Werkzeuge, die wir nutzen können, um unseren Bot flexibler zu machen. 
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
Eines dieser Werkzeuge ist das **Wildcard**. Ein Wildcard ist ein spezielles Zeichen, das jedes Wort oder jede Phrase ersetzen kann. Schauen wir uns an, wie es funktioniert.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

Das ```*```-Symbol kann ein oder mehrere Wörter in der Benutzereingabe erfassen. Mit dieser neuen Kategorie wird der Chatbot nun mit "Hi!" auf jede Eingabe antworten, die mit "Hello" beginnt und von einem beliebigen Wort gefolgt wird. Das Muster "HELLO *" passt also zu "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE" und so weiter.