---
title: "Clave de respuestas"
date: 2020-03-27T20:24:33-07:00
weight: 20
draft: false
hidden: true
---

Estos son los archivos terminados del proyecto de solución (`workshopcode/espanol/aventura-react-solution`). También puedes abrir la app terminada y probarla:

### <a class="btn btn-info" href="../open-finished/" target="_blank" rel="noopener">👉 Abrir la app terminada</a>

`src/main.jsx` y `src/style.css` son iguales en el proyecto inicial y en la app terminada, así que no aparecen aquí. En la actividad del volcán, cada estudiante elige sus propios animales, así que su lista puede ser diferente.

## src/App.jsx

Las dos tarjetas extra están activadas.

```jsx
import Tortugas from "./components/Tortugas.jsx";
import Playa from "./components/Playa.jsx";
import Perezosos from "./components/Perezosos.jsx";
import FincaCafe from "./components/FincaCafe.jsx";
import Volcan from "./components/Volcan.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Mi aventura en Costa Rica</h1>

      <Tortugas />
      <Playa />
      <Perezosos />

      <FincaCafe />
      <Volcan />
    </div>
  );
}
```

## src/components/Tortugas.jsx (Actividad 1)

```jsx
import { useState } from "react";

export default function Tortugas() {
  const [tortugas, setTortugas] = useState(0);

  const total = 10;

  const salvarTortuga = () => {
    if (tortugas < total) {
      setTortugas(tortugas + 1);
    }
  };

  const reiniciar = () => {
    setTortugas(0);
  };

  return (
    <div className="tortugas">
      <h2>🐢 Parque Nacional Tortuguero</h2>
      <p>Has salvado {tortugas} de {total} tortugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tortuga</button>
      ) : (
        <>
          <p className="exito">¡Todas las tortugas están a salvo!</p>
          <button onClick={reiniciar}>Reiniciar misión</button>
        </>
      )}
    </div>
  );
}
```

## src/components/Playa.jsx (Actividad 2)

```jsx
import { useState } from "react";

export default function Playa() {
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidrio",
    "🥫 Lata",
    "📄 Papel",
  ]);

  const recoger = (desecho) => {
    setDesechos(desechos.filter((d) => d !== desecho));
  };

  return (
    <div className="playa">
      <h2>🏖️ Limpieza de las Playas</h2>
      <p className="instrucciones">
        Haz clic en los desechos para recogerlos y proteger a las especies marinas.
      </p>

      <div className="botones-desechos">
        {desechos.map((desecho) => (
          <button key={desecho} onClick={() => recoger(desecho)}>
            Recoger {desecho}
          </button>
        ))}
      </div>

      {desechos.length === 0 && <p className="mensaje-final">¡La playa está limpia!</p>}
    </div>
  );
}
```

## src/components/Perezosos.jsx (Actividad 3)

```jsx
import { useState } from "react";

// Un componente PEQUEÑO: la tarjeta de un perezoso.
// Recibe su información por props: nombre, rescatado y onRescatar.
function Perezoso({ nombre, rescatado, onRescatar }) {
  return (
    <div className={rescatado ? "tarjeta-perezoso rescatado" : "tarjeta-perezoso"}>
      <h3>🦥 {nombre}</h3>

      <p>{rescatado ? "✅ ¡A salvo!" : "Necesita ayuda"}</p>

      {!rescatado && <button onClick={() => onRescatar(nombre)}>Rescatar</button>}
    </div>
  );
}

// Un componente GRANDE: toda la zona de rescate.
export default function Perezosos() {
  const perezosos = ["Mau", "Rick", "Luna", "Toby"];
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    if (!rescatados.includes(nombre)) {
      setRescatados([...rescatados, nombre]);
    }
  };

  return (
    <div className="perezosos">
      <h2>🦥 Rescate de los Perezosos</h2>
      <p className="instrucciones">Haz clic en un perezoso para rescatarlo del bosque.</p>

      <div className="lista-perezosos">
        {perezosos.map((nombre) => (
          <Perezoso
            key={nombre}
            nombre={nombre}
            rescatado={rescatados.includes(nombre)}
            onRescatar={rescatar}
          />
        ))}
      </div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">¡Has rescatado a todos los perezosos!</h3>
      )}
    </div>
  );
}
```

## src/components/FincaCafe.jsx (Extra: Finca de café)

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Sembrar el café",
    "🍒 Cosechar los granos de café",
    "🌞 Secar los granos al sol",
    "🔥 Tostar los granos",
    "☕ Disfrutar una taza de café",
  ];

  const [paso, setPaso] = useState(0);

  const siguiente = () => {
    if (paso < etapas.length - 1) {
      setPaso(paso + 1);
    }
  };

  return (
    <div className="finca-cafe">
      <h2>☕ Finca del Abuelo</h2>
      <p className="numero-etapa">
        Etapa {paso + 1} de {etapas.length}
      </p>
      <p className="etapa">{etapas[paso]}</p>

      {paso < etapas.length - 1 ? (
        <button className="boton-siguiente" onClick={siguiente}>
          Siguiente etapa ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">¡Has completado todo el proceso del café!</h3>
      )}
    </div>
  );
}
```

## src/components/Volcan.jsx (Extra: Volcán Arenal)

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "🐒 Mono congo",
    "🦜 Tucán",
    "🐆 Jaguar",
    "🐸 Rana de ojos rojos",
    "🦥 Perezoso de tres dedos",
  ]);

  const evacuar = (animal) => {
    setAnimales(animales.filter((a) => a !== animal));
  };

  return (
    <div className="volcan">
      <h2>🌋 Volcán Arenal</h2>
      <p className="instrucciones">
        ¡El volcán está retumbando! Evacúa a todos los animales.
      </p>

      {animales.length > 0 ? (
        <ul>
          {animales.map((animal) => (
            <li key={animal}>
              ¡{animal} está en peligro!
              <button onClick={() => evacuar(animal)}>Evacuar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mensaje-final">¡Todos los animales están a salvo!</p>
      )}
    </div>
  );
}
```
