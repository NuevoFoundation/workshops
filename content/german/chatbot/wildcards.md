---
title: "Platzhalter"
draft: false
weight: 8
---

## Platzhalter
Sie haben vielleicht bemerkt, dass es viel Arbeit erfordert, eine Kategorie für jede mögliche Art und Weise zu schreiben, wie ein Benutzer eine Frage stellen könnte. Zum Beispiel reagiert der Bot derzeit auf "Hallo" mit "Hallo, Welt". Aber was ist, wenn der Benutzer "Hallo zusammen" oder "Hallo Chatbot" sagt? Wir müssten eine neue Kategorie für jeden dieser Fälle erstellen. Glücklicherweise gibt es zusätzliche Tools, die wir verwenden können, um unseren Bot flexibler zu gestalten.  
<img src="../img/party.png" alt="Illustration eines Charakters, der neue Chatbot-Fähigkeiten feiert" width="25%" style="display: block; margin-left: 0;" />  
Eines dieser Tools ist der **Platzhalter**. Ein Platzhalter ist ein Sonderzeichen, das jedes beliebige Wort oder jede beliebige Phrase ersetzen kann. Sehen wir uns an, wie das funktioniert.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

Das ```*```-Symbol kann ein oder mehrere Wörter in der Benutzereingabe erfassen. Mit dieser neuen Kategorie wird der Chatbot nun mit "Hi!" auf jede Eingabe antworten, die mit "Hello" beginnt, gefolgt von beliebigen Wörtern. Das Muster "HELLO *" wird also mit "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE" und so weiter übereinstimmen.