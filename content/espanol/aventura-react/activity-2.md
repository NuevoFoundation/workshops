---
title: "Actividad 2 - Limpiando playas"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---

<img src="../media/Playa.png" alt="Limpieza de playa" style="width:50%;">

¡Genial! Lograste salvar las tortugas. Ahora para a limpiar playas de Costa Rica aprenderemos a usar constantes pero con arrays, for loops y variables let.

**Escribe este archivo `"Playa.jsx"`**

{{% notice info %}}
### Importante utilizar:

<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. import { useState } from "react";</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. export default function Playa() { }</p>

{{% /notice %}}



En primer lugar lo que vamos a hacer es crear una array que ahí puedes guardar una cantidad x de elementos, mira este ejemplo!

Así se ven normalmente las array en react.

``` jsx
const [Dinero, setDinero] = useState([
    "Colones",
    "Dolares",
    "Euros",
    "Pesos"
  ]);
```

Crea una constante llamada **desechos y setDesechos** para esta actividad. Dentro de esa const pon elementos que son basura en las playas.

Tenemos que crear una funcion para poder limpiar la playa de los desechos de la array.

``` jsx
const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));

``` 

Esta funcion elimina un desecho de la lista cuando le das clic. Veamos como funciona:



{{% notice tip %}}
### ¿Qué hace esta función?
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>const limpiar = (d) => setDesechos(desechos.filter((x) => x !== d));</code></p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Cuando le das click elimina lo que tienes en la array</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">El filter, revisa uno por uno, crea una nueva array, luego guarda la lista sin ese desecho</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Ejemplo: si quitas el plastico, te quedas con vidrio, metal y papel</p>

{{% /notice %}}

Luego debemos crear una variable llamada `"let"` a diferencia de la const, let si se puede modificar

Le ponemos por nombre `"botones = [];"`

```jsx
let botones = [];

  for (let i = 0; i < desechos.length; i++) {
    botones.push(
      <button key={i} onClick={() => limpiar(desechos[i])}>
        Recolectar {desechos[i]}
      </button>
    );
  }

```

Con esto nos ahorramos el escribir 4 botones a mano.

{{% notice info %}}
### El ciclo hace esto:
<p style="font-size:1.6rem; color:#444; line-height:1.8;">1. Empieza en el primer desecho.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">2. Crea un botón para ese desecho.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">3. Pasa al siguiente.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">4. Repite hasta terminar.</p>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">El boton tiene el Onclick que sirve para limpiar</p>

**Si la lista cambia, React vuelve a dibujar solo los botones que faltan.**

{{% /notice %}}



```jsx
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
```

**NO OLVIDES IMPORTARLO EN EL APP.JSX**
``` jsx
import Playa from "./Components/Playa.jsx"
``` 

![alt text height="200px" width="50%"](../media/Components2Playa.png "Playa")