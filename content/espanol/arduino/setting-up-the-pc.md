```markdown
---
title: "Configuración del PC"
draft: false
weight: 2
---

## Conociendo el Arduino IDE

Descarga e instala el Arduino IDE desde:

* la Microsoft Store (instalación más rápida) - <https://www.microsoft.com/store/productId/9NBLGGH4RSD8>
* o desde el sitio web oficial de Arduino <https://www.arduino.cc/en/Main/Software> (elige la versión más reciente)

Una vez que el software esté instalado en tu computadora, ábrelo. Este es el Arduino IDE y será el lugar donde se realizará toda la programación. Tómate un tiempo para explorar y familiarizarte con él.

![Texto alternativo: Imagen etiquetada del Arduino IDE](../img/ArduinoIDE-labeled.png)
*<https://www.makerspaces.com/simple-arduino-projects-beginners/>*

1. Barra de menú: Te da acceso a las herramientas necesarias para crear y guardar bocetos de Arduino.
2. Botón de Verificar: Compila tu código y verifica si hay errores de ortografía o sintaxis.
3. Botón de Subir: Envía el código a la placa que está conectada, como el Arduino Uno en este caso. Las luces de la placa parpadearán rápidamente durante la carga.
4. Nuevo Boceto: Abre una nueva ventana con un boceto en blanco.
5. Nombre del Boceto: Cuando el boceto se guarda, el nombre del boceto se muestra aquí.
6. Abrir Boceto Existente: Te permite abrir un boceto guardado o uno de los ejemplos almacenados.
7. Guardar Boceto: Esto guarda el boceto que tienes abierto actualmente.
8. Monitor Serial: Cuando la placa está conectada, esto mostrará la información serial de tu Arduino.
9. Área de Código: Esta área es donde compones el código del boceto que le indica a la placa qué hacer.
10. Área de Mensajes: Esta área te informa sobre el estado del guardado, compilación de código, errores y más.
11. Consola de Texto: Muestra los detalles de los mensajes de error, el tamaño del programa compilado y más información adicional.
12. Placa y Puerto Serial: Te indica qué placa se está utilizando y qué puerto serial está conectado.

## Conecta tu Arduino

En este punto, estás listo para conectar tu Arduino a tu computadora. Conecta un extremo del cable USB al Arduino Uno y el otro extremo al puerto USB de tu computadora.

Una vez que la placa esté conectada, deberás ir a Herramientas, luego a Placa, y finalmente seleccionar Arduino Uno.

![Texto alternativo: Captura de pantalla del Arduino IDE mostrando cómo seleccionar el tipo de placa](../img/board-select.png)

A continuación, debes decirle al Arduino qué puerto estás utilizando en tu computadora.

Para seleccionar el puerto, ve a Herramientas, luego a Puerto, y selecciona el puerto que indica Arduino.

![Texto alternativo: Captura de pantalla del Arduino IDE mostrando cómo seleccionar el puerto COMM](../img/COMM-port.png)
```