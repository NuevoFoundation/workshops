```markdown
---
title: "Python Interactive - Réponses"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Voici une solution complète à l'atelier. Les solutions à chaque activité ne peuvent pas être isolées, donc des commentaires indiqueront où se trouve la solution de chaque activité au sein du bloc de code principal.

```python
# Activité 2
dictMenu = {'Pâtes au pesto crémeux':[15.99, 'Pâtes penne mélangées dans une sauce pesto crémeuse, garnies d’olives noires et de tomates séchées'],
'Rouleaux de printemps':[8.00, 'Légumes sautés tels que le chou et la carotte mélangés avec du vermicelle et des fines lamelles de tofu frit, enveloppés dans une couche croustillante. Servi avec une sauce au beurre de cacahuètes crémeuse et une sauce chili douce sur le côté']}

# Activité 3
def printMenu():
  print("-----Menu-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Activité 3
def orderFromRestaurantYN():
  orderYN = input("Souhaitez-vous commander quelque chose ? (Entrez O/N) : ")
  return orderYN

# Activité 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# Activité 4
def isOrderComplete():
  answer = input("Souhaitez-vous commander un autre article ? (Entrez O/N) : ")
  while answer != 'O' and answer != 'N':
    answer = input("Souhaitez-vous commander un autre article ? (Entrez O/N) : ")
  if answer == 'O':
    return True
  if answer == 'N':
    return False

# Activité 5
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

# Activité 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# Activité 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# Activité 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----Reçu-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("Prix total : ", "$"+str(totalPrice))

def main():
  # Activité 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Activité 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'O' and orderYN != 'N':
    print("Désolé ! Ce n'est pas une réponse valide, veuillez réessayer.")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # Activité 4
  listOrderItems = []

  if orderYN == 'N':
    print("Au revoir !")
  else:
    customerOrder = input("Veuillez entrer le nom et la quantité du premier article que vous souhaitez commander. (Exemple : Rouleaux de printemps-2) :")
    while orderItemChecking(customerOrder) == False:
      print("Format invalide. Réessayez.")
      customerOrder = input("Veuillez entrer le nom et la quantité du premier article que vous souhaitez commander. (Exemple : Rouleaux de printemps-2) :")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Veuillez entrer le nom et la quantité d'un article que vous souhaitez commander. (Exemple : Rouleaux de printemps-2) :")
      while orderItemChecking(customerOrder) == False:
        print("Format invalide. Réessayez.")
        customerOrder = input("Veuillez entrer le nom et la quantité d'un article que vous souhaitez commander. (Exemple : Rouleaux de printemps-2) :")
      listOrderItems.append(customerOrder)
    # Activité 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Activité 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Activité 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( M | e | r | c | i ) ( d | ' | ê | t | r | e ) ( v | e | n | u | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
```