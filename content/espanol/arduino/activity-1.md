---
title: "Actividad 1: LED parpadeante"
draft: false
weight: 4
---

## Conexión de Nuestro LED Parpadeante

Para tu introducción a este sistema, vamos a encender y apagar un LED. Con esto podemos aprender los conceptos básicos de circuitos y cómo nuestro programa puede ejecutar y manipular componentes.

![Texto alternativo: Diagrama de conexión para el LED](../img/act1_LED1.png)

1. Conecta la patilla larga (ánodo) de tu LED al pin 25J y la patilla corta (cátodo) en cualquier lugar de la línea azul [-].
2. Conecta una resistencia de 220 con una pata en 25H y la otra en cualquier lugar de la línea roja [+].
3. Conecta un extremo de un cable puente a cualquier lugar de la misma línea roja [+] en la protoboard en el paso 2 y el otro extremo al pin 5V en el Elegoo.
4. Conecta un extremo de un cable puente a 31Z en la protoboard y el otro extremo a GND (tierra) en el Elegoo.
5. Conecta la placa Arduino mediante USB a tu PC y abre la aplicación Arduino IDE.

{{% notice info %}}
 ¡Codificar los cables por colores es común y muy útil! Aquí usamos rojo para el cargado positivo y negro para el negativo, pero el color no importa siempre y cuando recuerdes qué es qué.
 {{% /notice %}}

## Abrir el Código de Ejemplo para el LED

6. Haz clic en Archivo -> Ejemplos -> 01.Basics -> Blink

![Texto alternativo: Imagen mostrando cómo encontrar el código de ejemplo Blink](../img/Blink-sample-code.png)

7. Ahora haz clic en el botón de subir (upload) para desplegar el programa en el Arduino.

{{% notice info %}}
EXTRA: Observa el tiempo en el que el LED se ilumina y se apaga. ¿Qué crees que podrías cambiar en el programa para modificar ese tiempo?  
Si dijiste el número 1000 en `delay(1000); ¡tienes RAZÓN!  
Cambia ese número (no olvides hacer clic en el botón de subir de nuevo).  
¿Notas alguna diferencia? ¿Por qué crees que el número 1000 equivale a 1 segundo? ¿Cuánto tiempo sería 10 minutos? ¿Por qué?

{{% /notice %}}