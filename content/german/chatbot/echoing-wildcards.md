```markdown
---
title: "Echoing Wildcards"
draft: false
weight: 9
---

## Einführung des ```<star />```-Tags
Lassen Sie uns ein weiteres Werkzeug kennenlernen, mit dem unser Chatbot interessantere Antworten geben kann. In der letzten Lektion haben wir gelernt, wie wir das Wildcard-Zeichen ```*``` verwenden können, um beliebige Wörter oder Ausdrücke zu erfassen. Aber was ist, wenn wir das Wort oder den Ausdruck, den der Benutzer eingegeben hat, in unserer Antwort verwenden möchten? Zum Beispiel, wenn der Benutzer uns seine Lieblingsfarbe nennt, möchten wir, dass die Antwort des Bots die Lieblingsfarbe des Benutzers enthält. Dies können wir mit dem ```<star />```-Tag erreichen.

Das ```<star />```-Tag ist ein spezielles Tag, das es uns ermöglicht, das Wort oder den Ausdruck, den der Benutzer eingegeben hat, in unserer Antwort zu verwenden. Sehen wir uns an, wie es funktioniert.

```
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Your favorite color is <star />.
    </template>
</category>
```

Gehen wir durch, wie diese Kategorie funktioniert. Das Muster "MY FAVORITE COLOR IS *" wird jede Eingabe erfassen, die mit "MY FAVORITE COLOR IS" beginnt, gefolgt von einem beliebigen Wort oder Ausdruck. Das Muster wird also "MY FAVORITE COLOR IS BLUE", "MY FAVORITE COLOR IS RED" und "MY FAVORITE COLOR IS GREEN" usw. erfassen. Das ```<star />```-Tag nimmt das Wort oder den Ausdruck, den der Benutzer eingegeben hat, und verwendet es in der Antwort. Wenn der Benutzer also "MY FAVORITE COLOR IS BLUE" eingibt, steht "blue" für das Wildcard-Zeichen, und wenn der Chatbot antwortet, wird ```<star />``` durch "blue" ersetzt. Der Bot antwortet mit "Your favorite color is blue".

<img src="../img/sentence_response.png" alt="" width="27%" />

Hier sind einige weitere Beispiele für Eingaben und Ausgaben aus dieser Kategorie:

Eingabe | Ausgabe 
---|--------------
MY FAVORITE COLOR IS BLUE | Your favorite color is blue.
MY FAVORITE COLOR IS RED | Your favorite color is red.
MY FAVORITE COLOR IS GREEN | Your favorite color is green.
```