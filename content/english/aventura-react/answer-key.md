---
title: "React Costa Rica - Answer key"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

Answers for the entire React app

### Activity 1 Tortugero

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
      <p>Has salvado {tortugas} de {total} tortugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
    </div>
  );
}

```

### Activity 2 Playa

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🪙 Metal",
    "📄 Papel"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*Crear los botones usando for*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolectar {desechos[i]}
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>Limpieza de las Playas</h2>
      <p className="instruccion">
        Haz clic en los desechos para recolectarlos y ayudar a proteger a las
        especies marinas
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Playa limpia!</p>
      )}
    </div>
  );
}

```

### Activity 3 Coffee farm

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Sembrar café",
    "🌾 Cosechar granos",
    "🌞 Secar al sol",
    "🔥 Tostar",
    "☕ Disfrutar del café"
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
          Siguiente etapa ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          Has completado todo el proceso del café!
        </h3>
      )}
    </div>
  );
}

```

### Activity 4 Arenal volcano

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "mapache",
    "mono",
    "jaguar",
    "tucán",
    "Tobi"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // Aquí hacemos una lista a mano usando un for
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} está en peligro{" "}
        <button onClick={() => evacuar(animales[i])}>Evacuar</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>Volcán Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Todos los animales están a salvo!</p>
      )}
    </div>
  );
}

```

### Activity 5 Sloths

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} está a salvo!`
          : `🦥 ${nombre} necesita ayuda`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Rescatar</button>
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

  // Crear la lista de componentes con un for
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
      <h2>Rescate de los Perezosos</h2>
      <p className="instruccion">
        Haz clic en los perezosos para rescatarlos del bosque
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Has rescatado a todos los perezosos!
        </h3>
      )}
    </div>
  );
}

```


