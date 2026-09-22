---
title: "Aktivität 2 - Wie erstelle und speichere ich dein Menü"
date: 2019-07-25T13:24:17-07:00
weight: 3
draft: false
---
## Voraussetzungen
- <a href="../../python-basics/data-structures/lists/" target="_blank">Listen</a>

## Wie erstelle und speichere ich dein Menü
Nun, da wir ein Banner für dein Restaurant haben, lass uns darüber nachdenken, wie wir die Informationen über deine Gerichte organisieren können. Erinnerst du dich, wie du früher entschieden hast, welche Speisen und Getränke du in deinem Restaurant anbieten möchtest? Jetzt müssen wir herausfinden, wie wir all diese Informationen speichern. Wir müssen den Namen, den Preis und die Beschreibung jedes Elements auf deinem Menü speichern.
Um dies zu tun, können wir ein sogenanntes Python-Wörterbuch verwenden, um diese Informationen zu verfolgen.

Wir werden ein Wörterbuch verwenden, bei dem die Werte Listen sind!
Auf diese Weise können wir sowohl den Preis des Artikels als auch die Beschreibung des Artikels verfügbar machen. Wenn wir eine Liste oder ein anderes Containerobjekt als Wert zu einem Schlüssel in einem Wörterbuch verwenden, erhalten wir ein **verschachteltes Wörterbuch**. Da wir sowohl Preis- als auch Beschreibungsinformationen speichern müssen, müssen wir sicherstellen, dass diese in einer bestimmten Reihenfolge in den Listen gespeichert werden.

Das ist die Struktur, die wir verwenden:
{artikel: [preis, beschreibung]}
Indem wir sicherstellen, dass wir diese Struktur beim Erstellen des **verschachtelten Wörterbuchs** befolgen, können wir sicherstellen, dass der Zugriff auf Preis und Beschreibung später einfach ist.

Hier ist ein Beispiel für ein verschachteltes Wörterbuch. Aber denke daran, die oben angegebene Struktur zu befolgen, wenn du dein Menü erstellst!
```python
#struktur
#{wort:[bedeutung, wortart, aussprache]}
kleinesWörterbuch = {'spielzeug':['ein Gegenstand, mit dem Kinder spielen', 'Substantiv', 'shpiel-zoig'], 'gehen':['eine Art, sich in regelmäßigem und langsamem Tempo fortzubewegen, ein Fuß wird nach dem anderen in Folge gehoben', 'Verb', 'ge-en']}
```

Gehe zurück zum früheren `Replit`-Link und füge Code hinzu, der dein Menü in einer Variablen namens `dictMenu` speichert. Denke daran, `dictMenu` als globale Variable zu erstellen - setze sie nicht in die `main()`-Funktion, sondern platziere sie am Anfang deines Codes, damit sie von jeder Funktion aus zugänglich ist.
Hinweis: Dein Preis ist ein `float`, und deine Beschreibung ist ein `string`.

Wähle deine 5 Lieblingsspeisen/-getränke aus, um sie in dein Menü aufzunehmen.  
Zum Beispiel: Cremige Pesto Pasta, Caesar Salat, Pinke Limonade, Root Beer, Eistee, Karottenkuchen, Frühlingsrollen