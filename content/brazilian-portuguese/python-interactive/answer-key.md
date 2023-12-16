---
title: "Python Interativo - Gabarito"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Aqui está uma solução completa para o workshop. As soluções para cada atividade não podem ser independentes, portanto, haverá comentários indicando onde a solução de cada atividade está dentro do bloco maior de código.

```python
# Atividade 2
dictMenu = {'Massa Cremosa Com Pesto':[15.99, 'Macarrão penne temperado com molho pesto cremoso, coberto com azeitonas pretas e tomate seco'],
'Spring Rolls':[8.00, 'Mistura de vegetais fritos, como repolho e cenoura, misturados com aletria e tiras finas de tofu frito, embrulhados em uma camada externa crocante. Fornecido com molho cremoso de amendoim e molho de pimenta doce como acompanhamento']}

# Atividade 3
def printMenu():
  print("-----Menu-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Atividade 3
def orderFromRestaurantYN():
  orderYN = input("Você gostaria de pedir alguma coisa? (Digite Y/N): ")
  return orderYN

# Atividade 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# Atividade 4
def isOrderComplete():
  answer = input("Você gostaria de pedir outro item? (Digite Y/N): ")
  while answer != 'Y' and answer != 'N':
    answer = input("Você gostaria de pedir outro item? (Digite Y/N): ")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# Atividade 5
def createDictOrderItems(orderItems):
  dictItems = {}
  for item in orderItems:
    itemName = item.split('-')[0]
    itemQuantity = int(item.split('-')[1])
    if itemName not in dictItems:
      dictItems[itemName] = itemQuantity
    else:
      dictItems[itemName] += itemQuantity
  return dictItems

# Atividade 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# Atividade 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# Atividade 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----Recibo-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("Preço Total: ", "$"+str(totalPrice))

def main():
  # Atividade 1
  print(r"    _   _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t | e )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Atividade 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("Desculpe! Essa não é uma resposta válida. Tente novamente.")
    printMenu()
    orderYN = orderFromRestaurantYN()

  #Atividade 4
  listOrderItems = []

  if orderYN == 'N':
    print("Tchau!")
  else:
    customerOrder = input("Por favor, insira o nome e a quantidade do primeiro item que deseja encomendar. (Exemplo de item de pedido: Rolinhos Primavera-2):")
    while orderItemChecking(customerOrder) == False:
      print("That's an invalid format. Try again.")
      customerOrder = input("Por favor, insira o nome e a quantidade do primeiro item que deseja encomendar. (Exemplo de item de pedido: Rolinhos Primavera-2):")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Insira o nome e a quantidade de um item que você gostaria de encomendar. (Exemplo de item de pedido: Rolinhos Primavera-2):")
      while orderItemChecking(customerOrder) == False:
        print("That's an invalid format. Try again.")
        customerOrder = input("Insira o nome e a quantidade de um item que você gostaria de encomendar. (Exemplo de item de pedido: Rolinhos Primavera-2):")
      listOrderItems.append(customerOrder)
    # Atividade 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Atividade 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Atividade 7
    print("   _   _   _   _   _   _   _   _     _   _   _   _     _   _   _   _   _   _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \ / \ / \   / \ / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( O | b | r | i | g | a | d | o ) ( p | e | l | a ) ( p | r | e | f | e | r | ê | n | c | i | a | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
