```markdown
---
title: "Kategorien"
draft: false
weight: 6
---

## Grundlagen der AIML
Die grundlegende Einheit von AIML ist die **Kategorie**. Eine Kategorie besteht aus einem Muster (pattern) und einer Vorlage (template). Das **Muster** ist das, was der Benutzer zum Bot sagt. Die **Vorlage** ist die Antwort, die der Bot dem Benutzer gibt.

Schauen wir uns das folgende Beispiel an: Hier ist das Muster "HELLO" und die Vorlage ist "Hello, World!". Wenn der Benutzer "HELLO" sagt, antwortet der Bot mit "Hello, World!". Beachten Sie, dass die Mustererkennung nicht zwischen Groß- und Kleinschreibung unterscheidet. Der Bot wird also auf "hello", "HELLO", "Hello" und "HeLlo" auf die gleiche Weise reagieren.
<img src="../img/chat_persons_robot.png" alt="Illustration von Personen, die mit einem Chatbot-Roboter kommunizieren" width="20%"/>

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice info %}}

Wenn Sie das Muster schreiben, empfehlen wir, ausschließlich GROSSBUCHSTABEN zu verwenden und auf Satzzeichen zu verzichten. Wenn Sie beispielsweise "What is your name?" abgleichen möchten, sollten Sie das Muster als "WHAT IS YOUR NAME" schreiben. Pandora entfernt jegliche Satzzeichen aus der Benutzereingabe, bevor das Muster abgeglichen wird.

{{% /notice %}}
```