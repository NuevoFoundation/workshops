---
title: "C#: Grundlagen - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dies sind Beispiels-Lösungen. Viele Aufgaben haben mehrere gültige Lösungen, insbesondere solche, bei denen Sie Ihre eigenen Beispiele erstellen sollen. Ihre Lösung ist korrekt, wenn sie die erwartete Ausgabe produziert!
{{% /notice %}}

## Variablen und Datentypen

### Hilf Patrick, seine Variablen zu beheben

Patricks Code hat die falschen Datentypen für jede Variable. Hier sind die korrigierten Deklarationen:

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**Erklärung:** Jede Variable benötigt einen Datentyp, der zum gespeicherten Wert passt:

| Variable | Falscher Typ | Korrigierter Typ | Warum |
|----------|--------------|------------------|-------|
| `bestFriend` | `int` | `string` | `"Minerva"` ist Text und keine Zahl |
| `numOfFriends` | `bool` | `int` | `4` ist eine ganze Zahl, kein Wahr/Falsch-Wert |
| `GPA` | `string` | `double` | `3.6` ist eine Dezimalzahl, kein Text |
| `meaningOfLife` | `double` | `char` | `'$'` ist ein einzelnes Zeichen, keine Dezimalzahl |
| `loveMusic` | `char` | `bool` | `true` ist ein boolean-Wert, kein Zeichen |

Ausgabe:
```
Du hast es repariert!
```

## Operatoren

### Prüfungsstatistik

Gegeben die Noten: Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92):

```csharp
// 1. Deklariere die Variablen für die Schülernoten
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. Berechne den Klassendurchschnitt
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. Verwende Relationale Operatoren für die Vergleiche
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
Wir teilen durch `5.0` anstelle von `5`, um ein Dezimalergebnis zu erhalten. In C# ergibt die Division zweier Ganzzahlen eine Ganzzahl (der Rest wird verworfen). Die Verwendung von `5.0` stellt sicher, dass wir den genauen Durchschnitt erhalten.
{{% /notice %}}

Ausgabe:
```
---------------------------
     Musiknotenbericht    
---------------------------

Schülernoten:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Klassendurchschnitt: 89.6
- Durchschnitt über 60: Wahr
- Durchschnitt über 70: Wahr
- Durchschnitt über 80: Wahr
- Durchschnitt über 90: Falsch
```

## Kontrollstrukturen

### If-Abfrage: Patricks Begrüßung

Fülle die booleschen Ausdrücke aus, damit Patrick die richtige Begrüßung basierend auf der Stunde sagt:

```csharp
int currentHour = 10; // ändern, um verschiedene Stunden (0-23) zu testen

if (currentHour < 12)
{
    Console.WriteLine("Guten Morgen");
}
else if (currentHour < 20)
{
    Console.WriteLine("Guten Nachmittag");
}
else
{
    Console.WriteLine("Gute Nacht");
}
```

**So funktioniert es:**
- Stunden 0-11: `currentHour < 12` ist `true` → gibt "Guten Morgen" aus
- Stunden 12-19: `currentHour < 12` ist `false`, aber `currentHour < 20` ist `true` → gibt "Guten Nachmittag" aus
- Stunden 20-23: Beide Bedingungen sind `false` → fällt ins `else` → gibt "Gute Nacht" aus

### For-Schleife: Summe von 1 bis 100

Konvertiere die While-Schleife in eine For-Schleife, die 1 + 2 + 3 + ... + 100 berechnet:

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("Antwort in einer For-Schleife berechnet: " + total);
```

Ausgabe:
```
Antwort in einer For-Schleife berechnet: 5050
```

{{% notice tip %}}
Die Antwort ist 5050. Eine berühmte Geschichte besagt, dass der Mathematiker Carl Friedrich Gauss dies als Kind herausfand, indem er bemerkte, dass 1 + 100 = 101, 2 + 99 = 101 usw., was 50 Paare von 101 ergibt, die 5050 ergeben!
{{% /notice %}}

## Methoden

### Das Pyramidenzählen

Schreibe eine Methode, die die Gesamtanzahl der Perlen in einer Quadrat-Zahlen-Pyramide mit `n` Ebenen berechnet. Ebene 1 hat 1×1 = 1 Perle, Ebene 2 hat 2×2 = 4 Perlen, Ebene 3 hat 3×3 = 9 Perlen usw.

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**So funktioniert es:** Die Methode iteriert durch jede Ebene von 1 bis `levels` und addiert das Quadrat der Ebenenzahl (`i * i`) zur laufenden Summe.

Beispielwerte:

| Ebenen | Berechnung | Gesamt |
|--------|------------|--------|
| 1 | 1×1 | 1 |
| 2 | 1 + 4 | 5 |
| 3 | 1 + 4 + 9 | 14 |
| 4 | 1 + 4 + 9 + 16 | 30 |

Ausgabe:
```
Herzlichen Glückwunsch! Herausforderung gelöst!
```

## Klassen und Objekte

### Erstelle die Vogel-Klasse

Hier ist die komplette `Bird`-Klasse mit allen Feldern, dem Konstruktor und allen Methoden:

```csharp
public class Bird
{
    // Schritt 1: