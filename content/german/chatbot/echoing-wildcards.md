```markdown
---
title: "Echoing Wildcards"
draft: false
weight: 9
---

## Einführung in den ```<star />```-Tag
Lass uns ein weiteres Werkzeug kennenlernen, um unseren Chatbot mit interessanteren Antworten auszustatten. In der letzten Lektion haben wir gelernt, wie wir das Platzhaltersymbol ```*``` verwenden können, um jedes beliebige Wort oder jede beliebige Phrase zu erfassen. Aber was, wenn wir das Wort oder die Phrase, die der Benutzer eingegeben hat, in unserer Antwort verwenden möchten? Zum Beispiel, wenn der Benutzer uns seine Lieblingsfarbe nennt, möchten wir, dass die Antwort des Bots die Lieblingsfarbe des Benutzers enthält. Dies können wir mit dem ```<star />```-Tag erreichen.

Der ```<star />```-Tag ist ein spezieller Tag, der es uns ermöglicht, das vom Benutzer eingegebene Wort oder die Phrase in unserer Antwort zu verwenden. Schauen wir uns an, wie das funktioniert.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

Lass uns durchgehen, wie diese Kategorie funktioniert. Das Muster "MY FAVORITE COLOR IS *" passt zu jeder Eingabe, die mit "MY FAVORITE COLOR IS" beginnt, gefolgt von einem beliebigen Wort oder einer beliebigen Phrase. Das Muster würde also zu "MY FAVORITE COLOR IS BLUE", "MY FAVORITE COLOR IS RED", "MY FAVORITE COLOR IS GREEN" und so weiter passen. Der ```<star />```-Tag erfasst das vom Benutzer eingegebene Wort oder die Phrase und verwendet es in der Antwort. Wenn der Benutzer also "MY FAVORITE COLOR IS BLUE" eingibt, steht "blue" für das durch den Platzhalter erfasste Wort, sodass der Chatbot in der Antwort ```<star />``` durch "blue" ersetzt. Der Bot antwortet dann: "Your favorite color is blue."

<img src="../img/sentence_response.png" alt="Illustration zeigt, wie ein Chatbot Satzmuster erkennt und darauf antwortet" width="27%" />

Hier sind weitere Beispiele für Eingaben und Ausgaben aus dieser Kategorie:

Eingabe | Ausgabe 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```