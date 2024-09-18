---
title: "Python: Adivina el Número - Respuestas"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## Jugando con randit

```python
import random

number = random.randint(1,100)
print("tu número generado aleatoriamente es", number)
```

## Crear el juego 'Adivina el número'

```python
import random

#Usa la función random.randint() aquí para generar un número
#También define aquí el número de intentos que quieres permitir
randomNumber = random.randint(1,10)
guessesLeft = 3

#Crea un ciclo aquí que pida repetidamente al jugador un número y lo compare con el número aleatorio
#Recuerda disminuir el número de intentos restantes para que el jugador no tenga intentos ilimitados
while guessesLeft > 0:
    print('\nAdivina un número entre 1 y 10:')
    
    #Pide al usuario una entrada aquí
    print('Por favor, ingresa solo números')
    userinput =  int(input())

    #Compara la entrada que acabas de recibir con randomNumber y da al jugador una pista sobre si debe adivinar un número más bajo o más alto
    #Si la adivinanza es correcta, recuerda usar break para salir del ciclo
    if userinput == randomNumber:
      print("¡Adivinaste el número correcto! Felicidades :)! Presiona 'run' para jugar de nuevo")
      break
    elif userinput > randomNumber:
      print("Tu número es demasiado bajo. Intenta con un número más alto.")
    else:
      print("Tu número es demasiado bajo. Intenta adivinar más alto.")
    
    #disminuye el número de intentos que le quedan al jugador
    guessesLeft = guessesLeft -1

#Verifica si el jugador se quedó sin intentos. Si se quedó sin intentos, dile un mensaje que perdió el juego
if guessesLeft == 0:
  print("Te quedaste sin intentos. :/ El número correcto era " + str(randomNumber) + "!") #O ("Te quedaste sin intentos. :/ El número correcto era ", randomNumber)
else:
  pass
```