---
title: "Creando el programa"
description: ""
draft: false
weight: 3
---

Abre tu navegador de internet favorito (como Edge, Firefox, Google Chrome, Internet Explorer) y entra a https://aka.ms/oranges. 

Tu pantalla debería verse así:

![Cannot load image](../img/adafruit.png?classes=border,shadow)

### Definiendo las variables

Hoy vamos a usar naranjas para decirle a nuestra Adafruit cuándo hacer ruido. Lo primero que debemos hacer es darle a la computadora un nombre para cada naranja y dónde buscar lo que están _diciendo_. Hacemos la primera parte definiendo una _variable_. Haz clic en la sección que dice VARIABLES, es de color salmón y es el séptimo si cuentas desde la parte superior. Luego define una variable haciendo clic en **Make a variable** y dale un nombre. Haz esto dos veces. En estas imágenes de ejemplo puedes ver como nosotros nombramos las nuestras como _analog1_ y _analog2_, pero puedes llamarlas como quieras.

![Cannot load image](../img/1.png?classes=border,shadow)
![Cannot load image](../img/2.png?classes=border,shadow)
![Cannot load image](../img/3.png?classes=border,shadow)

### Interpretando las entradas

Ahora que tenemos un nombre que nuestra computadora conoce para nuestras naranjas, debemos dejar que Adafruit sepa cómo entenderlas. Hay dos tipos de entradas: digitales y analógicas. Los interruptores de luz y los botones de encendido son ejemplos de entradas digitales. Están activados o desactivados, son 1 o 0. Las entradas analógicas son como un atenuador de luz o un botón de volumen. Tienen más opciones para los valores. Nuestras naranjas serán entradas analógicas y cuánto las toquemos o exprimiremos cambiará el valor que mandan al Adafruit.

Haz clic nuevamente en la sección _Variables_. Esta vez deberías poder ver más opciones ya que hemos definido nuestras dos variables. Arrastra uno de los bloques "**set ___ to __**" hacia bloque verde "**forever**" en nuestro espacio de trabajo. Usando la flecha blanca hacia abajo, cambia el primer espacio en blanco a "_analog1_" o al nombre que hayas escogido para tu primer variable.

![Cannot load image](../img/4.png?classes=border,shadow)

Ahora haz clic en la opción "**ADVANCED**" y luego haz clic en **PINS**. Busca el bloque "**analog read pin __**", es el tercero desde la parte superior e insértalo donde está el 0 en nuestro bloque "**set analog1 to 0**". Para insertarlo en esa ranura, arrástralo para que se mueva sobre el cero, verifica que el 0 esté resaltado en amarillo y luego suelte el mouse (o el panel táctil). Deberías ver que el bloque se extiende para acomodar el bloque. Si no ves esto, intenta nuevamente.


![Cannot load image](../img/5.png?classes=border,shadow)
![Cannot load image](../img/6.png?classes=border,shadow)

Una vez que hayas hecho eso, tu espacio de trabajo debería verse como en la imagen de arriba. Repite este proceso nuevamente pero esta vez usa las flechas blancas hacia abajo para seleccionar _analog2_ y _A2_. En la siguiente imagen está como debe de quedar tu espacio de trabajo.

![Cannot load image](../img/7.png?classes=border,shadow)

### Creando nuestros bucles, ciclos, iteraciones o como se traduzca "loop" en tu país

Ahora que nuestra computadora sabe cómo llamar a nuestras naranjas y cómo entender lo que están diciendo, creemos un bucle que verifique cuándo estamos sosteniendo nuestra naranja. Haz clic en la sección **LOGIC** y arrastra el bloque "**If ____ then**" para colocarlo debajo de tus bloques de variables.

![Cannot load image](../img/8.png?classes=border,shadow)

Volvamos al ejemplo de la perilla de volumen para comprender la comparación que vamos a hacer en nuestro bucle. Cada persona tiene un punto en el que le gusta escuchar su música para poder disfrutarla. Este punto también es cierto para nuestras naranjas. Le dirán a la computadora un número cuando nadie las toque y un número más bajo cuando las toquemos. El truco es encontrar el punto intermedio para que solo hagamos ruido cuando queramos.

Para configurar lo anterior, ve a la sección **LOGIC** nuevamente y toma el bloque hexagonal "**__ <__**" que es el segundo en la subsección "**Comparison**". Coloca el bloque sobre el "**true**" en el bloque "**if __ then**". Asegúrate de ver el resaltado amarillo antes de colocarlo allí. Revisa la imagen a continuación para verificar tu espacio de trabajo

![Cannot load image](../img/9.png?classes=border,shadow)

Ahora vamos a poner lo que estamos comparando. Vuelve a la sección **VARIABLES**, toma la variable _analog1_ y colóquela en la primer espacio. Luego haz  clic en el segundo espacio y escribe **40**. Este 40 debería ser un buen punto adecuado para la mayoría de las personas. Si al final, la naranja hace ruido sin que la toques, puedes volver a este paso y aumentar el número. Si tu naranja no hace ruido cuando la toques, puedes regresar y aumentar el número. Por ahora, vamos a dejarlo en 40.

![Cannot load image](../img/10.png?classes=border,shadow)

¡Ahora podemos elegir nuestra música! Haz clic en la sección **MUSIC** y arrastra el segundo bloque "**play _____ until done**" en nuestro bloque **If-Then**. Puedes hacer click en la flecha hacia abajo para probar otros sonidos.

![Cannot load image](../img/11.png?classes=border,shadow)

Ahora queremos repetir estos últimos pasos para la variable _analog2_. Una vez que hagas esto, tu espacio de trabajo se verá como la imagen de abajo (con tus opciones de música).

![Cannot load image](../img/12.png?classes=border,shadow)

### Divitiéndonos con Luces (Time Permitting)

¡El chip Adafruit tiene muchas luces! Son súper divertidos para jugar, así que agreguemos un poco de color a nuestros sonidos para que podamos ver y escuchar la diferencia cuando tocamos nuestras naranjas. Haz clic en la sección **LIGHT** y arrastre el bloque "**Set all Pixels to ___**" en nuestros dos bloques **If-Then**. Deberás colocarlos justo antes de que reproduzcamos un sonido. Puedes hacer clic en la porción de color para cambiar el color que desea mostrar.
![Cannot load image](../img/13.png?classes=border,shadow)