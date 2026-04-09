---
title: "Actividad 7 - El Puente de la Rana (Diferentes con AND/OR/NOT)"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/ranita.jpg" alt="Nuvi disfrazado de rana" width="15%" />

## Introducción

La **Rana** cuida un puente con una regla precisa:

> "Solo cruza quien trae **exactamente una** antorcha encendida.  
> Si no trae ninguna o trae las dos, el puente se cierra."

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## Objetivo lógico

Construye una salida que valga 1 cuando A y B sean **distintos**.  
Se arma **solo** con AND, OR y NOT:

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B) | Salida |
|---|---|--------|---------|---------------|--------|
| 0 | 0 |   0    |    0    |       1       |   0    |
| 0 | 1 |   1    |    0    |       1       |   1    |
| 1 | 0 |   1    |    0    |       1       |   1    |
| 1 | 1 |   1    |    1    |       0       |   0    |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="Paisaje del lago en el bosque" width="100%" />

## Instrucciones en el simulador

### 1. Colocar
- **Inputs**: A, B  
- **OR Gate**  
- **AND Gate** (x2)  
- **NOT Gate**  
- **Output**

<img src="../media/actividad_7.png" alt="Ejemplo visual del circuito XOR usando AND, OR y NOT con dos entradas y una salida" width="20%" class="lg-img"/>

### 2. Conectar
1. A y B ➔ **OR**: `OR_AB`  
2. A y B ➔ **AND1**: `AND_AB`  
3. `AND_AB` ➔ **NOT**: `NOT_AND_AB`  
4. `OR_AB` y `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **Output**

### 3. Probar
- Verifica 00, 01, 10, 11.  
- La salida debe ser 1 solo en 01 y 10.

**Condición de victoria:** salida = 1 cuando A ≠ B.

---

## Consejos rápidos

- Si te da 1 en 11, te falta la negación de `AND_AB`.  
- Separa visualmente las ramas `OR_AB` y `NOT_AND_AB` para evitar cruces.

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- A construir el criterio “**son distintos**” usando **AND/OR/NOT**.