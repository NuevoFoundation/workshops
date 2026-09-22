```markdown
---
title: "Python Interactive - Жооп Ключ"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Мына семинар үчүн толук чечим. Ар бир ишмердүүлүктүн чечими жалгыз тура албайт, анын ордуна код блогунун ичинде ар бир ишмердүүлүктүн чечими бар жерди көрсөткөн комментарийлер берилет.

```python
# Ишмердүүлүк 2
dictMenu = {'Creamy Pesto Pasta':[15.99, 'Кремдүү песто соусу менен кошулган Penne пастасы, үстүнө кара зайтун жана күнгө кургатылган помидорлор коюлат'],
'Spring Rolls':[8.00, 'Капуста жана сабиз сыяктуу жашылчалардын айнектей вермишелини жана жука тилкелерде кызартылган тофу менен аралаштырылып, сырты кытыраган катмарга оролот. Жанында кремдүү жержаңгак соусу жана таттуу чили соусу берилет']}

# Ишмердүүлүк 3
def printMenu():
  print("-----Меню-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Ишмердүүлүк 3
def orderFromRestaurantYN():
  orderYN = input("Сиз бир нерсе заказ кылгыңыз келеби? (Y/N териңиз): ")
  return orderYN

# Ишмердүүлүк 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# Ишмердүүлүк 4
def isOrderComplete():
  answer = input("Сиз дагы бир нерсе заказ кылгыңыз келеби? (Y/N териңиз): ")
  while answer != 'Y' and answer != 'N':
    answer = input("Сиз дагы бир нерсе заказ кылгыңыз келеби? (Y/N териңиз): ")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# Ишмердүүлүк 5
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

# Ишмердүүлүк 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# Ишмердүүлүк 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# Ишмердүүлүк 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----Чек-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("Жалпы баасы: ", "$"+str(totalPrice))

def main():
  # Ишмердүүлүк 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Ишмердүүлүк 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("Кечиресиз! Бул туура жооп эмес, кайра аракет кылыңыз.")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # Ишмердүүлүк 4
  listOrderItems = []

  if orderYN == 'N':
    print("Кош болуңуз!")
  else:
    customerOrder = input("Сураныч, сиз заказ кылгыңыз келген биринчи нерсенин атын жана санын киргизиңиз. (Мисал: Spring Rolls-2):")
    while orderItemChecking(customerOrder) == False:
      print("Бул туура формат эмес. Кайра аракет кылыңыз.")
      customerOrder = input("Сураныч, сиз заказ кылгыңыз келген биринчи нерсенин атын жана санын киргизиңиз. (Мисал: Spring Rolls-2):")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Сураныч, заказ кылгыңыз келген нерсенин атын жана санын киргизиңиз. (Мисал: Spring Rolls-2):")
      while orderItemChecking(customerOrder) == False:
        print("Бул туура формат эмес. Кайра аракет кылыңыз.")
        customerOrder = input("Сураныч, заказ кылгыңыз келген нерсенин атын жана санын киргизиңиз. (Мисал: Spring Rolls-2):")
      listOrderItems.append(customerOrder)
    # Ишмердүүлүк 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Ишмердүүлүк 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Ишмердүүлүк 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( T | h | a | n | k | s ) ( f | o | r ) ( c | o | m | i | n | g | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/