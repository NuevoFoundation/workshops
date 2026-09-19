---
title: "Android-Setup"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
Befolge die untenstehenden Schritte, um Android Studio auf deinem Computer zu installieren. Falls du Android Studio bereits installiert hast, öffne es einfach und gehe zum nächsten Schritt!

Die Schritte enthalten Beispiele für die Installation auf Windows-Computern. Allerdings sind die Schritte auch für andere Computertypen ähnlich.

## Android Studio herunterladen und installieren
1. [Lade Android Studio herunter](https://developer.android.com/studio/) für dein Betriebssystem.
2. [Folge diesen Schritten](https://developer.android.com/studio/install), um Android Studio zu installieren.

## Umgebungsvariable JAVA_HOME festlegen
Android Studio enthält eine Version von Java, die für bestimmte Teile der Anwendung benötigt wird. Befolge die folgenden Schritte, um die Umgebungsvariable `JAVA_HOME` auf deinem Computer einzurichten, die diesen Tools mitteilt, wo Java zu finden ist:
1. Gib im Suchfeld unten links auf dem Bildschirm `env` ein.
2. Wähle das Programm „Systemumgebungsvariablen bearbeiten“ aus, das als „Beste Übereinstimmung“ angezeigt wird.
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Systemumgebungsvariablen bearbeiten" alt="Systemumgebungsvariablen bearbeiten"/>
3. Klicke auf `Umgebungsvariablen...`.
4. Klicke unter dem Abschnitt „Benutzervariablen“ auf `Neu...`.
5. Gib JAVA_HOME als Variablennamen ein.
6. Kopiere das Folgende in den Variablenwert:
```
C:\Program Files\Android\Android Studio\jre
```
7. Klicke auf OK.
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="JAVA_HOME festlegen" alt="zeigt Schritte zum Festlegen der JAVA_HOME-Umgebungsvariablen"/>

{{% notice tip %}}
Wir empfehlen dringend, deinen Computer jetzt neu zu starten, damit Android Studio korrekt gestartet wird.
{{% /notice %}}

## Android Studio starten
Sobald Android Studio installiert ist, öffne es, um an der App zu arbeiten.

{{% notice tip %}}
Es gibt mehrere Möglichkeiten, die Android Studio-Anwendung auf deinem Windows-Computer zu starten. Hier sind zwei Methoden:
#### Methode 1
1. Klicke auf das Windows-Symbol unten links auf deinem Computer.
2. Scrolle die Liste herunter, bis du den Ordner `Android Studio` siehst.
3. Klicke auf den Ordner `Android Studio`, um ihn zu erweitern.
4. Klicke auf die Anwendung `Android Studio` im Ordner, um Android Studio zu starten.

#### Methode 2
1. Gib im Suchfeld unten links auf dem Bildschirm `Android Studio` ein.
2. Sollte im Ergebnisfenster „Beste Übereinstimmung“ mit `Android Studio` hervorgehoben sein, klicke entweder auf die Anwendung `Android Studio` oder drücke `EINGABE` auf deiner Tastatur.
{{% /notice %}}

## Projektdateien öffnen
1. Klicke auf `Open an Existing Project` auf dem Startbildschirm von Android Studio.
2. Suche den Speicherort, an dem du die Projektdateien heruntergeladen hast.
3. Wähle den Ordner 'TicTacToe' innerhalb des zuvor entpackten 'TicTacToe'-Ordners aus. 
   - Der auszuwählende 'TicTacToe'-Ordner sollte ein grünes Android-Symbol daneben haben, das anzeigt, dass es sich um einen Android-Projektordner handelt.
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="TicTacToe-Projekt öffnen" alt="Zeigt, wie man das TicTacToe-Projekt in Android Studio öffnet"/>

Starte Android Studio und öffne das Projekt. Deine Ansicht sollte etwa so aussehen:
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="Android Studio IDE" alt="Beispiel der Android Studio IDE"/>

## Lizenzen akzeptieren
Bevor du den Code ausführen kannst, musst du die Android-Lizenzen akzeptieren, indem du die folgenden Schritte befolgst:
1. Klicke auf die Schaltfläche `Terminal` unten im Android Studio-Fenster.
2. Gib den folgenden Befehl ein, wobei du `<USER_NAME>` durch den Benutzernamen deines Computers ersetzt:
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Gib bei den Eingabeaufforderungen `y` ein und drücke die `EINGABETASTE`, um die Lizenzen zu akzeptieren. Dies wird mehrmals notwendig sein.
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="Android-Lizenzen akzeptieren" alt="zeigt die Schritte zur Annahme der Android-Lizenzen"/>