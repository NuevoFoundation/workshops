```markdown
---
title: "Strings"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

Alles, was von Anführungszeichen umgeben ist, wird als `String` bezeichnet. So stellt ein Computer Wörter oder Sätze dar. Zum Beispiel sind "a", "2", "banana!" und "Hello World" Strings, aber 2 und Hello World sind keine Strings, da die Anführungszeichen fehlen. Du kannst viele Strings mit dem `+` Zeichen kombinieren!

{{% notice tip %}}
Die Strings, die du kombinierst, müssen keine echten Wörter sein! Zum Beispiel wird `"Ap" + "ple"` den String `"Apple"` erzeugen. 
<b>Bitte um Hilfe, wenn du verwirrt bist!</b>

{{% /notice %}}

Zum Beispiel:

- `"Apple" + "Pineapple"` erzeugt den String `"ApplePineapple"`

- `"Nuevo" + " " + "Foundation"` ergibt `"Nuevo Foundation"`


#### Herausforderung 1

Was passiert, wenn du deinen Vor- und Nachnamen kombinierst? Wie würdest du das machen? 

#### Herausforderung 2

Lösche alle `print` Anweisungen in deinem Code. Beginne deinen Code mit der Zeile `print("Nuevo" + " " + "Foundation")`.

Wenn du ihn ausführst, sollte folgender Output erscheinen:

    Nuevo Foundation

Versuche, zwei weitere Möglichkeiten zu finden, den String `"Nuevo Foundation"` zu drucken, indem du zweimal das Pluszeichen (`+`) in jeder `print` Anweisung benutzt. Sobald dies funktioniert, solltest du "Nuevo Foundation" dreimal ausgeben. Mit anderen Worten, deine Konsole sollte nach dem Ausführen ungefähr so aussehen:

    Nuevo Foundation
    Nuevo Foundation
    Nuevo Foundation

<iframe title="Challenge 2 - Codebunga" src="https://codebunga.com/embed/fsrc8is8" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```