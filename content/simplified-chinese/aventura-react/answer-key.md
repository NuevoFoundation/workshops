---
title: "React Costa Rica - 答案密钥"
date: 2020-03-27T20:24:33-07:00
weight: 10
draft: false
hidden: true
---

整个 React 应用的答案

### 活动 1 托尔图格罗

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
      <h2>托尔图格罗国家公园</h2>
      <p>你已拯救了 {tortugas} 只海龟，共需拯救 {total} 只</p>

      {tortugas < total ? (
        <button onClick={salvarTortuga}>拯救海龟</button>
      ) : (
        <>
          <p className="exito">所有海龟都已安全!</p>
          <button onClick={reiniciar}>重新开始任务</button>
        </>
      )}
    </div>
  );
}

```

### 活动 2 海滩

```jsx
import { useState } from "react";

export default function Playas() {
  const [desechos, setDesechos] = useState([
    "🧃 塑料",
    "🍾 玻璃",
    "🪙 金属",
    "📄 纸张"
  ]);

  const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

  /* 使用 for 创建按钮 */
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
      <h2>清理海滩</h2>
      <p className="instruccion">
        点击垃圾进行收集，以帮助保护海洋生物
      </p>

      <div className="botones">{botones}</div>

      {desechos.length === 0 && (
        <p className="mensaje-final">海滩已清理干净!</p>
      )}
    </div>
  );
}

```

### 活动 3 咖啡农场

```jsx
import { useState } from "react";

export default function FincaCafe() {
  const etapas = [
    "🌱 播种咖啡",
    "🌾 收获咖啡豆",
    "🌞 日晒干燥",
    "🔥 烘焙",
    "☕ 享用咖啡"
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div className="finca-container">
      <h2>爷爷的咖啡农场</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          下一阶段 ➡️
        </button>
      ) : (
        <h3 className="mensaje-final">
          你已完成整个咖啡制作流程!
        </h3>
      )}
    </div>
  );
}

```

### 活动 4 阿雷纳尔火山

```jsx
import { useState } from "react";

export default function Volcan() {
  const [animales, setAnimales] = useState([
    "浣熊",
    "猴子",
    "美洲虎",
    "巨嘴鸟",
    "托比"
  ]);

  const evacuar = (nombre) => {
    setAnimales(animales.filter((a) => a !== nombre));
  };

  // 在这里我们用 for 手动创建列表
  let listaAnimales = [];

  for (let i = 0; i < animales.length; i++) {
    listaAnimales.push(
      <li key={i}>
        {animales[i]} 处于危险中{" "}
        <button onClick={() => evacuar(animales[i])}>疏散</button>
      </li>
    );
  }

  return (
    <div className="volcan">
      <h2>阿雷纳尔火山</h2>

      {animales.length > 0 ? (
        <ul>{listaAnimales}</ul>
      ) : (
        <p>所有动物都已安全!</p>
      )}
    </div>
  );
}

```

### 活动 5 树懒

```jsx
import { useState } from "react";

function Perezoso({ nombre, onRescatar, rescatado }) {
  return (
    <div className={`perezoso-card ${rescatado ? "rescatado" : ""}`}>
      <p>
        {rescatado
          ? `✅ ${nombre} 已安全!`
          : `🦥 ${nombre} 需要帮助`}
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

  // 用 for 创建组件列表
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
      <h2>树懒救援</h2>
      <p className="instruccion">
        点击树懒以将它们从森林中救出
      </p>

      <div className="lista-perezosos">{listaPerezosos}</div>

      {rescatados.length === perezosos.length && (
       