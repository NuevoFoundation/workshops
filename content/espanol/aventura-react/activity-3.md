---
title: "Actividad 3 - Finca del café"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---

¿Sabes que tan importante es el café en Costa Rica?

El café de Costa Rica es reconocido mundialmente por su alta calidad, gracias a la combinación de suelos volcánicos fértiles, un clima ideal y el cultivo exclusivo de granos de Arábica. El país prohíbe el cultivo de la variedad Robusta para garantizar un producto suave y equilibrado. El café ha sido históricamente vital para la economía y la cultura del país, y se cultiva en diversas regiones, incluyendo Tarrazú, que es una de las más famosas.

Así que vamos a aprender sobre el proceso del café y porque no aprender más de React con **Sharky**

**Escribe este archivo `"FincaCafe.jsx"`**

{{% notice info %}}
### Importante utilizar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function FincaCafe() { }</p>

{{% /notice %}}

<img src="../media/Cafe.png" alt="Cafe" style="width:50%;">

Para hacer café primero debemos saber que esto lleva un proceso importante que contiene algunas etapas, que veremos a continuación.

{{% notice info %}}
### Aprenderemos algunas cosas diferentes
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Usaremos un número para saber en qué etapa de una historia estamos</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Cambiamos lo que vemos según ese número</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. No estamos contando, estamos navegando pasos</p>

{{% /notice %}}

```jsx
const etapas = [
  "Sembrar café",
  "Cosechar granos",
  "Secar al sol",
  "Tostar",
  "Disfrutar"
];

const [indice, setIndice] = useState(0);

```

**Aqui creamos una constante que se llama `"ETAPAS"`, pero tambien tenemos otra constante que se llama `"INDICE"`**

{{% notice info %}}
### Ya que esto quiere decir que:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">El número 0 significa etapa 1</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">El número 1 significa etapa 2</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">El número 2 significa etapa 3</p>

{{% /notice %}}

Ya con esto podemos crear una const llamada `"siguiente"` para que vayamos pasando entre etapas.

```jsx
const siguiente = () => {
    if (indice < etapas.length - 1) {
      setIndice(indice + 1);
    }
  };
```



```jsx
return (
    <div className="finca-container">
      <h2>Finca del Abuelo</h2>
      <p className="etapa">{etapas[indice]}</p>

      {indice < etapas.length - 1 ? (
        <button className="btn-siguiente" onClick={siguiente}>
          Siguiente etapa
        </button>
      ) : (
        //LLEGASTE A LA ULTIMA ETAPA
        <h3 className="mensaje-final">
          Has completado todo el proceso del café!
        </h3>
      )}
    </div>
  );
```

{{% notice tip %}}
### Imagina que estas jugando un juego con 5 niveles
<p style="font-size:1.6rem; color:#444; line-height:1.8;">etapas.length = Cuántos niveles tiene el juego (ejemplo: 5 niveles)</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">indice = En qué nivel estás tú ahora (puede ser nivel 1, 2, 3...)</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">El número 2 significa etapa 3</p>

{{% /notice %}}

**NO OLVIDES IMPORTARLO EN EL APP.JSX**

``` jsx
import FincaCafe from "./Components/FincaCafe.jsx"
``` 

![alt text height="200px" width="50%"](../media/Components3FincaCafe.png "Finca de cafe")
