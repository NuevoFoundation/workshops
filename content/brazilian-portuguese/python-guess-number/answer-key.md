---
title: "Python: Jogo de adivinhação dos números - Gabarito"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## Brincando com randit

```python
import random

number = random.randint(1,100)
print("seu número gerado aleatoriamente é", number)
```

## Crie o 'Jogo de adivinhação dos números'

```python
import random

#Use a função random.randint() aqui para gerar um número
#Também define o número de suposições que você deseja permitir aqui
randomNumber = random.randint(1,10)
guessesLeft = 3

#Crie um loop aqui que peça repetidamente um número ao jogador e o compare com o número aleatório
#Lembre-se de diminuir o número de palpites restantes para que o jogador não tenha tentativas ilimitadas!
while guessesLeft > 0:
    print('\nAdivinhe um número entre 1 e 10:')
    
    #Peça ao usuário para inserir o número aqui
    print('Por favor insira apenas números')
    userinput =  int(input())

    #Compare a entrada que você acabou de receber com randomNumber e dê ao jogador uma dica se ele deve adivinhar mais baixo ou mais alto
    #Se a estimativa estiver correta, lembre-se de usar break para sair do loop
    if userinput == randomNumber:
      print("Você adivinhou o número certo! Parabéns :)! Pressione 'run' para jogar novamente")
      break
    elif userinput > randomNumber:
      print("Seu número é muito alto. Tente adivinhar mais baixo.")
    else:
      print("Seu número é muito baixo. Tente adivinhar mais alto.")
    
    #diminuir o número de tentativas restantes do jogador
    guessesLeft = guessesLeft -1

#Verifique se o jogador ficou sem palpites. Se eles ficarem sem palpites, diga-lhes uma mensagem de que perderam o jogo
if guessesLeft == 0:
  print("Você ficou sem palpites. :/ O número correto era " + str(randomNumber) + "!") #OU ("Você ficou sem palpites. :/ O número correto era ", randomNumber)
else:
  pass
```