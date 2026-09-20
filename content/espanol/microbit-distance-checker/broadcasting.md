---
title: "Transmitiendo una Señal"
date: 2019-07-25T13:24:17-07:00
weight: 2
draft: false
---

## Encendiendo la Radio

Usaremos la radio Bluetooth de tu micro:bit para averiguar qué tan lejos estás de otros micro:bits. Lo primero que necesitamos hacer es encender la radio y sintonizar un canal. Haz clic en la sección que dice Radio. Es la sección rosa que está quinta desde arriba. Elige "radio set group 1" y arrástralo al bloque azul "on start" en el espacio de trabajo. Asegúrate de usar el mismo número de grupo que todos los demás. Si usas números de grupo diferentes, tus micro:bits no podrán comunicarse entre sí. Tu espacio de trabajo debería verse como la imagen a continuación una vez que hayas terminado:

![Menú MakeCode mostrando la sección de Radio seleccionada](../img/radioMenu.png)
![Espacio de trabajo MakeCode mostrando el bloque "radio set group" dentro del bloque "on start"](../img/setRadioGroup.png)

## Transmitiendo una Señal

Ahora que nuestros micro:bits están configurados para escuchar, necesitamos enviar una señal para que puedan recogerla. Haz clic nuevamente en la sección de Radio. Esta vez, arrastra el bloque "radio send number 0" dentro del bloque azul "forever" en tu espacio de trabajo. Esto hará que tu micro:bit envíe continuamente ese número a cualquier dispositivo que esté escuchando en el mismo grupo.

![Espacio de trabajo MakeCode mostrando el bloque "radio send number" en el bloque "forever"](../img/radioSendNumber.png)