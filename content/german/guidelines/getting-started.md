```markdown
---
title: "Erste Schritte"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---

## Voraussetzungen

| Tool | Zweck | Installationslink |
|------|-------|-------------------|
| **Git** | Versionskontrolle | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | Baut die Workshop-Webseite | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (empfohlen) | Texteditor | [code.visualstudio.com](https://code.visualstudio.com/download) |

Neu bei Git? Schau dir den GitHub [Quickstart-Leitfaden](https://docs.github.com/en/get-started/quickstart) an.

### Schnelle Installation für Hugo

**Windows (winget):**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew):**
```
brew install hugo
```

**Linux (snap):**
```
snap install hugo
```

Überprüfe mit `hugo version`. Du solltest eine Ausgabe sehen, die **extended** enthält.

## Referenzlinks

- [GitHub-Repo](https://github.com/NuevoFoundation/workshops)
- [Workshops Webseite](https://workshops.nuevofoundation.org/)

## Videoanleitungen

- [Entwicklungszyklus des Workshops GitHub-Repository](https://youtu.be/LpjucoAVviI)
- [Struktur des Workshops GitHub-Repository](https://youtu.be/cygmE6LGcOw)

## Forken und Klonen des Repos

Beitragen mit dem [Fork-Modell](https://help.github.com/articles/fork-a-repo/). Änderungen werden in deinen eigenen Fork gepusht, anschließend öffne einen Pull-Request, um sie in das Haupt-Repo zu integrieren.

### 1. Fork des Repos

Klicke auf **Fork** oben rechts im <a target="_blank" href="https://github.com/nuevoFoundation/workshops">Workshops-Repo</a>:

![Screenshot des Fork-Buttons auf GitHub](/guidelines/media/fork.png)

### 2. Klone deinen Fork

Ersetze `[your-username]` mit deinem GitHub-Benutzernamen:

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. Richte das Upstream-Remote-Repository ein

Damit kannst du Updates vom Haupt-Repo abrufen, während versehentliche Push-Operationen verhindert werden:

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

Überprüfe mit `git remote -v`:

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## Lokal bauen und testen

Im Verzeichnis `workshops` ausführen:

```bash
hugo server -D
```

- `-D` inkludiert Entwurfsinhalte, sodass du in Arbeit befindliche Inhalte betrachten kannst.
- Die Webseite wird in wenigen Sekunden gebaut und ist unter **http://localhost:1313/** verfügbar.
- Hugo überwacht Änderungen an Dateien und lädt deinen Browser automatisch neu.

Um den Server zu stoppen, drücke `Ctrl+C`.

## Halte deinen Fork aktuell

Bevor du mit neuer Arbeit beginnst, synchronisiere dich mit Upstream:

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## Beispiel-Durchführung

**Szenario**: Eine einfache Änderung vornehmen und einen Pull-Request einreichen.

### Erstelle einen Themen-Zweig

Stelle zuerst sicher, dass dein Fork aktuell ist:

```bash
git checkout master
git checkout -b my-change
git push --set-upstream origin my-change
```

### Mach deine Änderung

Öffne den Ordner des Repos in VS Code. Navigiere zu der Datei, die du ändern möchtest. Bearbeite in diesem Beispiel die Datei `content/english/guidelines/getting-started.md`. Für ein tieferes Verständnis der Dateistruktur siehe [wie die Webseite erstellt wird](../site-architecture/).

### Änderungen committen und pushen

```bash
git add content/english/guidelines/getting-started.md
git commit -m "Beschreibung der vorgenommenen Änderungen"
git push
```

**Tipp**: Verwende `git commit -am "Nachricht"`, um alle geänderten Dateien in einem Schritt zu stagen und zu committen.

### Öffne einen Pull-Request

Navigiere zu deinem Fork auf GitHub. Du solltest eine Aufforderung sehen, einen Pull-Request aus deinem kürzlichen Push zu erstellen:

![Screenshot des Compare and Pull Request-Buttons auf GitHub](/guidelines/media/compare-and-pull.png)

Falls du die Aufforderung nicht siehst, gehe zu **Pull Requests > Neuer Pull-Request**:

![Screenshot des New Pull Request-Buttons auf GitHub](/guidelines/media/create-new-pr.png)

Stelle sicher, dass dein Basis-Zweig (Ziel) und dein Kopf-Zweig (Quelle) korrekt sind, füge einen Titel und eine Beschreibung hinzu und sende den Request ab.

## Erstellst du einen neuen Workshop?

Verwende stets das Scaffold-Skript, um die richtige Verzeichnisstruktur und die Vorlagen zu erstellen. Erstelle keine Workshop-Dateien von Hand.

```bash
python tools/new-workshop.py --name "my-workshop" --title "Mein Workshop" \
  --coding-language python --topics programming-basics
```

Siehe die [Neue Workshop-Richtlinien](../new-workshops/) für die vollständige Anleitung, Optionen und die Pre-PR-Checkliste.
```