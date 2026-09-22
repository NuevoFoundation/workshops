---
title: "Construir la caja: diseño del circuito"
description: ""
draft: true
weight: 3
---

## Construyamos la caja

Aquí está el diseño del circuito:
![diagram of the final circuit](../img/circuit-color.png)
**¿Cómo leemos el diagrama de arriba?**

El círculo con la “M” representa el motor, y el círculo con la “B” representa la batería. Utilizaremos una protoboard a continuación para realizar las conexiones. Una protoboard es un dispositivo que nos permite hacer conexiones eléctricas sin tener que unir los cables de forma permanente (lo que se llama "soldar"). Hablaremos más de esto y mostraremos una imagen un poco más adelante.

Cuando el interruptor de límite se conecta y algo (por ejemplo: tú) cambia la posición del interruptor de palanca a ON, la batería alimenta el motor, que mueve el dedo.  
El dedo mecánico desde dentro de la caja sale y cambia el interruptor a OFF, por lo que el dedo mecánico se retrae.

Repasemos los componentes. Tenemos un total de 12 cables en juego:
- 2 amarillos, 3 verdes, 3 azules, 2 rojos, 2 negros.
- El **interruptor de límite** inferior está conectado a 2 cables (amarillo, verde) desde sus 2 terminales. 
![limit switch with wires](../img/limitSwitchWithWires.jpg)
- El **paquete de baterías** está conectado a 2 cables (rojo, negro). 
![battery pack with wires](../img/batteryPackWithWires.jpg)
- El **motor** está conectado a 2 cables (verde, azul). 
![motor with 2 wires](../img/motorWith2Wires.jpg)
- El motor debería tener un dedo acrílico adjunto.
![motor with acrylic finger](../img/motorWithFinger.jpg)
- El **interruptor de palanca** superior está conectado a 6 cables (amarillo, verde, 2 azules, rojo, negro) desde sus 6 terminales, etiquetados en la figura anterior.  
Debería verse algo así:
![switch with wires](../img/switchWithWires.jpg)

Aquí tienes una vista más amplia de la parte que tiene el motor, el dedo y el interruptor de límite conectados:
![view of piece with motor, finger and limit switch with wires attached](../img/motorFingerAndLimitSwitchPiece.jpg)

- Una **protoboard** funciona realizando conexiones eléctricas por ti. Cada fila, en cada lado del divisor vertical de la protoboard, está conectada entre sí. El divisor del medio separa las dos mitades de la placa; las dos mitades tampoco están conectadas entre sí, por lo que, por ejemplo, 1A-1E están conectadas entre sí o 7F-7J. Los cables en la misma columna no están conectados entre sí.  
![breadboard](../img/breadboard1.png)

Aquí está un diagrama de la protoboard (que muestra que las filas amarillas están conectadas):

![breadboard diagram](../img/breadboardDiagram.png)