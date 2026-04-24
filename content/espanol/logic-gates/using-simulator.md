---
title: "Usando el Simulador"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

## Introducción

Has llegado al Bosque Mágico de Costa Rica. En este lugar vive una esfera que protege a los animales y a la naturaleza, pero su energía está desapareciendo.  
Para restaurarla, primero debemos aprender a usar el simulador de circuitos lógicos.

---

<img src="../media/pattern.webp" alt="Patrón decorativo del taller de lógica" width="100%" />

## Uso básico del simulador

Antes de aprender compuertas lógicas, necesitamos entender cómo colocar componentes y cómo conectarlos correctamente.

### 1. Interfaz principal

En la parte izquierda se encuentra una barra con todos los componentes disponibles, como:

- Entradas (Input) 
<img src="../media/logicinput.png" alt="Foto de una entrada" width="40px" class="lg-img"/>

- Salidas (Output) 
<img src="../media/logicoutput.png" alt="Foto de una salida" width="40px" class="lg-img"/>

- Reloj (CLK) 
<img src="../media/logicclock.png" alt="Foto de un reloj" width="64px" class="lg-img"/>

- Compuertas lógicas (AND, OR, NOT, etc.)  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="Foto de un compuerta lógica AND" width="64px"/>
   <img src="../media/logicor.png" alt="Foto de un compuerta lógica OR" width="64px"/>
   <img src="../media/logicnot.png" alt="Foto de un compuerta lógica NOT" width="64px"/>
</div>

En la parte superior hay botones importantes:
- **Edit**: modo para colocar componentes.
- **Move**: mover componentes ya colocados.
- **Delete**: eliminar componentes.
- **Save / Load**: guardar o cargar circuitos.
<img src="../media/menu.png" alt="Foto de menu del simulador" class="lg-img"/>


El área en blanco es donde construirás tu circuito.

---

## Primera misión: conectar una entrada con una salida

### Pasos

1. Asegúrate de que esté seleccionado el modo **Edit**.
2. En la barra izquierda, haz clic en **Input**.
3. Haz clic en cualquier parte del espacio en blanco para colocarlo.
4. Luego selecciona **Output** y haz clic nuevamente para colocarlo a la derecha o cerca de la entrada.
5. Para conectarlos:
   - Haz clic en el pequeño círculo de la entrada.
   - Luego haz clic en el círculo de la salida.
   - Se dibujará un cable automáticamente.
6. Haz clic sobre el símbolo de la entrada para activar o desactivar su valor:
   - `0` = apagado
   - `1` = encendido

Si la entrada está en `1` y la salida muestra `1`, tu circuito está funcionando.

---

## ¿Qué aprendiste?

- Cómo colocar componentes (clic en el componente, luego clic en el espacio en blanco).
- Cómo conectarlos usando los círculos de conexión.
- Cómo activar señales de entrada.
- Este circuito no usa compuertas lógicas aún, solo conexión directa.

---

## Simulador

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de compuertas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Continuación

Cuando estés listo, en la próxima actividad conocerás al Tucán y aprenderás a usar la compuerta lógica **AND**.
