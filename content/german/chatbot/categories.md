```markdown
---
title: "Kategorien"
draft: false
weight: 6
---

## AIML-Grundlagen
Die grundlegende Einheit von AIML ist die **Kategorie**. Eine Kategorie besteht aus einem Muster (pattern) und einer Vorlage (template). Das **Muster** entspricht dem, was der Benutzer zum Bot sagt. Die **Vorlage** ist die Antwort, die der Bot dem Benutzer gibt.

Schauen wir uns das folgende Beispiel an: Das Muster ist "HELLO" und die Vorlage ist "Hello, World!". Wenn der Benutzer "HELLO" sagt, wird der Bot mit "Hello, World!" antworten. Beachten Sie, dass die Mustererkennung nicht zwischen Groß- und Kleinschreibung unterscheidet, sodass der Bot auf "hello", "HELLO", "Hello" und "HeLlo" auf die gleiche Weise reagiert.
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

Beim Schreiben des Musters empfehlen wir, alles in GROSSBUCHSTABEN zu schreiben und auf die Verwendung von Satzzeichen zu verzichten. Wenn Sie beispielsweise "What is your name?" abgleichen möchten, sollten Sie das Muster als "WHAT IS YOUR NAME" schreiben. Pandora entfernt alle Satzzeichen in der Benutzereingabe, bevor das Muster abgeglichen wird.

{{% /notice %}}
```