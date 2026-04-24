---
title: "Actividad 3 - El Reto de la Rana (NOT)"
date: 2025-10-20T01:40:00-05:00
weight: 4
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

<img src="../media/ranita.jpg" alt="Nuvi disfrazado de rana" width="15%" />

## Introducción

Siguiendo el sendero, llegas a una laguna brillante.  
Una **rana verde** salta sobre una hoja y te saluda:

> "¡Bienvenidos a la **laguna del reflejo**!  
> Aquí todo funciona **al revés**: si algo está encendido, se apaga;  
> si está apagado, se enciende. Esto es la lógica **NOT**."

Tu misión es construir un circuito que **invierta** la señal de entrada.

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## ¿Qué es la compuerta NOT?

- Tiene **una entrada** y **una salida**.  
- La salida es **siempre lo contrario** de la entrada.

<details class="lg-details">
<summary class="lg-summary">
Ver tabla de verdad completa
</summary>

<div class="lg-div">

| Entrada A | Salida NOT |
|-----------|------------|
| 0         | 1          |
| 1         | 0          |

</div>
</details>

> A esta compuerta también se le llama **inversor**.

---

<img src="../media/paisaje_lago.webp" alt="Paisaje de la laguna en el bosque" width="100%" />

## Instrucciones en el simulador

### 1. Colocar los componentes
1. Asegúrate de estar en modo **Edit**.  
2. En la barra lateral izquierda, elige y coloca:
   - **Input** ➔ una entrada (A).
   - **NOT Gate** ➔ una compuerta NOT entre la entrada y la salida.
   - **Output** ➔ una salida a la derecha de la compuerta.

<img src="../media/actividad_3.png" alt="Ejemplo visual del circuito NOT con una entrada y una salida" width="20%" class="lg-img"/>

### 2. Conectar los componentes
1. Conecta la **salida** del **Input A** a la **entrada** de la **NOT**.  
2. Conecta la **salida** de la **NOT** al **Output**.

### 3. Probar el circuito
- Haz clic en el **Input A** para alternar `0` ↔ `1`.  
- Observa el **Output**: debe mostrar **lo opuesto** a A.

**Condición de victoria:**  
- Si `A = 0` ➔ **Salida = 1**  
- Si `A = 1` ➔ **Salida = 0**

> La rana aplaude:  
> "¡Muy bien! Para avanzar a veces hay que **pensar al revés**."

---

## Consejos rápidos

- Si la salida **no** cambia al contrario de la entrada, revisa que el cable pase **a través** de la compuerta **NOT**.  
- Confirma que elegiste **NOT Gate** y no otra compuerta.  
- Si la salida es **igual** a la entrada, probablemente la NOT no está conectada o falta.

---

## Desafío (opcional)

- **Doble NOT:** agrega **dos** compuertas NOT en serie. ¿Qué pasa con la salida?  

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## ¿Qué aprendiste?

- La compuerta **NOT** invierte el valor lógico: `0 → 1` y `1 → 0`.  
- Es útil para crear **comportamientos inversos** (alarma por ausencia de señal, luces automáticas, etc.).  
- Dos NOT seguidas se **anulan** entre sí.

---

## Continuación

¡Excelente! En la siguiente actividad, el **Monito** te mostrará cómo **combinar** AND, OR y NOT para resolver retos más complejos y devolver la energía a la **Esfera del Bosque**.
