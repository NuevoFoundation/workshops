---
title: "Wildcard-Echo"
draft: false
weight: 9
---

## Einführung des ```<star />``` Tags
Lass uns ein weiteres Werkzeug kennenlernen, um unserem Chatbot interessantere Antworten zu ermöglichen. In der letzten Lektion haben wir gelernt, wie wir das Wildcard ```*``` verwenden können, um beliebige Wörter oder Phrasen zu erfassen. Aber was, wenn wir das vom Benutzer eingegebene Wort oder die Phrase in unserer Antwort verwenden möchten? Zum Beispiel, wenn der Benutzer uns seine Lieblingsfarbe nennt, möchten wir, dass die Antwort des Bots die Lieblingsfarbe des Benutzers enthält. Das können wir mit dem ```<star />``` Tag erreichen.

Der ```<star />``` Tag ist ein spezieller Tag, der uns erlaubt, das vom Benutzer eingegebene Wort oder die Phrase in unserer Antwort zu nutzen. Lass uns anschauen, wie das funktioniert.

```
<category>
    <pattern>MEINE LIEBLINGSFARBE IST *</pattern>
    <template>
        Deine Lieblingsfarbe ist <star />.
    </template>
</category>
```

Schauen wir uns an, wie diese Kategorie funktioniert. Das Muster "MEINE LIEBLINGSFARBE IST *" wird jede Eingabe erfassen, die mit "MEINE LIEBLINGSFARBE IST" beginnt, gefolgt von einem beliebigen Wort oder einer beliebigen Phrase. Das Muster passt also zu "MEINE LIEBLINGSFARBE IST BLAU", "MEINE LIEBLINGSFARBE IST ROT", "MEINE LIEBLINGSFARBE IST GRÜN" und so weiter. Der ```<star />``` Tag wird das vom Benutzer eingegebene Wort oder die Phrase erfassen und in der Antwort verwenden. Wenn der Benutzer beispielsweise "MEINE LIEBLINGSFARBE IST BLAU" eingibt, wird "blau" durch das Wildcard repräsentiert. Wenn der Chatbot antwortet, wird ```<star />``` durch "blau" ersetzt. Der Bot antwortet dann mit "Deine Lieblingsfarbe ist blau".

<img src="../img/sentence_response.png" alt="" width="27%" />

Hier sind einige weitere Beispiele für Eingaben und Ausgaben aus dieser Kategorie:

Eingabe | Ausgabe 
---|--------------
MEINE LIEBLINGSFARBE IST BLAU | Deine Lieblingsfarbe ist blau.
MEINE LIEBLINGSFARBE IST ROT | Deine Lieblingsfarbe ist rot.
MEINE LIEBLINGSFARBE IST GRÜN | Deine Lieblingsfarbe ist grün.