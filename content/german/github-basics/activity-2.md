---
title: "Raum 2: Das Commit-Rätsel"
description: "Lernen Sie, Änderungen vorzunehmen und zu committen, um sie Ihrem Repository hinzuzufügen."
difficulties: ["Anfänger"]
weight: 2
---

Als Sie den zweiten Raum betreten, schweben Codefragmente in der Luft. Ein Terminal in der Mitte zeigt eine flackernde Nachricht: "Bringe Ordnung ins Chaos. Committe deine Änderungen, um weiterzukommen."

## Ihre Mission

1. Erstellen Sie eine neue Datei namens `solution.md` in Ihrem lokalen Repository.
2. Fügen Sie den Geheimcode aus Raum 1 in diese Datei ein.
3. Stagen und committen Sie Ihre Änderungen.

## Anweisungen

1. Stellen Sie in Ihrem Terminal sicher, dass Sie sich im Verzeichnis `escape-room` befinden.
2. Erstellen Sie die Datei und fügen Sie den Code hinzu:

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Stagen und committen Sie Ihre Änderungen:

```
git add solution.md
git commit -m "Lösung für Raum 1 hinzugefügt"
```


{{< notice warning >}}
**Tipp:** Schreiben Sie immer klare und beschreibende Commit-Nachrichten. Sie helfen Ihnen und anderen, die Historie Ihres Projekts besser zu verstehen.
{{< /notice >}}

{{< expand "Quiz: Testen Sie Ihr Wissen" >}}

**Frage 1: Welchen Befehl verwenden Sie, um Änderungen zu stagen?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Frage 2: Was bewirkt der -m-Flag im Commit-Befehl?**

{{< button href="#" >}}Markiert den Commit als wichtig{{< /button >}}
{{< button href="#" >}}Führt den Commit sofort zusammen{{< /button >}}
{{< button href="#" >}}Erlaubt Ihnen, eine Commit-Nachricht hinzuzufügen{{< /button >}}

{{< /expand >}}

Sobald Sie Ihren Commit abgeschlossen haben, geben Sie die verwendete Commit-Nachricht ein:

<label for="finput">Eingabefeld für Commit-Nachricht:</label><br>
<input type="text" id="finput" name="finput"><br>