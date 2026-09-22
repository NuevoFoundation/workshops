---
title: "Replit verwenden"
date: 2019-07-29T13:24:17-07:00
weight: 1
draft: false
---

Um unser Spiel zu erstellen, benutzen wir die Pygame-Bibliothek, die uns eine Reihe von vorgefertigten Funktionen zur Verfügung stellt, die wir nutzen können, um Pong und seine Animationen zu erstellen.

## Replit verwenden

Heute werden wir Replit verwenden, um das Pong-Spiel zu erstellen.

Wenn du eine Auffrischung darüber möchtest, wie man Replit verwendet, schau dir unser <a href="https://workshops.nuevofoundation.org/python-basics/repl-it/" target="_blank">Python-Grundlagen-Tutorial</a> an.

Nun lass uns einen Blick auf einige der Code-Elemente werfen, die dir in der Datei `main.py` bereitgestellt wurden.

{{% notice tip %}}

## Bibliotheken und Import-Anweisungen

Schau dir den oberen Teil des Codes an. Dort wirst du die folgende Zeile sehen:

```
import pygame
```

Diese Anweisung ermöglicht es uns, alle Animations- und Objektzeichnungsfunktionen der `pygame`-Bibliothek zu importieren. Eine **Bibliothek** ist ein Ort, an dem zusammengehörige Funktionalitäten für die Verwendung in der Programmiersprache Python gruppiert werden. Zum Beispiel bietet die `pygame`-Bibliothek eine Möglichkeit, ein Rechteck auf dem Bildschirm zu zeichnen, das wir verwenden können, um die Grenzen, den Ball und die Schläger, die im Pong-Spiel verwendet werden, zu zeichnen.

## Kommentare

Die graue Zeile, die mit einem `#` beginnt, wird als **Kommentar** bezeichnet. Kommentare sind Anmerkungen im Code, die erklären, was der Code in normalem Englisch bewirkt. Kommentare werden vom Computer ignoriert; Entwickler verwenden Kommentare, um miteinander zu kommunizieren, besonders wenn mehrere Entwickler am selben Code arbeiten. Kommentare ermöglichen es auch einer Person, die sich den Code ansieht, einen Überblick darüber zu bekommen, was passiert, ohne den gesamten Code lesen zu müssen. In `main.py` verwenden wir Kommentare durchgehend, um anzugeben, wo Änderungen am Code vorgenommen werden müssen.

{{% /notice %}}