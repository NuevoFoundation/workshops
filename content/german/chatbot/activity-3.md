```md
---
title: "Aktivität 3: Füge deine eigenen Kategorien hinzu"
draft: false
weight: 7
---

## Füge weitere Kategorien hinzu

Im Moment kann unser Bot nur auf "Hello" antworten. Lass uns ein paar weitere Kategorien hinzufügen, damit unser Bot auf mehr Dinge reagieren kann.

1. Wenn der Benutzer fragt: "What is your name?", sollte der Bot mit "My name is Chatbot" antworten.
2. Wenn der Benutzer fragt: "What is your favorite color?", sollte der Bot mit "My favorite color is blue" antworten.
3. Wenn der Benutzer fragt: "What is your favorite food?", sollte der Bot mit "My favorite food is pizza" antworten.

<img src="../img/ideas.png" alt="Illustration eines Charakters, der neue Ideen brainstormt" width="30%" />

Zur Erinnerung, hier ist die Grundstruktur einer Kategorie:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Denke daran: Wenn du das Muster schreibst, verwende ausschließlich Großbuchstaben und vermeide Satzzeichen. Wenn du also "What is your name?" als Muster verwenden willst, solltest du es als "WHAT IS YOUR NAME" schreiben.

{{% /notice %}}

{{% notice tip %}}

Vergiss nicht, die Datei zu speichern, wann immer du die Kategorien änderst und mit dem Chatbot interagieren möchtest.

{{% /notice %}}

Probiere aus, diese Kategorien deinem Bot hinzuzufügen, und teste sie mit dem Chat-Widget. An diesem Punkt sollte der Bot auf "Hello", "What is your name?", "What is your favorite color?" und "What is your favorite food?" antworten.
```