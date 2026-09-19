```markdown
---
title: "Aktivität 2 - Strände reinigen"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Strandreinigung" style="width:50%;">

Super! Du hast es geschafft, die Schildkröten zu retten. Jetzt werden wir die Strände von Costa Rica reinigen und dabei lernen, wie man Konstanten mit Arrays, For-Schleifen und let-Variablen verwendet.

**Schreibe diese Datei `"Playa.jsx"`**:

{{% notice info %}}
### Wichtig zu verwenden:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}
Zuerst erstellen wir ein Array, in dem du beliebig viele Elemente speichern kannst. Sieh dir dieses Beispiel an!

So sehen Arrays normalerweise in React aus.

``` jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dollar",
    "Euro",
    "Pesos"
  ]);
```

Erstelle eine Konstante namens **desechos und setDesechos** für diese Aktivität. Setze in diese Konstante Gegenstände, die Müll an den Stränden darstellen.

Wir müssen eine Funktion erstellen, um den Müll am Strand aus dem Array zu entfernen.

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));
``` 

Diese Funktion entfernt ein Stück Müll aus der Liste, wenn du darauf klickst. Lass uns sehen, wie das funktioniert:

{{% notice tip %}}
### Was macht diese Funktion?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Wenn du darauf klickst, entfernt sie das angegebene Element aus dem Array.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Der Filter prüft jedes Element einzeln, erstellt ein neues Array und speichert die Liste ohne das entfernte Element.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Beispiel: Wenn du Plastik entfernst, bleiben Glas, Metall und Papier übrig.</p>

{{% /notice %}}

Dann müssen wir eine Variable namens `"let"` erstellen. Im Gegensatz zu const kann let verändert werden.

Wir nennen sie `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Sammle {desechos[i]}
      </button>
    );
  }

```

Das erspart uns, 4 Buttons manuell zu schreiben.

{{% notice info %}}
### Das macht die Schleife:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Beginnt mit dem ersten Abfallstück.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Erstellt einen Button für dieses Abfallstück.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Geht zum nächsten Abfallstück.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Wiederholt dies, bis alle Elemente abgearbeitet sind.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Der Button verfügt über eine onClick-Funktion, die verwendet wird, um den Müll zu entfernen.</p>

**Wenn sich die Liste ändert, zeichnet React nur die verbleibenden Buttons neu.**

{{% /notice %}}
return (
  <div className="playas-container">
      <h2>Strandreinigung</h2>
      <p className="instruccion">
        Klicke auf die Abfälle, um sie zu sammeln und dazu beizutragen, die
        Meerestiere zu schützen
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Strand ist sauber!</p>
      )}
    </div>
);
```

**VERGISS NICHT, ES IN APP.JSX ZU IMPORTIEREN**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

<img src="../media/Components2Playa.png" alt="Playa-Komponente wird in der App angezeigt" style="width:50%;">
```