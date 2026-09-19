```markdown
---
title: "Aktivität 4 - Vulkan Arenal"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Wusstest du, dass es in Costa Rica etwa 200 Vulkane gibt? Davon sind nur fünf aktiv: Poás, Irazú, Turrialba, Rincón de la Vieja und Arenal. Der Rest ist inaktiv oder erloschen.

Nun, wir möchten dir etwas über den Vulkan Arenal erzählen.

<img src="../media/Arenal.jpg" alt="Arenal Vulkan" style="width:50%;">
Der Vulkan Arenal ist ein inaktiver Stratovulkan und ein Wahrzeichen Costa Ricas, das in der Provinz Alajuela im Arenal-Vulkan-Nationalpark liegt. Er ist bekannt für seine konische Form und wird von tropischen Wäldern, heißen Quellen und einer reichen Biodiversität umgeben, die eine große Anzahl an Vogelarten umfasst. Seine letzte bedeutende Eruptionsphase begann 1968 und endete 2010.

**Schreibe diese Datei `"Volcan.jsx"`**:

{{% notice info %}}
### Wichtig zu verwenden:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Volcan() { }</p>

{{% /notice %}}

<h2 style="font-size:2rem; color:#007BFF;">Erstelle eine Konstante für Tiere mit einem entsprechenden SetAnimales. Schreibe die Tiere auf, die du denkst, die in Costa Rica leben!</h2>

```jsx
const [animales, setAnimales] = useState([
    "",
    "",
    "",
    "",
    ""
  ]);
```

---

#### **Lass uns die Tiere retten, denn es sieht so aus, als würde der Vulkan Arenal Aktivität zeigen!**

<img src="../media/Volcan.png" alt="Vulkan Gefahr" style="width:50%;">
**Wir erstellen eine Konstante, um sie aus der Gegend zu evakuieren**
```jsx
const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };
```

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In `Beaches` haben wir nur Buttons erstellt, aber in `Volcan` erstellen wir eine vollständige Liste:</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Ein `li` kann Text + einen Button + eine Funktion enthalten.</p>
{{% /notice %}}

```jsx
/*Hier erstellen wir manuell eine Liste mit einer for-Schleife*/
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} ist in Gefahr{" "}
        <button onClick={() => evacuar(animales[i])}>Evakuieren</button>
      </li>
    );
  }
```

{{% notice tip %}}
### Stell dir Folgendes vor:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Ein Hubschrauber fliegt Runden, um die Tiere zu retten:</p>

```jsx
for (let i = 0; i < animales.length; i++)
```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 0 → Erste Runde: besucht Tier 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 1 → Zweite Runde: besucht Tier 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 2 → Dritte Runde: besucht Tier 3.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 3 → Vierte Runde: besucht Tier 4.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">i = 4 → STOP! Es gibt keine weiteren Tiere (weil animales.length = 4).</p>

```jsx
listaAnimales.push( ... )
```

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Es ist so, als ob der Pilot eine Liste darüber führt, welches Tier gefunden wurde und welchen Knopf er drücken muss, um es zu retten.</p>
{{% /notice %}}

{{% notice info %}}
<p style="font-size:1.6rem; color:#444; line-height:1.8;">In `Beaches` haben wir verwendet:</p>

```jsx
<div className="botones">{botones}</div>

```
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Aber in `Volcan.jsx` sehen wir das: </p>

```jsx
<ul>{listaAnimales}</ul>

```
{{% /notice %}}

**Wie es angezeigt wird**:

```jsx
return (
    <div className="volcan">
      <h2>Vulkan Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Alle Tiere sind in Sicherheit!</p>
      )}
    </div>
  );
```

**VERGISS NICHT, ES IN APP.JSX ZU IMPORTIEREN**

``` jsx
import Volcan from "./Components/Volcan.jsx"
``` 

<img src="../media/Components4Volcan.png" alt="Volcan-Komponente in der App gerendert" style="width:50%;">
```