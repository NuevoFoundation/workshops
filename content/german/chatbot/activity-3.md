---
title: "Aktivität 3: Füge eigene Kategorien hinzu"
draft: false
weight: 7
---

## Füge weitere Kategorien hinzu

Momentan kann unser Bot nur auf "Hello" (Hallo) reagieren. Lass uns weitere Kategorien hinzufügen, damit unser Bot auf mehr Dinge antworten kann.

1. Wenn der Benutzer sagt: "What is your name?" (Wie heißt du?), sollte der Bot mit "My name is Chatbot" (Mein Name ist Chatbot) antworten.
2. Wenn der Benutzer sagt: "What is your favorite color?" (Was ist deine Lieblingsfarbe?), sollte der Bot mit "My favorite color is blue" (Meine Lieblingsfarbe ist Blau) antworten.
3. Wenn der Benutzer sagt: "What is your favorite food?" (Was ist dein Lieblingsessen?), sollte der Bot mit "My favorite food is pizza" (Mein Lieblingsessen ist Pizza) antworten.

<img src="../img/ideas.png" alt="" width="30%" style="" />

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

Erinnere dich: Beim Schreiben des Musters (pattern) benutze nur Großbuchstaben und verzichte auf Satzzeichen. Wenn du also "What is your name?" (Wie heißt du?) anpassen möchtest, solltest du das Muster als "WHAT IS YOUR NAME" schreiben.

{{% /notice %}}

{{% notice tip %}}

Denke daran, die Datei zu speichern, wann immer du die Kategorien bearbeitest und anschließend mit dem Chatbot interagieren möchtest.

{{% /notice %}}

Versuche, diese Kategorien zu deinem Bot hinzuzufügen, und teste sie im Chat-Widget. An diesem Punkt sollte der Bot auf "Hello" (Hallo), "What is your name?" (Wie heißt du?), "What is your favorite color?" (Was ist deine Lieblingsfarbe?) und "What is your favorite food?" (Was ist dein Lieblingsessen?) reagieren.