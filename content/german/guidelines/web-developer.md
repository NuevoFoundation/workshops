---
title: "Webentwickler-Richtlinien"
date: 2019-07-22T14:08:32-07:00
draft: false
weight: 4
---

Dieses Dokument ist **nur für Webentwickler** gedacht, um die Templates und das Design des [Nuevo Foundation Workshop Projekts](https://github.com/nuevoFoundation/workshops) zu ändern.

## Bevor Sie anfangen

Bevor Sie die Website hinzufügen/aktualisieren, stellen Sie sicher, dass Sie sich mit dem Projektteam und der bestehenden Arbeit im [Projekt-Backlog](https://github.com/NuevoFoundation/workshops/projects/1) abgestimmt haben.

## Einrichtung

Folgen Sie den Anweisungen auf der Seite [Getting Started](../getting-started/), um Git und Hugo zu installieren und das Projekt lokal zu testen.

## Webdesign-Stile und Struktur

- **Bilder:** Website-Bilder sollten sich unter `themes/images` befinden.
- **CSS** Ignorieren Sie die SCSS-Dateien und verwenden Sie nur CSS-Dateien in `/themes/docdock/static/css/`. Stellen Sie sicher, dass Sie eine Referenz zur gewünschten CSS-Datei im `head.html` File unter `/themes/docdock/layouts/partials/flex/head.html` hinzufügen.

## Aufbau einer Workshop-Seite

- **Komplette Seitentemplate**: Um alle Komponenten einer Seite einschließlich Header, Menü, Body, Footer zu sehen, öffnen Sie `/themes/docdock/layouts/_default/baseof.html`.
- **Kopfzeile (Head)**: Meta-, CSS- und JS-Dateien befinden sich unter `/themes/docdock/layouts/partials/flex/head.html`.
- **Top/Menu Navigation**: Verwenden Sie keine docDock config.toml-Werte, sondern fügen Sie stattdessen HTML hinzu/bearbeiten Sie diese unter: `/themes/docdock/layouts/partials/flex/body-before-content.html`.
- **Linkes Menü**: `/themes/docdock/layouts/partials/flex/menu.html`.
- **Footer Navigation**: `/themes/docdock/layouts/partials/flex/body-after-content.html`.
- **Metadaten-Box**: `/themes/docdock/layouts/partials/flex/body-after-content.html`.

## Hilfe, das CSS wird nicht angezeigt

Ein Problem mit Hugo ist, dass ein Schlüsselparameter im Build die Variable `baseURL` ist. Wenn der Inhalt geladen wird, das CSS aber nicht, liegt dies wahrscheinlich an der Einstellung der `baseURL`.

Sie können die `baseURL` beim Erstellen von Inhalten ändern, ohne die config.toml-Datei zu ändern. Im untenstehenden Beispiel werden das CSS und JS minimiert, die baseURL auf die Produktions-URL .org gesetzt und die Ergebnisse in das `public` Verzeichnis kopiert.

`hugo --minify --baseURL "https://workshops.nuevofoundation.org/"`

## Tipps und Tricks

- **Public ignorieren**: Standardmäßig erstellt der Aufruf von `hugo` ohne Parameter die Website im Public-Verzeichnis. Stellen Sie sicher, dass Sie das Public-Verzeichnis nicht zur Quellsteuerung hinzufügen (es ist bereits in der gitignore-Datei enthalten).
- **Linke Navigation**: Sie können Inhalte von der linken Navigation ausblenden, indem Sie im File-Metadaten hidden: true setzen (wie bei der index.md-Markdown-Datei dieses Workshops!).
- **Partials**: Für wiederverwendbare Komponenten einer Seite erstellen Sie eine neue Partial-Datei unter `/themes/docdock/layouts/partials/flex/`.