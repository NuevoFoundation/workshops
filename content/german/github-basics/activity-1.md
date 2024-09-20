```markdown
---
title: "Raum 1: Die Gabelung im Weg"
description: "Beginnen Sie Ihr Abenteuer, indem Sie ein Repository forken und klonen."
difficulty: "Anfänger"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="Der erste Raum des Code Dungeon, erleuchtet von einem mysteriösen GitHub-Logo" >}}

Sie erwachen in einem schwach beleuchteten Raum. Ein Podest in der Mitte hält ein leuchtendes GitHub-Logo. Eine Stimme hallt: "Um voranzukommen, musst du den Weg forken."

Mit Weg meint die Stimme ein GitHub-Repository. Forken erstellt eine Kopie des Repositories in Ihrem Konto, sodass Sie Änderungen vornehmen können, ohne die Originalkopie zu beeinflussen.

## Ihre Mission

1. Erstellen Sie ein GitHub-Konto (falls noch nicht geschehen).
2. Forken Sie das Repository: `https://github.com/VerisimilitudeX/escape-room`
3. Klonen Sie Ihr geforktes Repository auf Ihren lokalen Rechner.

## Anweisungen

1. Gehen Sie zu GitHub und melden Sie sich an oder registrieren Sie sich.
2. Navigieren Sie zur Repository-URL und klicken Sie auf die Schaltfläche "Fork" in der oberen rechten Ecke.
3. Nach dem Forken klicken Sie auf die grüne Schaltfläche "Code" und kopieren Sie die URL.
4. Öffnen Sie Ihr Terminal und führen Sie aus:

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**Hinweis:** Suchen Sie nach der `README.md`-Datei in Ihrem geklonten Repository. Sie enthält einen geheimen Code, um den nächsten Raum freizuschalten!
{{% /notice %}}

{{< expand "Benötigen Sie Hilfe?" >}}
Wenn Sie nicht weiterkommen, versuchen Sie diese Schritte:

1. Stellen Sie sicher, dass Sie bei GitHub angemeldet sind.
2. Überprüfen Sie, ob Sie zur richtigen Repository-URL navigiert haben.
3. Wenn Sie Probleme mit Git-Befehlen haben, stellen Sie sicher, dass [git](https://git-scm.com/downloads) auf Ihrem System installiert ist.
{{< /expand >}}

Wenn Sie bereit sind, weiterzugehen, geben Sie den gefundenen Geheimcode ein:

[Eingabefeld für den Geheimcode]

{{% notice %}}
Hinweis: Das tatsächliche Eingabefeld und die Verschlüsselungsfunktionalität müssten separat implementiert werden, da Hugo diese nicht von Haus aus bereitstellt.
{{% /notice %}}
```