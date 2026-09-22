---
title: "Aktivität 5 - Deklarieren und Verwenden einer Variable für die Schriftart"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

Großartige Fortschritte bisher! Jetzt wollen wir eine Variable verwenden, um die Schriftart des Textes im Spiel zu ändern.

In dieser Aktivität musst du dein Wissen über Variablen anwenden, welches du im Python Basics Workshop gelernt hast.

Finde `# TODO (ACTIVITY 5)` im Code. Deklariere die Variable `font_label` und weise ihr den Wert `'arial'` zu. Schau dir nun diese Anweisung im Code an: `font_name = pygame.font.match_font('arial')`. Kannst du herausfinden, wo in dieser Anweisung die neue Variable verwendet werden sollte, um die Schriftart auf dem Bildschirm zu steuern?

{{% notice tip %}}

Du kannst eine Liste der Schriftarten abrufen, die dein Computer unterstützt, indem du `pygame.font.get_fonts()` ausführst. Probier doch mal eine andere Schriftart als `'arial'` aus. Welche Schriftart gefällt dir am besten? Drücke **Run**, um das Ergebnis zu sehen.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Replit starten</a>

## Fazit

Du hast gerade den Schriftart-Parameter modifiziert, indem du eine Variable verwendet hast. Falls du dieselbe Schriftart an mehreren Stellen in deinem Programm verwendest, kannst du die Variable an einer einzigen Stelle verändern, und die Änderung wird überall wirksam, wo du die Variable benutzt hast!