```markdown
---
title: "React Costa Rica - Antwortschlüssel"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

Antworten für die gesamte React-App

### Aktivität 1 Tortuguero

```jsx
import { useState } from "react";

export default function Tortugero() {
  const [tortugas, setTortugas] = useState(0);
  const total = 10; 

  const salvarTortuga = () => {
    if (tortugas < total) setTortugas(tortugas + 1);
  };

  const reiniciar = () => setTortugas(0);

  return (
    <div className="Tortugero">
      <h2>Nationalpark Tortuguero</h2>
      <p>Du hast {tortugas} von {total} Schildkröten gerettet</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Schildkröte retten</button>
      ) : (
        <>
          <p className="exito">Alle Schildkröten sind in Sicherheit!</p>
          <button onClick={reiniciar}>Mission zurücksetzen</button>
        </>
      )}
    </div>
  );
}

```

### Aktivität 2 Strand

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 Plastik",
    "🍾 Glas",
    "🪙 Metall",
    "📄 Papier"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*Erstelle die Knöpfe mit einer for-Schleife*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Sammle {desechos[i]} auf
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>Strandreinigung</h2>
      <p className="instruccion">
        Klicke auf die Abfälle, um sie aufzusammeln und die Meeresbewohner zu
        schützen
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Strand sauber!</p>
      )}
    </div>
  );
}

```

### Aktivität 3 Kaffeeplantage

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Kaffeesamen pflanzen",
    "🌾 Bohnen ernten",
    "🌞 In der Sonne trocknen",
    "🔥 Rösten",
    "☕ Kaffee genießen"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>Abuelo's Kaffeeplantage</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Nächste Etappe ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          Du hast den gesamten Kaffeeprozess abgeschlossen!
        </h3>
      )}
    </div>
  );
}

```

### Aktivität 4 Vulkan Arenal

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "Waschbär",
    "Affe",
    "Jaguar",
    "Tukan",
    "Tobi"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // Hier erstellen wir eine Liste manuell mit einer for-Schleife
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} ist in Gefahr{" "}
        <button onClick={() => evacuar(animales[i])}>Evakuieren</button>
      </li>
    );
  }

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
}

```

### Aktivität 5 Faultiere

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} ist in Sicherheit!`
          : `🦥 ${nombre} braucht Hilfe`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Retten</button>
      )}
    </div>
  );
}

export default function Perezosos() {
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };

  const perezosos = ["Mau", "Rick", "Luna", "Toby"];

  // Erstelle die Liste der Komponenten mit einer for-Schleife
  let listaPerezosos = [];

  for (let i = 0; i < perezosos.length; i++) {
    const nombre = perezosos[i];

    listaPerezosos.push(
      <Perezoso
        key={i}
        nombre={nombre}
        onRescatar={rescatar}
        rescatado={rescatados.includes(nombre)}
      />
    );
  }

  return (
    <div className="perezosos-container">
      <h2>Rettung der Faultiere</h2>
      <p className="instruccion">
        Klicke auf die Faultiere, um sie aus dem Wald zu retten
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Du hast alle Faultiere gerettet!
