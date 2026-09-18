```yaml
---
title: "React Costa Rica - Clé des réponses"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

Réponses pour l'ensemble de l'application React

### Activité 1 Tortuguero

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
      <h2>Parque Nacional Tortuguero</h2>
      <p>Vous avez sauvé {tortugas} sur {total} tortues</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Sauver une tortue</button>
      ) : (
        <>
          <p className="exito">Toutes les tortues sont en sécurité !</p>
          <button onClick={reiniciar}>Redémarrer la mission</button>
        </>
      )}
    </div>
  );
}

```

### Activité 2 Plage

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 Plastique",
    "🍾 Verre",
    "🪙 Métal",
    "📄 Papier"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*Créer les boutons en utilisant for*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Ramasser {desechos[i]}
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>Nettoyage des plages</h2>
      <p className="instruccion">
        Cliquez sur les déchets pour les ramasser et aider à protéger les
        espèces marines
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Plage propre!</p>
      )}
    </div>
  );
}

```

### Activité 3 Plantation de café

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Planter du café",
    "🌾 Récolter les grains",
    "🌞 Sécher au soleil",
    "🔥 Torréfier",
    "☕ Profiter du café"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>Finca del Abuelo</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Étape suivante ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          Vous avez complété tout le processus du café!
        </h3>
      )}
    </div>
  );
}

```

### Activité 4 Volcan Arenal

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "raton laveur",
    "singe",
    "jaguar",
    "toucan",
    "Tobi"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // Ici, nous créons une liste à la main en utilisant un for
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} est en danger{" "}
        <button onClick={() => evacuar(animales[i])}>Évacuer</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>Volcan Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Tous les animaux sont en sécurité !</p>
      )}
    </div>
  );
}

```

### Activité 5 Paresseux

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} est en sécurité!`
          : `🦥 ${nombre} a besoin d'aide`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Sauver</button>
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

  // Créer la liste des composants avec un for
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
      <h2>Sauvetage des paresseux</h2>
      <p className="instruccion">
        Cliquez sur les paresseux pour les sauver de la forêt
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Vous avez sauvé tous les paresseux