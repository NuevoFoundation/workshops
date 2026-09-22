```markdown
---
title: "Python Interactive - Antwortschlüssel"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Hier ist eine vollständige Lösung für den Workshop. Die Lösungen für jede Aktivität stehen nicht allein, sondern es werden Kommentare geben, die anzeigen, wo sich die Lösung jeder Aktivität innerhalb des größeren Codeblocks befindet.

```python
# Aktivität 2
dictMenu = {'Creamy Pesto Pasta':[15.99, 'Penne-Nudeln, die in einer cremigen Pestosauce geschwenkt und mit schwarzen Oliven und sonnengetrockneten Tomaten belegt sind'],
'Spring Rolls':[8.00, 'Gebratenes Gemüse wie Kohl und Karotten, gemischt mit Glasnudeln und dünnen Streifen von gebratenem Tofu, eingewickelt in eine knusprige äußere Schicht. Serviert mit einer cremigen Erdnusssauce und süß-scharfer Chilisauce']}

# Aktivität 3
def printMenu():
  print("-----Speisekarte-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Aktivität 3
def orderFromRestaurantYN():
  orderYN = input("Möchten Sie etwas bestellen? (Geben Sie Y/N ein): ")
  return orderYN

# Aktivität 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# Aktivität 4
def isOrderComplete():
  answer = input("Möchten Sie ein weiteres Item bestellen? (Geben Sie Y/N ein): ")
  while answer != 'Y' and answer != 'N':
    answer = input("Möchten Sie ein weiteres Item bestellen? (Geben Sie Y/N ein): ")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# Aktivität 5
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

# Aktivität 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# Aktivität 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# Aktivität 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----Quittung-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("Gesamtpreis: ", "$"+str(totalPrice))

def main():
  # Aktivität 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Aktivität 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("Entschuldigung! Das ist keine gültige Antwort, bitte versuchen Sie es erneut.")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # Aktivität 4
  listOrderItems = []

  if orderYN == 'N':
    print("Tschüss!")
  else:
    customerOrder = input("Bitte geben Sie den Namen und die Menge des ersten Artikels ein, den Sie bestellen möchten. (Beispiel für einen Bestellartikel: Spring Rolls-2):")
    while orderItemChecking(customerOrder) == False:
      print("Das ist ein ungültiges Format. Versuchen Sie es erneut.")
      customerOrder = input("Bitte geben Sie den Namen und die Menge des ersten Artikels ein, den Sie bestellen möchten. (Beispiel für einen Bestellartikel: Spring Rolls-2):")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("Bitte geben Sie den Namen und die Menge eines Artikels ein, den Sie bestellen möchten. (Beispiel für einen Bestellartikel: Spring Rolls-2):")
      while orderItemChecking(customerOrder) == False:
        print("Das ist ein ungültiges Format. Versuchen Sie es erneut.")
        customerOrder = input("Bitte geben Sie den Namen und die Menge eines Artikels ein, den Sie bestellen möchten. (Beispiel für einen Bestellartikel: Spring Rolls-2):")
      listOrderItems.append(customerOrder)
    # Aktivität 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # Aktivität 6
    printReceipt(dictItemAndPrice, totalPrice)

    # Aktivität 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( T | h | a | n | k | s ) ( f | o | r ) ( c | o | m | i | n | g | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
```