---
title: "Actividad 4 - La misión del Monito (Combinación de compuertas)"
date: 2025-10-20T01:55:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/monito.jpg" alt="Nuvi disfrazado de monito" width="20%" />

## Introducción


Desde la copa de un árbol, el **Monito** te saluda entusiasmado:

> "¡Llegaste muy lejos! Ya dominas **AND**, **OR** y **NOT**.  
> Ahora toca **combinarlas** para devolverle la energía a la **Esfera del Bosque**."

En esta actividad vas a construir un circuito que usa **todas** las compuertas para resolver un reto.

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## Objetivo

Construir y comprobar el circuito lógico:

- La **Esfera** se enciende si:
  - **B** está encendido, **o**
  - **A** está encendido **y** **C** está apagado.

Este circuito usa **NOT**, **AND** y **OR**.

---

## Componentes necesarios

- 3 **Input**: A, B, C  
- 1 **NOT Gate**  
- 1 **AND Gate**  
- 1 **OR Gate**  
- 1 **Output**

<img src="../media/actividad_4.png" alt="Ejemplo visual del circuito combinado AND, OR, NOT con tres entradas y una salida" width="20%" style="vertical-align: middle; margin-left: 10px;"/>

---

<img src="../media/paisaje_bosque.webp" alt="Paisaje del bosque mágico" width="100%" />

## Instrucciones en el simulador

### 1. Colocar los componentes
1. Asegúrate de estar en modo **Edit**.
2. En la barra lateral izquierda, elige y coloca:
  - Coloca **A**, **B**, **C** (Inputs).  
  - Coloca **NOT**, **AND**, **OR**.  
  - Coloca un **Output** a la derecha.

### 2. Conectar los componentes
1. Conecta **C ➔ NOT** (esto crea **NOT C**).  
2. Conecta **A** y **NOT C** a la **AND** (esto crea **A AND NOT C**).  
3. Conecta **(A AND NOT C)** y **B** a la **OR**.  
4. Conecta la **salida de OR ➔ Output**.

---

## Pruebas guiadas

Prueba estas combinaciones y verifica el **Output**:

1. **A = 1, B = 0, C = 0** ➔ `NOT C = 1` ➔ `A AND NOT C = 1` ➔ `Salida = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NOT C = 0` ➔ `A AND NOT C = 0` ➔ `Salida = 0` 
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Salida = 1`
4. **A = 0, B = 0, C = 0** ➔ ambos caminos dan `0` ➔ `Salida = 0`

Si estas cuatro se cumplen, ¡la Esfera se enciende correctamente!

---

## Tabla de verdad

<details style="margin: 20px 0;">
<summary style="cursor: pointer; padding: 12px 20px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 8px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;">
Ver tabla de verdad completa
</summary>

<div style="margin-top: 15px; padding: 15px; border-left: 4px solid #10b981; background-color: #f8f9fa; border-radius: 4px;">

| A | B | C | NOT C | A AND NOT C | Salida = (A AND NOT C) OR B |
|---|---|---|-------|-------------|------------------------------|
| 0 | 0 | 0 |   1   |      0      |              0               |
| 0 | 0 | 1 |   0   |      0      |              0               |
| 0 | 1 | 0 |   1   |      0      |              1               |
| 0 | 1 | 1 |   0   |      0      |              1               |
| 1 | 0 | 0 |   1   |      1      |              1               |
| 1 | 0 | 1 |   0   |      0      |              0               |
| 1 | 1 | 0 |   1   |      1      |              1               |
| 1 | 1 | 1 |   0   |      0      |              1               |

</div>
</details>

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Errores comunes y cómo resolverlos

- **La salida siempre es 0:** revisa que la **OR** reciba **dos señales**: `B` **y** `A AND NOT C`.  

---

## ¿Qué aprendiste?

- Las compuertas pueden componerse para crear decisiones más complejas que las de una sola compuerta.
- NOT permite invertir una señal; AND permite combinar condiciones simultáneas; OR permite unir caminos alternativos.
- La salida final depende de cómo se conectan las compuertas y del orden en que se procesan las señales.

---

## Continuación

En la siguiente misión volverás a encontrarte con los personajes del bosque para resolver retos más grandes utilizando las mismas tres compuertas.
