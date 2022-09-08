---
title: "Sección 2: ¡Pasar del diseño del guion (Story Board) al código!"
draft: false
weight: 3
difficulty: Intermedio
prereq: "Conceptos básicos de Python - Escritura en consola (imprimir), Lectura desde consola, Cadenas, Variables, Instrucciones condicionales"
---

Es hora de abrir repl.it. ¡Ahora es el momento de crear, vamos a ser creativos!

Puedes seguir trabajando en la historia de Nuvi:

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PythonGuessAdventureNuevoSample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

  ```Python
  #Here is Nuvi's Adventure!
  start = "Nuvi esta apunto de abandonar la practica de robotica.¿Debe ir a casa caminando o en bicicleta?"

  walk = "Cuando Nuvi caminaba para ir a casa se encontró con su amiga Julie. Quieren jugar al aire libre ¿deben nadar o jugar futbol?"
  bike = "¡oh no! Nuvi cayó de su Bicicleta, por suerte su amiga Julie estaba allí. Curó sus heridas y están listas para jugar ¿Deben nadar o jugar futbol?"
  soccer = "¡Nuvi anota un gol! woow"
  swim = "¡Nuvi y Julie hacen un concurso de balas de cañon en la oficina!"

  print(start)
  walkOrBike = input("Elige 'Caminar' o 'Bicicleta'\n")

  if(walkOrBike == 'Caminar'):
    print(walk)
  else:
    print(bike)

  swimOrSoccer = input("Elige 'Nadar' o 'Jugar Futbol'\n")
  if(swimOrSoccer == 'Nadar'):
    print(swim)
  else:
    print(soccer)
  ```

Ahora tu puedes trabajar en tu propio codigo para elegir tu propio juego de 'Elegir tu aventura':

<iframe height="600px" width="100%" src="https://replit.com/@nuevofoundation/PythonGuessAdventureBlank?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

```Python
  #Esta es una plantilla para elegir tu propia aventura

  #Asegúrate de enumerar tus cuatro opciones que el protagonista va a tomar. Los llamaremos choice_1, choice_2, choice_3, choice_4 - 
  #¡Siéntase libre de cambiar los nombres para que encajen con su historia!

  #Aquí hay una variable de cadena llamada start - esta puede ser la introducción a su historia (el primer paso de su tablero de historias). 
  #¡Llénalo con tu historia!

  start = ""

  #¡Aquí están las cuatro opciones diferentes que el protagonista puede tomar! Se asegura de completar cada elección con su propia historia. 
  #El usuario puede elegir entre choice_1 y choice_2 después de la parte inicial de la historia. ¡A continuación, el usuario puede elegir entre 
  #choice_3 y choice_4 para la segunda mitad de la historia! Rellena las variables con tu propia historia. ¡Veamos lo creativos que podemos llegar a ser!

  choice_1 = ""
  choice_2 = ""
  choice_3 = ""
  choice_4 = ""

  print(start)
  firstChoice = input("Choose 'choice_1' or 'choice_2'")
  if(firstChoice == 'choice_1'):
    print(choice_1)
  else:
    print(choice_2)

  secondChoice = input("Choose 'choice_3' or 'choice_4'")
  if(secondChoice == 'choice_3'):
    print(choice_3)
  else:
    print(choice_4)
  ```

¡O puede empezar de cero y hacerlo suyo! ¡Solo ve a Replit y empieza a contar historias!
