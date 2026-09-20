---
title: "¿Qué es un micro:bit?"
date: 2019-07-25T13:24:17-07:00
weight: 1
draft: false
---

## ¿Qué es un micro:bit?

¡Un micro:bit es un microcontrolador programable! Se puede programar desde cualquier navegador web en varios lenguajes como JavaScript, Python, Scratch y Blocks. Para nuestra sesión de hoy, utilizaremos los bloques de MakeCode.

Tu micro:bit tiene muchas características y sensores accionables, entre ellos:

- 25 LEDs direccionables individualmente
- 2 botones físicos
- 2 pines de entrada/salida (IO)
- Sensor de brújula
- Acelerómetro (sensor de movimiento)
- Bluetooth

<!---![Image of simulated micro:bits with the radio highlighted](../img/simulatorStart.png) --->
<img src="../img/microbit-hardware-access.jpg" alt="componentes de micro:bit" style="width:800px;"/>

Si deseas aprender más sobre cada componente individual y todas las características que vienen con tu micro:bit, puedes hacer clic [aquí](https://micro:bit.org/guide/features/).

Adelante, saca el micro:bit y el resto de los componentes de la bolsa. Deberías tener un micro:bit, 2 baterías, un cable USB micro y el soporte para baterías (la caja negra con los cables rojo y negro que salen de ella). Si te falta algo o necesitas ayuda, no dudes en pedirle ayuda a uno de los instructores.

## Usando el simulador

Aunque no es tan divertido como tener el hardware físico real, también puedes usar el simulador para ver tu código funcionando. Busca las imágenes de micro:bits en el lado izquierdo de tu pantalla. Si no las ves, busca el símbolo ">" en el lado izquierdo y haz clic para mostrar el simulador. En los micro:bits simulados, encuentra la antena de radio Bluetooth. Parece una onda cuadrada amarilla:

<!---![microbit components](../img/microbit-hardware-access.jpg) --->
<img src="../img/simulatorStart.png" alt="Imagen de micro:bits simulados con la radio resaltada" style="width:500px;"/>

Si colocas el cursor del ratón sobre esta antena en forma de onda, la intensidad real de la señal aparecerá junto a ella. Luego puedes hacer clic en la antena y arrastrar el cursor hacia la izquierda para disminuir la intensidad de la señal o hacia la derecha para aumentarla. Si logras que la señal sea lo suficientemente fuerte (`intensidad > -67`), el otro micro:bit se actualizará para mostrar una cara triste. Reduce nuevamente la intensidad para que el micro:bit sonría.

<!---![Sowing RSSI](../img/showingRSSI.png) --->
<img src="../img/showingRSSI.png" alt="Mostrando RSSI" style="width:300px;"/> 
<!---![Image of sad simulator](../img/sadSimulator.png) --->
<img src="../img/sadSimulator.png" alt="Imagen de simulador triste" style="width:300px;"/>

¡Ahora, vamos a programar!