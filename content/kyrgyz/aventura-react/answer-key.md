---
title: "React Коста Рика - Жооптор жыйындысы"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

Бүткүл React колдонмосунун жооптору

### Иш-чара 1 Тортугеро

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
      <h2>Тортугеро Улуттук Парк</h2>
      <p>{tortugas} ташбаканы {total} ташбадан сактап жатасыз</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>Ташбаканы сактоо</button>
      ) : (
        <>
          <p className="exito">Баардык ташбакалар коопсуз жерде!</p>
          <button onClick={reiniciar}>Миссияны кайра баштоо</button>
        </>
      )}
    </div>
  );
}

```

### Иш-чара 2 Пляж

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 Пластик",
    "🍾 Шише",
    "🪙 Металл",
    "📄 Кагаз"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*Түймөлөрдү түзүү үчүн for колдонуу*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        {desechos[i]} чогултуу
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>Пляждарды тазалоо</h2>
      <p className="instruccion">
        Деңиздик организмдерди коргоо үчүн калдыктарды чогултуу үчүн аларга
        чыкылдатыңыз
      </p>

      <div className="botones">{ботоны}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">Пляж таза!</p>
      )}
    </div>
  );
}

```

### Иш-чара 3 Кофе фермасы

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 Кофени үрөндүн себүүсү",
    "🌾 Дандарды жыйноо",
    "🌞 Күндүз кургатуу",
    "🔥 Кууруу",
    "☕ Кофени ичүү"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>Чоң атанын фермасы</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Кийинки этап ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          Кофе иштетүү процесси толугу менен аяктады!
        </h3>
      )}
    </div>
  );
}

```

### Иш-чара 4 Аренал жанар тоосу

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "енот",
    "маймыл",
    "жагуар",
    "түкөн",
    "Тоби"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // Бул жерде for колдонуу менен колдо жазылган тизмени түзөбүз
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} кооптуу жерде{" "}
        <button onClick={() => эвакуировать(animales[i])}>Эвакуациялоо</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>Аренал жанар тоосу</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>Бардык жаныбарлар коопсуз жерде!</p>
      )}
    </div>
  );
}

```

### Иш-чара 5 Малай

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} коопсуз жерде!`
          : `🦥 ${nombre} жардамга муктаж`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>Куткаруу</button>
      )}
    </div>
  );
}

export default function Perezosos() {
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };

  const perezosos = ["Мау", "Рик", "Луна", "Тоби"];

  // Компоненттердин тизмесин түзүү үчүн for колдонуу
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
    <div className="p