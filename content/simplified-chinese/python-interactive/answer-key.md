```yaml
---
title: "Python Interactive - Answer Key"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

以下是研讨会的完整解决方案。每项活动的解决方案无法单独存在，因此将在较大代码块中通过注解说明每项活动的解决方案所在的位置。

```python
# 活动 2
dictMenu = {'Creamy Pesto Pasta':[15.99, '意大利面配上奶油香蒜酱，搭配黑橄榄和晒干的番茄'],
'Spring Rolls':[8.00, '炒蔬菜，如卷心菜和胡萝卜，混合细米粉和薄片炸豆腐，外层包裹一层酥脆的外皮。配有奶油花生酱和甜辣酱']}

# 活动 3
def printMenu():
  print("-----菜单-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# 活动 3
def orderFromRestaurantYN():
  orderYN = input("您想点餐吗？（输入 Y/N）：")
  return orderYN

# 活动 4
def orderItemChecking(item):
  if '-' not in item:
    return False
  itemNameAndQuantity = item.split('-')
  if itemNameAndQuantity[0] not in dictMenu:
    return False
  if int(itemNameAndQuantity[1]) <= 0:
    return False
  return True

# 活动 4
def isOrderComplete():
  answer = input("您想再点一个菜吗？（输入 Y/N）：")
  while answer != 'Y' and answer != 'N':
    answer = input("您想再点一个菜吗？（输入 Y/N）：")
  if answer == 'Y':
    return True
  if answer == 'N':
    return False

# 活动 5
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

# 活动 5
def computePrices(dictItems):
  dictItemAndPrice = {}
  for i in dictItems:
    totalItemPrice = dictItems[i] * dictMenu[i][0]
    dictItemAndPrice[i] = totalItemPrice
  return dictItemAndPrice

# 活动 5
def computeTotalPrice(dictItemAndPrice):
  totalPrice = 0
  for i in dictItemAndPrice:
    totalPrice += dictItemAndPrice[i]
  return round(totalPrice,2)

# 活动 6
def printReceipt(dictItemAndPrice, totalPrice):
  print("-----收据-----")
  for i in dictItemAndPrice:
    print(i, " $"+str(dictItemAndPrice[i]))
  print("总价格: ", "$"+str(totalPrice))

def main():
  # 活动 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # 活动 3
  printMenu()
  orderYN = orderFromRestaurantYN()

  while orderYN != 'Y' and orderYN != 'N':
    print("抱歉！这不是一个有效的答案，请重试。")
    printMenu()
    orderYN = orderFromRestaurantYN()

  # 活动 4
  listOrderItems = []

  if orderYN == 'N':
    print("再见！")
  else:
    customerOrder = input("请输入您想点的第一道菜的名称和数量。（例如：Spring Rolls-2）：")
    while orderItemChecking(customerOrder) == False:
      print("格式无效，再试一次。")
      customerOrder = input("请输入您想点的第一道菜的名称和数量。（例如：Spring Rolls-2）：")
    listOrderItems.append(customerOrder)
    while isOrderComplete() == True:
      customerOrder = input("请输入您想点的菜的名称和数量。（例如：Spring Rolls-2）：")
      while orderItemChecking(customerOrder) == False:
        print("格式无效，再试一次。")
        customerOrder = input("请输入您想点的菜的名称和数量。（例如：Spring Rolls-2）：")
      listOrderItems.append(customerOrder)
    # 活动 5
    dictItems = createDictOrderItems(listOrderItems)
    dictItemAndPrice = computePrices(dictItems)
    totalPrice = computeTotalPrice(dictItemAndPrice)
    # 活动 6
    printReceipt(dictItemAndPrice, totalPrice)

    # 活动 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( T | h | a | n | k | s ) ( f | o | r ) ( c | o | m | i | n | g | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```