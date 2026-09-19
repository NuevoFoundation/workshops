---
title: "React Costa Rica - Gabarito"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

Respostas para todo o aplicativo React

### Atividade 1 Tortugero

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
      <p>Você salvou {tortugas} de {total} tartarugas</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Salvar tartaruga</button>
      ) : (
        <>
          <p className="exito">Todas as tartarugas estão salvas!</p>
          <button onClick={reiniciar}>Reiniciar missão</button>
        </>
      )}
    </div>
  );
}

```

### Atividade 2 Praia

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 Plástico",
    "🍾 Vidro",
    "🪙 Metal",
    "📄 Papel"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*Criar os botões usando for*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolher {desechos[i]}
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>Limpeza das Praias</h2>
      <p className="instruccion">
        Clique nos resíduos para recolhê-los e ajudar a proteger as
        espécies marinhas
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Praia limpa!</p>
      )}
    </div>
  );
}

```

### Atividade 3 Fazenda de Café

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Plantar café",
    "🌾 Colher grãos",
    "🌞 Secar ao sol",
    "🔥 Torrar",
    "☕ Desfrutar do café"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>Fazenda do Avô</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Próxima etapa ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          Você completou todo o processo do café!
        </h3>
      )}
    </div>
  );
}

```

### Atividade 4 Vulcão Arenal

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "guaxinim",
    "macaco",
    "onça",
    "tucano",
    "Tobi"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // Aqui fazemos uma lista manualmente usando um for
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} está em perigo{" "}
        <button onClick={() => evacuar(animales[i])}>Evacuar</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>Vulcão Arenal</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Todos os animais estão salvos!</p>
      )}
    </div>
  );
}

```

### Atividade 5 Bichos-Preguiça

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} está salvo!`
          : `🦥 ${nombre} precisa de ajuda`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Resgatar</button>
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

  // Criar a lista de componentes com um for
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
      <h2>Resgate dos Bichos-Preguiça</h2>
      <p className="instruccion">
        Clique nos bichos-preguiça para resgatá-los da floresta
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
        <h3 className="mensaje-final">
          Você resgatou todos os bichos-preguiça