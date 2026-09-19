```markdown
---
title: "React Costa Rica - 解答鍵"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

整個 React 應用程式的答案

### 活動 1 Tortugero

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
      <h2>托爾圖格羅國家公園</h2>
      <p>你已經拯救了 {tortugas} 隻烏龜，總共需要拯救 {total} 隻烏龜</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>拯救烏龜</button>
      ) : (
        <>
          <p className="exito">所有烏龜都安全了！</p>
          <button onClick={reiniciar}>重新開始任務</button>
        </>
      )}
    </div>
  );
}

```

### 活動 2 海灘

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 塑膠",
    "🍾 玻璃",
    "🪙 金屬",
    "📄 紙張"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /*使用 for 創建按鈕*/
  let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        收集 {desechos[i]}
      </button>
    );
  }

  return (
    <div className="playas-container">
      <h2>海灘清理</h2>
      <p className="instruccion">
        點擊垃圾進行收集，幫助保護海洋生物
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">海灘已經乾淨了！</p>
      )}
    </div>
  );
}

```

### 活動 3 咖啡農場

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 種植咖啡",
    "🌾 收穫咖啡豆",
    "🌞 曬乾咖啡豆",
    "🔥 烘焙咖啡",
    "☕ 享受咖啡"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>爺爺的咖啡農場</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          下一階段 ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          你已完成咖啡製作的所有過程！
        </h3>
      )}
    </div>
  );
}

```

### 活動 4 阿雷納火山

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "浣熊",
    "猴子",
    "美洲豹",
    "巨嘴鳥",
    "托比"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // 這裡使用 for 手動建立列表
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} 處於危險中{" "}
        <button onClick={() => evacuar(animales[i])}>疏散</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>阿雷納火山</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>所有動物都已經安全！</p>
      )}
    </div>
  );
}

```

### 活動 5 樹懶

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} 已經安全了！`
          : `🦥 ${nombre} 需要幫助`}
      </p>

      {!rescatado && (
        <button onClick={() => onRescatar(nombre)}>救援</button>
      )}
    </div>
  );
}

export default function Perezosos() {
  const [rescatados, setRescatados] = useState([]);

  const rescatar = (nombre) => {
    setRescatados([...rescatados, nombre]);
  };

  const perezosos = ["毛毛", "瑞克", "露娜", "托比"];

  // 使用 for 創建元件列表
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
      <h2>樹懶救援</h2>
      <p className="in