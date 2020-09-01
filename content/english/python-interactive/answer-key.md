---
title: "Python Interactive - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Here is a full solution to the workshop. The solutions to each activity cannot stand alone so instead, there will be comments indicating where each activity's solution is within the larger block of code.

```python
# Activity 2
dictMenu = {'Creamy Pesto Pasta':[15.99, 'Penne pasta tossed in a creamy pesto sauce, topped with black olives and sundried tomatoes'], 
'Spring Rolls':[8.00, 'Stir fried vegetables such as cabbage and carrot mixed with vermicelli and thin strips of fried tofu, wrapped in a crunchy outer layer. Provided with a creamy peanut sauce and sweet chili sauce on the side']}

# Activity 3
def printMenu():
  print("-----Menu-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Activity 3
def orderFromRestaurantYN():
  orderYN = input("Would you like to order anything? (Enter Y/N): ")
  return orderYN

# Activity 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# Activity 4
def isOrderComplete():
  answer = input("Would you like to order another item? (Enter Y/N): ")
  while answer != 'Y' and answer != 'N':
    answer = input("Would you like to order another item? (Enter Y/N): ")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# Activity 5
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

# Activity 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# Activity 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# Activity 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----Receipt-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("Total Price: ", "$"+str(totalPrice))

def main():
  # Activity 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )") 
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Activity 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("Sorry! That's not a valid answer, please try again.")
    printMenu()
    orderYN = orderFromRestaurantYN()
  
  #Activity 4
  listOrderItems = []

  if orderYN == 'N':
    print("Bye!")
  else:
    customerOrder = input("Please enter the name and quantity of the first item you would like to order. (Example order item: Spring Rolls-2):")
    while orderItemChecking(customerOrder) == False:
      print("That's an invalid format. Try again.")
      customerOrder = input("Please enter the name and quantity of the first item you would like to order. (Example order item: Spring Rolls-2):")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Please enter the name and quantity of an item you would like to order. (Example order item: Spring Rolls-2):")
      while orderItemChecking(customerOrder) == False:
        print("That's an invalid format. Try again.")
        customerOrder = input("Please enter the name and quantity of an item you would like to order. (Example order item: Spring Rolls-2):")
      listOrderItems.append(customerOrder)
    # Activity 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Activity 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Activity 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( T | h | a | n | k | s ) ( f | o | r ) ( c | o | m | i | n | g | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```