---
title: "Spielanwendung Struktur"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 3
---

## Zurück zu den Grundlagen
Jetzt, da das Spiel den richtigen Titel hat, lassen Sie uns tiefer in all die Dateien im Spielordner eintauchen. Was bedeuten sie alle? Wie tragen sie zum Spiel bei?  
<img src="../resources/_gen/images/app_structure_files.png" height="25%" width="25%" title="Erweiterte Ansicht der Anwendungsdateien" alt="Anwendungsdateien in Android Studio angezeigt"/>

### AndroidManifest.xml
Jedes Projekt in Android enthält eine Manifestdatei. Für Ihr Spiel ist dies die Datei `AndroidManifest.xml`. Die Manifestdatei definiert die Metadaten für Ihr Spiel. Zum Beispiel kann sie das Symbol und das Gesamtthema Ihrer Spielanwendung definieren.

### activity_main.xml
Diese Datei befindet sich im Ordner „layout“. Wie der Ordnername schon sagt, definieren Dateien in diesem Ordner das Erscheinungsbild Ihrer Anwendung. Wenn Sie den Code für `activity_main.xml` ansehen, finden Sie Schlüsselwörter wie `TableLayout` oder `TableRow`. Die Kombination aus Schlüsselwörtern in der Datei `activity_main.xml` erstellt das Layout für die Schaltflächen der Spielauswahl (Spieler gegen Spieler oder Spieler gegen Computer), das Tic-Tac-Toe-Spielfeld und die Schaltfläche "Zurücksetzen". Das Schlüsselwort `TableLayout` gibt an, dass das Layout im Tabellenstil ausgerichtet wird, das Spalten und Zeilen umfasst. Das Schlüsselwort `TableRow` erstellt eine neue Zeile im Layout, wobei jedes zusätzliche Element einer Position in dieser Zeile entspricht:  
<img src="../resources/_gen/images/activity_main.png" height="30%" width="30%" title="Spielbrett-Layout in Zeilen" alt="Tic-Tac-Toe-Spielfeld mit 5 Zeilen. Die erste Zeile enthält die beiden Spielauswahlschaltflächen, gefolgt von 3 Zeilen mit je 3 Spalten für das Tic-Tac-Toe-Gitter, und schließlich die fünfte Zeile mit der Neustart-Schaltfläche"/>

### MainActivity.kt
Diese Datei befindet sich im Ordner „java“. Die Datei enthält den Code und die Logik für Ihre Anwendung.

### colors.xml, strings.xml, styles.xml
Diese Dateien befinden sich im Ordner „values“. Die Dateien enthalten Werte, die von anderen XML-Dateien und Anwendungscode referenziert werden können.

## Alles zusammenfügen
Alle diese Dateien arbeiten zusammen, um Ihr Spiel zu erstellen. Die Datei `activity_main.xml` entscheidet, was Ihnen angezeigt wird. Wenn Sie auf die Schaltflächen klicken, werden Ereignisse von `activity_main.xml` an `MainActivity.kt` gesendet, um zu bestimmen, was beim Klicken auf diese Schaltfläche passiert. Für wiederverwendbare Werte können `activity_main.xml` und `MainActivity.kt` auf `colors.xml`, `strings.xml` oder `styles.xml` zugreifen, um diese Werte von einem praktischen Ort aus zu verwenden.