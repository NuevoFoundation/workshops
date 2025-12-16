---
title: "Actividad 8 - La Cámara de los Espejos del Monito (Igualdad con AND/OR/NOT)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/monito.jpg" alt="Decoración" width="20%" />

## Introducción

En la sala de reflejos, el **Monito** te explica:

> "Para activar la cámara, las señales deben **coincidir**.  
> Si A y B son iguales, la puerta se abre."

---

<img src="../media/Pattern.webp" alt="Decoración" width="100%" />

## Objetivo lógico

Armar una salida que valga 1 cuando **A = B**, usando **AND/OR/NOT**:

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| A | B | NOT A | NOT B | A AND B | (NOT A AND NOT B) | Salida |
|---|---|-------|-------|---------|--------------------|--------|
| 0 | 0 |   1   |   1   |    0    |         1          |   1    |
| 0 | 1 |   1   |   0   |    0    |         0          |   0    |
| 1 | 0 |   0   |   1   |    0    |         0          |   0    |
| 1 | 1 |   0   |   0   |    1    |         0          |   1    |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="Decoración" width="100%" />

## Instrucciones en el simulador

### 1. Colocar
- **Inputs**: A, B  
- **NOT Gate** (x2)  
- **AND Gate** (x2)  
- **OR Gate**  
- **Output**

<img src="../media/actividad_8.png" alt="Decoración" width="20%" class="lg-img"/>

### 2. Conectar
1. A ➔ **NOT**: `NOT_A`  
2. B ➔ **NOT**: `NOT_B`  
3. A y B ➔ **AND1**  (rama “ambos 1”)  
4. `NOT_A` y `NOT_B` ➔ **AND2** (rama “ambos 0”)  
5. **AND1** y **AND2** ➔ **OR**  
6. **OR** ➔ **Output**

### 3. Probar
- Recorre 00, 01, 10, 11.  
- La salida debe ser 1 en 00 y 11.

**Condición de victoria:** salida = 1 si y solo si A y B coinciden.

---

## Consejos rápidos

- Si la salida es 1 en 01 o 10, revisá los cables de `NOT_A`/`NOT_B` hacia **AND₂**.  
- Mantené simétricas las dos ramas para leer el circuito rápido.

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- A construir el criterio “**son iguales**” usando solo **AND/OR/NOT**.  
- Cómo usar **ramas paralelas** para cubrir casos complementarios.