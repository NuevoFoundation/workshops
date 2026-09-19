---
title: "Ein Überblick über das Debugging"
difficulties: ["mittelschwer"]
weight: 2
draft: false
---

Es gibt viele verschiedene Möglichkeiten, ein Programm zu debuggen. In diesem Leitfaden beginnen wir mit einigen allgemeinen Schritten, damit du nicht den Überblick verlierst, wenn du ein Programm debuggst. Es gibt 3 grundlegende Schritte beim Debuggen eines Programms:

1. **Das Problem identifizieren**. In diesem Schritt ist es dein Ziel, herauszufinden, was den Fehler verursacht. Dazu gehört, die Bedingungen zu finden, die zu dem Fehler geführt haben. Wenn du den Fehler reproduzieren kannst, erhältst du einige der Informationen, die du benötigst. Das hilft dir, das Problem einzugrenzen und möglicherweise zu verstehen, warum der Fehler überhaupt auftritt.

2. **Eine Lösung finden**. In diesem Schritt ist es dein Ziel, den Fehler zu beheben. Manchmal ist das der einfachste Schritt, aber gelegentlich ist es schwierig, da sich herausstellen kann, dass die Logik deines Programms von Anfang an fehlerhaft war! Dieser Schritt zusammen mit Schritt 3 kann leicht die meiste Zeit in Anspruch nehmen.

3. **Die Lösung testen**. Wenn deine Lösung den Fehler nicht tatsächlich behebt, welchen Nutzen hat sie dann? Du musst außerdem sicherstellen, dass deine Lösung keine neuen Fehler einführt. Dieser Schritt kann so einfach sein wie das erneute Kompilieren und Ausführen des Programms, nachdem du die Lösung angewendet hast. Oder es kann darin bestehen, eine ganze Reihe automatisierter Tests in einer Umgebung auszuführen. In jedem Fall ist das Ziel dieses Schritts, die *Korrektheit* des Programms zu gewährleisten.

Der wahrscheinlich frustrierendste Teil des Debuggings ist Schritt 1. Als Programmierer ist unsere Aufgabe, Code zu schreiben, aber wir können keinen Code schreiben, um das Problem zu beheben, wenn wir überhaupt nicht wissen, was das Problem ist! Deshalb wird der Großteil dieses Workshops darauf fokussiert sein, herauszufinden, wo sich ein Fehler verstecken könnte, sowie darauf, wie du einige Werkzeuge einsetzen kannst, um deine Suche zu unterstützen.