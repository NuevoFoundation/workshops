---
title: "Wähle dein eigenes Abenteuer - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dieser Workshop ist kreativ — die Geschichte jedes Schülers wird unterschiedlich sein! Dieser Lösungsschlüssel zeigt ein vollständiges funktionierendes Beispiel basierend auf Nuvis Geschichte aus dem Workshop sowie eine Codevorlage, die Lehrkräfte heranziehen können, wenn sie den Schülern helfen, ihre eigenen Abenteuer zu strukturieren.
{{% /notice %}}

## Verwendete Kernkonzepte

| Konzept | Python-Code | Zweck in der Geschichte |
|---------|-------------|-------------------------|
| Text ausgeben | `print("text")` | Erzählt dem Leser die Geschichte |
| Eingabe erhalten | `input("frage")` | Lässt den Leser Entscheidungen treffen |
| In einer Variablen speichern | `choice = input(...)` | Merkt sich, was der Leser gewählt hat |
| Entscheidungen treffen | `if` / `else` | Ändert die Geschichte basierend auf der Wahl |

## Nuvis vollständiges Abenteuer

Dies ist ein funktionierendes Beispiel basierend auf Nuvis Storyboard aus dem Workshop:

```python
# Nuvis Wähle-Dein-Eigenes-Abenteuer-Spiel

print("=" * 40)
print("Nuvis Abenteuer!")
print("=" * 40)
print()
print("Nuvi hat gerade das Robotiktraining in der Schule beendet.")
print("Es ist Zeit, nach Hause zu gehen!")
print()

# Entscheidung 1: Wie nach Hause kommen
choice1 = input("Soll Nuvi zu Fuß gehen oder mit dem Fahrrad nach Hause fahren? Tippe 'gehen' oder 'fahrrad': ")

if choice1 == "gehen":
    print()
    print("Nuvi entscheidet sich, zu Fuß nach Hause zu gehen.")
    print("Auf dem Weg findet Nuvi einen niedlichen Welpen!")
    print("Nuvi streichelt den Welpen und geht weiter.")
    print("Nuvi kommt glücklich zu Hause an.")
elif choice1 == "fahrrad":
    print()
    print("Nuvi schnappt sich das Fahrrad und fährt nach Hause.")
    print("Der Wind fühlt sich großartig an! Nuvi fährt super schnell.")
    print("Nuvi kommt in Rekordzeit zu Hause an!")
else:
    print()
    print("Nuvi konnte sich nicht entscheiden und ist einfach zu Fuß nach Hause gegangen.")

print()
print("Nuvi ist endlich zu Hause! Einige Freunde sind draußen.")
print()

# Entscheidung 2: Was mit den Freunden machen
choice2 = input("Soll Nuvi Fußball spielen oder schwimmen gehen? Tippe 'fußball' oder 'schwimmen': ")

if choice2 == "fußball":
    print()
    print("Nuvi und die Freunde spielen Fußball im Park!")
    print("Nuvi schießt das Siegtor!")
    print("Alle jubeln! Was für ein toller Tag!")
elif choice2 == "schwimmen":
    print()
    print("Nuvi und die Freunde gehen ins Schwimmbad!")
    print("Sie plantschen herum und haben eine tolle Zeit.")
    print("Nuvi macht eine Bombe! PLATSCH!")
else:
    print()
    print("Nuvi entscheidet sich, einfach mit den Freunden abzuhängen.")

print()
print("Was für ein großartiger Tag! Ende.")
```

**Beispielausgabe (wenn der Benutzer "gehen" und dann "fußball" wählt):**
```
========================================
Nuvis Abenteuer!
========================================

Nuvi hat gerade das Robotiktraining in der Schule beendet.
Es ist Zeit, nach Hause zu gehen!

Soll Nuvi zu Fuß gehen oder mit dem Fahrrad nach Hause fahren? Tippe 'gehen' oder 'fahrrad': gehen

Nuvi entscheidet sich, zu Fuß nach Hause zu gehen.
Auf dem Weg findet Nuvi einen niedlichen Welpen!
Nuvi streichelt den Welpen und geht weiter.
Nuvi kommt glücklich zu Hause an.

Nuvi ist endlich zu Hause! Einige Freunde sind draußen.

Soll Nuvi Fußball spielen oder schwimmen gehen? Tippe 'fußball' oder 'schwimmen': fußball

Nuvi und die Freunde spielen Fußball im Park!
Nuvi schießt das Siegtor!
Alle jubeln! Was für ein toller Tag!

Was für ein großartiger Tag! Ende.
```

## Codevorlage für Schüler

Schüler können diese Vorlage als Ausgangspunkt für ihre eigenen Geschichten verwenden:

```python
# Mein Wähle-Dein-Eigenes-Abenteuer-Spiel
# Ersetze den Text in den Anführungszeichen durch deine eigene Geschichte!

print("Willkommen zu meinem Abenteuerspiel!")
print()

# Erzähle den Anfang deiner Geschichte
print("Du bist [beschreibe die Umgebung].")
print("[Etwas passiert, um das Abenteuer zu beginnen].")
print()

# Erste Entscheidung
choice1 = input("[Bitte den Leser, eine Entscheidung zu treffen]: ")

if choice1 == "[Option 1]":
    print("[Was passiert, wenn sie Option 1 wählen]")
elif choice1 == "[Option 2]":
    print("[Was passiert, wenn sie Option 2 wählen]")
else:
    print("[Was passiert, wenn sie etwas Unerwartetes eingeben]")

print()

# Zweite Entscheidung
choice2 = input("[Bitte den Leser, eine weitere Entscheidung zu treffen]: ")

if choice2 == "[Option A]":
    print("[Was passiert, wenn sie Option A wählen]")
elif choice2 == "[Option B]":
    print("[Was passiert, wenn sie Option B wählen]")
else:
    print("[Was passiert, wenn sie etwas Unerwartetes eingeben]")

print()
print("Ende!")
```

{{% notice tip %}}
**Häufige Probleme und Lösungen bei Schülern:**

**"Meine if-Anweisung greift nie!"**
- Stelle sicher, dass der Vergleich genau das abgleicht, was der Benutzer eintippt. `"Gehen"` ist nicht dasselbe wie `"gehen"`. Tipp: Verwende `.lower()`, um Großbuchstaben zu behandeln: `if choice1.lower() == "gehen":`

**"Wie füge ich weitere Entscheidungen hinzu?"**
- Du kannst verschachtelte if/else-Anweisungen verwenden, um verzweigte Pfade zu erstellen, oder weitere `elif`-Optionen hinzufügen. Jede Wahl erzeugt einen neuen Zweig der Geschichte.

**"Wie mache ich die Geschichte länger?"**
- Füge zwischen Entscheidungen weitere `print()`-Anweisungen hinzu, um die Geschichte weiter zu erzählen. Du kannst auch eine dritte oder vierte Entscheidung hinzufügen, indem du dasselbe Muster mit `input()` und `if/else` verwendest.
{{% /notice %}}

## Storyboard-zu-Code-Zuordnung

| Element des Storyboards | Code-Konzept |
|-------------------------|--------------|
| Text der Geschichte, den der Leser sieht | `print("...")` |
| Leser trifft eine Entscheidung | `choice = input("...")` |
| Verschiedene Pfade basierend auf der Entscheidung | `if` / `elif