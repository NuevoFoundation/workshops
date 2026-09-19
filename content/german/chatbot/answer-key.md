---
title: "Chatbot - Antwortschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies sind Musterlösungen für die Aktivitäten des Chatbot-Workshops. AIML-Muster müssen in GROSSBUCHSTABEN geschrieben werden. Die Vorlagenantworten können jede gewünschte Schreibweise verwenden. Die Antworten Ihres Chatbots können von diesen Beispielen abweichen, solange das Musterabgleich korrekt funktioniert!
{{% /notice %}}

## Aktivität 2: Hallo Welt

Dies ist die Starter-Kategorie, die im Walkthrough bereitgestellt wurde:

```xml
<category>
    <pattern>HELLO</pattern>
    <template>
        Hallo, Welt!
    </template>
</category>
```

Wenn der Benutzer "Hello" eingibt, antwortet der Bot mit "Hallo, Welt!"

## Aktivität 3: Eigene Kategorien hinzufügen

### 1. Wie heißt du?

```xml
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        Mein Name ist Chatbot.
    </template>
</category>
```

### 2. Was ist deine Lieblingsfarbe?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        Meine Lieblingsfarbe ist Blau.
    </template>
</category>
```

### 3. Was ist dein Lieblingsessen?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        Mein Lieblingsessen ist Pizza.
    </template>
</category>
```

{{% notice tip %}}
**Wichtige Regeln für Muster:**
- Muster immer in GROSSBUCHSTABEN schreiben
- Keine Satzzeichen in die Muster aufnehmen (Pandorabots entfernt Satzzeichen aus der Benutzereingabe vor dem Abgleich)
- Die Vorlagenantwort kann jede gewünschte Schreibweise verwenden
{{% /notice %}}

Zu diesem Zeitpunkt sollte Ihr Bot auf folgende Eingaben reagieren:

| Benutzer sagt | Bot antwortet |
|---------------|---------------|
| Hello | Hallo, Welt! |
| Wie heißt du? | Mein Name ist Chatbot. |
| Was ist deine Lieblingsfarbe? | Meine Lieblingsfarbe ist Blau. |
| Was ist dein Lieblingsessen? | Mein Lieblingsessen ist Pizza. |

## Aktivität 4: Platzhalter

Der `*`-Platzhalter passt auf ein oder mehrere Wörter. Durch das Platzieren von `*` am Anfang eines Musters antwortet der Bot auf jede Frage, die **mit** dem Schlüsselwort endet.

### 1. Jede Frage, die mit "Essen" endet

```xml
<category>
    <pattern>* FOOD</pattern>
    <template>
        Mein Lieblingsessen ist Pizza.
    </template>
</category>
```

### 2. Jede Frage, die mit "Farbe" endet

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        Meine Lieblingsfarbe ist Blau.
    </template>
</category>
```

### 3. Jede Frage, die mit "Name" endet

```xml
<category>
    <pattern>* NAME</pattern>
    <template>
        Mein Name ist Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**Häufige Frage von Studierenden:** "Brauche ich die Kategorien aus Aktivität 3 noch?"

Sie können beide behalten! Pandorabots gleicht zuerst das spezifischste Muster ab. Somit hat "WHAT IS YOUR FAVORITE FOOD" (exakte Übereinstimmung) Vorrang vor "* FOOD" (Platzhalter). Die Platzhalterkategorien verarbeiten Fragen, für die Sie keine Kategorie explizit erstellt haben, wie "Magst du Essen?" oder "Erzähl mir etwas über Essen".
{{% /notice %}}

Der Bot reagiert jetzt auf viel mehr Eingaben:

| Benutzer sagt | Passt zu Muster | Bot antwortet |
|---------------|-----------------|---------------|
| Was ist dein Lieblingsessen? | WHAT IS YOUR FAVORITE FOOD | Mein Lieblingsessen ist Pizza. |
| Magst du Essen? | * FOOD | Mein Lieblingsessen ist Pizza. |
| Erzähl mir etwas über Essen | * FOOD | Mein Lieblingsessen ist Pizza. |
| Wie heißt du? | WHAT IS YOUR NAME | Mein Name ist Chatbot. |
| Hast du einen Namen? | * NAME | Mein Name ist Chatbot. |

## Aktivität 5: Platzhalter wiederholen

Das `<star />`-Tag erfasst, was der `*`-Platzhalter übereinstimmt, und fügt dies in die Antwort des Bots ein.

### 1. "Mein Name ist [Name]" antwortet mit "Schön, dich kennenzulernen, [Name]!"

```xml
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Schön, dich kennenzulernen, <star />!
    </template>
</category>
```

### 2. "Meine Lieblingsfarbe ist [Farbe]" antwortet mit "Ich mag auch [Farbe]!"

```xml
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        Ich mag auch <star />!
    </template>
</category>
```

### 3. "Mein Lieblingsessen ist [Essen]" antwortet mit "[Essen]! Lecker!"

```xml
<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Lecker!
    </template>
</category>
```

Wie `<star />` funktioniert:

| Benutzer sagt | `*` erfasst | Bot antwortet |
|---------------|-------------|---------------|
| Mein Name ist John | John | Schön, dich kennenzulernen, John! |
| Mein Name ist Jane | Jane | Schön, dich kennenzulernen, Jane! |
| Meine Lieblingsfarbe ist Blau | Blau | Ich mag auch Blau! |
| Meine Lieblingsfarbe ist Rot | Rot | Ich mag auch Rot! |
| Mein Lieblingsessen ist Pizza | Pizza | Pizza! Lecker! |
| Mein Lieblingsessen ist Sushi | Sushi | Sushi! Lecker! |

## Komplettes AIML-Dokument

So sollte Ihr vollständiges `greetings.aiml`-Dokument nach Abschluss aller Aktivitäten aussehen:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- Aktivität 2: Hallo Welt -->
<category>
    <pattern>HELLO</pattern>
    <template>
        Hallo, Welt!
    </template>
</category>

<!-- Aktivität 3: Basis-Kategorien -->
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        Mein Name ist Chatbot.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        Meine Lieblingsfarbe ist Blau.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        Mein Lieblingsessen ist