---
title: "Python 猜数字游戏 - 答案"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## 使用 randit

```python
import random

number = random.randint(1,100)
print("你生成的随机数是", number)
```

## 创建“猜数字游戏”

```python
import random

# 在这里使用 random.randint() 函数来生成一个数字
# 同时在这里定义你想要允许的猜测次数
randomNumber = random.randint(1,10)
guessesLeft = 3

# 在这里创建一个循环，反复要求玩家输入一个数字，并将其与随机数进行比较
# 记住减少剩余的猜测次数，这样玩家就不能无限次尝试！
while guessesLeft > 0:
    print('\n猜一个1到10之间的数字：')
    
    # 在这里要求用户输入
    print('请输入数字')
    userinput =  int(input())

    # 将刚刚接收到的输入与 randomNumber 比较，并告诉玩家是否应该猜更小或更大
    # 如果猜测正确，记得使用 break 退出循环
    if userinput == randomNumber:
      print("你猜对了！恭喜 :)! 按 '运行' 再次玩游戏")
      break
    elif userinput > randomNumber:
      print("你的数字太大了。试着猜小一点。")
    else:
      print("你的数字太小了。试着猜大一点。")
    
    # 减少玩家剩余的尝试次数
    guessesLeft = guessesLeft -1

# 检查玩家是否用完了所有猜测。如果用完了，告诉他们一个消息，表示他们输了游戏
if guessesLeft == 0:
  print("你已经用完了所有的猜测。:/ 正确的数字是 " + str(randomNumber) + "!") #或 ("你已经用完了所有的猜测。:/ 正确的数字是 ", randomNumber)
else:
  pass
```