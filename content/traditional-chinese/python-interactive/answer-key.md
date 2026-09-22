```markdown
---
title: "Python Interactive - 答案鍵"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

這是工作坊的完整解答。由於每個活動的解答都無法單獨存在，因此程式碼的主要部分中將以註解的方式標註每個活動的解答位置。

```python
# 活動 2
dictMenu = {'Creamy Pesto Pasta':[15.99, '奶油羅勒醬義大利麵，淋上奶油羅勒醬，配上黑橄欖和番茄乾'],
'Spring Rolls':[8.00, '拌炒蔬菜，包括捲心菜和紅蘿蔔，混合粉絲和薄片油炸豆腐，包裹在脆皮裡。配以奶油花生醬和甜辣醬']}
  
# 活動 3
def printMenu():
  print("-----菜單-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# 活動 3
def orderFromRestaurantYN():
  orderYN = input("您想點餐嗎？（輸入 Y / N）: ")
  return orderYN

# 活動 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# 活動 4
def isOrderComplete():
  answer = input("您想再點一樣東西嗎？（輸入 Y / N）: ")
  while answer != 'Y' and answer != 'N':
    answer = input("您想再點一樣東西嗎？（輸入 Y / N）: ")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# 活動 5
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

# 活動 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# 活動 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# 活動 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----收據-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("總金額: ", "$"+str(totalPrice))

def main():
  # 活動 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # 活動 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("抱歉！那不是有效的回答，請再試一次。")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # 活動 4
  listOrderItems = []

  if orderYN == 'N':
    print("再見！")
  else:
    customerOrder = input("請輸入您想點的第一樣菜名和數量。（範例: Spring Rolls-2）:")
    while orderItemChecking(customerOrder) == False:
      print("這是一個無效的格式，請再試一次。")
      customerOrder = input("請輸入您想點的第一樣菜名和數量。（範例: Spring Rolls-2）:")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("請輸入您想點的菜名和數量。（範例: Spring Rolls-2）:")
      while orderItemChecking(customerOrder) == False:
        print("這是一個無效的格式，請再試一次。")
        customerOrder = input("請輸入您想點的菜名和數量。（範例: Spring Rolls-2）:")
      listOrderItems.append(customerOrder)
    # 活動 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # 活動 6
    printReceipt(dictItemAndPrice, totalPrice)

    # 活動 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( T | h | a | n | k | s ) ( f | o | r ) ( c | o | m | i | n | g | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
```