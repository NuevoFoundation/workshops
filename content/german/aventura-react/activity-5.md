---
title: "Aktivität 5 - Rettung der Faultiere"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<img src="../media/Perezoso.png" alt="Faultier, Illustration heruntergeladen von freepik" width="25%" />

Wir sind fast am Ende unserer Reise durch Costa Rica angekommen! Zum Abschluss lernen wir etwas über Faultiere.  
Faultiere in Costa Rica sind ein Symbol des Landes, und es gibt zwei Arten: das Zweifinger-Faultier (Choloepus hoffmanni) und das Dreifinger-Faultier (Bradypus variegatus). Sie sind bekannt für ihre Langsamkeit, ihre Tarnfähigkeit und dafür, nationale Symbole zu sein, die die Verbindung Costa Ricas zur Natur repräsentieren. Man kann sie in Nationalparks wie Manuel Antonio und Corcovado sowie in Regionen wie La Fortuna und Cahuita entdecken.  

**Schreibe diese Datei `"Perezoso.jsx"`**:

{{% notice info %}}
### Wichtig zu nutzen:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>

### Eine Komponente innerhalb einer anderen Komponente

In dieser Aktivität werden wir zwei Komponenten verwenden:

- Eine kleine Komponente: **Perezoso**
- Eine große Komponente: **Perezosos**

Das bedeutet, dass wir eine kleine Komponente erstellen (wie einen Keksausstecher) und sie dann viele Male innerhalb der großen Komponente verwenden.
{{% /notice %}}

```jsx
// Kleine Komponente
function Perezoso() {
  return <p>Ich bin ein Faultier</p>;
}

// Große Komponente
export default function Perezosos() {
  return (
    <Perezoso />
  );
}
```

---

{{% notice info %}}
### Props, Informationen, die die Komponente erhält

Props sind Informationen, die wir von der großen Komponente an die kleine Komponente senden.  
Die Perezoso-Komponente wird Folgendes erhalten:

- nombre
- onRescatar
- rescatado
{{% /notice %}}

```jsx
function Perezoso({ nombre, onRescatar, rescatado }) {
  return <p>{nombre}</p>;
}
```

So werden sie gesendet:

```jsx
<Perezoso
  nombre="Marcos"
  onRescatar={rescatar}
  rescatado={false}
/>
```
---

#### Innerhalb der **Perezoso**-Komponente kommt dieser Code

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `${nombre} ist in Sicherheit!`
          : `${nombre} braucht Hilfe`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Retten</button>
      )}
    </div>
```

---

{{% notice info %}}
#### 1. Hauptelement mit dynamischen Klassen

```jsx
<div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
```

- Es verwendet immer die Klasse perezoso-card aus style.css.
- Wenn das Faultier bereits gerettet wurde (```rescatado === true```), wird zusätzlich die Klasse ```rescatado``` hinzugefügt.
- Dies wird verwendet, um das Aussehen basierend auf seinem Zustand zu ändern.

Es ist, als würde man ihm einen besonderen Aufkleber geben, wenn es gerettet wurde.
Die **"rescatado"**-Klasse ist dieser Aufkleber.

---

#### 2. Text, der sich basierend auf dem Zustand des Faultiers ändert

```jsx
<p>
  {rescatado
      ? `${nombre} ist in Sicherheit!`
      : `${nombre} braucht Hilfe`}
</p>

```

- Wenn rescatado wahr ist, zeigt es eine Nachricht an, dass es sicher ist.
- Wenn es falsch ist, zeigt es an, dass es Hilfe benötigt.
- **Das ```? :``` ist ein "wenn es gerettet ist → zeige dies, wenn nicht → zeige das andere".**

Es ist wie eine Ampel:

Wenn es grün ist → es ist bereits sicher!

Wenn es gelb ist → es braucht noch Hilfe.

---

#### 3. Button, der nur erscheint, wenn es NICHT gerettet ist

```jsx
{!rescatado && (
  <button onClick={() => onRescatar(nombre)}>Retten</button>
)}

```

- !rescatado bedeutet "NICHT gerettet".
- Wenn dies wahr ist, wird der Button angezeigt.
- Wenn es bereits gerettet ist → verschwindet der Button.
- Der Button führt ```onRescatar(nombre)``` aus, wenn man darauf klickt.

Es ist wie ein "Hilf ihm!"-Knopf.
Wenn es ihm bereits gut geht, wird der Button ausgeblendet, da man ihn nicht mehr benötigt.

{{% /notice %}}

---


{{% notice info %}}
### Erstelle eine Funktion namens Perezosos

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Eine Konstante namens rescatados und setRescatados.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Eine weitere Konstante namens perezosos und füge die Namen der Faultiere hinzu.</p>
{{% /notice %}}

---

**Konstante, um die Faultiere zu retten!**
const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };
```

---

{{% notice info %}}
### Erstelle eine Liste von Komponenten mit einer Schleife

```jsx
let listaPerezosos = [];

for (let i = 0; i < perezosos.length; i++) {
  listaPerezosos.push(
    <Perezoso
      key={i}
      nombre={perezosos[i]}
      onRescatar={rescatar}
      rescatado={rescatados.includes(perezosos[i])}
    />
  );
}
```
{{% /notice %}}

#### So wird es angezeigt 

```jsx
return (
    <div className="perezosos-container">
      <h2>Rettung der Faultiere</h2>
      <p className="instruccion">
        Klicke auf die Faultiere, um sie aus dem Wald zu retten.
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Du hast alle Faultiere gerettet!
        </h3>
      )}
    </div>
  );
```

**NICHT VERGESSEN, ES IN APP.JSX ZU IMPORTIEREN**

``` jsx
import Perezosos from "./Components/Perezoso.jsx"
``` 

<img src="../media/Components5Perezoso.png" alt="Perezosos-Komponente in