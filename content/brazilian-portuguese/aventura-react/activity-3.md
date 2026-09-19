---
title: "Atividade 3 - Fazenda de café"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

Você sabe o quão importante o café é para a Costa Rica?

O café da Costa Rica é reconhecido mundialmente por sua alta qualidade, graças à combinação de solos vulcânicos férteis, um clima ideal e ao cultivo exclusivo de grãos Arabica. O país proíbe o cultivo da variedade Robusta para garantir um produto suave e equilibrado. Historicamente, o café tem sido vital para a economia e cultura do país, sendo cultivado em várias regiões, incluindo Tarrazú, uma das mais famosas.

Então, vamos aprender sobre o processo do café e, por que não, aprender mais sobre React com **Sharky**!

**Escreva este arquivo `"FincaCafe.jsx"`**:

{{% notice info %}}
### É importante usar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Café" style="width:50%;">

Para fazer café, primeiro precisamos saber que isso envolve um processo importante que contém várias etapas, que veremos a seguir.

{{% notice info %}}
### Vamos aprender algumas coisas diferentes
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Usaremos um número para saber em qual etapa de uma história estamos.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Mudamos o que vemos com base nesse número.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Não estamos contando, estamos navegando pelos passos.</p>

{{% /notice %}}

```jsx
const etapas = [
  "Plantar café",
  "Colher grãos",
  "Secar ao sol",
  "Torrar",
  "Aproveitar"
];

const [indice, setIndice] = useState(0);

```

**Aqui criamos uma constante chamada `"ETAPAS"`, mas também temos outra constante chamada `"INDICE"`**.

{{% notice info %}}
### Isso significa que:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">O número 0 significa etapa 1.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">O número 1 significa etapa 2.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">O número 2 significa etapa 3.</p>

{{% /notice %}}

Agora, com isso, podemos criar uma constante chamada `"siguiente"` para que possamos navegar entre as etapas.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```
return (
    <div className="finca-container">
      <h2>Fazenda do Avô</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Próxima etapa
        </button>
      ) : (
        // VOCÊ CHEGOU À ÚLTIMA ETAPA
        <h3 className="mensaje-final">
          Você completou todo o processo do café!
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Imagine que você está jogando um jogo com 5 níveis
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = Quantos níveis o jogo tem (exemplo: 5 níveis).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = Em qual nível você está no momento (pode ser nível 1, 2, 3...).</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">O número 2 significa etapa 3.</p>

{{% /notice %}}

**NÃO SE ESQUEÇA DE IMPORTAR NO APP.JSX**

```jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

<img src="../media/Components3FincaCafe.png" alt="Componente FincaCafe renderizado no app" style="width:50%;">