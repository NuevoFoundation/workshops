```markdown
---
title: "Aktivität 3: Füge deine eigenen Kategorien hinzu"
draft: false
weight: 7
---

## Füge weitere Kategorien hinzu

Momentan kann unser Bot nur auf "Hallo" reagieren. Lass uns ein paar weitere Kategorien hinzufügen, damit unser Bot auf mehr Dinge reagieren kann.

1. Wenn der Benutzer sagt "Wie heißt du?", sollte der Bot mit "Mein Name ist Chatbot" antworten.
2. Wenn der Benutzer sagt "Was ist deine Lieblingsfarbe?", sollte der Bot mit "Meine Lieblingsfarbe ist blau" antworten.
3. Wenn der Benutzer sagt "Was ist dein Lieblingsessen?", sollte der Bot mit "Mein Lieblingsessen ist Pizza" antworten.

<img src="../img/ideas.png" alt="" width="30%" style="" /

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

Denke daran: Beim Schreiben des Patterns solltest du Großbuchstaben verwenden und auf Satzzeichen verzichten. Wenn du also "Wie heißt du?" abgleichen möchtest, solltest du das Pattern als "WIE HEISST DU" schreiben.

{{% /notice %}}

{{% notice tip %}}

Denke daran, die Datei zu speichern, wann immer du die Kategorien änderst und den Chatbot verwenden möchtest.

{{% /notice %}}

Versuche, diese Kategorien deinem Bot hinzuzufügen und teste sie mit dem Chat-Widget. An diesem Punkt sollte der Bot auf "Hallo", "Wie heißt du?", "Was ist deine Lieblingsfarbe?" und "Was ist dein Lieblingsessen?" antworten.
```