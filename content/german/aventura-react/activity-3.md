---
title: "Aktivität 3 - Kaffeefarm"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Wissen Sie, wie wichtig Kaffee in Costa Rica ist?

Costa-ricanischer Kaffee ist weltweit für seine hohe Qualität anerkannt, dank der Kombination aus fruchtbaren vulkanischen Böden, einem idealen Klima und dem exklusiven Anbau von Arabica-Bohnen. Das Land verbietet den Anbau der Robusta-Variante, um ein mildes und ausgewogenes Produkt zu garantieren. Historisch gesehen war Kaffee von großer Bedeutung für die Wirtschaft und Kultur des Landes und wird in verschiedenen Regionen, einschließlich Tarrazú, angebaut, die eine der berühmtesten ist.

Also lernen wir den Kaffeeprozess kennen und warum nicht auch mehr über React mit **Sharky**?

**Schreiben Sie diese Datei `"FincaCafe.jsx"`**:

{{% notice info %}}
### Wichtig zu verwenden:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Kaffee" style="width:50%;">

Um Kaffee herzustellen, müssen wir zunächst wissen, dass dies einen wichtigen Prozess umfasst, der mehrere Stufen enthält, die wir uns als Nächstes ansehen werden.

{{% notice info %}}
### Wir werden einige verschiedene Dinge lernen
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Wir verwenden eine Zahl, um zu wissen, in welcher Phase einer Geschichte wir uns befinden.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Wir ändern, was wir sehen, basierend auf dieser Zahl.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Wir zählen nicht, wir navigieren durch die Phasen.</p>

{{% /notice %}}

```jsx
const etapas = [
  "Kaffee pflanzen",
  "Bohnen ernten",
  "In der Sonne trocknen",
  "Rösten",
  "Genießen"
];

const [indice, setIndice] = useState(0);

```

**Hier erstellen wir eine Konstante namens `"ETAPAS"`, haben aber auch eine weitere Konstante namens `"INDICE"`**.

{{% notice info %}}
### Das bedeutet:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Die Zahl 0 bedeutet Phase 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Die Zahl 1 bedeutet Phase 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Die Zahl 2 bedeutet Phase 3.</p>

{{% /notice %}}

Damit können wir nun eine Konstante namens `"siguiente"` erstellen, um zwischen den Phasen zu wechseln.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>Finca del Abuelo</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Nächste Phase
        </button>
      ) : (
        //DU BIST AM ENDE DER LETZTEN PHASE ANGEKOMMEN
        <h3 className="mensaje-final">
          Du hast den gesamten Kaffeeprozess abgeschlossen!
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Stellen Sie sich vor, Sie spielen ein Spiel mit 5 Leveln
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = Wie viele Level das Spiel hat (z.B.: 5 Level).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = Auf welchem Level Sie sich gerade befinden (kann Level 1, 2, 3... sein).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Die Zahl 2 bedeutet Phase 3.</p>

{{% /notice %}}

**VERGISS NICHT, ES IN APP.JSX ZU IMPORTIEREN**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="FincaCafe-Komponente in der App gerendert" style="width:50%;">