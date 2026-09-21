```markdown
---
title: "Python Interactive - Resposta"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Aqui está uma solução completa para o workshop. As soluções de cada atividade não podem ser realizadas isoladamente, então haverá comentários indicando onde está a solução de cada atividade dentro do bloco maior de código.

```python
# Atividade 2
dictMenu = {'Creamy Pesto Pasta':[15.99, 'Penne pasta servida com molho pesto cremoso, coberta com azeitonas pretas e tomates secos'],
'Spring Rolls':[8.00, 'Vegetais salteados, como repolho e cenoura, misturados com vermicelli e tiras finas de tofu frito, envolvidos em uma camada externa crocante. Acompanhado de um molho cremoso de amendoim e molho agridoce']}

# Atividade 3
def printMenu():
  print("-----Menu-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Atividade 3
def orderFromRestaurantYN():
  orderYN = input("Gostaria de pedir algo? (Digite S/N): ")
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
  answer = input("Gostaria de pedir outro item? (Digite S/N): ")
  while answer != 'S' and answer != 'N':
    answer = input("Gostaria de pedir outro item? (Digite S/N): ")
  if answer == 'S':
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
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Atividade 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'S' and orderYN != 'N':
    print("Desculpe! Essa não é uma resposta válida, tente novamente.")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # Atividade 4
  listOrderItems = []

  if orderYN == 'N':
    print("Adeus!")
  else:
    customerOrder = input("Por favor, insira o nome e a quantidade do primeiro item que gostaria de pedir. (Exemplo de pedido: Spring Rolls-2):")
    while orderItemChecking(customerOrder) == False:
      print("Esse formato é inválido. Tente novamente.")
      customerOrder = input("Por favor, insira o nome e a quantidade do primeiro item que gostaria de pedir. (Exemplo de pedido: Spring Rolls-2):")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Por favor, insira o nome e a quantidade de um item que gostaria de pedir. (Exemplo de pedido: Spring Rolls-2):")
      while orderItemChecking(customerOrder) == False:
        print("Esse formato é inválido. Tente novamente.")
        customerOrder = input("Por favor, insira o nome e a quantidade de um item que gostaria de pedir. (Exemplo de pedido: Spring Rolls-2):")
      listOrderItems.append(customerOrder)
    # Atividade 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Atividade 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Atividade 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( O | b | r | i | g | a | d | o ) ( p | o | r ) ( v | i | s | i | t | a | r | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
