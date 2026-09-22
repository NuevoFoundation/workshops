---
title: "Raum 5: Die Konfliktschlucht"
description: "Lerne, wie man Merge-Konflikte löst und mit dem ursprünglichen Repository synchronisiert."
difficulties: ["fortgeschritten"]
weight: 5
---

# Raum 5: Die Konfliktschlucht

Du betrittst einen Raum mit einem tiefen Abgrund. Zwei Brücken erstrecken sich von beiden Seiten, treffen sich jedoch nicht ganz in der Mitte. Ein Schild liest: "Nur durch das Lösen von Konflikten kannst du hinüber."

## Deine Mission

1. Ziehe die neuesten Änderungen aus dem ursprünglichen Repository.
2. Löse den Merge-Konflikt, der erscheint.
3. Bestätige die Lösung und push die Änderungen.

## Anweisungen

1. Füge das ursprüngliche Repository als Remote hinzu:

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. Hole und merge die Änderungen:

```
git fetch upstream
git merge upstream/main
```

3. Es wird ein Merge-Konflikt angezeigt. Öffne die betroffenen Datei(en) und löse die Konflikte.
4. Nach der Lösung füge die Änderungen hinzu, committe sie und pushe:

```
git add .
git commit -m "Merge-Konflikt gelöst"
git push origin main
```

{{< notice info >}}
**Tipp:** Achte auf die Konfliktmarker (`<<<<<<<`, `=======`, `>>>>>>>`) in den Dateien. Entscheide, welche Änderungen du behalten möchtest, oder kombiniere sie nach Bedarf.
{{< /notice >}}

{{< expand "Beispiel eines Merge-Konflikts" >}}
```diff
<<<<<<< HEAD
Das ist ein Inhalt von deinem aktuellen Branch.
=======
Das ist ein widersprüchlicher Inhalt aus dem Branch, den du mergen möchtest.
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">Nachdem du den Konflikt gelöst hast, was war die endgültige Zeile der betroffenen Datei? Gib sie unten ein:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Ausgezeichnete Arbeit! Du hast die Konfliktschlucht bezwungen und alle Herausforderungen gemeistert. Du bist jetzt ein GitHub-Meister!
{{< /notice >}}