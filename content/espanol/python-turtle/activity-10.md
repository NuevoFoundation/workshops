---
title: "Actividad 10 - Randomizar el color de los pétalos de tu flor de mandala"
date: 2019-07-25T13:24:17-07:00
weight: 13
draft: false
---

![mandala flower with random color petals](https://paper-attachments.dropbox.com/s_F078714AB8FA59FD292476DB5E3304D54CD817148B6A8087A90D63D6C59A7C0D_1563989900782_mandala+colors.PNG)

Hemos establecido con éxito el color de la flor de mandala en un valor RGB. Ahora, exploremos cambiar el color de los pétalos individuales de la flor de mandala 

Haremos uso de la biblioteca `random` de python. El método `random.randint()` nos permite elegir un valor aleatorio para cada uno de los valores rojo, verde o azul. Para elegir un valor que esté entre 0 inclusivo y 256 exclusivo (en otras palabras, entre 0 y 255 inclusivo), necesitamos usar `random.randint(0, 256)`.

Usa `random.randint(0, 256)` tres veces para generar tres valores aleatorios y utilizalos en el método `turtle.color()`. ¡Ahora deberías poder ver una flor de mandala multicolor! ¡Esta es definitivamente una flor de la que Alex estaría interesado en recolectar néctar!

<iframe height="600px" width="100%" src="https://repl.it/@nuevofoundation/PythonWithTurtleActivity10?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

¡Felicidades! ¡Ayudaste a Alex a hacer un panal y una flor! ¡Ahora puede vivir feliz en su colmena y hacer mucha miel! Su imagen final debería verse así:

![final product](https://paper-attachments.dropbox.com/s_6DE744F5F42D9843D8BF3A4073281FC6AA4B5E70B001CCD7879563112D6136E1_1563991731125_final_image.png)