---
title: "Actividad 5 - La Puerta Invertida del Tucán (AND + NOT)"
date: 2025-10-20T02:10:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/tucan.png" alt="Nuvi disfrazado de tucán" width="15%" />

## Introducción


Frente a la puerta de piedra, el **Tucán** te guiña un ojo:

> "¿Recuerdas mi puerta **AND**? Hoy la vamos a **invertir** con ayuda de **NOT**.  
> La puerta se abrirá **a menos** que ambas antorchas estén encendidas."

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## Objetivo lógico

Construir una salida que sea verdadera **salvo** cuando A = 1 **y** B = 1:

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| A | B | A AND B | Salida = NOT(A AND B) |
|---|---|---------|------------------------|
| 0 | 0 |    0    |           1            |
| 0 | 1 |    0    |           1            |
| 1 | 0 |    0    |           1            |
| 1 | 1 |    1    |           0            |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paisaje de la puerta de piedra en el bosque" width="100%" />

## Instrucciones en el simulador

### 1. Colocar los componentes
1. Asegúrate de estar en modo **Edit**.
- **Inputs**: A, B  
- **AND Gate**  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_5.png" alt="Ejemplo visual del circuito AND seguido de NOT con dos entradas y una salida" width="20%" class="lg-img"/>

### 2. Conectar
1. A y B ➔ **AND**  
2. Salida de **AND** ➔ **NOT**  
3. Salida de **NOT** ➔ **Output**

### 3. Probar
- Recorre 00, 01, 10, 11.  
- La puerta se abre en todos los casos **excepto** 11.

**Condición de victoria:** la salida solo es 0 cuando A = 1 y B = 1.

---

## Consejos rápidos

- Si siempre da 0, probablemente conectaste el **Output** a la **AND** en vez de a la **NOT**.  

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- Cómo **negar** una condición compuesta: primero **AND**, luego **NOT**.