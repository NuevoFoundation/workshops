---
title: "Actividad 6 - La Cima Silenciosa del Perezoso (OR + NOT)"
date: 2025-10-20T02:25:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/perezoso.webp" alt="Nuvi disfrazado de perezoso" width="10%" />

## Introducción


El **Perezoso** te espera en la montaña:

> "Quiero silencio total: la salida solo se enciende cuando **ningún** sendero tiene luz.  
> Usemos **OR** para detectar si hay luz, y **NOT** para invertir."

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## Objetivo lógico

La salida debe ser 1 solo si **A = 0 y B = 0**:

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| A | B | A OR B | Salida = NOT(A OR B) |
|---|---|--------|----------------------|
| 0 | 0 |   0    |          1           |
| 0 | 1 |   1    |          0           |
| 1 | 0 |   1    |          0           |
| 1 | 1 |   1    |          0           |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paisaje de la cima de la montaña" width="100%" />

## Instrucciones en el simulador

### 1. Colocar
- **Inputs**: A, B  
- **OR Gate**  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_6.png" alt="Ejemplo visual del circuito OR seguido de NOT con dos entradas y una salida" width="20%" class="lg-img"/>

### 2. Conectar
1. A y B ➔ **OR**  
2. Salida de **OR** ➔ **NOT**  
3. Salida de **NOT** ➔ **Output**

### 3. Probar
- Prueba 00, 01, 10, 11.  
- Solo con 00 la salida debe ser 1.

**Condición de victoria:** si hay **alguna** luz en A o B, la salida es 0.

---

## Consejos rápidos

- Si la salida queda siempre en 1, puede faltar el cable de **OR** hacia **NOT**.  
- Nombra el intermedio `OR_AB`.

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- Cómo expresar “**ninguna** de las entradas activas” con **OR** seguido de **NOT**.