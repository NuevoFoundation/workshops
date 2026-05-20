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
print("Se numero randomico gerado é: ", number)
```

## Create the 'Guess the number game'

```python
import random

#Use a função random.randint() aqui para gerar um número
#Também defina o número de tentativas que você deseja permitir aqui
randomNumber = random.randint(1,10)
guessesLeft = 3

#Crie um loop aqui que peça repetidamente ao jogador um número e o compare ao número aleatório
#Lembre-se de diminuir o número de tentativas restantes para que o jogador não tenha tentativas ilimitadas!
while guessesLeft > 0:
    print('\nAdivinhe um número entre 1 e 10:')
    
    #Peça ao usuário uma entrada aqui
    print('Por favor, insira apenas números')
    userinput =  int(input())

    #Compare a entrada que você acabou de receber com randomNumber e dê ao jogador uma dica se ele deve adivinhar um número menor ou maior
    #Se o palpite estiver correto, lembre-se de usar break para sair do loop
    if userinput == randomNumber:
      print("Você adivinhou o número certo! Parabéns :)! Pressione 'executar' para jogar novamente")
      break
    elif userinput > randomNumber:
      print("Seu número é muito alto. Tente adivinhar um número menor.")
    else:
      print("Seu número é muito baixo. Tente adivinhar um número maior.")
    
    #Diminua o número de tentativas restantes do jogador
    guessesLeft = guessesLeft -1

#Verifique se o jogador ficou sem tentativas. Se ele ficou sem tentativas, diga uma mensagem informando que ele perdeu o jogo
if guessesLeft == 0:
  print("Você ficou sem tentativas. :/ O número correto era " + str(randomNumber) + "!") #OU ("Você ficou sem tentativas. :/ O número correto era ", randomNumber)
else:
  pass
```