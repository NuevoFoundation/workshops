---
title: "Actividad 1 - La Puerta del Tucán (AND)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/tucan.png" alt="Ilustración de Nuvi con disfraz de tucán" width="15%" />

## Introducción


Al avanzar por el bosque, llegas a una gran puerta de madera.  
Un tucán aparece junto a ella y te dice:

> “Esta puerta solo se abre si se encienden las dos antorchas al mismo tiempo.  
> Si solo una está encendida, la puerta no se mueve.  
> Aquí usamos lógica AND.”

Tu misión es probar este comportamiento utilizando el simulador de compuertas lógicas.

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## ¿Qué es la compuerta AND?

- Tiene **dos entradas** y **una salida**.  
- La salida se enciende (`1`) **solo si ambas entradas están encendidas (`1`)**.  
- Si una o las dos entradas están apagadas (`0`), la salida permanece apagada (`0`).

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| Entrada A | Entrada B | Salida AND |
|-----------|-----------|------------|
| 0         | 0         | 0          |
| 0         | 1         | 0          |
| 1         | 0         | 0          |
| 1         | 1         | 1          |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paisaje de la puerta en el bosque" width="100%" />

## Instrucciones en el simulador

### 1. Colocar los componentes
1. Asegúrate de estar en modo **Edit**.
2. Desde la barra lateral izquierda, haz clic en:
   - **Input** ➔ coloca **dos** entradas (A y B).
   - **AND Gate** ➔ coloca una compuerta AND.
   - **Output** ➔ coloca una salida a la derecha de la compuerta.

<img src="../media/actividad_1.png" alt="Ejemplo visual del circuito AND con dos entradas y una salida" width="20%" class="lg-img"/>

### 2. Conectar los componentes
1. Haz clic en el círculo de salida de la **entrada A**, luego clic en una de las entradas de la compuerta AND.  
2. Repite lo mismo con la **entrada B**.  
3. Desde la salida de la compuerta AND, conecta al círculo de la **salida**.

### 3. Probar el circuito
- Haz clic sobre cada entrada para cambiar entre `0` y `1`.  
- Prueba todas las combinaciones posibles.  
- La puerta del Tucán solo se “abre” (salida = 1) cuando la entrada A es 1 y la entrada B es 1 (A=1 AND B=1).


---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- AND representa condiciones que deben cumplirse juntas: la salida solo se activa cuando A = 1 y B = 1 al mismo tiempo.
- Si una de las entradas está en 0, la salida también será 0, sin excepciones.

---

## Continuación

En la siguiente actividad avanzarás por el sendero hasta encontrarte con el Perezoso y descubrir cómo funciona la compuerta OR.
