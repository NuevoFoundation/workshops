---
title: "Kategorien"
draft: false
weight: 6
---

## AIML-Grundlagen
Die grundlegende Einheit von AIML ist die **Kategorie**. Eine Kategorie besteht aus einem Muster und einer Vorlage. Das **Muster** ist das, was der Benutzer zum Bot sagt. Die **Vorlage** ist die Antwort, die der Bot dem Benutzer gibt.

Betrachten wir das folgende Beispiel: Wir sehen, dass das Muster "HELLO" ist und die Vorlage "Hallo, Welt!". Wenn der Benutzer "HELLO" sagt, antwortet der Bot mit "Hallo, Welt!". Beachten Sie, dass die Musterübereinstimmung nicht zwischen Groß- und Kleinschreibung unterscheidet. Der Bot wird also auf "hello", "HELLO", "Hello" und "HeLlo" auf die gleiche Weise reagieren.
<img src="../img/chat_persons_robot.png" alt="" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hallo, Welt!
    </template>
</category>
```

{{% notice info %}}

Beim Schreiben des Musters empfehlen wir, alles in GROSSBUCHSTABEN zu schreiben und keine Satzzeichen zu verwenden. Wenn Sie beispielsweise "Wie ist Ihr Name?" abgleichen möchten, sollten Sie das Muster als "WIE IST IHR NAME" schreiben. Pandora entfernt jegliche Satzzeichen aus der Benutzereingabe, bevor das Muster abgeglichen wird.

{{% /notice %}}