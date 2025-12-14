```markdown
---
title: "Echos von Wildcards"
draft: false
weight: 9
---

## Einführung des ```<star />```-Tags
Lassen Sie uns noch ein weiteres Werkzeug kennenlernen, um unserem Chatbot interessantere Antworten zu ermöglichen. Wir haben in der letzten Lektion gelernt, wie wir das Wildcard ```*``` verwenden können, um jedes beliebige Wort oder jede beliebige Phrase zu matchen. Aber was, wenn wir das Wort oder die Phrase, die der Benutzer eingegeben hat, in unserer Antwort verwenden möchten? Zum Beispiel, wenn der Benutzer uns seine Lieblingsfarbe nennt, möchten wir, dass die Antwort des Bots die Lieblingsfarbe des Benutzers einschließt. Wir können dies mit dem ```<star />```-Tag tun.

Der ```<star />```-Tag ist ein spezieller Tag, der es uns ermöglicht, das vom Benutzer eingegebene Wort oder die Phrase in unserer Antwort zu verwenden. Schauen wir uns an, wie das funktioniert.

```
<category>
    <pattern>MEINE LIEBLINGSFARBE IST *</pattern>
    <template>
        Deine Lieblingsfarbe ist <star />.
    </template>
</category>
```

Lassen Sie uns durchgehen, wie diese Kategorie funktioniert. Das Muster "MEINE LIEBLINGSFARBE IST *" wird jede Eingabe matchen, die mit "MEINE LIEBLINGSFARBE IST" beginnt, gefolgt von einem beliebigen Wort oder einer Phrase. Das Muster wird also "MEINE LIEBLINGSFARBE IST BLAU", "MEINE LIEBLINGSFARBE IST ROT" und "MEINE LIEBLINGSFARBE IST GRÜN" und so weiter matchen. Der ```<star />```-Tag wird das Wort oder die Phrase, die der Benutzer eingegeben hat, erfassen und in der Antwort verwenden. Wenn der Benutzer also "MEINE LIEBLINGSFARBE IST BLAU" eingibt, wird "blau" das Wort, das durch das Wildcard dargestellt wird, sodass wenn der Chatbot antwortet, ```<star />``` durch "blau" ersetzt wird. Der Bot wird antworten mit "Deine Lieblingsfarbe ist blau".

<img src="../img/sentence_response.png" alt="" width="27%" />

Hier sind einige weitere Beispiele für Eingaben und Ausgaben aus dieser Kategorie:

Eingabe | Ausgabe 
---|--------------
MEINE LIEBLINGSFARBE IST BLAU | Deine Lieblingsfarbe ist blau.
MEINE LIEBLINGSFARBE IST ROT | Deine Lieblingsfarbe ist rot.
MEINE LIEBLINGSFARBE IST GRÜN | Deine Lieblingsfarbe ist grün.
```