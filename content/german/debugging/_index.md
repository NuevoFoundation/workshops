---
title: "C: Der Debugging-Prozess"
description: "Eine Einführung in das Debugging von Programmen"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["programmiergrundlagen"]
difficulties: ["mittel"]
---

## Einführung

Also, du hast die Grundlagen einer Programmiersprache gelernt. Wahrscheinlich hast du die Kunst des `„Hello World“` gemeistert und entweder ein persönliches Projekt begonnen oder genügend Tutorials durchgearbeitet, um eine Idee in Code umzusetzen.

Aber was passiert, wenn dein Code nicht kompiliert? Programmieranfänger suchen normalerweise online, um zu sehen, ob andere auf ähnliche Probleme gestoßen sind. Dies ist etwas mühsam, da man jedes Mal, wenn ein Fehler auftritt, im Internet nach einer Lösung suchen muss.

Was passiert, wenn dein Programm zwar kompiliert, aber nicht wie erwartet funktioniert? (d. h., du hast **einen Fehler gefunden? 🪲)**

Zurückzugehen und deinen Code zu reparieren, kann eine größere Herausforderung darstellen als das Schreiben des Codes selbst. Das Lernen, wie man mit diesen Bugs und Fehlern umgeht, erfordert Geschick, Geduld und Erfahrung. In diesem Workshop werden wir den grundlegenden Prozess des Debugging deines Codes entwirren. Denke daran, dass Debugging ein Teil jeder Programmiersprache ist.

{{% panel theme="info" header="Warum nennt man es Bug?"%}}
Der erste dokumentierte Programmierfehler wurde bereits 1947 registriert, als sich eine Motte entschied, am falschen Ort zu sein. Schau dir <a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">Den ersten Computerfehler der Welt</a> an.

{{% /panel %}}

## Über diesen Workshop

Dieser Workshop geht davon aus, dass du die Sprache **C** verstehst und darin schreiben kannst. Die Beispiele in diesem Workshop nutzen Datenstrukturen und Algorithmen, Themen, die normalerweise in einem Einführungskurs zur Informatik behandelt werden. Wir werden eine kurze Erklärung dazu geben, die als Auffrischung für dich dienen soll, damit du verstehst, was der Beispielcode tut. Außerdem wird angenommen, dass du bereits über ein [Replit](https://replit.com)-Konto verfügst und mit Replit vertraut bist.

## Replit und die Kommandozeile

Lass uns Replit verwenden, um etwas Code auszuführen und mit der Kommandozeile vertrauter zu werden. Klicke auf den Button "Replit starten" unten und fork das Programm. Wenn das Replit-Programm geöffnet wird, öffne den **Shell**-Tab.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Replit starten</a>

Fangen wir an, unseren Code zu kompilieren. Gib im Shell-Tab Folgendes ein und drücke **ENTER**:

```bash
make HelloWorld
```

Nachdem wir unseren Code kompiliert haben, müssen wir einen anderen Befehl verwenden, um ihn auszuführen. Gib Folgendes ein und drücke **ENTER**:

```bash
./examples/HelloWorld
```

Du solltest sehen, wie der Text `Hello, World!` im Shell-Fenster angezeigt wird!

{{% panel theme="info" header="Warum die Kommandozeile verwenden?"%}}

Die Kommandozeile mag für Anfänger unintuitiv und wenig benutzerfreundlich erscheinen. Dennoch ist es äußerst wichtig, ihre Nutzung für deine Karriere als Programmierer zu lernen. Wir werden sie später im Workshop verwenden, um `gdb` und `valgrind` auszuführen, daher ist es besser, so viel Erfahrung wie möglich damit zu sammeln!

Die Beispiele wurden in einem einzigen Replit geschrieben. Wir werden dir alle Befehle zur Verfügung stellen, die du brauchst, um sie zu kompilieren und auszuführen. Mach dir also keine Sorgen, falls du die Kommandozeile bisher noch nicht genutzt hast.

{{% /panel %}}

## Inhalte des Workshops

{{% children /%}}