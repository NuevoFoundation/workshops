```markdown
---
title: "Aktivität 3: Füge deine eigenen Kategorien hinzu"
draft: false
weight: 7
---

## Füge weitere Kategorien hinzu

Momentan kann unser Bot nur auf "Hallo" antworten. Lass uns weitere Kategorien hinzufügen, damit unser Bot auf mehr Dinge antworten kann.

1. Wenn der Benutzer fragt: "Wie heißt du?", sollte der Bot mit "Mein Name ist Chatbot" antworten.
2. Wenn der Benutzer fragt: "Was ist deine Lieblingsfarbe?", sollte der Bot mit "Meine Lieblingsfarbe ist Blau" antworten.
3. Wenn der Benutzer fragt: "Was ist dein Lieblingsessen?", sollte der Bot mit "Mein Lieblingsessen ist Pizza" antworten.

<img src="../img/ideas.png" alt="" width="30%" style="" />

Zur Erinnerung: Hier ist der grundlegende Aufbau einer Kategorie:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Erinnerung: Wenn du das Pattern schreibst, nutze ausschließlich Großbuchstaben und vermeide Satzzeichen. Wenn du also auf "Wie heißt du?" reagieren möchtest, solltest du das Pattern als "WIE HEISST DU" schreiben.

{{% /notice %}}

{{% notice tip %}}

Erinnerung: Speichere die Datei immer, wenn du die Kategorien änderst und mit dem Chatbot interagieren möchtest.

{{% /notice %}}

Versuche, diese Kategorien deinem Bot hinzuzufügen und teste sie im Chat-Widget. An diesem Punkt sollte der Bot auf "Hallo", "Wie heißt du?", "Was ist deine Lieblingsfarbe?" und "Was ist dein Lieblingsessen?" antworten.
```