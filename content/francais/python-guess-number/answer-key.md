---
title: "Python Devinez le Nombre - Réponse"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## Jouer avec randint

```python
import random

number = random.randint(1,100)
print("Votre nombre généré aléatoirement est", number)
```

## Créer le 'Jeu Devinez le numéro'

```python
import random

#Utilisez ici la fonction random.randint() pour générer un nombre
#Définissez également ici le nombre de tentatives autorisées
randomNumber = random.randint(1,10)
guessesLeft = 3

#Créez une boucle ici qui demande à plusieurs reprises au joueur un nombre et le compare au nombre aléatoire
#N'oubliez pas de diminuer le nombre de tentatives restantes pour que le joueur n'ait pas des essais illimités !
while guessesLeft > 0:
    print('\nDevinez un nombre entre 1 et 10 :')
    
    #Demandez ici à l'utilisateur une entrée
    print('Veuillez entrer uniquement des nombres')
    userinput =  int(input())

    #Comparez l'entrée que vous venez de recevoir à randomNumber et donnez un indice au joueur pour savoir s'il doit deviner plus bas ou plus haut
    #Si la supposition est correcte, souvenez-vous d'utiliser break pour sortir de la boucle
    if userinput == randomNumber:
      print("Vous avez deviné le bon numéro ! Félicitations :) ! Appuyez sur 'run' pour rejouer")
      break
    elif userinput > randomNumber:
      print("Votre nombre est trop élevé. Essayez de deviner plus bas.")
    else:
      print("Votre nombre est trop bas. Essayez de deviner plus haut.")
    
    #Diminuer le nombre d'essais restants pour le joueur
    guessesLeft = guessesLeft -1

#Vérifiez si le joueur a épuisé ses tentatives. S'il a épuisé ses tentatives, indiquez-lui qu'il a perdu le jeu
if guessesLeft == 0:
  print("Vous n'avez plus de tentatives. :/ Le bon numéro était " + str(randomNumber) + " !") #OU ("Vous n'avez plus de tentatives. :/ Le bon numéro était ", randomNumber)
else:
  pass
```