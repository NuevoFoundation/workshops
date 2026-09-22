```markdown
---
title: "Python 猜數字遊戲 - 答案解答"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

## 使用 `randint`

```python
import random

number = random.randint(1,100)
print("你的隨機生成的數字是", number)
```

## 創建「猜數字遊戲」

```python
import random

#使用 random.randint() 函數來生成一個隨機數字
#同時在這裡設定你希望允許的猜測次數
randomNumber = random.randint(1,10)
guessesLeft = 3

#在這裡創建一個循環，讓玩家重複猜數字並與隨機數字進行比較
#記得減少剩餘猜測次數，這樣玩家不會有無限次機會！
while guessesLeft > 0:
    print('\n猜一個介於 1 到 10 之間的數字：')
    
    #在這裡要求使用者輸入
    print('請只輸入數字')
    userinput =  int(input())

    #將剛剛收到的輸入與 randomNumber 進行比較，並給玩家提示，是該猜得更低還是更高
    #如果猜測正確，記得使用 break 來結束循環
    if userinput == randomNumber:
      print("你猜對了！恭喜 :)！按 'run' 再玩一次")
      break
    elif userinput > randomNumber:
      print("你的數字太高了。試著猜低一點。")
    else:
      print("你的數字太低了。試著猜高一點。")
    
    #減少玩家剩餘的猜測次數
    guessesLeft = guessesLeft -1

#檢查玩家是否耗盡了猜測次數。如果耗盡次數，告訴玩家他們輸了遊戲
if guessesLeft == 0:
  print("你已經用光了所有猜測次數。: / 正確的數字是 " + str(randomNumber) + "!") #或者 ("你已經用光了所有猜測次數。: / 正確的數字是 ", randomNumber)
else:
  pass
```