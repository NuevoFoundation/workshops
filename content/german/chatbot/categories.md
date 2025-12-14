---
title: "Kategorien"
draft: false
weight: 6
---

## AIML-Grundlagen
Die grundlegende Einheit von AIML ist die **Kategorie**. Eine Kategorie besteht aus einem Muster (Pattern) und einer Vorlage (Template). Das **Muster** ist das, was der Benutzer dem Bot sagt. Die **Vorlage** ist die Antwort, die der Bot dem Benutzer gibt.

Betrachten wir das folgende Beispiel: Wir sehen, dass das Muster "HELLO" ist und die Vorlage "Hello, World!". Wenn der Benutzer "HELLO" sagt, antwortet der Bot mit "Hello, World!". Beachten Sie, dass die Mustererkennung nicht zwischen Groß- und Kleinschreibung unterscheidet; der Bot wird auf "hello", "HELLO", "Hello" und "HeLlo" auf die gleiche Weise reagieren.
<img src="../img/chat_persons_robot.png" alt="" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

Beim Schreiben des Musters empfehlen wir, alles in GROSSBUCHSTABEN zu schreiben und keine Satzzeichen zu verwenden. Wenn Sie beispielsweise "What is your name?" abgleichen möchten, sollten Sie das Muster als "WHAT IS YOUR NAME" schreiben. Pandora entfernt alle Satzzeichen in der Benutzereingabe, bevor das Muster abgeglichen wird.

{{% /notice %}}