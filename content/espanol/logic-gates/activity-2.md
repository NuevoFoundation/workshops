---
title: "Actividad 2 - La Montaña del Perezoso (OR)"
date: 2025-10-20T01:30:00-05:00
weight: 3
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/perezoso.webp" alt="Nuvi disfrazado de perezoso" width="10%" />

## Introducción

Al dejar atrás la puerta del Tucán, el sendero te lleva a una montaña tranquila.  
Sobre una rama, un perezoso bosteza y te dice con voz serena:

> "No hace falta correr... Para llegar a la cima podés usar el sendero **A** o el **B**.  
> Si alguno está abierto, llegarás. Y si ambos están abiertos, ¡también! Aquí usamos lógica **OR**."

Tu misión es comprobar este comportamiento en el simulador y encender el camino hacia la cima.

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## ¿Qué es la compuerta OR?

- Tiene **dos entradas** y **una salida**.  
- La salida se enciende (`1`) **si al menos una de las entradas está encendida (`1`)**.  
- Solo permanece apagada (`0`) cuando **ambas** entradas están apagadas (`0`).

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| Entrada A | Entrada B | Salida OR |
|-----------|-----------|-----------|
| 0         | 0         | 0         |
| 0         | 1         | 1         |
| 1         | 0         | 1         |
| 1         | 1         | 1         |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paisaje de la montaña y el camino" width="100%" />

## Instrucciones en el simulador

### 1. Colocar los componentes
1. Asegurate de estar en modo **Edit**.
2. En la barra lateral izquierda, elegí y colocá:
   - **Input** ➔ coloca **dos** entradas (A y B).
   - **OR Gate** ➔ coloca una compuerta OR entre las entradas y la salida.
   - **Output** ➔ coloca una salida a la derecha de la compuerta.

<img src="../media/actividad_2.png" alt="Ejemplo visual del circuito OR con dos entradas y una salida" width="20%" class="lg-img"/>

### 2. Conectar los componentes
1. Conecta la **salida** de la **entrada A** a una de las **entradas** de la compuerta **OR**.  
2. Conecta la **salida** de la **entrada B** a la **otra entrada** de la compuerta **OR**.  
3. Conecta la **salida** de la compuerta **OR** al **Output**.

### 3. Probar el circuito
- Haz clic en cada **Input** para alternar `0` ↔ `1`.  
- Prueba las cuatro combinaciones (00, 01, 10, 11).  
- **Objetivo / Condición de victoria:** la salida debe ser `1` si **A = 1** **o** **B = 1** (o ambos).  

> "¿Ves? Con solo un camino abierto, ya puedes llegar arriba".

---

## Consejos rápidos

- Si la salida se queda en `0` aun con A = 1 o B = 1, revisa que ambas entradas estén conectadas a la compuerta OR.  
- Verifica que usaste **OR Gate** y no **AND Gate** por error.

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- OR representa **opciones**: basta con **uno** de los caminos para activar la salida.  
- La única forma de que la salida esté en `0` es que **A = 0** y **B = 0** al mismo tiempo.

---

## Continuación

En la próxima actividad conocerás la laguna del reflejo con la **Rana** y descubrirás cómo funciona la compuerta **NOT**.
