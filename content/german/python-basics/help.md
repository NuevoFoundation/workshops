---
title: "Hilfe, ich bin festgefahren!"
description: "Einrichtung von Kopfhörern"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "Keine"
difficulties: ["Anfänger"]
draft: false
---
##### Keine Sorge! Schau, ob dir einer der folgenden Punkte weiterhelfen kann. Wenn nicht, zögere nicht, uns zu kontaktieren. Wir helfen dir gerne.

1.  Die Einrückung ist sehr wichtig, wenn du mit Python arbeitest. Achte auf Leerzeichen und Tabs in deinem Code, denn Einrückungsfehler können manchmal ziemlich schwer zu erkennen sein.

    ![IndentationError: expected an indented block](../img/screenshot-indentationerror.png)

    Auf der positiven Seite sorgt streng formatierter Code dafür, dass Python sehr sauber und organisiert aussieht. Sind alle deine Variablen und Funktionen ordnungsgemäß so eingerückt, wie es vorgeschrieben ist?
2.  SyntaxError: invalid syntax
    Überprüfe, ob deine Schlüsselwörter korrekt geschrieben sind und ob du der definierten Struktur folgst.

3.  IndentationError: unexpected indent
    Wenn du dies siehst, überprüfe deine Einrückungen.

4.  NameError: global name \'\-\--\' is not defined
    Variablen, die innerhalb einer Funktion definiert werden, können nur innerhalb dieser Funktion verwendet werden. Wenn du versuchst, eine Variable aus einer Funktion in einer anderen Funktion zu verwenden, erhältst du diesen Fehler. 
    
    Um Informationen für andere Funktionen verfügbar zu machen, kannst du sie mit der `return`-Anweisung aus einer Funktion zurückgeben und möglicherweise einer Variablen zuweisen. Anschließend kannst du sie mit einem Parameter in eine andere Funktion übergeben. Siehe den Link zum Funktions-Tutorial in meiner Signatur für eine detaillierte Erklärung.

5.  Kann Fehler nicht erkennen: Rechtschreibfehler?
    Dies tritt normalerweise auf, wenn du einen Rechtschreibfehler in deinen Schlüsselwörtern gemacht hast. Überprüfe alle deine Schlüsselwörter.

6.  TypeError: Can't convert 'int' object to str implicitly
    Überprüfe, ob du versehentlich versuchst, eine Integer-Zahl für String-Aktionen zu verwenden (Du kannst keinen String mit einer Integer-Zahl verketten. Du musst zuerst die Integer-Zahl in einen String konvertieren).