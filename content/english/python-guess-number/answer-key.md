---
title: "Python Guess The Number - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## Playing with randit

```python
import random

number = random.randint(1,100)
print("your randomly generated number is", number)
```

## Create the 'Guess the number game'

```python
import random

#Use the random.randint() function here to generate a number
#Also define the number of guesses you want to allow here
randomNumber = random.randint(1,10)
guessesLeft = 3

#Create a loop here that repeatedly asks the player for a number and compares it to the random number
#Remember to decrease the number of guesses left so the player doesn't get unlimited tries!
while guessesLeft > 0:
    print('\nGuess a number between 1 and 10:')
    
    #Ask the user for input here
    print('Please enter only numbers')
    userinput =  int(input())

    #Compare the input you just received to randomNumber and give the player a hint whether they should guess lower or higher
    #If the guess is correct, remember to use break to exit the loop
    if userinput == randomNumber:
      print("You guessed the right number! Congrats :)! Press 'run' to play again")
      break
    elif userinput > randomNumber:
      print("Your number is too high. Try guessing lower.")
    else:
      print("Your number is too low. Try guessing higher.")
    
    #decrease the number of tries the player has left
    guessesLeft = guessesLeft -1

#Check if the player ran out of guesses.  If they ran out of guesses, tell them a message that they lost the game
if guessesLeft == 0:
  print("You ran out of guesses. :/ The correct number was " + str(randomNumber) + "!") #OR ("You ran out of guesses. :/ The correct number was ", randomNumber)
else:
  pass
```