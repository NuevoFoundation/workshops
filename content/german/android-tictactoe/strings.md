---
title: "Strings"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 7
---
Alles, was in Anführungszeichen steht, wird als String bezeichnet. So repräsentiert ein Computer Wörter oder Sätze. Zum Beispiel sind `"a"`, `"2"`, `"banana!"` und `"Hello World"` Strings, aber `Hello World` und `2` sind keine Strings, weil die Anführungszeichen fehlen. Du kannst viele Strings miteinander kombinieren, indem du den `+`-Operator verwendest. Zum Beispiel:

- `"Apple" + "Pineapple"` ergibt den String `"ApplePineapple"`.
- `"Nuevo" + " " + "Foundation"` ergibt den String `"Nuevo Foundation"`.

{{% notice tip %}}
## Gemeinsam Arbeiten

Lösche alle `System.out.println`-Textzeilen in deinem Code. Beginne deinen Code mit der Zeile `System.out.println("Nuevo" + " " + "Foundation");`. Beachte, dass es viele Möglichkeiten gibt, Strings miteinander zu kombinieren. Zum Beispiel wäre eine andere Möglichkeit, Nuevo Foundation auszugeben, den Code `System.out.println("Nue" + "vo Fou" + "ndation");` zu schreiben. Wir werden mindestens eine weitere Möglichkeit brainstormen, um den String `"Nuevo Foundation"` mit zwei `+`-Symbolen in jeder `System.out.println`-Anweisung auszugeben. Überprüfe, dass Nuevo Foundation 3 Mal ausgegeben wird. Mit anderen Worten, deine Konsole sollte so aussehen, nachdem du auf Ausführen gedrückt hast:

        Nuevo Foundation
        Nuevo Foundation
        Nuevo Foundation
{{% /notice %}}