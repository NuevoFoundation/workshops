---
title: "Interpretando la Intensidad de la Señal"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

Ahora que nuestro micro:bit sabe qué tan fuerte es la señal que está recibiendo, necesitamos usar eso para averiguar qué tan cerca estamos. Haz clic en la sección de Lógica y toma el bloque "si verdadero entonces / si no". Arrástralo dentro del bloque de recepción de radio, justo debajo de donde establecemos la variable de intensidad. Vuelve a la sección de Lógica y arrastra la comparación 0 = 0 encima de "verdadero" en la línea de "si verdadero entonces". Tu código debería verse ahora así:

![Espacio de trabajo con declaración if/then/else añadida al bloque de evento](../img/addedLogic.png)

A continuación, le diremos a nuestro microcontrolador micro:bit cómo determinar si estamos a 6 pies (2 metros) de distancia. Abre el menú de variables y selecciona la burbuja que dice simplemente "intensidad" y arrástrala encima del primer cero en nuestro bloque "si" para que diga `si intensidad = 0 entonces`. Ahora, haz clic en el signo igual (=) para que aparezca una lista con diferentes símbolos. Elige el símbolo de mayor que (>). Por último, haz clic en el último cero en nuestra declaración "si" y reemplázalo con `-67`. Tu bloque rosa "al recibir señal de radio" debería verse ahora así:

![Espacio de trabajo con declaración if/then/else añadida al bloque de evento](../img/completedCondition.png)

Quizás te estés preguntando: "¿Por qué -67? Eso parece un número aleatorio." -67 dBm (decibelios-miliwatts) es simplemente el nivel de potencia que ya medimos previamente cuando dos micro:bits están a 6 pies de distancia. Diferentes radios Bluetooth, como el de tu teléfono, podrían tener una intensidad diferente a la misma distancia. Cuanto más cerca esté tu señal de 0, más fuerte será y más cerca estarás del otro radio. Una intensidad de señal más lejana al 0 es más débil, lo que significa que probablemente también estés más lejos del otro radio.

Eso significa que si la señal que recibimos es más fuerte que -67 dBm (`intensidad > -67`), las radios de nuestros micro:bit están a menos de 6 pies de distancia. Pero si la señal es más débil que eso, nuestras radios deben estar a más de 6 pies de distancia.