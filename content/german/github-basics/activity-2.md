---
title: "Zimmer 2: Das Commit-Rätsel"
description: "Lerne, Änderungen vorzunehmen und in deinem Repository zu committen."
difficulty: "Anfänger"
weight: 2
---

# Zimmer 2: Das Commit-Rätsel

{{< figure src="../images/room2_commit.jpg" title="Codeausschnitte schweben um ein zentrales Terminal und warten darauf, organisiert zu werden" >}}

Beim Betreten des zweiten Zimmers schweben Codeausschnitte in der Luft. Ein Terminal in der Mitte flackert mit einer Nachricht: "Bringe Ordnung ins Chaos. Committe deine Änderungen, um fortzufahren."

## Deine Mission

1. Erstelle eine neue Datei namens `solution.md` in deinem lokalen Repository.
2. Füge den Geheimcode aus Raum 1 in diese Datei ein.
3. Stage und committe deine Änderungen.

## Anweisungen

1. Stelle in deinem Terminal sicher, dass du im Verzeichnis `escape-room` bist.
2. Erstelle die Datei und füge den Code hinzu:

```
echo "Geheimcode: GITHUB_BASICS_101" > solution.md
```

3. Stage und committe deine Änderungen:

```
git add solution.md
git commit -m "Lösung für Raum 1 hinzugefügt"
```

{{< notice warning >}}
**Tipp:** Schreibe immer klare und beschreibende Commit-Nachrichten. Sie helfen dir und anderen, die Historie deines Projekts zu verstehen.
{{< /notice >}}

{{< expand "Quiz: Teste dein Wissen" >}}

**Frage 1: Welchen Befehl verwendest du, um Änderungen zu stagen?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Frage 2: Was bewirkt das -m-Flag im Commit-Befehl?**

{{< button href="#" >}}Kennzeichnet den Commit als wichtig{{< /button >}}
{{< button href="#" >}}Führt den Commit sofort durch{{< /button >}}
{{< button href="#" >}}Ermöglicht das Hinzufügen einer Commit-Nachricht{{< /button >}}

{{< /expand >}}

Wenn du deinen Commit gemacht hast, gib die verwendete Commit-Nachricht ein:

[Eingabefeld für Commit-Nachricht]

{{< notice info >}}
Hinweis: Das tatsächliche Eingabefeld und die Verschlüsselungsfunktionalität müssten separat implementiert werden, da Hugo dies nicht von Haus aus bietet.
{{< /notice >}}