```markdown
---
title: "Python Errate die Zahl - Lösungsschlüssel"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## Spielen mit randit

```python
import random

number = random.randint(1,100)
print("Deine zufällig generierte Zahl ist", number)
```

## Erstelle das 'Errate die Zahl'-Spiel

```python
import random

#Verwende hier die Funktion random.randint(), um eine Zahl zu generieren
#Definiere hier auch die Anzahl der erlaubten Versuche
randomNumber = random.randint(1,10)
guessesLeft = 3

#Erstelle hier eine Schleife, die den Spieler wiederholt nach einer Zahl fragt und diese mit der zufälligen Zahl vergleicht
#Vergiss nicht, die Anzahl der verbleibenden Versuche zu verringern, damit der Spieler keine unbegrenzten Versuche hat!
while guessesLeft > 0:
    print('\nRate eine Zahl zwischen 1 und 10:')
    
    #Fordere hier den Benutzer zur Eingabe auf
    print('Bitte gib nur Zahlen ein')
    userinput = int(input())

    #Vergleiche die gerade erhaltene Eingabe mit randomNumber und gib dem Spieler einen Hinweis, ob er niedriger oder höher raten sollte
    #Wenn die Schätzung korrekt ist, denke daran, mit break die Schleife zu verlassen
    if userinput == randomNumber:
      print("Du hast die richtige Zahl erraten! Glückwunsch :)! Drücke 'run', um erneut zu spielen.")
      break
    elif userinput > randomNumber:
      print("Deine Zahl ist zu hoch. Versuche, niedriger zu raten.")
    else:
      print("Deine Zahl ist zu niedrig. Versuche, höher zu raten.")
    
    #Reduziere die verbleibenden Versuche des Spielers
    guessesLeft = guessesLeft -1

#Prüfe, ob dem Spieler die Versuche ausgegangen sind. Wenn die Versuche aufgebraucht sind, teile ihm mit, dass er das Spiel verloren hat
if guessesLeft == 0:
  print("Dir sind die Versuche ausgegangen. :/ Die richtige Zahl war " + str(randomNumber) + "!") #ODER ("Dir sind die Versuche ausgegangen. :/ Die richtige Zahl war ", randomNumber)
else:
  pass
```
```