---
title: "PlayCode-Umgebung einrichten"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

<p style="font-size:1.8rem; text-align:center; color:#333;">Klicke auf den untenstehenden Link, um die Costa Rica App selbst zu erstellen:</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Erstelle dein React-Projekt!</a>

Wenn du auf die Schaltfläche klickst, gelangst du zur PlayCode-Seite:

<img src="../media/UsarPlaygroud.png" alt="PlayCode-Startbildschirm, der die kostenlose Option zeigt" style="width:50%;">



**Klicke auf Start Free**

<video controls width="800" height="400" style="display:block; margin:20px auto;">
  <source src="../media/Configuracion2.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

In die Datei `"App.jsx"` **füge diesen Code ein!**

```jsx
import React from 'react';

export function App(props) {
  return (
      <div className="App">
       <h2>Hola mundo</h2>
      </div>
      );
}

console.log('Configurando')
``` 

In die Datei `"index.jsx"` **füge diesen Code ein!**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)

```

In die Datei `"index.html"` **füge diesen Code ein!**

```jsx 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="src/index.jsx"></script>
  </body>
</html>

```

**Erstelle eine Datei mit dem Namen**  `"style.css"`

<img src="../media/css.png" alt="Erstellen einer neuen style.css-Datei in PlayCode" style="width:50%;">

Bevor wir alle Elemente sehen, die zur Erstellung unseres Costa Rica Projekts benötigt werden, müssen wir einen wichtigen Ordner erstellen.

**Klicke auf die drei Punkte neben dem Hauptordner mit dem Namen** `"src"`

<img src="../media/paso1-carpeta.png" alt="Klicke auf die drei Punkte neben dem src-Ordner" style="width:70%;">

{{% notice info %}}
#### Die Datei 'style.css' muss sich im src-Ordner befinden.
{{% /notice %}}

**Befolge anschließend diese Schritte:**

`"New", "Directory"`

<img src="../media/paso2-carpeta.png" alt="Wähle Neu und dann Verzeichnis, um einen Ordner zu erstellen" style="width:70%;">

**Jetzt haben wir den Ordner erstellt. Klicke auf die drei Punkte und benenne ihn um**:

<img src="../media/paso3-carpeta.png" alt="Benenne den neuen Ordner in Components um" style="width:70%;">

**Fertig! Wir haben den Ordner Components erstellt, wir sind fast bereit!**

<img src="../media/paso4-carpeta.png" alt="Ordner Components wurde im src-Ordner erstellt" style="width:70%;">

**Schließlich müssen wir JSX-Dateien hinzufügen, damit wir mit der Erstellung unseres Projekts beginnen können**!

Gehe dazu erneut zu den drei Punkten, aber diesmal im Ordner `"Components"`.

**Wichtig: Wähle den Datei-Typ** `"JSX"` **aus.**

<img src="../media/paso5-carpeta.png" alt="Hinzufügen einer neuen JSX-Datei im Ordner Components" style="width:70%;">

So sollte unsere neue Datei aussehen, benannt als: `"Tortugero.jsx"`

```jsx 
Tortugero.jsx
```

**Tortuguero Island ist eine Insel, die zum zentralamerikanischen Land Costa Rica gehört. Sie liegt zwischen der Karibik und der gleichnamigen Lagune und hat eine geschätzte Fläche von 2.810 Hektar.**


<img src="../media/paso6-carpeta.png" alt="Tortugero.jsx-Datei im Ordner Components erstellt" style="width:70%;">